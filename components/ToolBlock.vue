<template>
  <div class="h-56 relative rounded-xl p-4 bg-white shadow-md overflow-clip">
    <div class="w-full h-4 absolute left-0 right-0 bottom-0" :style="{backgroundColor: color}" />
    <h1 class="font-bold text-lg mb-2">{{ title }}</h1>
    <p class="leading-relaxed">{{ descr }}</p>
    <p class="short" :style="{color: color, opacity: opacity}">{{ short }}</p>
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
    colorText: String,
    opacity: {
      type: Number,
      required: false,
      default: 0.15
    }
  }
}
</script>

<style scoped>

.short{
  bottom: 3%;
  right: 2.5%;
  line-height: 10rem;
  font-size: 10rem;
  @apply absolute;
}

</style>
