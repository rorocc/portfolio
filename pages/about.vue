<template>
  <div class="block">
    <div class="container about-blocks">
      <section class="about-block">
        <div class="about-media about-media--left">
          <!-- one long doodle line per photo: it sweeps diagonally behind the photo, loops beside it and runs out to the page edge, never under the text -->
          <svg class="doodle" viewBox="-100 -100 300 300" preserveAspectRatio="none" aria-hidden="true">
            <path class="pink" d="M108 -64C100 -10 60 90 0 116C-25 126 -50 115 -44 100C-38 86 -12 92 -10 112C-8 134 -40 160 -83 173" />
          </svg>
          <img role="presentation" id="svg-cursor" class="absolute -bottom-4 right-8 z-20 w-24 origin-top-left" src="../assets/cursor.svg" />
          <img src="../assets/img/about/me-2.jpeg" alt="Portrait of Chris, wearing a base cap and glasses" width="800" height="800" class="photo passfoto aspect-square" />
        </div>
        <div class="about-text">
          <span class="about-badge">About me</span>
          <h1 class="about-heading">Yep, that's <span class="serif">me</span></h1>
          <p>
            I'm Chris, designing digital products since 2017.
            While I love an aesthetic interface design, I love digital product design that puts the users' needs in focus even more.
            That's why involving users in my conceptual work through user research is essential to offer real added value.
          </p>
          <p>
            I particularly enjoy building design systems and finding new workflows to efficiently create and communicate design work.
            This ranges from the conception of design tokens and custom Figma plugins to the development of design documentation structures.
          </p>
        </div>
      </section>
      <section class="about-block">
        <div class="about-text">
          <span class="about-badge">Beyond the screen</span>
          <h2 class="about-heading">From research <span class="serif">to code</span></h2>
          <p>
            My master's degree in Media Informatics did not only bring me closer to human-centered design but also sparked my interest in web development. I have enjoyed developing web apps ever since.
          </p>
          <p>
            You might also find me taking photos, playing around with Photoshop or simply eating <web-link url="https://rorocc.github.io/cinnanom">cinnamon buns</web-link>.
          </p>
        </div>
        <div class="about-media about-media--right">
          <svg class="doodle" viewBox="-100 -100 300 300" preserveAspectRatio="none" aria-hidden="true">
            <path class="lavender" d="M106 -18C80 -16 50 10 52 26C54 40 80 40 106 38C124 37 132 22 122 18C110 14 100 30 106 46C112 62 130 90 153 106" />
          </svg>
          <img src="../assets/img/about/pidgi.jpg" alt="Chris in a park with pigeons sitting on his shoulder and hands" width="1536" height="2048" class="photo aspect-[3/4]" />
        </div>
      </section>
    </div>
    <div class="bg-gray-50 py-16">
      <div class="container">
        <h2 class="my-12 section-title">Companies and Projects I participated at</h2>
        <div class="grid md:grid-cols-4 grid-cols-2 gap-8">
          <div class="logo-tile">
            <img alt="UEBERSTUNDE" class="opacity-75" src="../assets/img/about/logos/ueberstunde.avif">
          </div>
          <div class="logo-tile">
            <img class="invert opacity-75" alt="ventureon" src="../assets/img/about/logos/ventureon.svg">
          </div>
          <div class="logo-tile">
            <img alt="Institut für Multimediale und Interaktive Systeme an der Universität zu Lübeck" src="../assets/img/about/logos/imis.svg">
          </div>
          <div class="logo-tile">
            <img alt="Otto" src="../assets/img/about/logos/otto.svg">
          </div>
          <div class="logo-tile">
            <img alt="MariData" src="../assets/img/about/logos/maridata.png">
          </div>
          <div class="logo-tile">
            <img alt="Lynes" src="../assets/img/about/logos/lynes.png">
          </div>
          <div class="bg-gray-200 rounded-xl items-center justify-center md:px-12 px-6 md:h-48 h-40 saturate-0 hidden md:flex" />
          <div class="bg-gray-200 rounded-xl items-center justify-center md:px-12 px-6 md:h-48 h-40 saturate-0 hidden md:flex" />
        </div>
      </div>
    </div>
    <div class="container py-16 grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 md:gap-8 gap-16">
      <div>
        <div>
          <h2 class="my-12 section-title">Tech Stack</h2>
          <div class="flex-wrap gap-2 flex">
            <span class="skilltag tool">Figma</span>
            <span class="skilltag tool">FigJam</span>
            <span class="skilltag tool">Miro</span>
            <span class="skilltag tool">Microsoft 365</span>
            <span class="skilltag tool">WebStorm</span>
            <span class="skilltag tool">Node.js</span>
            <span class="skilltag tool">Vue.js</span>
            <span class="skilltag tool">Premiere</span>
            <span class="skilltag tool">Photoshop</span>
            <span class="skilltag tool">AfterEffects</span>
            <span class="skilltag tool">DaVinci Resolve</span>
          </div>
        </div>
      </div>
      <div>
        <h2 class="my-12 section-title">Knowledge</h2>
        <div class="flex-wrap gap-2 flex">
          <span class="skilltag">Human-Centered Design</span>
          <span class="skilltag">Design Systems</span>
          <span class="skilltag">Prototyping</span>
          <span class="skilltag">Design Tokens</span>
          <span class="skilltag">Web Accessibility</span>
          <span class="skilltag">Web Development</span>
          <span class="skilltag">User Research & Testing</span>
          <span class="skilltag">Photography</span>
          <span class="skilltag">Videography</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import WebLink from "~/components/structuralComponents/webLink";

