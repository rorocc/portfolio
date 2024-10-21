<template>
  <figure class="my-16">
    <img :class="classes" :src="require(`../assets/${src}`)" :alt="alt">
    <figcaption v-if="figcaption" class="opacity-50 text-center pt-4">
      {{ figcaption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "figure-component",
  props: {
    src: String,
    classes: String,
    figcaption: String,
    alt: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

</style>
