<template>
  <div ref="mainDiv" class="m-auto overflow-x-hidden">
    <section class="container">
      <div class="grid grid-flow-row grid-cols-none md:grid-cols-3 md:grid-rows-none my-20 md:gap-0 gap-16">
        <div class="relative w-full md:overflow-x-visible">
          <div class="grid grid-cols-2 block md:hidden">
            <img src="../assets/3d-waving.png" class="w-full m-auto z-10" alt="3D character of Chris wearing a purple cap, grey hoodie and black pants. The model is waving at you." />
            <h1 class="dot fade-in-left md:leading-normal leading-normal text-3xl text-left">
              User experience isn't just <span class="underlined whitespace-nowrap">lorem ipsum</span>
            </h1>
          </div>
          <img src="../assets/3d-waving.png" class="md:w-full w-1/2 m-auto z-10 hidden md:block"  alt="3D character of Chris wearing a purple cap, grey hoodie and black pants. The model is waving at you." />
          <CircleDecoration class="absolute top-0 -z-10 w-1/2" />
          <CircleDecoration class="absolute top-1/4 -right-1/4 -z-10 w-3/4" />
          <CircleDecoration class="absolute top-2/3 left-0 -z-10 w-1/4" />
<!--          <img src="../assets/sticker/star.png" class="top-0 absolute right-1/4 w-1/6 sticker-star" />-->
        </div>
        <div class="col-span-2">
          <h1 class="hidden md:block dot fade-in-left md:leading-normal leading-normal md:text-5xl text-4xl text-center md:text-left">
            User experience isn't just <span class="underlined whitespace-nowrap">lorem ipsum</span>
          </h1>
          <div class="py-8 max-w-prose relative">
            <p class="leading-8 descr max-w-prose">
              Hi there! I'm Christopher Rock and currently a User Interface Designer (Internship) @ OTTO in Hamburg. I'm also studying Media Informatics (M.Sc.) at the University of Lübeck.
            </p>
            <CursorChat text="Design to empower" duration="20" />
          </div>
        </div>
      </div>
    </section>
      <section class="bg-gray-50 py-8">
        <div class="container">
          <h1 class="my-12">My recent projects</h1>
          <div class="grid auto-rows-auto">
            <div v-for="work in works" :key="work.id" class="mb-10">
              <Workpiece :head-text="work.headText"
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
    <div ref="toolbox" @click="startPiggies" class="pigButton md:block hidden">
      <div class="grid-flow-col grid text-center">
        <div>
          <img src="../assets/img/pigs/pig3.svg" class="pigIcon" role="presentation">
        </div>
      </div>
      <div class="hidden">

        <p>Pig emoji license: Copyright 2020 Twitter, Inc and other contributors |
          Code licensed under the MIT License: http://opensource.org/licenses/MIT |
          Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/</p>
      </div>
    </div>
    <div ref="particlesBox" class="particlesBox" />
  </div>
</template>

<script>
import BobbleHead from "~/components/pages/index/BobbleHead";
import Workpiece from "~/components/pages/index/workpiece";
import CursorChat from "~/components/pages/index/CursorChat";
import CircleDecoration from "~/components/stylistic/DecorationCircle";

export default {
  name: 'IndexPage',
  components: {BobbleHead, Workpiece, CursorChat, CircleDecoration},
  head() {
    return {
      meta: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://chrisrock.rocks/'
        }
      ]
    }
  },
  data () {
    return {
      tool: "mouse",
      vueCanvas: null,
      pigDisclaimerActive: false,
      pos: { x: 0, y: 0 },
      works: [
        { title: 'AID-Simulation — Diabetes type 1 closed-loop simulator', headText: 'Masters project media informatics', description: 'An interactive simulator with the aim to make the functionality of closed-loop systems more comprehensible.', bgColor: '#e3ecff', textColor: '#001E4B', imgUrl: 'screen_aid.png', url: './projects/aid', isAvailable: true },
        { title: 'MariData: A comprehensive interface for ship energy management', headText: 'Funded research project', description: 'The MariData decision support system helps vessel crews to not only reduce financial costs, but also the emissions and therefore minimize the negative impact on our environment.', bgColor: '#d6dde3', textColor: '#3E484E', imgUrl: 'screen_maridata.png', url: './projects/maridata', isAvailable: true },
        { title: 'Mobile Interface for Nutrition Awareness (MINA)', headText: 'Bachelor Thesis Media Informatics', description: 'What is a healthy meal? - A research based design approach to comprehensible in-app rating of meals.', bgColor: '#eeffa1', textColor: '#3b3b3b', imgUrl: 'screen_mina.png', url: './projects/mina', isAvailable: true }
      ]
    }
  },
  mounted () {
  },
  methods: {
    startPiggies () {
      const container = document.createElement("div")
      container.classList.add("particlesContainer")
      this.$refs.particlesBox.appendChild(container)
      this.pigDisclaimerActive = true;

      for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 25; i++) {
          const offset = (Math.floor(Math.random() * 10) / 6) - 0.5
          const type = Math.floor(Math.random() * 3) + 1
          const particleImg = document.createElement("img")
          particleImg.classList.add("particle")
          particleImg.ariaRoleDescription = "presentation"
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
      setTimeout(()=>{this.pigDisclaimerActive = false}, 3000)
      console.log(deleteChildren)
    }
  }
}
</script>

<style>

  .particlesContainer{
    @apply fixed left-0 right-0 m-auto justify-center items-center -bottom-1/4 grid grid-flow-col;
  }

  .particle{
    animation-name: piggies;
    animation-duration: 1.75s;
    animation-timing-function: ease-in;
    @apply z-20;
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

  .pigLicense{
    animation: fadeInOut 3s ease-in-out;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 16px;
    backdrop-filter: blur(8.2px);
    -webkit-backdrop-filter: blur(8.2px);
    border: 1px solid rgba(255, 255, 255, 0.36);
    color: rgba(0,0,0,0.35);
    font-size: 10px;
    @apply p-2 rounded-3xl fixed bottom-0 mx-auto left-0 right-0 w-fit ml-auto mr-auto -z-10 mx-6 my-6 ;
  }

  @keyframes fadeInOut {
    0%{opacity: 0}
    25%{opacity: 1}
    75%{opacity: 1}
    100%{opacity: 0}
  }

  .pigButton{
    transition-duration: .2s;
    @apply p-4 z-10 rounded-3xl bg-white fixed bottom-0 shadow-lg mx-auto left-0 mx-6 my-6;
  }

  .pigButton:hover{
    background-color: rgba(246, 235, 255, 0.62);
    @apply cursor-pointer;
  }

  .toolbox.close{
    transition: .75s;
    transform: translateY(110%);
  }
</style>
