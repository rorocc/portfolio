<template>
  <div ref="scrollTopButton" class="sticky w-full flex justify-end bottom-0 pb-6 pr-6 invisible">
    <div class="cursor-pointer text-gray-400 hover:text-blue-400 transition">
      <button class="scrollTopButton" @click="scrollToTop" role="button" aria-label="scroll to top of the page">
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
  props:{
    color: {
      type: String,
      default: ""
    }
  },
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
  background-color: rgba(155, 144, 200, 0.64);
  backdrop-filter: blur(20px);
  @apply aspect-square rounded-full p-3;
}

button:hover{
  background-color: var(--primary-bright);
}

button:hover svg path{
  stroke: var(--primary-color);
}

button svg{
  @apply w-8;
}

</style>
