<template>
  <div class="stickynote">
    <div class="opacity-60">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Stickynote"
}
</script>

<style scoped>
  .stickynote{
    background: rgb(255,245,129);
    background: linear-gradient(180deg, rgba(255,245,129,1) 90%, rgba(227,217,115,1) 100%);
    aspect-ratio: 1/1;
    @apply drop-shadow;
  }
</style>
