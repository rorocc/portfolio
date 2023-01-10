<template>
  <div ref="scrollTopButton" class="sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition invisible">
    <div class="text-gray-400 hover:text-blue-400 transition">
      <button @click="scrollToTop" role="button" aria-label="scroll to top of the page">
        <svg viewBox="0 0 115 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 58L57.5 8L107.5 58" stroke="white" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollTopButton",
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton;

      if (window.scrollY > 0) {
        scrollBtn.classList.remove("invisible");
      } else {
        scrollBtn.classList.add("invisible");
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
}
</script>

<style scoped>

button{
  background-color: var(--pink-light);
  @apply aspect-square rounded-full p-3 shadow-lg;
}

button svg{
  @apply w-8;
}

</style>
