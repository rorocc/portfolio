<template>
  <div class="bg-white border border-gray-200 rounded-lg p-6 my-6">
    <p v-if="tagline" class="text-sm opacity-40 tracking-widest uppercase leading-loose">
      {{ tagline }}
    </p>
    <p v-if="headline" class="text-lg font-bold leading-loose">
      {{ headline }}
    </p>
    <p v-if="text" class="text-sm leading-loose">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    tagline: String,
    headline: String,
    text: String
  }
}
</script>

<style scoped>

</style>
