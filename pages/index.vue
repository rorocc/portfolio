<template>
  <div ref="mainDiv" class="container w-3/4 m-auto">
    <div class="my-12">
      <div class="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none my-28">
        <div>
          <img src="../assets/Chris_Doodle.png" class="w-2/3 m-auto" />
        </div>
        <div>
          <h1 class="text-6xl display-font">
            Well, hello there.
          </h1>
          <div class="py-8">
            <p class="leading-8 descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu.
            </p>
            <br />
            <p class="leading-8 descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu.
            </p>
          </div>
        </div>
      </div>
      <section-heading class="my-12" heading="My recent projects" descr="Feel free to have a look" />
      <div class="grid auto-rows-auto">
        <div v-for="work in works" :key="work.id" class="mb-10">
          <workpiece :head-text="work.headText"
                     :title="work.title"
                     :description="work.description"
                     :bg-color="work.bgColor"
                     :text-color="work.textColor"
                     :img-url="work.imgUrl"
                     :url="work.url"
          />
        </div>
      </div>

    </div>
    <div ref="toolbox" class="pigButton">
      <div class="grid-flow-col grid text-center">
        <div @click="startPiggies">
          <img src="/img/pigs/pig3.png" class="pigIcon">
        </div>
      </div>
    </div>
    <div ref="toolbox" class="toolbox hidden">
      <div class="grid-flow-col grid text-center">
        <div>
          <a @click="() => { setTool('mouse') }">
            <img src="/img/pigs/pig3.png" class="toolIcon">
          </a>
        </div>
        <div>
          <a @click="() =>{ setTool('brush') }">
            <img src="/img/brush.png" class="toolIcon">
          </a>
        </div>
        <div @click="startPiggies">
          <img src="/img/pigs/pig3.png" class="toolIcon">
        </div>
        <div @click="toggleTools('close')">
          <img src="/img/pigs/pig3.png" class="toolIcon">
        </div>
      </div>
    </div>
    <div ref="particlesBox" class="particlesBox" />
    <canvas ref="canvas" id="canvas" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      tool: "mouse",
      vueCanvas: null,
      pos: { x: 0, y: 0 },
      works: [
        { title: 'Mobile Interface for Nutrition Awareness (MINA)', headText: 'Bachelor Thesis Media Informatics', description: 'What is a healthy meal? - A research based design approach to comprehensible in-app rating of meals.', bgColor: '#d2ff77', textColor: '#3b3b3b', imgUrl: '/img/work/screen_mina.png', url: '/projects/mina' },
        { title: 'AID-Simulation for people with type 1 diabetes mellitus', headText: 'Masters project media informatics', description: 'An interactive simulator with the aim to make the functionality of closed-loop systems more comprehensible.', bgColor: '#e3ecff', textColor: '#001E4B', imgUrl: '/img/work/screen_aid.png', url: '/projects/aid' },
        { title: 'MariData: A comprehensive interface for ship energy management', headText: 'Funded research project', description: 'The MariData decision support system helps vessel crews to not only reduce financial costs, but also the emissions and therefore minimize the negative impact on our environment.', bgColor: '#d6dde3', textColor: '#3E484E', imgUrl: '/img/work/screen_maridata.png', url: '/projects/aid' }
      ]
    }
  },
  mounted () {
    const c = this.$refs.canvas
    const ctx = c.getContext("2d")
    this.vueCanvas = ctx
    this.resize()
    document.addEventListener('mousemove', this.drawOnCanvas)
    document.addEventListener('mousedown', this.setPosition)
    document.addEventListener('mouseenter', this.setPosition)
  },
  methods: {
    toggleTools (state) {
      this.$refs.toolbox.classList.add(state)
    },
    setTool (tool) {
      this.tool = tool
      if (tool === "brush") {
        this.$refs.mainDiv.classList.add("brushCursor")
      } else {
        this.$refs.mainDiv.classList.remove("brushCursor")
      }
    },
    setPosition (e) {
      this.pos.x = e.clientX
      this.pos.y = e.clientY
    },
    resize () {
      this.vueCanvas.canvas.height = window.innerHeight
      this.vueCanvas.canvas.width = window.innerWidth
    },
    drawOnCanvas (e) {
      // if not left mouse button OR tool is not brush
      if (e.buttons !== 1 || this.tool !== 'brush') {
        return
      }
      this.vueCanvas.beginPath()
      this.vueCanvas.lineWidth = 5
      this.vueCanvas.lineCap = 'round'
      this.vueCanvas.strokeStyle = 'red'
      this.vueCanvas.moveTo(this.pos.x, this.pos.y)
      this.setPosition(e)
      this.vueCanvas.lineTo(this.pos.x, this.pos.y)
      this.vueCanvas.stroke()
    },
    startPiggies () {
      const container = document.createElement("div")
      container.classList.add("particlesContainer")
      this.$refs.particlesBox.appendChild(container)

      for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 20; i++) {
          const offset = (Math.floor(Math.random() * 10) / 6) - 0.5
          const type = Math.floor(Math.random() * 3) + 1
          const particleImg = document.createElement("img")
          particleImg.classList.add("particle")
          particleImg.src = `/img/pigs/pig${type}.png`
          particleImg.style.width = ((offset * window.innerWidth / 10)) + "px"
          particleImg.style.height = "auto"
          particleImg.style.animationDelay = offset + "s"

          if (j === 0) {
            this.$refs.particlesBox.lastChild.appendChild(particleImg)
            // this.$refs.particlesContainer1.appendChild(particleImg)
          } else {
            // this.$refs.particlesContainer2.appendChild(particleImg)
          }
        }
      }
      const deleteChildren = setTimeout(() => { this.$refs.particlesBox.firstChild.remove() }, 3000)
      console.log(deleteChildren)
    }
  }
}
</script>

