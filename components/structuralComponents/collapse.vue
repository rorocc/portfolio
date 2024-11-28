<template>
  <div>
    <button type="button" id="collapsible" ref="collapsible" class="collapsible"> {{ headline }}</button>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      headline: String,
    },
    mounted() {
      //let collapsible = document.getElementById("collapsible");
      this.$refs.collapsible.addEventListener("click", () => {
        this.$refs.collapsible.classList.toggle("active");
        let content = this.$refs.collapsible.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      })
    },
    methods: {
      toggle(){

      }
    }
  }
</script>

<style scoped>
  button.collapsible:after{
    content: '\002B';
    float: right;
    color: rgba(255, 0, 92, 1);
  }

  button.collapsible.active:after{
    content: "\2212";
  }

  .collapsible {
    cursor: pointer;
    width: 100%;
    text-align: left;
    outline: none;
    @apply text-lg p-4 rounded-xl border-gray-200 border;
  }

  .active, .collapsible:hover{
    @apply bg-gray-100;
  }

  .content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    @apply mb-4 px-4 pt-2;
  }
</style>
