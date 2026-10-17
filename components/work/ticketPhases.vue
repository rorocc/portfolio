<template>
  <figure>
    <div ref="stage" class="stage" :style="{ aspectRatio: `${view} / ${height}` }" role="img" :aria-label="label">
      <!-- the scene is drawn at a fixed 1280 × 752 and zoomed to the stage width; narrow screens crop to the middle 860 px -->
      <!-- zoom instead of transform: scale, so edges snap to whole pixels and no hairline seams show between boxes -->
      <div
        class="scene"
        :class="{ ready }"
        :style="{ zoom: scale, left: `${(view - width) / 2}px` }"
        aria-hidden="true"
      >
        <div class="phone">
          <span class="side-button" style="left: -4px; top: 230px; height: 64px" />
          <span class="side-button" style="left: -4px; top: 320px; height: 110px" />
          <span class="side-button" style="left: -4px; top: 450px; height: 110px" />
          <span class="side-button" style="right: -4px; top: 360px; height: 150px" />
          <div class="bezel">
            <div class="screen">
              <div class="status-bar">
                <span class="island" />
                <span class="time">17:03</span>
                <span class="indicators">
                  <svg width="25" height="16" viewBox="0 0 25 16"><rect x="0" y="11" width="4.5" height="5" rx="1.2" /><rect x="6.8" y="7.5" width="4.5" height="8.5" rx="1.2" /><rect x="13.6" y="4" width="4.5" height="12" rx="1.2" /><rect x="20.4" y="0" width="4.5" height="16" rx="1.2" /></svg>
                  <span class="network">5G</span>
                  <span class="battery">54</span>
                  <span class="battery-tip" />
                </span>
              </div>

              <div class="site-header">
                <img :src="logo" alt="" class="logo">
                <span class="menu">MENÜ<span class="burger"><span /><span /></span></span>
              </div>

              <div class="module-wrapper">
                <div class="module">
                  <div class="module-head">
                    <div class="tickets">Tickets</div>
                    <div class="lead">Sicher dir dein Ticket für das Event</div>
                  </div>
                  <div class="module-body">
                    <span class="tear-line" />
                    <span class="notch notch-left" />
                    <span class="notch notch-right" />
                    <div class="price-row">
                      <span class="price-label">Ticketpreis</span>
                      <span class="price">
                        <span class="euro">{{ euro }}</span><span class="cents">{{ cents }}</span><span class="currency">€</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- the phases break out of the phone and slide so that the active one always sits inside the screen -->
        <div class="strip" :style="{ transform: `translateX(${track}px)` }">
          <div v-for="card in cards" :key="card.name" class="card" :class="{ active: card.active }">
            <span class="shape" :style="card.shape" />
            <div class="card-content">
              <span class="card-title" :style="{ color: card.title }">{{ card.name }}</span>
              <span class="card-status" :style="{ color: card.text }">{{ card.status }}</span>
            </div>
            <span v-if="card.active" class="badge">{{ card.badge }}</span>
          </div>
        </div>
      </div>
    </div>
    <figcaption v-if="figcaption" class="opacity-50 text-center pt-4 max-w-prose mx-auto">
      {{ figcaption }}
    </figcaption>
  </figure>
</template>

<script>
const WIDTH = 1280
const HEIGHT = 752
const PHASES = [
  { name: 'Early Bird', price: 12, badge: 'Noch 3 Tage' },
  { name: 'Regular', price: 15, badge: 'Noch 1 Tag' },
  { name: 'Last Minute', price: 18, badge: 'Noch 5 Std.' }
]
const STEP_MS = 2600
// how far the strip moves per phase, so the active card stays inside the screen
const SLIDE = 135

// blends two hex colours, k = 0 gives a, k = 1 gives b
function mix (a, b, k) {
  const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16))
  const from = rgb(a)
  const to = rgb(b)
  return `rgb(${from.map((v, i) => Math.round(v + (to[i] - v) * k)).join(', ')})`
}

