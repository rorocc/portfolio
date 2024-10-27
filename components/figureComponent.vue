<template>
  <figure class="my-16">
    <img :class="classes" :src="require(`../assets/${src}`)" :alt="alt">
    <figcaption v-if="figcaption" class="opacity-50 text-center pt-4">
      {{ figcaption }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "figure-component",
  props: {
    src: String,
    classes: String,
    figcaption: String,
    alt: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate(){
      this.$gsap.to('figure', {
        opacity: 1,
        x: 0,
        ease: 'Power1.easeInOut',
        duration: 0.5,
        scrollTrigger: {
          trigger: 'figure',
          scrub: false,
          markers: false
        }
      })
    }
  }
}
</script>

<style scoped>
figure{
  position: relative;
  opacity: 0;
  transform: translateX(-5vw);
}
</style>
