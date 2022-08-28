<template>
  <nav>
    <div class="mx-auto my-12">
      <div class="flex justify-between">
        <div class="flex">
          <div>
            <a>Chris Ro.:)</a>
          </div>
        </div>
        <div class="flex space-x-16">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/work">Work</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
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
  a.nuxt-link-exact-active {
    font-weight: 800;
  }
</style>