export default {
  name: 'ticket-phases',
  props: {
    figcaption: String
  },
  data () {
    return {
      width: WIDTH,
      height: HEIGHT,
      view: WIDTH,
      scale: 0.8,
      ready: false,
      step: 1,
      dir: 1,
      pos: 1,
      price: PHASES[1].price,
      logo: require('~/assets/img/work/ueberstunde/ueberstunde-logo.png'),
      label: 'Animated mockup of the ÜBERSTUNDE ticket module on a phone. The sale phases Early Bird, Regular and Last Minute take turns, and the ticket price counts to the price of the active phase.'
    }
  },
  computed: {
    track () {
      return (1 - this.pos) * SLIDE
    },
    total () {
      return Math.round(this.price * 100)
    },
    euro () {
      return String(Math.floor(this.total / 100))
    },
    cents () {
      return String(this.total % 100).padStart(2, '0')
    },
    cards () {
      const shown = Math.round(this.pos)
      return PHASES.map((phase, i) => {
        // k is 1 for the card in the middle and fades to 0 as it slides away
        const k = Math.max(0, 1 - Math.abs(this.pos - i))
        return {
          ...phase,
          active: i === shown,
          status: i < shown ? 'Abgelaufen' : (i === shown ? 'Aktuell' : 'Demnächst'),
          title: mix('#737375', '#0a0a0a', k),
          text: mix('#8e8e90', '#3c3c3d', k),
          shape: {
            backgroundColor: mix('#f2f2f3', '#ffffff', k),
            borderColor: mix('#e7e7e8', '#dedede', k),
            boxShadow: `0 ${6 + 16 * k}px ${16 + 28 * k}px rgba(0, 0, 0, ${0.1 + 0.22 * k})`
          }
        }
      })
    }
  },
  mounted () {
    this.frames = {}
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.fit(this.$refs.stage.clientWidth)
    this.ready = true

    this.resizeObserver = new ResizeObserver(([entry]) => this.fit(entry.contentRect.width))
    this.resizeObserver.observe(this.$refs.stage)

    // only cycle while the mockup is on screen
    this.intersectionObserver = new IntersectionObserver(([entry]) => {
      entry.isIntersecting ? this.play() : this.pause()
    })
    this.intersectionObserver.observe(this.$refs.stage)
  },
  beforeDestroy () {
    this.pause()
    this.resizeObserver.disconnect()
    this.intersectionObserver.disconnect()
  },
  methods: {
    fit (stageWidth) {
      this.view = stageWidth < 640 ? 860 : WIDTH
      this.scale = stageWidth / this.view
    },
    play () {
      if (this.timer || this.reducedMotion) return
      this.timer = setInterval(this.next, STEP_MS)
    },
    pause () {
      clearInterval(this.timer)
      this.timer = null
      Object.values(this.frames).forEach(frame => cancelAnimationFrame(frame))
    },
    // runs Early Bird → Regular → Last Minute and back again
    next () {
      if (this.step + this.dir > 2 || this.step + this.dir < 0) this.dir = -this.dir
      this.step += this.dir
      this.animate('pos', this.step, 800, 3)
      this.animate('price', PHASES[this.step].price, 500, 2)
    },
    // eases this[key] to target, power 2 = ease-in-out quad, 3 = cubic
    animate (key, target, duration, power) {
      cancelAnimationFrame(this.frames[key])
      const from = this[key]
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1)
        const eased = t < 0.5 ? 2 ** (power - 1) * t ** power : 1 - (-2 * t + 2) ** power / 2
        this[key] = from + (target - from) * eased
        if (t < 1) this.frames[key] = requestAnimationFrame(tick)
      }
      this.frames[key] = requestAnimationFrame(tick)
    }
  }
}
</script>

<style scoped>
.stage{
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #1e1e1f;
  @apply rounded-lg;
}

.scene{
  position: absolute;
  top: 0;
  left: 0;
  width: 1280px;
  height: 752px;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-family: 'Poppins', system-ui, sans-serif;
  color: #0a0a0a;
}

.scene.ready{
  opacity: 1;
}

/* phone */
.phone{
  position: absolute;
  left: 340px;
  top: 22px;
  width: 600px;
  height: 1040px;
  padding: 5px;
  border-radius: 92px;
  background-color: #c9ced6;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.35);
}

.side-button{
  position: absolute;
  width: 4px;
  border-radius: 2px;
  background-color: #aeb5bf;
}

