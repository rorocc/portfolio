<template>
    <a :href="url" rel="noopener noreferrer" target="_blank">
      <slot />
    </a>
</template>

<script>
export default {
  name: "WebLink",
  props: {
    url: String
  }
}
</script>

<style scoped>

a{
  text-decoration: none;
  border-bottom: 2px dotted var(--primary-color);
  background-image: url("../../assets/newtab.svg");
  background-size: 12px;
  background-position: center right;
  background-repeat: no-repeat;
  padding-right: 16px;
  @apply text-gray-800;
}

a:hover{
  border-bottom: 2px dotted var(--link-color-active);
}

</style>
