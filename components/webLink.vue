<template>
    <a :href="url" rel="noopener noreferrer" target="_blank">{{ text }} <span> [>]</span></a>
</template>

<script>
export default {
  name: "WebLink",
  props: {
    url: String,
    text: String
  }
}
</script>

<style scoped>

a{
  color: #af53ff;
}

</style>
