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
          <svg class="sticker" viewBox="-4 -4 108 108" role="img" aria-label="U R living in their world">
            <polygon points="50.0,2.0 56.8,11.6 66.4,4.9 69.5,16.2 80.9,13.2 79.9,24.9 91.6,26.0 86.6,36.7 97.3,41.7 89.0,50.0 97.3,58.3 86.6,63.3 91.6,74.0 79.9,75.1 80.9,86.8 69.5,83.8 66.4,95.1 56.8,88.4 50.0,98.0 43.2,88.4 33.6,95.1 30.5,83.8 19.1,86.8 20.1,75.1 8.4,74.0 13.4,63.3 2.7,58.3 11.0,50.0 2.7,41.7 13.4,36.7 8.4,26.0 20.1,24.9 19.1,13.2 30.5,16.2 33.6,4.9 43.2,11.6" />
            <text x="50" y="42">U R LIVING</text>
            <text x="50" y="54">IN THEIR</text>
            <text x="50" y="66">WORLD</text>
          </svg>
        </div>
      </section>
    </div>
    <section class="companies">
      <div class="container">
        <div class="about-text">
          <span class="about-badge">Experience</span>
          <h2 class="about-heading">Companies <span class="serif">&amp; projects</span></h2>
        </div>
      </div>
      <!-- the logos run as an endless band; the second set only closes the loop and is hidden from screen readers -->
      <div class="logo-band">
        <div class="logo-track">
          <img src="../assets/img/about/logos/violet/ueberstunde.png" alt="ÜBERSTUNDE" style="height: calc(48px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/ventureon.png" alt="ventureon" style="height: calc(36px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/imis.png" alt="Institute for Multimedia and Interactive Systems, University of Lübeck" style="height: calc(78px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/otto.png" alt="Otto" style="height: calc(44px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/maridata.png" alt="MariData" style="height: calc(38px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/lynes.png" alt="Lynes" style="height: calc(54px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/ueberstunde.png" alt="" style="height: calc(48px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/ventureon.png" alt="" style="height: calc(36px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/imis.png" alt="" style="height: calc(78px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/otto.png" alt="" style="height: calc(44px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/maridata.png" alt="" style="height: calc(38px * var(--logo-scale))" />
          <img src="../assets/img/about/logos/violet/lynes.png" alt="" style="height: calc(54px * var(--logo-scale))" />
        </div>
      </div>
    </section>
    <section class="container skill-section">
      <div class="about-text">
        <span class="about-badge">Toolbox</span>
        <h2 class="about-heading">Tech stack <span class="serif">&amp; knowledge</span></h2>
      </div>
      <skill-loop class="skill-loop" />
    </section>
  </div>
</template>

<script>
import WebLink from "~/components/structuralComponents/webLink";
import SkillLoop from "~/components/pages/about/skillLoop";

export default {
  name: "About",
  components: {WebLink, SkillLoop},
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

    // the sticker drifts up a little faster than the photo while it scrolls past
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.$gsap.fromTo('.sticker', { y: 40 }, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: '.sticker',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }

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
  /* companies: dark violet logos running on a slightly tilted lavender band */
  .companies{
    @apply md:py-24 py-16 overflow-hidden;
  }

  /* logo heights are set so every logo covers about the same area (wide ones lower, compact ones taller,
     heavy ones a touch smaller), which makes them look equally big; on phones they shrink to half,
     so about two and a half logos fit on the screen */
  .logo-band{
    --logo-scale: 0.5;
    background-color: var(--primary-bright);
    transform: rotate(-2deg);
    @apply md:mt-14 mt-10 -mx-10 md:py-14 py-10 overflow-hidden;
  }

  .logo-track{
    animation: logo-band 30s linear infinite;
    @apply flex items-center w-max;
  }

  /* spacing as a right margin, so both halves of the track are exactly as wide and the loop has no jump */
  .logo-track img{
    @apply w-auto max-w-none md:mr-24 mr-10;
  }

  @keyframes logo-band{
    from{ transform: translateX(0); }
    to{ transform: translateX(-50%); }
  }

  @screen md{
    .logo-band{
      --logo-scale: 1;
    }
  }

  @media (prefers-reduced-motion: reduce){
    .logo-track{
      animation: none;
    }
  }

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

  /* starburst sticker slapped onto the bottom right corner of the pigeon photo */
  .sticker{
    right: -8%;
    bottom: -6%;
    width: 38%;
    transform: rotate(-8deg);
    filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.18));
    @apply absolute z-20 overflow-visible;
  }

  .sticker polygon{
    fill: #3b63e0;
    stroke: white;
    stroke-width: 4;
    stroke-linejoin: round;
  }

  .sticker text{
    fill: white;
    font-family: "Inter", sans-serif;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-anchor: middle;
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

  .skill-section{
    @apply md:pt-12 pt-8 md:pb-24 pb-16;
  }

  .skill-loop{
    @apply md:mt-16 mt-10;
  }

  .expPoint .head{
    @apply font-medium;
  }

  .expPoint{
    @apply leading-loose;
  }

  h2{
    font-weight: bold;
    @apply mb-8;
  }

 p{
   @apply pb-4;
 }
</style>
