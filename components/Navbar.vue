<template>
  <nav>
    <div class="mx-auto">
      <div class="flex justify-between">
        <div class="flex">
          <div>
            <a href="/">UX Portfolio</a>
          </div>
        </div>
        <div class="flex space-x-16 items-center font-lato">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/tools">Tools</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact" class="px-8 py-2 rounded-3xl cta">Contact</NuxtLink>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.cta{
  background-color: #f0daff;
}

.cta.nuxt-link-exact-active{
  background: none;
  border: 1px solid #f0daff;
  transition: .25s;
}

.cta.nuxt-link-exact-active:after{
  left: 45%;
  top: 20%;
  animation: none;
}

a{
  font-weight: 100;
  color: var(--link-color);
}

a:hover{
  color: var(--link-color-active)
}

a.nuxt-link-exact-active{
  position: relative;
  z-index: 1;
}

a.nuxt-link-exact-active:after{
  content: ' ';
  margin: 0 auto;
  position: absolute;
  transform: translate(-20%, 0%);
  opacity: .25;
  top: 0;
  left: 0;
  bottom: 0;
  width: 150%;
  z-index: -1;
  background-repeat: no-repeat;
  background-image: url('/img/line.svg');
  animation-duration: .15s;
  animation-name: anim-active;
  animation-timing-function: linear;
}

@keyframes anim-active {
  from {width: 0%; opacity: 0; left:-25%}
  to {width: 150%; opacity: .25; left:0}
}
</style>
