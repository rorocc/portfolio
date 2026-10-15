<template>
  <div ref="root" class="pill-carousel" role="img" :aria-label="photos.map(photo => photo.alt).join(', ')">
    <canvas v-show="supported" ref="canvas" aria-hidden="true" @pointerdown="onPointerDown" />
    <div v-if="!supported" class="pill-fallback">
      <img v-for="photo in photos" :key="photo.src" :src="photo.src" :alt="photo.alt" loading="lazy">
    </div>
  </div>
</template>

<script>
// Endless strip of pill-shaped photos, wrapped around a cylinder and drawn in a single
// WebGL pass. It scrolls on its own, can be dragged and splits the colour channels
// towards the edges while it moves fast.

const PILL_ASPECT = 1.85
const AUTO_SPEED = 40 // css px per second
const MAX_THETA = 1.15 // how far the strip wraps around the cylinder at the canvas edges

const VERTEX_SHADER = `
attribute vec2 aPosition;
void main () {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 uResolution;
uniform float uOffset;
uniform float uSplit;
uniform float uRadius;
uniform vec2 uPill;
uniform float uGap;
uniform float uCount;
uniform vec2 uGrid;
uniform sampler2D uAtlas;

float pillDistance (vec2 p, vec2 halfSize) {
  float r = halfSize.y;
  vec2 q = abs(p) - halfSize + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

vec4 sampleCell (vec2 uv, vec2 cell) {
  vec2 inset = 1.0 / vec2(2048.0);
  return texture2D(uAtlas, (cell + clamp(uv, inset, 1.0 - inset)) / uGrid);
}

void main () {
  vec2 frag = vec2(gl_FragCoord.x, uResolution.y - gl_FragCoord.y);

  // Screen x -> arc length on the cylinder. Content gets squeezed and pushed back towards the edges.
  float sinTheta = clamp((frag.x - uResolution.x * 0.5) / uRadius, -0.999, 0.999);
  float theta = asin(sinTheta);
  float depth = 1.0 - cos(theta);
  float scaleY = 1.0 / (1.0 + depth * 0.25);
  float stretch = 1.0 / cos(theta);

  float period = uPill.x + uGap;
  float u = uRadius * theta + uOffset + period * 0.5;
  float index = floor(u / period);
  vec2 local = vec2(u - index * period - period * 0.5, (frag.y - uResolution.y * 0.5) / scaleY);

  float dist = pillDistance(local, uPill * 0.5);
  float alpha = clamp(0.5 - dist / (stretch / scaleY), 0.0, 1.0);
  if (alpha <= 0.0) {
    gl_FragColor = vec4(0.0);
    return;
  }

  float photo = mod(index, uCount);
  vec2 cell = vec2(mod(photo, uGrid.x), floor(photo / uGrid.x));
  vec2 uv = local / uPill + 0.5;
  vec2 shift = vec2(uSplit * 0.03 * sinTheta * sinTheta, 0.0);

  vec3 color = vec3(
    sampleCell(uv + shift, cell).r,
    sampleCell(uv, cell).g,
    sampleCell(uv - shift, cell).b
  );
  gl_FragColor = vec4(color * alpha, alpha);
}
`

