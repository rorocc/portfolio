<template>
  <div class="md:w-2/3 w-full m-auto px-6 py-16 text-center mx-auto" id="footer">
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
    </div>
    <hr />
    <div class="notes text-left py-4 opacity-25">
      <span>Made with Nuxt.js</span>
      <span> © 2024 Christopher Rock</span>
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
    @apply text-lg mb-0 font-semibold;
  }

  .notes{
    @apply text-sm;
  }

  a{
    color: var(--link-color);
    text-decoration: none;
  }

  a:hover{
    transition-duration: 0.5s;
    text-decoration: underline;
  }

  li{
    @apply leading-loose;
  }
</style>
