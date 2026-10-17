<template>
  <ul class="flex flex-wrap gap-2" aria-label="Tools used">
    <li v-for="tool in tools" :key="tool" class="tool">
      <img
        v-if="logos[tool]"
        :src="logos[tool].src"
        :alt="tool"
        :title="tool"
        :style="{ height: logos[tool].height }"
        class="w-auto"
      >
      <span v-else>{{ tool }}</span>
    </li>
  </ul>
</template>

<script>
// tool name -> logo file and display height; heights differ so the wordmarks look equally large
const logos = {
  "Figma Make": { src: require("~/assets/img/logos/figma-make.png"), height: "22px" },
  "Claude Code": { src: require("~/assets/img/logos/claude.svg"), height: "20px" },
  "Nordcraft": { src: require("~/assets/img/logos/nordcraft.svg"), height: "18px" },
  "Xano": { src: require("~/assets/img/logos/xano.svg"), height: "18px" },
  "Stripe": { src: require("~/assets/img/logos/stripe.svg"), height: "26px" }
}

export default {
  name: "toolList",
  props: {
    tools: Array
  },
  data() {
    return {
      logos
    }
  }
}
</script>

<style scoped>
.tool{
  @apply inline-flex items-center h-11 px-5 rounded-full border border-gray-200 bg-white text-sm font-normal;
}
</style>
