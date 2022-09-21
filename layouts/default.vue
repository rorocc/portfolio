<template>
  <div>
    <div class="w-full bg-white shadow-custom">
      <Navbar class="w-3/4 m-auto p-8" />
    </div>
    <div class="mx-auto container m-auto">
      <Nuxt />
    </div>
    <div class="w-full bg-white shadow-custom mt-24">
      <Footer />
    </div>

  </div>
</template>

<style scoped>
.shadow-custom{
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
}
</style>