export default {
  name: "PillCarousel",
  props: {
    // [{src: String, alt: String, focus: [x, y] (optional, 0–1, defaults to the centre)}]
    photos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      supported: true
    }
  },
  mounted () {
    const gl = this.$refs.canvas.getContext("webgl", {antialias: false, premultipliedAlpha: true})
    if (!gl) {
      this.supported = false
      return
    }
    this.gl = gl
    this.offset = 0
    this.velocity = 0
    this.split = 0
    this.autoSpeed = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : AUTO_SPEED
    this.lastTime = null
    this.visible = false
    this.ready = false

    this.initProgram()
    this.loadAtlas().then(() => {
      this.ready = true
      this.start()
    })

    this.resizeObserver = new ResizeObserver(() => this.resize())
    this.resizeObserver.observe(this.$refs.root)
    this.resize()

    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting
      this.start()
    })
    this.intersectionObserver.observe(this.$refs.root)
  },
  beforeDestroy () {
    if (!this.gl) {
      return
    }
    cancelAnimationFrame(this.frame)
    this.resizeObserver.disconnect()
    this.intersectionObserver.disconnect()
    window.removeEventListener("pointermove", this.onPointerMove)
    window.removeEventListener("pointerup", this.onPointerUp)
    const loseContext = this.gl.getExtension("WEBGL_lose_context")
    if (loseContext) {
      loseContext.loseContext()
    }
  },
  methods: {
    initProgram () {
      const gl = this.gl
      const compile = (type, source) => {
        const shader = gl.createShader(type)
        gl.shaderSource(shader, source)
        gl.compileShader(shader)
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          throw new Error(gl.getShaderInfoLog(shader))
        }
        return shader
      }
      const program = gl.createProgram()
      gl.attachShader(program, compile(gl.VERTEX_SHADER, VERTEX_SHADER))
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER))
      gl.linkProgram(program)
      gl.useProgram(program)

      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
      const position = gl.getAttribLocation(program, "aPosition")
      gl.enableVertexAttribArray(position)
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

      this.uniforms = {}
      for (const name of ["uResolution", "uOffset", "uSplit", "uRadius", "uPill", "uGap", "uCount", "uGrid", "uAtlas"]) {
        this.uniforms[name] = gl.getUniformLocation(program, name)
      }
    },
    async loadAtlas () {
      const gl = this.gl
      const images = await Promise.all(this.photos.map(photo => new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () => resolve(image)
        image.onerror = reject
        image.src = photo.src
      })))

      // All photos go into one texture, each cropped to the pill's aspect ratio
      const columns = Math.min(images.length, 4)
      const rows = Math.ceil(images.length / columns)
      const cellWidth = Math.min(1024, Math.floor(gl.getParameter(gl.MAX_TEXTURE_SIZE) / columns))
      const cellHeight = Math.round(cellWidth / PILL_ASPECT)
      const atlas = document.createElement("canvas")
      atlas.width = columns * cellWidth
      atlas.height = rows * cellHeight
      const context = atlas.getContext("2d")
      images.forEach((image, i) => {
        const [focusX, focusY] = this.photos[i].focus || [0.5, 0.5]
        const scale = Math.max(cellWidth / image.width, cellHeight / image.height)
        const width = cellWidth / scale
        const height = cellHeight / scale
        const sx = Math.min(Math.max(image.width * focusX - width / 2, 0), image.width - width)
        const sy = Math.min(Math.max(image.height * focusY - height / 2, 0), image.height - height)
        context.drawImage(image, sx, sy, width, height, (i % columns) * cellWidth, Math.floor(i / columns) * cellHeight, cellWidth, cellHeight)
      })

      gl.bindTexture(gl.TEXTURE_2D, gl.createTexture())
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, atlas)

      gl.uniform1i(this.uniforms.uAtlas, 0)
      gl.uniform1f(this.uniforms.uCount, images.length)
      gl.uniform2f(this.uniforms.uGrid, columns, rows)
    },
    resize () {
      const canvas = this.$refs.canvas
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = this.$refs.root.clientWidth
      const height = this.$refs.root.clientHeight
      this.dpr = dpr
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"

      const gl = this.gl
      const pillHeight = Math.min(height * 0.82, width * 0.38) * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.uniform2f(this.uniforms.uResolution, canvas.width, canvas.height)
      gl.uniform1f(this.uniforms.uRadius, canvas.width / 2 / Math.sin(MAX_THETA))
      gl.uniform2f(this.uniforms.uPill, pillHeight * PILL_ASPECT, pillHeight)
      gl.uniform1f(this.uniforms.uGap, pillHeight * PILL_ASPECT * 0.1)
      this.render()
    },
    start () {
      if (!this.ready || !this.visible || this.frame) {
        return
      }
      this.lastTime = null
      this.frame = requestAnimationFrame(this.tick)
    },
    tick (time) {
      this.frame = null
      const dt = this.lastTime === null ? 0 : Math.min((time - this.lastTime) / 1000, 0.05)
      this.lastTime = time

      if (!this.dragging) {
        // Throws slow down until the strip is back at its idle speed
        this.velocity += (this.autoSpeed - this.velocity) * (1 - Math.exp(-dt * 2.5))
        this.offset += this.velocity * dt
      }
      const targetSplit = this.autoSpeed === 0 ? 0 : Math.min(0.25 + Math.abs(this.velocity) / 1200, 1)
      this.split += (targetSplit - this.split) * (1 - Math.exp(-dt * 8))

      this.render()
      if (this.visible) {
        this.frame = requestAnimationFrame(this.tick)
      }
    },
    render () {
      if (!this.ready) {
        return
      }
      const gl = this.gl
      gl.uniform1f(this.uniforms.uOffset, this.offset * this.dpr)
      gl.uniform1f(this.uniforms.uSplit, this.split)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
    },
    onPointerDown (event) {
      this.dragging = true
      this.pointerX = event.clientX
      this.pointerTime = performance.now()
      this.velocity = 0
      this.$refs.canvas.classList.add("dragging")
      window.addEventListener("pointermove", this.onPointerMove)
      window.addEventListener("pointerup", this.onPointerUp)
    },
    onPointerMove (event) {
      const now = performance.now()
      const dx = event.clientX - this.pointerX
      const dt = Math.max((now - this.pointerTime) / 1000, 0.001)
      this.offset -= dx
      this.velocity = this.velocity * 0.6 + (-dx / dt) * 0.4
      this.pointerX = event.clientX
      this.pointerTime = now
    },
    onPointerUp () {
      this.dragging = false
      this.$refs.canvas.classList.remove("dragging")
      window.removeEventListener("pointermove", this.onPointerMove)
      window.removeEventListener("pointerup", this.onPointerUp)
    }
  }
}
</script>

<style scoped>
.pill-carousel {
  @apply relative w-full overflow-hidden;
}

canvas {
  display: block;
  cursor: grab;
  touch-action: pan-y;
}

canvas.dragging {
  cursor: grabbing;
}

.pill-fallback {
  @apply flex h-full items-center gap-6 overflow-x-auto px-4;
}

.pill-fallback img {
  @apply h-3/5 flex-shrink-0 rounded-full object-cover;
  aspect-ratio: 1.85;
}
</style>
