<template>
  <div class="h-48 relative rounded-xl p-4" :style="{backgroundColor: color, color: colorText}">
    <h1 class="font-bold text-lg mb-2">{{ title }}</h1>
    <p class="leading-relaxed">{{ descr }}</p>
    <p class="short">{{ short }}</p>
  </div>
</template>

<script>
export default {
  name: "ToolBlock",
  props: {
    title: String,
    descr: String,
    short: String,
    color: String,
    colorText: String
  }
}
</script>

<style scoped>

.short{
  bottom: 0;
  right: 2.5%;
  line-height: 10rem;
  font-size: 10rem;
  opacity: .15;
  @apply absolute;
}

</style>
