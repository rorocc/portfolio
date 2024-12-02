<template>
  <div class="block">
    <div class="container grid md:grid-cols-2 grid-cols-none md:grid-rows-none leading-loose">
      <div class="h-fit">
        <div class="relative">
          <img role="presentation" id="svg-cursor" class="absolute -bottom-4 right-8 z-10 w-24 origin-top-left" src="../assets/cursor.svg" />
          <img src="../assets/img/about/me-2.jpeg" alt="Portrait of Chris, wearing a base cap and glasses" class="md:w-2/3 w-3/4 m-auto my-20 rounded-2xl passfoto translate-y-0" />
        </div>
      </div>
      <div class="pb-12">
        <h1 class="my-12 section-title">Yep, that's <span class="emph">me</span></h1>
        <p>
          I'm Chris and I have been gaining experience in designing digital products since 2017.
          My skills include user experience and user interface design, as well as conducting user studies and workshops.
          While I love an aesthetic interface design, I love digital product design that put the users needs in focus even more.
        </p>
        <p>
          My Masters degree in the field of the Media Informatics, that I finished in September 2024, did not only teach my how to do design research but also sparked my interest in web development. I enjoy to develop Vue apps ever since.
        </p>
        <p>
          You might also find me while taking photos, playing around with Photoshop or simply eating <web-link url="https://rorocc.github.io/cinnanom">cinnamon buns</web-link>.
        </p>
      </div>
    </div>
    <div class="bg-gray-50 py-16">
      <div class="container">
        <h2>Companies and projects I worked for</h2>
        <div class="grid md:grid-cols-4 grid-cols-2 gap-8">
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
        </div>
      </div>
    </div>
    <div class="container py-16 grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 md:gap-8 gap-16">
      <div>
        <div>
          <h2>My Tech Stack</h2>
          <div class="flex-wrap gap-2 flex">
            <span class="skilltag tool">Figma</span>
            <span class="skilltag tool">FigJam</span>
            <span class="skilltag tool">Miro</span>
            <span class="skilltag tool">Microsoft 365</span>
            <span class="skilltag tool">WebStorm</span>
            <span class="skilltag tool">Vue.js</span>
            <span class="skilltag tool">Premiere</span>
            <span class="skilltag tool">Photoshop</span>
            <span class="skilltag tool">AfterEffects</span>
            <span class="skilltag tool">DaVinci Resolve</span>
          </div>
        </div>
      </div>
      <div>
        <h2>Knowledge</h2>
        <div class="flex-wrap gap-2 flex">
          <span class="skilltag">Human-Centered Design</span>
          <span class="skilltag">Design Systems</span>
          <span class="skilltag">Prototyping</span>
          <span class="skilltag">Design Tokens</span>
          <span class="skilltag">Web Accessibility</span>
          <span class="skilltag">Design Research</span>
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
  mounted() {

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
    @apply bg-gray-200 bg-opacity-25 rounded-xl flex items-center justify-center md:px-12 px-6 md:h-48 h-40 saturate-0;
  }

  h2{
    font-weight: bold;
    @apply mb-8;
  }

 p{
   @apply pb-4;
 }
</style>