<style>
  .descr span{
    font-weight: 600;
  }

  .brushCursor{
    user-select: none;
    cursor: url('/img/pigs/pig1.png'), auto;
  }

  .toolIcon{
    transition: .25s;
    transition-timing-function: ease-in-out;
    @apply w-16 m-auto;
  }

  .toolIcon:hover{
    transform: translateY(-20%);
    cursor: pointer;
  }

  canvas{
    background-image: url("/img/bg.png");
    background-repeat: repeat;
    @apply top-0 bottom-0 left-0 right-0 fixed -z-50 p-0 m-0;
  }

  .particlesContainer{
    @apply fixed left-0 right-0 m-auto justify-center items-center -bottom-1/4 grid grid-flow-col;
  }

  .particle{
    animation-name: piggies;
    animation-duration: 2s;
    animation-timing-function: ease-in;
  }

  @keyframes piggies{
    0%{transform: translateY(0); opacity: 1}
    50%{opacity: 1; -webkit-filter: blur(0px);}
    90%{opacity: 1; -webkit-filter: blur(4px);}
    100% {transform: translateY(-120vh); opacity: 0}
  }

  .pigIcon{
    @apply w-16 m-auto;
    animation-name: pig;
    transform: rotate(0deg);
    animation-delay: 2s;
    animation-duration: 12s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .pigIcon:hover{
    cursor: pointer;
  }

  @keyframes pig {
    0%{transform: rotate(0deg)}
    10%{transform: rotate(-20deg)}
    18%{transform: rotate(5deg)}
    23%{transform: rotate(-3deg)}
    26%{transform: rotate(0deg)}

  }

  #chris_mouse{
    width: 167px;
    height: 167px;
    transform: scale(0.15);
  }

  #mouse_chatbox{
    background-color: #FF33D2;
  }

  .toolbox{
    @apply w-2/3 p-6 z-10 rounded-3xl bg-white mb-4 fixed bottom-0 shadow-xl mx-auto right-0 left-0;
  }

  .pigButton{
    @apply p-4 z-10 rounded-3xl bg-white fixed bottom-0 shadow-xl mx-auto left-0 mx-6 my-6;
  }

  .toolbox.close{
    transition: .75s;
    transform: translateY(110%);
  }
</style>
