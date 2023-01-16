<template>
  <div>
    <p class="title">{{ title }}</p>
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
.title{
  @apply text-black  uppercase tracking-widest font-normal text-sm;
}
</style>
