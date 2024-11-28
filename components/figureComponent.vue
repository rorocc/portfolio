<template>
  <figure class="my-12">
    <img ref="img" :src="require(`../assets/${src}`)" :class="classes" :alt="alt">
    <figcaption v-if="figcaption" class="opacity-50 text-center pt-4 max-w-prose mx-auto">
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
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
