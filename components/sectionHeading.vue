<template>
  <div class="text-left leading-none">
    <span class="uppercase">{{ descr }}</span>
    <h1 class="my-2">{{ heading }}</h1>
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
    @apply tracking-wider;
  }
</style>
