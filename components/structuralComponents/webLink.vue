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
  background-size: 12px;
  background-position: center right;
  background-repeat: no-repeat;
  padding-right: 16px;
}

a:hover{
  color: var(--primary-color);
}

</style>
