<template>
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1318_550)">
      <rect width="80" height="80" rx="40" fill="#EE0157"/>
      <path d="M-27 36.7216C-14.7334 28.0683 57.0745 -27.2893 74.4496 0.958523C91.8247 29.2063 2.17781 56.8679 20.5123 95.189C38.8467 133.51 100.088 82.9285 112.184 70.8319C135.799 47.217 121.715 7.93559 156.901 9.43286" stroke="white" stroke-opacity="0.37" stroke-width="21.4257" stroke-linecap="round"/>
      <text fill="white" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="64" font-weight="bold" letter-spacing="0em"><tspan x="24.3438" y="63.7727">{{ number }}</tspan></text>
    </g>
    <defs>
      <clipPath id="clip0_1318_550">
        <rect width="80" height="80" rx="40" fill="white"/>
      </clipPath>
    </defs>
  </svg>
</template>

<script>
  export default {
    props: {
      number: Number
    }
  }
</script>


<style scoped>

</style>
