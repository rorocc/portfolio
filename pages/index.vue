<template>
  <div ref="mainDiv" class="m-auto overflow-x-hidden">
    <section class="container">
      <div class="grid grid-flow-row grid-cols-none md:grid-cols-2 md:grid-rows-none my-20 md:gap-0 gap-16">
        <div>
          <h1 class="landing-heading text-5xl display-font leading-normal">
            User experience isn't just <span class="underlined whitespace-nowrap">lorem ipsum.</span>
          </h1>
          <div class="py-8 max-w-prose relative">
            <p class="leading-8 descr">
              Hi there! I'm Chris, a UX Designer (to be) from northern Germany. I'm currently studying Media Informatics (M.Sc.) at the University of Lübeck.
            </p>
            <br />
            <p class="leading-8 descr">
              « <span class="italic">You forgot to remove lorem ipsum from the heading!</span> »<br/>
              Nope! While there also might be a lot of meaningless discussions about design out there, I believe UX Design can actually make a change in the users lives, especially if it is commited to accessibility and empowerment of specific target groups.
            </p>
            <CursorChat text="Let's get creative" duration="20" />
          </div>
        </div>
        <div class="relative md:overflow-x-visible">
          <img src="../assets/doodle.svg" class="w-3/4 m-auto z-10" />
          <stylistic-circle class="absolute top-0 -z-10 w-1/2" />
          <stylistic-circle class="absolute top-1/4 -right-1/4 -z-10 w-3/4" />
          <stylistic-circle class="absolute top-2/3 left-0 -z-10 w-1/4" />
<!--          <img src="../assets/sticker/star.png" class="top-0 absolute right-1/4 w-1/6 sticker-star" />-->
        </div>
      </div>
    </section>
      <section class="bg-pinkLight py-8 shadow-custom">
        <div class="container">
          <section-heading class="my-12 py-8" heading="My recent projects" descr="Feel free to have a look" />
          <div class="grid auto-rows-auto">
            <div v-for="work in works" :key="work.id" class="mb-10">
              <workpiece :head-text="work.headText"
                         :title="work.title"
                         :description="work.description"
                         :bg-color="work.bgColor"
                         :text-color="work.textColor"
                         :img-url="work.imgUrl"
                         :url="work.url"
                         :is-available="work.isAvailable"
              />
            </div>
          </div>
        </div>
      </section>
    <div ref="toolbox" class="pigButton md:block hidden">
      <div class="grid-flow-col grid text-center">
        <div @click="startPiggies">
          <img src="../assets/img/pigs/pig3.svg" class="pigIcon">
        </div>
      </div>
    </div>
    <div ref="toolbox" class="toolbox hidden">
      <div class="grid-flow-col grid text-center">
        <div>
          <a @click="() => { setTool('mouse') }">
            <img src="../assets/img/pigs/pig3.svg" class="toolIcon">
          </a>
        </div>
        <div>
          <a @click="() =>{ setTool('brush') }">
            <img src="../assets/brush.png" class="toolIcon">
          </a>
        </div>
        <div @click="startPiggies">
          <img src="../assets/img/pigs/pig3.svg" class="toolIcon">
        </div>
        <div @click="toggleTools('close')">
          <img src="../assets/img/pigs/pig3.svg" class="toolIcon">
        </div>
      </div>
    </div>
    <div ref="particlesBox" class="particlesBox" />
    <canvas ref="canvas" id="canvas" class="hidden" />
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
        { title: 'Mobile Interface for Nutrition Awareness (MINA)', headText: 'Bachelor Thesis Media Informatics', description: 'What is a healthy meal? - A research based design approach to comprehensible in-app rating of meals.', bgColor: '#edff96', textColor: '#3b3b3b', imgUrl: 'screen_mina.png', url: './', isAvailable: false },
        { title: 'AID-Simulation for people with type 1 diabetes mellitus', headText: 'Masters project media informatics', description: 'An interactive simulator with the aim to make the functionality of closed-loop systems more comprehensible.', bgColor: '#e3ecff', textColor: '#001E4B', imgUrl: 'screen_aid.png', url: './', isAvailable: false },
        { title: 'MariData: A comprehensive interface for ship energy management', headText: 'Funded research project', description: 'The MariData decision support system helps vessel crews to not only reduce financial costs, but also the emissions and therefore minimize the negative impact on our environment.', bgColor: '#d6dde3', textColor: '#3E484E', imgUrl: 'screen_maridata.png', url: './', isAvailable: false }
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
        for (let i = 0; i < 25; i++) {
          const offset = (Math.floor(Math.random() * 10) / 6) - 0.5
          const type = Math.floor(Math.random() * 3) + 1
          const particleImg = document.createElement("img")
          particleImg.classList.add("particle")
          particleImg.src =  require(`~/assets/img/pigs/pig${type}.svg`) //"~/assets/img/pigs/pig${type}.svg"
          particleImg.style.width = ((offset * window.innerWidth / 10)) + "px"
          particleImg.style.height = "auto"
          const delay = Math.max(0, offset)
          particleImg.style.animationDelay = delay + "s"
          console.log("delay", delay)

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


  .brushCursor{
    user-select: none;
    cursor: url('../assets/img/pigs/pig1.svg'), auto;
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
    animation-duration: 1.75s;
    animation-timing-function: ease-in;
  }

  @keyframes piggies{
    0%{transform: translateY(-5vh); opacity: 1}
    50%{opacity: 1; -webkit-filter: blur(0px);}
    90%{opacity: 1; -webkit-filter: blur(4px);}
    100% {transform: translateY(-115vh); opacity: 0}
  }

  .pigIcon{
    @apply w-16 m-auto;
    user-select: none;
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

  .sticker-star{
    animation-name: star;
    animation-duration: 20s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  @keyframes star {
    0%{transform: rotate(0deg)}
    5%{transform: rotate(20deg)}
    10%{transform: rotate(-20deg)}
    15%{transform: rotate(5deg)}
    17%{transform: rotate(0deg)}
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
    transition-duration: .2s;
    @apply p-4 z-10 rounded-3xl bg-white fixed bottom-0 shadow-lg mx-auto left-0 mx-6 my-6;
  }

  .pigButton:hover{
    background-color: rgba(246, 235, 255, 0.62);
    @apply shadow-2xl;
  }

  .toolbox.close{
    transition: .75s;
    transform: translateY(110%);
  }
</style>
