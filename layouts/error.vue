<template>
  <div class="py-24 bg-gray-50 px-8">
    <div class="max-w-prose mx-auto my-16">
      <p class=" md:leading-normal leading-normal md:text-3xl text-2xl md:text-left">
        <b> I don't know what you were looking for, but it's definitely <span class="underlined whitespace-nowrap">not here.</span></b>
        Sorry :(
      </p>
      <p class="my-8 text-xl"><nuxt-link to="/">Can we start all over again? 👉👈 <br><span class="opacity-50 text-base">(navigate to start)</span></nuxt-link></p>
    </div>
  </div>

</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>

</style>
