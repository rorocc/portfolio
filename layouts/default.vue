<template>
  <div>
    <div class="w-full bg-white shadow-custom relative">
      <Navbar class="container m-auto p-10" />
      <div id="pinkBar"></div>
    </div>
    <div class="mx-auto m-auto">
      <Nuxt />
    </div>
    <div class="w-full bg-white shadow-custom">
      <Footer />
    </div>

  </div>
</template>

<style scoped>
#pinkBar{
  background-color: #F0DAFF;
  @apply absolute bottom-0 w-full h-4;
}
</style>
