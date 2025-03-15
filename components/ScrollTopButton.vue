<template>
  <div ref="scrollTopButton" class="sticky w-full flex justify-end bottom-0 pb-6 pr-6 invisible">
    <div class="cursor-pointer hover:text-blue-400 transition">
      <button class="scrollTopButton no-select" @click="scrollToTop" role="button" aria-label="scroll to top of the page">
        Back to Top
        <svg viewBox="0 0 115 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 58L57.5 8L107.5 58" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollTopButton",
  props:{
    color: {
      type: String,
      default: ""
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  },

  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton

      if (window.scrollY > 0) {
        scrollBtn.classList.remove("invisible")
      } else {
        scrollBtn.classList.add("invisible")
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" })
    },
  },
}
</script>

<style scoped>

button{
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  font-weight: 400;
  @apply rounded-3xl py-2 px-3 flex border border-gray-100 text-gray-600 stroke-gray-600 items-center gap-2;
}

button:hover{
  @apply bg-gray-100 border-gray-200;
}

button svg{
  @apply w-4;
}

</style>
