<template>
  <div class="block">
    <div class="container py-12 grid md:grid-cols-2 grid-cols-none md:grid-rows-none leading-loose">
      <div>
        <img src="../assets/img/about/min/me-min.jpeg" alt="Chris on an island at the Oslo area" class="w-3/4 m-auto my-20 fade-in-left" />
        <img src="../assets/img/about/min/snow.jpg" alt="Chris somewhere in a snowy landscape in Norway taking a photo of a sign" class="w-1/2 m-auto z-10 ml-6 hidden md:block" />
      </div>
      <div>
        <h1>Yep, <span class="underlined whitespace-nowrap">that's me.</span></h1>
        <p>
          With product design comes great responsibility — it can support people in their everyday lives, empower them or entertain them. But the opposite can also happen if the user perspective is left out of the development process.
          <br> <br>
          It is precisely this potential influence that motivates me to design better and more inclusive interfaces.
          <br>
          <br>
          <br>
          I'm currently student of the Media Informatics masters program and a design research assistant at the <web-link url="https://maridata.app/">MariData</web-link> project at the University of Lübeck.
          Also, I am working as a UX/UI intern at OTTO for the pattern library team in Hamburg.
          <br>
          <br>
          Oh, and I love cinnamon buns. I even tried to find the best cinnamon bun in Oslo. <web-link url="https://rorocc.github.io/cinnanom">Check out my cinnamon bun ranking here</web-link>.
        </p>
        <img src="../assets/img/about/min/hovedoya.jpg" alt="Chris outside in the winter wearing a pink beanie hat and a black hoodie with yellow letters on it" class="w-1/2 m-auto z-10 mt-12 hidden md:block" />
      </div>
    </div>
    <div class="bg-gray-50 py-16">
      <div class="container grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 md:gap-8 gap-16">
        <div>
          <h2 class="mb-4">Education</h2>
          <div class="relative grid grid-flow-row gap-2">
            <p class="expPoint">
              <span class="head">Master of Science - Media informatics</span>
              <br>
              2021 - now — <span class="italic">Universität zu Lübeck, Germany</span>
            </p>
            <p class="expPoint">
              <span class="head">ERASMUS exchange semester</span>
              <br>
              August - December 2022 — <span class="italic">Universitetet i Oslo, Norway</span>
            </p>
            <p class="expPoint">
              <span class="head">Bachelor of Science - Media informatics</span>
              <br>
              2017 - 2021 — <span class="italic">Universität zu Lübeck, Germany</span>
            </p>
          </div>
        </div>
        <div>
          <h2 class="mb-4">Knowledge & Tools</h2>
          <div class="flex-wrap gap-2 flex">
            <span class="skilltag">Human-Centered Design</span>
            <span class="skilltag">Prototyping</span>
            <span class="skilltag">Wireframing</span>
            <span class="skilltag">User Research</span>
            <span class="skilltag">Web Accessibility</span>
            <span class="skilltag tool">Figma</span>
            <span class="skilltag tool">FigJam</span>
            <span class="skilltag tool">VueJS</span>
            <span class="skilltag tool">Premiere</span>
            <span class="skilltag tool">Photoshop</span>
            <span class="skilltag tool">AfterEffects</span>
          </div>
        </div>
      </div>
    </div>
    <div class="block md:hidden">
      <img src="../assets/img/about/min/snow.jpg" class="w-1/2 m-auto z-10 ml-0" />
      <img src="../assets/img/about/min/hovedoya.jpg" class="w-1/2 m-auto z-10 mr-0" />
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
}
</script>

<style scoped>
  .skilltag{
    border-color: var(--primary-color);
    @apply rounded-md border py-2 px-4;
  }

  .skilltag.tool{
    background-color: var(--primary-color);
    color: white;
  }

  .cvMore{
    background-image: linear-gradient(to top, rgb(249 250 251), rgb(249 250 251), rgb(249 250 251), rgb(249 250 251), rgba(255, 255, 255, 0));
    @apply bottom-0 py-16 w-full text-center;
  }

  .expPoint .head{
    @apply font-medium;
  }

  .expPoint{
    @apply leading-loose;
  }

  .expPoint::before{
    content: '\276F';
    color: var(--primary-color);
    @apply mr-2;
  }

 p{
   @apply pb-4;
 }

 img{
   @apply rounded-2xl;
 }

 .prev-work-info{
   position: relative;
   z-index: 1;
   overflow: hidden;
   background: none;
   @apply py-12;
 }

 .prev-work-info:after{
   content: '';
   position: absolute;
   top: 0;
   right: 182px;
   bottom: 0;
   left: -9999px;
   background: rgba(240, 218, 255, 0.25);
   transform: skew(30deg);
   z-index: -1;
 }
</style>
