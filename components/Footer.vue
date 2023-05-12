<template>
  <div class="md:w-2/3 w-full m-auto p-6 pt-12 text-center mx-auto" id="footer">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-8  mb-12 mx-auto">
      <div class="grid grid-cols-2 justify-items-center">
        <div class="w-fit text-left ">
          <span class="footer-title">Sitemap</span>
          <ul>
            <li><NuxtLink to="/" >Home</NuxtLink></li>
            <li><NuxtLink to="/about" >About me</NuxtLink></li>
            <li><NuxtLink to="/imprint" >Imprint</NuxtLink></li>
          </ul>
        </div>
        <div class="w-fit text-left">
          <span class="footer-title">Projects</span>
          <ul>
            <li><NuxtLink to="/projects/aid" >AID-Simulation</NuxtLink></li>
            <li><NuxtLink to="/projects/maridata" >MariData</NuxtLink></li>
            <li><NuxtLink to="/projects/mina" >MINA</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div id="contact" class="relative lg:my-0 my-8">
<!--        <img src="~assets/img/pigeon.svg" class="absolute w-1/2 -left-1/3 md:-top-1/2 top-0 opacity-10" id="pigeon">-->
        <div class="max-w-fit mx-auto relative">
          <div class="my-4">
            <div class="mb-0 footer-title">
              <p>
                <span class="opacity-30">Gurr gurr...</span>
                <br>
                Send me a mail pigeon
              </p>
            </div>
          </div>
          <div class="m-auto flex space-x-6 justify-center text-center auto-cols-min">
            <a href="https://linkedin.com/in/rock-christopher" rel="noopener noreferrer" target="_blank">
              <div class="contact-btn">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span>LinkedIn</span>
              </div>
            </a>
            <a href="mailto:moin@chrisrock.rocks">
              <div class="contact-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M6.5 33.75q-1.458 0-2.5-1.042-1.042-1.041-1.042-2.5V9.792q0-1.459 1.042-2.5Q5.042 6.25 6.5 6.25h27q1.5 0 2.542 1.042 1.041 1.041 1.041 2.5v20.416q0 1.459-1.041 2.5Q35 33.75 33.5 33.75ZM20 21.792l13.5-8.917V9.792L20 18.542 6.5 9.792v3.083Z"/></svg>
                <span>E-Mail</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="notes text-left py-4 opacity-25">
      <span>Made with Nuxt.js</span>
      <span> © 2023 Christopher Rock</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .footer-title{
    font-family: 'PPMori', sans-serif;
    font-weight: 500;
    @apply text-lg mb-0;
  }

  .notes{
    @apply text-sm;
  }

  a{
    color: var(--link-color);
  }

  a:hover{
    color: var(--primary-color)
  }

  li{
    @apply leading-loose;
  }
</style>
