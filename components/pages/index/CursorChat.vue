<template>
  <div class="chatCursor" :style="{animationDuration: duration + 's'}">
    <img src="../../../assets/cursor.svg" class="w-8 -translate-x-7" />
    <div class="chat">
      <span class="font-bold">{{ name }}</span> <br/>
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CursorChat",
  props: {
    duration: {
      type: String,
      default: "0",
    },
    name: {
      type: String,
      default: "Chris Ro."
    },
    text: String
  }
}
</script>

<style scoped>
  .chat{
    background-color: var(--pink-light);
    @apply text-sm w-40 px-3 py-3 rounded-lg;
  }

  .chatCursor{
    animation-name: chatCursor;
    animation-timing-function: ease-in-out;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
  }

  @keyframes chatCursor {
    0%{ transform: translate(10%, 0)}
    10%{ transform: translate(30%, 15%)}
    20%{ transform: translate(30%, 15%)}
    30%{ transform: translate(15%, 50%)}
    40%{ transform: translate(15%, 50%)}
    50%{ transform: translate(25%, 100%)}
    60%{ transform: translate(25%, 100%)}
    70%{ transform: translate(55%, 20%)}
    80%{ transform: translate(55%, 20%)}
    90%{ transform: translate(20%, 55%)}
    100%{ transform: translate(10%, 0%)}
  }
</style>