export default {
  name: "About",
  components: {WebLink},
  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://chrisrock.rocks/about'
        }
      ]
    }
  },
  methods: {
    screenLength(path) {
      const matrix = path.getScreenCTM()
      const total = path.getTotalLength()
      let length = 0
      let last = null
      for (let i = 0; i <= 200; i++) {
        const point = path.getPointAtLength(total * i / 200).matrixTransform(matrix)
        if (last) length += Math.hypot(point.x - last.x, point.y - last.y)
        last = point
      }
      return Math.ceil(length) + 2
    },
    // each photo's doodle line grows while its block scrolls through the viewport
    drawDoodles() {
      const paths = this.$el.querySelectorAll('.doodle path')
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      paths.forEach((path, index) => {
        // the svg stretches with the photo and the stroke does not scale, so the dash has to match
        // the length on screen, not the length in the svg's own units – otherwise the line repeats in pieces
        const length = this.screenLength(path)
        path.style.strokeDasharray = `${length} ${length}`
        // the portrait line starts a tenth drawn, so the top of the page is not empty
        path.style.strokeDashoffset = index === 0 ? length * 0.9 : length
        this.$gsap.to(path, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: path.closest('.about-block'),
            // the portrait sits right at the top, so its line starts growing from the very first scroll
            start: index === 0 ? 0 : 'top 90%',
            // the portrait line gets a longer scroll range, so it grows at about the same pace as the second one
            end: index === 0 ? 'bottom -20%' : 'bottom 35%',
            scrub: true
          }
        })
      })
    }
  },
  mounted() {
    this.drawDoodles()

    this.$gsap.to('#svg-cursor', {
      y: 50,
      x: -50,
      rotation: 0,
      ease: 'Power1.easeInOut',
      stagger: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.passfoto',
        start: 'top 50%',
        end: 'bottom',
        scrub: true,
        markers: false
      }
    })

    this.$gsap.to('#svg-cursor', {
      rotation: 20,
      ease: 'Power1.easeInOut',
      duration: 5,
      scrollTrigger: {
        trigger: '.passfoto',
        start: 'top 50%',
        end: 'bottom',
        scrub: true,
      }
    })
  }
}
</script>

<style scoped>
  /* image + text blocks, alternating sides */
  .about-blocks{
    @apply pt-8 pb-12;
  }


  .about-block{
    @apply grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-10 items-center md:py-20 py-10;
  }

  .about-media{
    @apply relative;
  }

  .about-media--left{
    @apply md:w-4/5 w-3/4 mx-auto;
  }

  .about-media--right{
    @apply md:w-3/4 w-3/4 mx-auto order-first md:order-none;
  }

  .photo{
    @apply relative z-10 block w-full h-auto object-cover rounded-3xl;
  }

  /* the svg is three times the photo in each direction, so the line can reach far past it;
     its coordinates are in photo units (0–100 = the photo) and the paths stay out of the text column */
  .doodle{
    position: absolute;
    left: -100%;
    top: -100%;
    width: 300%;
    height: 300%;
    overflow: visible;
    pointer-events: none;
    z-index: 0;
  }

  /* on small screens photo and text stack, so a line around the photo would run into the text */
  @media (max-width: 767px){
    .doodle{
      display: none;
    }
  }


  .doodle path{
    fill: none;
    stroke-width: 10;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }

  .doodle .pink{
    stroke: var(--primary-color);
  }

  .doodle .lavender{
    stroke: #b9a7f5;
  }

  .about-text{
    @apply relative z-10 flex flex-col gap-5 leading-loose;
  }

  .about-badge{
    background-color: var(--primary-color);
    @apply self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black;
  }

  .about-heading{
    font-family: "Inter", sans-serif;
    letter-spacing: -0.02em;
    @apply m-0 w-auto md:text-5xl text-4xl font-semibold leading-tight text-black;
  }

  .about-heading .serif{
    font-family: "Inria Serif", serif;
    @apply italic font-normal;
  }

  .about-text p{
    @apply pb-0 text-lg;
  }

  h2{
    @apply text-2xl;
  }

  .skilltag{
    border-color: var(--primary-color);
    @apply rounded-md border py-2 px-4;
  }

  .skilltag.tool{
    background-color: var(--primary-bright);
    color: black;
    @apply border-0;
  }

  .expPoint .head{
    @apply font-medium;
  }

  .expPoint{
    @apply leading-loose;
  }

  .logo-tile{
    @apply bg-gray-200 rounded-xl flex items-center justify-center md:px-12 px-6 md:h-48 h-40 saturate-0;
  }

  h2{
    font-weight: bold;
    @apply mb-8;
  }

 p{
   @apply pb-4;
 }
</style>