.bezel{
  height: 100%;
  padding: 9px;
  border-radius: 87px;
  background-color: #050505;
}

/* the screen itself is black like status bar and header, so no light edge shows around them; only the content area below is light */
.screen{
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 78px;
  background-color: #0a0a0a;
}

.status-bar{
  position: relative;
  height: 78px;
  flex-shrink: 0;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', system-ui, sans-serif;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.01em;
}

.island{
  position: absolute;
  left: 50%;
  top: 14px;
  width: 174px;
  height: 50px;
  margin-left: -87px;
  border-radius: 25px;
  background-color: #000000;
}

.time,
.indicators{
  position: absolute;
  top: 0;
  width: 199px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.time{
  left: 0;
  padding-left: 18px;
  font-size: 23px;
}

.indicators{
  right: 0;
  gap: 7px;
  padding-right: 18px;
}

.indicators svg{
  fill: #ffffff;
}

.network{
  font-size: 19px;
}

.battery{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 18px;
  border-radius: 5.5px;
  background-color: #ffffff;
  color: #000000;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.battery-tip{
  width: 2.5px;
  height: 6px;
  margin-left: -5px;
  border-radius: 0 2px 2px 0;
  background-color: rgba(255, 255, 255, 0.45);
}

.site-header{
  height: 104px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 20px;
}

.logo{
  height: 52px;
  width: auto;
}

.menu{
  display: flex;
  align-items: center;
  gap: 14px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-style: italic;
}

.burger{
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.burger span{
  width: 46px;
  height: 4px;
  background-color: #ffffff;
}

/* ticket module */
.module-wrapper{
  flex-grow: 1;
  padding: 14px;
  background-color: #f3f4f6;
}

.module{
  border: 1px solid #dedede;
  border-radius: 3px;
  background-color: #f8f9fb;
}

.module-head{
  padding: 26px 36px 24px;
  border-radius: 2px 2px 0 0;
  background-color: #ededee;
}

.tickets,
.card-title{
  font-family: 'Oswald', 'Arial Narrow', sans-serif;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
}

.tickets{
  font-size: 40px;
}

.lead{
  margin-top: 6px;
  font-size: 18px;
  line-height: 1.4;
  color: #3c3c3d;
}

.module-body{
  position: relative;
  height: 350px;
}

.tear-line{
  position: absolute;
  left: 0;
  right: 0;
  top: 242px;
  height: 1px;
  background: repeating-linear-gradient(90deg, #dfe0e2 0 16px, transparent 16px 24px);
}

.notch{
  position: absolute;
  top: 230px;
  width: 13px;
  height: 24px;
  border: 1px solid #dedede;
  background-color: #f3f4f6;
}

.notch-left{
  left: -1px;
  border-left: 0;
  border-radius: 0 12px 12px 0;
}

.notch-right{
  right: -1px;
  border-right: 0;
  border-radius: 12px 0 0 12px;
}

.price-row{
  position: absolute;
  left: 36px;
  right: 36px;
  top: 274px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
}

.price-label{
  font-size: 30px;
  line-height: 1.2;
  text-transform: uppercase;
}

.price{
  display: flex;
  align-items: flex-start;
  font-variant-numeric: tabular-nums;
}

.euro,
.currency{
  font-size: 42px;
  line-height: 1.1;
}

.cents{
  margin-left: 2px;
  font-size: 18px;
  line-height: 1.3;
}

.currency{
  margin-left: 10px;
}

/* phase cards */
.strip{
  position: absolute;
  left: 270px;
  top: 404px;
  width: 740px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.card{
  position: relative;
  height: 150px;
  z-index: 1;
}

.card.active{
  z-index: 2;
}

.shape{
  position: absolute;
  inset: 0;
  border: 1.5px solid;
  transform: skewX(-15deg);
}

.card-content{
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.card-title{
  font-size: 34px;
  line-height: 1;
}

.card-status{
  font-size: 15px;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* the skew moves the top edge of the shape 20px to the right (tan 15° × 75px), so the badge follows it to sit centred on that edge */
.badge{
  position: absolute;
  left: calc(50% + 20px);
  top: 0;
  transform: translate(-50%, -50%);
  padding: 7px 16px;
  background-color: #f9dfd6;
  color: #e94f10;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}
</style>
