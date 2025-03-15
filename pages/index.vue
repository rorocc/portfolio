<template>
  <div ref="mainDiv" class="m-auto overflow-x-hidden">
    <div id="customCursor">
      <section class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 mb-16 mt-4 md:gap-0 gap-6">
          <div class="relative text-center">
            <h1
              class="md:max-w-prose w-full landing-title fade-in-left md:leading-relaxed leading-tight text-center md:text-left" >
              Hello, I am <br /> <span class="playful">Christopher</span>
            </h1>
            <a href="#case-studies" class="right-0 top-12 absolute visible lg:invisible">
              <pages-index-badge class="translate-y-1/4 z-10" />
            </a>
            <div class="relative">
              <p class="leading-8 landing-description max-w-prose md:text-left text-center opacity-50">
                Creative human-being with a passion for design systems and inclusive digital products
              </p>
            </div>
            <a href="#case-studies">
              <pages-index-badge class="absolute md:bottom-0 translate-y-1/4 z-10 right-0 left-0 invisible lg:visible" />
            </a>
          </div>
          <div class="relative w-full md:overflow-x-visible" >

            <pages-index-sims @simEvent="handleSimEvent"/>

            <CursorChat v-if="false" text="Design to empower" duration="20"
                        class="absolute md:top-1/2 bottom-16 md:left-1/3 left-1/4"/>
            <img v-if="false" src="../assets/3d-waving.png" class="md:w-full m-auto self-center"
                 alt="3D character of Chris wearing a purple cap, grey hoodie and black pants. The model is waving at you."/>
          </div>
        </div>
      </section>
    </div>
    <section>
      <pages-index-ticker text="* UX is not just lorem ipsum "/>
    </section>
    <section class="bg-gray-50 py-8">
      <div id="case-studies" class="container">
        <h1 class="my-12 section-title"><span class="emph pr-2">01</span> User Experience Design</h1>
        <div class="grid auto-rows-auto">
          <div v-for="work in works" :key="work.id" class="mb-10 piece">
            <lazy-pages-index-workpiece :head-text="work.headText"
                                        :title="work.title"
                                        :description="work.description"
                                        :bg-color="work.bgColor"
                                        :text-color="work.textColor"
                                        :img-url="work.imgUrl"
                                        :url="work.url"
                                        :is-available="work.isAvailable"
                                        :pills="work.pills"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-50 py-8">
      <div class="container">
        <h1 class="my-12 section-title"><span class="emph pr-2">02</span> Photography</h1>
        <div class="img-cinema">
          <div class="img-cinema-item" style="background-image: url('/visual/odt.jpeg')"/>
          <div class="img-cinema-item" style="background-image: url('/visual/rainbow.jpg')"/>
          <div class="img-cinema-item" style="background-image: url('/visual/party.jpg')"/>
          <div class="img-cinema-item" style="background-image: url('/visual/girl_1.jpg')"/>
          <div class="img-cinema-item" style="background-image: url('/visual/waterfall.jpg')"/>
          <div class="img-cinema-item" style="background-image: url('/visual/muellmorty-hd.jpg')"/>
        </div>
      </div>
    </section>
    <div role="none" ref="toolbox" @click="startPiggies" class="pigButton block no-select">
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
    <div ref="particlesBox" class="particlesBox"/>
  </div>
</template>

<script>
import BobbleHead from "~/components/pages/index/BobbleHead";
import Workpiece from "~/components/pages/index/workpiece";
import CursorChat from "~/components/pages/index/CursorChat";
import CircleDecoration from "~/components/stylistic/DecorationCircle";
import WebLink from "~/components/structuralComponents/webLink";
import Ticker from "~/components/pages/index/Ticker";
import ActionTag from "~/components/structuralComponents/actionTag";
import Badge from "~/components/pages/index/badge";

