<template>
  <div class="ticker-container">
    <div class="ticker-tape">
      <span>{{ text }}</span>
    </div>
    <div class="ticker-tape" aria-hidden="true">
      <span> {{ text }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ticker",
  props: {
    text: String
  }
}
</script>

<style scoped>

  .ticker-container{
    overflow-x: hidden;
    display: flex;
  }

  .ticker-tape{
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    gap: 1rem;

    animation-name: marquee;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-play-state: running;
    animation-direction: normal;
  }

  .ticker-tape span{
    font-family: "Inria Serif", serif;
    font-style: italic;
    @apply md:text-[146pt] text-9xl py-8;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
