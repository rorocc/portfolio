<template>
  <div>
    <div class="w-full bg-white shadow-custom relative">
      <div id="mobileWarning">
        <p class="my-auto">
          Since this page is work in progress, it has not yet been optimized for mobile screens. I am aware of this and will fix it soon™.
        </p>
      </div>
      <Navbar class="container m-auto p-4" />
      <div id="pinkBar"></div>
    </div>
    <div class="mx-auto m-auto">
      <Nuxt />
    </div>
    <div class="w-full bg-white shadow-custom">
      <Footer />
    </div>
    <scroll-top-button />
  </div>
</template>

<style scoped>
#mobileWarning{
  background-color: var(--link-color-active);
  @apply w-full p-10 text-center text-white block hidden;
}

#pinkBar{
  background-color: var(--pink-light);
  @apply absolute bottom-0 w-full h-4;
}
</style>
