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
  text-decoration: underline;
  background-image: url("../../assets/newtab.svg");
  background-position: center right;
  background-repeat: no-repeat;
  padding-right: 22px;
}

</style>
