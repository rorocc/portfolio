<template>
  <div class="dalek relative w-fit">
    <svg viewBox="0 0 472 540" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M144 278.753L152 307H178.5L204.5 288.922L207 256.156L191.5 220H173.5" stroke="black" stroke-width="9"/>
      <path d="M174.921 175.096L139 192.683L141.993 175.096L174.921 158.077H243.271L281.188 152.404L319.105 149L337.066 171.692L339.061 175.096L367 193.817L364.505 208L315.613 165.452L261.232 175.096H174.921Z" fill="black"/>
      <path d="M106.037 371.26L82 454.09L128.572 486.207L172.14 504.238L225.222 511H280.808L332.888 486.207H391.98L405 454.09L397.989 422.536L377.457 341.396L366.44 190.387L342.403 174.046L319.367 147L242.248 157.706H172.14L141.091 174.046L128.572 236.591L113.048 327.873L106.037 371.26Z" stroke="black" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M140 101.052V163.471V176.088L222.682 152.846H316.389L350.965 187.376L367 197L362.991 146.206V113.004L355.475 81.7947L327.914 53.2412L297.347 30H245.232H195.121L166.558 62.5377L140 101.052Z" stroke="black" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M54.5 133V154.664L39 173.812L23 182L5 171L9 145.5L23 125L44.5 118.5L54.5 133Z" fill="black"/>
      <path d="M176 249.841L149.5 233.5L125 206L88.5 187.329L54.5 154.664M54.5 154.664V133L44.5 118.5L23 125L9 145.5L5 171L23 182L39 173.812M54.5 154.664L39 173.812M39 173.812L69.5 194L115.5 224L140.5 255.5L169 278" stroke="black" stroke-width="9" stroke-linecap="square" stroke-linejoin="round"/>
      <path d="M279.955 237.998L319 224.5L355 217L394 205.5L431 198L464.04 185.139" stroke="black" stroke-width="9"/>
      <path d="M295.635 247.12L346.5 233L415.5 216L450 205" stroke="black" stroke-width="5"/>
      <path d="M288.961 262.414L315 258L379.5 238L446.5 223L469.859 211.42" stroke="black" stroke-width="9"/>
      <path d="M58.0164 422H90.0566L81.0453 451.781L126.603 487.743L171.158 504.038L227.73 511.343L279.795 512.467L337.367 487.743L392.436 484.933L403.45 451.781L398.444 422L443 439.419V472.571L432.487 502.914L398.444 524.267L347.38 516.962L301.823 540H225.226L163.649 535.505L93.0604 511.343L45 478.752V445.6L58.0164 422Z" fill="black"/>
      <path d="M153.061 43.5748L178.278 76L199.461 66.4961L204 49.7244L169.704 5H156.087L146 18.4173L153.061 43.5748Z" fill="black"/>
      <path d="M325.821 17.7953L304.375 53.5529L318.074 73.8942L333.729 74.3648L363.437 25.5693L359.904 10.8806L345.705 3.54048L325.821 17.7953Z" fill="black"/>
      <path d="M176.199 114.843L189.397 96.0798L209.293 102.799L216.97 120.697L214.84 139.504L201.212 147.04L188.422 142.72L178.838 127.345L176.199 114.843Z" fill="black"/>
      <path d="M201 119.5L213.5 117.5L227 105H239.5L253.5 96.5" stroke="black" stroke-width="9"/>
      <path d="M121 387L151 377L170 399.5V417.5L151 432.5H129L121 413V387Z" fill="#121212"/>
      <path d="M220 429.5L246 422L269 442V460L250 475H228L220 455.5V429.5Z" fill="#121212"/>
      <path d="M313 386L338.5 375L362 398.5V416.5L342.5 431.5H321L313 412V386Z" fill="#121212"/>
      <path d="M217 351L247 329L266 363.5V381.5L247 388L225 396.5L217 377V351Z" fill="#121212"/>
      <path d="M307 295L333.5 292L356 307.5V325.5L337 344L316.5 330L297 320.5L307 295Z" fill="#121212"/>
    </svg>
    <p>Iterate!</p>
  </div>
</template>

<script>
export default {
  name: "dalek"
}
</script>

<style scoped>
  svg{
    @apply w-full;
  }

  .dalek p{
    @apply absolute bottom-0 right-0;
    font-family: IndieFlower, "Comic Sans MS", sans-serif;
    animation-name: shake;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
    animation-duration: .75s;
  }

  @keyframes shake {
    0% {transform: skewX(-5deg) rotate(-15deg)}
    50% {transform: skewX(0deg) rotate(-15deg)}
  }
</style>
