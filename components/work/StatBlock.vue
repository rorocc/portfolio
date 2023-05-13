<template>
  <div class="bg-gray-50 border border-gray-200 rounded-3xl flex w-full items-center p-4 space-x-6 mx-auto my-12">
    <div class="h-36 w-36 relative w-fit text-center">
      <span class="bubbleInt w-full left-0 h-full items-center justify-center flex top-0 absolute">{{ bubbleInt }}</span>
      <svg class="h-full" viewBox="0 0 934 934" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="67" y="51" width="800" height="800" rx="400" fill="white"/>
          <rect x="45.5" y="29.5" width="843" height="843" rx="421.5" stroke="#F9F9F9" stroke-width="43"/>
        </g>
      </svg>
    </div>
    <div class="py-4">
      <p class="mt-0 font-bold text-lg">{{ heading }}</p>
      <p class="max-w-prose leading-loose">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatBlock",
  props: {
    bubbleInt: Number,
    bubbleText: String,
    heading: String,
    description: String
  }
}
</script>

<style scoped>
   .bubbleInt{
    color: var(--primary-color);
  }

  .bubbleInt{
    @apply font-bold text-5xl;
  }
</style>
