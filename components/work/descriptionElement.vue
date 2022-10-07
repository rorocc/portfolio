<template>
  <div class="mb-4">
    <h1>{{ title }}</h1>
    <p class="leading-relaxed">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "descriptionElement",
  props: {
    title: String,
    text: String
  }
}
</script>

<style scoped>
h1{
  @apply text-gray-400 uppercase tracking-widest font-light pb-2 text-sm;
}
</style>