export default {
  name: 'IndexPage',
  components: {Badge, ActionTag, WebLink, BobbleHead, Workpiece, CursorChat, CircleDecoration},
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
  data() {
    return {
      tool: "mouse",
      pigDisclaimerActive: false,
      pos: {x: 0, y: 0},
      works: [
        {
          title: 'The Traceable Design System',
          description: 'An approach to making design decisions more traceable by integrating the concept of design rationale into design systems.',
          bgColor: '#e5e5e5',
          textColor: '#000000',
          imgUrl: 'screen_ds.png',
          url: './projects/traceable-design-system',
          isAvailable: true,
          pills: ["Desktop", "Prototyping", "Master Thesis"]
        },
        {
          title: 'AID-Simulation — Diabetes type 1 closed-loop simulator',
          headText: 'Masters project media informatics',
          description: 'An interactive simulator with the aim to make the functionality of closed-loop systems more comprehensible.',
          bgColor: '#e3ecff',
          textColor: '#001E4B',
          imgUrl: 'screen_aid.png',
          url: './projects/aid',
          isAvailable: true,
          pills: ["Mobile", "Desktop", "Web Development"]
        },
        {
          title: 'MariData: Interface for ship energy management',
          headText: 'Funded research project',
          description: 'The MariData decision support system helps vessel crews to not only reduce financial costs, but also the emissions and therefore minimize the negative impact on our environment.',
          bgColor: '#d6dde3',
          textColor: '#3E484E',
          imgUrl: 'screen_maridata.png',
          url: './projects/maridata',
          isAvailable: true,
          pills: ["Tablet", "Research", "Prototyping"]
        },
        {
          title: 'Mobile Interface for Nutrition Awareness (MINA)',
          headText: 'Bachelor Thesis Media Informatics',
          description: 'What is a healthy meal? - A research based design approach to comprehensible in-app rating of meals.',
          bgColor: '#eeffa1',
          textColor: '#3b3b3b',
          imgUrl: 'screen_mina.png',
          url: './projects/mina',
          isAvailable: true,
          pills: ["Mobile", "Web Development", "Bachelor Thesis"]
        }
      ],
      navigator: null
    }
  },
  mounted () {
    this.navigator = window.navigator
    this.animateOnScroll()
    this.initCustomCursor()
  },
  methods: {
    initCustomCursor () {
      const el = document.getElementById('customCursor')
      let img = document.getElementById("cursorImage")
      el.style.cursor = 'none'
      if (!img) {
        img = document.createElement("img")
        img.id = "cursorImage"
        img.src = "/cursor.png"
        img.style.position = "absolute"
        img.style.pointerEvents = "none"
        img.style.transition = "opacity 0.1s ease"
        img.style.opacity = "0"
        img.style.zIndex = "100"
        document.body.appendChild(img)
      }
      el.addEventListener('mouseenter', (e) => {
        img.style.opacity = "1"
      })
      el.addEventListener("mousemove", function (event) {
        img.style.left = event.pageX + "px"
        img.style.top = event.pageY + "px"
      })
      el.addEventListener("mouseleave", function (event) {
        img.style.opacity = "0"
      })
    },
    animateOnScroll () {
      this.$gsap.to('.piece', {
        x: 0,
        ease: 'Power1.easeInOut',
        stagger: 0.01,
        duration: 0.1,
        scrollTrigger: {
          trigger: '#case-studies',
          end: 'top -20%',
          scrub: true,
          markers: false
        }
      })
    },

    handleSimEvent (event) {
      console.log(event)
    },
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
          particleImg.src = require(`~/assets/img/pigs/pig${type}.svg`) //"~/assets/img/pigs/pig${type}.svg"
          particleImg.style.width = ((offset * window.innerWidth / (window.innerWidth < 500 ? 2 : 10))) + "px"
          particleImg.style.height = "auto"
          const delay = Math.max(0, offset)
          particleImg.style.animationDelay = delay + "s"

          if (j === 0) {
            this.$refs.particlesBox.lastChild.appendChild(particleImg)
            // this.$refs.particlesContainer1.appendChild(particleImg)
          } else {
            // this.$refs.particlesContainer2.appendChild(particleImg)
          }
        }
      }
      const deleteChildren = setTimeout(() => {
        this.$refs.particlesBox.firstChild.remove()
      }, 3000)
      setTimeout(() => {
        this.pigDisclaimerActive = false
      }, 3000)
    }
  }
}
</script>

<style>

.particlesContainer {
  @apply fixed left-0 right-0 m-auto justify-center items-center -bottom-1/4 grid grid-flow-col;
}

.particle {
  animation-name: piggies;
  animation-duration: 1.75s;
  animation-timing-function: ease-in;
  @apply z-20;
}

@keyframes piggies {
  0% {
    transform: translateY(-5vh);
    opacity: 1
  }
  50% {
    opacity: 1;
    -webkit-filter: blur(0px);
  }
  90% {
    opacity: 1;
    -webkit-filter: blur(4px);
  }
  100% {
    transform: translateY(-115vh);
    opacity: 0
  }
}

.pigIcon {
  @apply w-16 m-auto;
  user-select: none;
  animation-name: pig;
  transform: rotate(0deg);
  animation-delay: 2s;
  animation-duration: 12s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes star {
  0% {
    transform: rotate(0deg)
  }
  5% {
    transform: rotate(20deg)
  }
  10% {
    transform: rotate(-20deg)
  }
  15% {
    transform: rotate(5deg)
  }
  17% {
    transform: rotate(0deg)
  }
}

@keyframes pig {
  0% {
    transform: rotate(0deg)
  }
  10% {
    transform: rotate(-20deg)
  }
  18% {
    transform: rotate(5deg)
  }
  23% {
    transform: rotate(-3deg)
  }
  26% {
    transform: rotate(0deg)
  }

}

.toolbox {
  @apply w-2/3 p-6 z-10 rounded-3xl bg-white mb-4 fixed bottom-0 shadow-xl mx-auto right-0 left-0;
}

.pigLicense {
  animation: fadeInOut 3s ease-in-out;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  backdrop-filter: blur(8.2px);
  -webkit-backdrop-filter: blur(8.2px);
  border: 1px solid rgba(255, 255, 255, 0.36);
  color: rgba(0, 0, 0, 0.35);
  font-size: 10px;
  @apply p-2 rounded-3xl fixed bottom-0 mx-auto left-0 right-0 w-fit ml-auto mr-auto -z-10 mx-6 my-6 ;
}

.pigButton {
  background-image: linear-gradient(#E9D8EC, #E2B6E9);
  @apply p-4 z-10 rounded-full fixed bottom-0 mx-auto left-0 mx-6 my-6;
}

.pigButton:hover {
  background-image: none;
  background-color: #E9D8EC;
  @apply cursor-pointer;
}

.pigButton:hover .pigIcon {
  @apply opacity-90;
}

.piece {
  transform: translateX(-150px);
}

.img-cinema {
  -ms-overflow-style: none;
  scrollbar-width: none;
  @apply flex flex-nowrap md:h-96 h-80 gap-8 overflow-x-scroll snap-x snap-mandatory scroll-smooth;
}

.img-cinema-item {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @apply rounded-2xl md:w-96 w-2/3 h-full snap-center flex-shrink-0;
}

.cursorCustom {
  cursor: url("/cursor.png"), auto;
}
</style>
