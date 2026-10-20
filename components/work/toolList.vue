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
      <span v-else :class="{ wordmark: wordmarks.includes(tool) }">{{ tool }}</span>
    </li>
  </ul>
</template>

<script>
// tool name -> logo file and display height; heights differ so the wordmarks look equally large
const logos = {
  "Figma": { src: require("~/assets/img/logos/figma.svg"), height: "24px" },
  "Figma Make": { src: require("~/assets/img/logos/figma-make.png"), height: "22px" },
  "Mobbin": { src: require("~/assets/img/logos/mobbin.png"), height: "18px" },
  "Claude Code": { src: require("~/assets/img/logos/claude.svg"), height: "20px" },
  "Nordcraft": { src: require("~/assets/img/logos/nordcraft.svg"), height: "18px" },
  "Xano": { src: require("~/assets/img/logos/xano.svg"), height: "18px" },
  "Stripe": { src: require("~/assets/img/logos/stripe.svg"), height: "26px" }
}

// tools without a logo that are set as a plain wordmark instead
const wordmarks = ["Human Brainpower"]

export default {
  name: "toolList",
  props: {
    tools: Array
  },
  data() {
    return {
      logos,
      wordmarks
    }
  }
}
</script>

<style scoped>
.tool{
  @apply inline-flex items-center h-11 px-5 rounded-full border border-gray-200 bg-white text-sm font-normal;
}

.wordmark{
  font-family: Arial, Helvetica, sans-serif;
  @apply text-xl text-black;
}
</style>
