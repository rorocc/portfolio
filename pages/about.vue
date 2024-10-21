<template>
  <div class="block">
    <div class="container py-12 grid md:grid-cols-2 grid-cols-none md:grid-rows-none leading-loose">
      <div>
        <img src="../assets/img/about/min/me-min.jpeg" alt="Chris on an island at the Oslo area" class="w-3/4 m-auto my-20 fade-in-left" />
      </div>
      <div>
        <h1 class="my-12 section-title">Yep, that's <span class="emph">me</span></h1>
        <p>
          With product design comes great responsibility — it can support, empower or entertain people in their everyday lives. But the opposite can also happen if the user perspective is left out of the design process.
          It is this potential impact that motivates me to design better and more inclusive interfaces.
          <br>
          <br>
          I just got my Masters degree in the field of the Media Informatics in September 2024. Previously, I was a <b>design research assistant</b> at the <web-link url="https://maridata.app/">MariData</web-link> project at the University of Lübeck.
          Also, I worked as a <b>Working Student</b> at the Design System team of <web-link url="https://www.linkedin.com/company/otto/">OTTO</web-link> in Hamburg.
          <br>
          <br>
          One of the things I learnt there was how simple but effective accessible system design can be when you consider all people in the design process. Since then, accessibility has been an integral part of my design work.          <br>
          <br>
          Oh, and I love cinnamon buns. I even tried to find the best cinnamon bun in Oslo. <web-link url="https://rorocc.github.io/cinnanom">Check out my cinnamon bun ranking here</web-link>.
        </p>
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
              2021 - 09.2024 — <span class="italic">Universität zu Lübeck, Germany</span>
            </p>
            <hr class="w-3/4 mb-2" />
            <p class="expPoint">
              <span class="head">ERASMUS exchange semester</span>
              <br>
              August - December 2022 — <span class="italic">Universitetet i Oslo, Norway</span>
            </p>
            <hr class="w-3/4 mb-2" />
            <p class="expPoint">
              <span class="head">Bachelor of Science - Media informatics</span>
              <br>
              2017 - 2021 — <span class="italic">Universität zu Lübeck, Germany</span>
            </p>
          </div>
          <div>
            <a href="https://linkedin.com/in/rock-christopher" rel="noopener noreferrer" target="_blank">
              <div class="contact-btn-inverted max-w-fit">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>More details on LinkedIn</span>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h2 class="mb-4">Knowledge & Tools</h2>
          <div class="flex-wrap gap-2 flex">
            <span class="skilltag">Human-Centered Design</span>
            <span class="skilltag">Prototyping</span>
            <span class="skilltag">Design Tokens</span>
            <span class="skilltag">Design Research</span>
            <span class="skilltag">Web Accessibility</span>
            <span class="skilltag">Design Systems</span>
            <span class="skilltag tool">Figma</span>
            <span class="skilltag tool">FigJam</span>
            <span class="skilltag tool">VueJS</span>
            <span class="skilltag tool">Premiere</span>
            <span class="skilltag tool">Photoshop</span>
            <span class="skilltag tool">AfterEffects</span>
            <span class="skilltag tool">DaVinci Resolve</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container leading-loose py-16 gap-16 grid md:grid-cols-2 grid-cols-1 justify-evenly items-end">
      <div>
        <p>Find me outside, <span class="font-bold">running around with my camera</span> and taking photos.
          Ever since I was a child, I have found fun in depicting the world around me through the lens and thus being able to express my creativity.
        </p>
        <img src="../assets/img/about/min/sticky_snow-min.png" class="md:w-2/3 w-full m-auto" />
      </div>
      <div>
        <p>Over the last few years I have come to <span class="font-bold">love walks and hikes in nature</span>. It's the perfect balance to digital work for me and a way to let my thoughts run free.</p>
        <img src="../assets/img/about/min/hovedoya.jpg" alt="Chris outside in the winter wearing a pink beanie hat and a black hoodie with yellow letters on it" class="md:w-2/3 w-full m-auto" />
        <div class="slider hidden">
          <div class="slides rounded-2xl">
            <div class="slide" id="slide-2" :style="{ 'background-image': 'url(' + require(`../assets/img/about/gallery/slide-2.jpg`) + ')' }" />
            <div class="slide" id="slide-1" :style="{ 'background-image': 'url(' + require(`../assets/img/about/gallery/slide-1.jpg`) + ')' }" />
            <div class="slide" id="slide-3" :style="{ 'background-image': 'url(' + require(`../assets/img/about/gallery/slide-3.jpg`) + ')' }" />
            <div class="slide" id="slide-4" :style="{ 'background-image': 'url(' + require(`../assets/img/about/gallery/slide-4.jpg`) + ')' }" />
          </div>
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

 .slide{
   background-size: cover;
   background-position: center;
 }

  .slider {
    text-align: center;
    overflow: hidden;
    @apply w-full;
  }

  .slides {
    display: flex;

    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    /*
    scroll-snap-points-x: repeat(300px);
    scroll-snap-type: mandatory;
    */
  }
  .slides::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .slides::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 10px;
  }
  .slides::-webkit-scrollbar-track {
    background: transparent;
  }
  .slides > div {
    scroll-snap-align: start;
    flex-shrink: 0;
    margin-right: 50px;
    border-radius: 10px;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;

    @apply w-full aspect-square;
  }
</style>
