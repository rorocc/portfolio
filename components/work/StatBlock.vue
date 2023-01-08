<template>
  <div class="bg-gray-50 bg-bubbles drop-shadow-md rounded-3xl flex w-full items-center p-4 space-x-6 mx-auto my-12">
    <div class="h-36 w-36 relative w-fit text-center">
      <span class="bubbleInt w-full left-0 h-full items-center justify-center flex top-0 absolute">{{ bubbleInt }}</span>
      <svg class="h-full" viewBox="0 0 934 934" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_75_389)">
          <rect x="67" y="51" width="800" height="800" rx="400" fill="white"/>
          <rect x="45.5" y="29.5" width="843" height="843" rx="421.5" stroke="#F9F9F9" stroke-width="43"/>
        </g>
        <defs>
          <filter id="filter0_d_75_389" x="0" y="0" width="934" height="934" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="16"/>
            <feGaussianBlur stdDeviation="12"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_75_389"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_75_389" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
    <div class="py-4">
      <h2 class="mt-0">{{ heading }}</h2>
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
  h2, .bubbleInt{
    color: #505c96;
  }

  .bubbleInt{
    @apply font-bold text-5xl;
  }
</style>
