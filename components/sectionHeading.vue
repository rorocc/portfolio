<template>
  <div class="my-12 text-center leading-none">
    <span>{{ descr }}</span>
    <h2 class="my-2">{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  name: "sectionHeading",
  props: {
    heading: String,
    descr: String
  }
}
</script>

<style scoped>
  span{
    color: var(--subheading-gray);
    @apply tracking-widest;
  }
</style>
