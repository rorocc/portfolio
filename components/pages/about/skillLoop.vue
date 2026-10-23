<template>
  <div>
    <!-- large screens: the skills sit around the human-centered design loop. The stage is drawn at a fixed
         1280px and scaled to the container, so the pills keep their positions relative to the loop -->
    <div ref="frame" class="loop-frame" @mouseenter="measure" @mousemove="dodge" @mouseleave="settle">
      <div ref="stage" class="loop-stage" :style="{ transform: `scale(${scale})` }">
        <svg class="loop-line" viewBox="0 0 1280 950" aria-hidden="true">
          <g transform="translate(0 -70)">
            <path d="M 583.7 336.5 A 340 190 0 0 1 880.2 353.9" />
            <path d="M 923.1 371.6 A 340 190 0 0 1 670.4 704.3" />
            <path d="M 617.7 699.4 A 340 190 0 0 1 439.5 637.1" />
            <path d="M 843 370 L 880 354 L 861 319" />
            <path d="M 701 679 L 670 704 L 699 733" />
            <!-- the way back from evaluate to understand is optional, so it is dotted -->
            <circle v-for="(dot, index) in returnDots" :key="`return-${index}`" :cx="dot[0]" :cy="dot[1]" r="12" />
            <!-- plan joins the loop from outside and fades in towards its label -->
            <circle v-for="(dot, index) in planDots" :key="`plan-${index}`" :cx="dot[0]" :cy="dot[1]" :r="dot[2]" />
          </g>
        </svg>
        <span v-for="(dot, index) in stepDots" :key="`step-${index}`" class="step-dot" :style="{ left: `${dot[0]}px`, top: `${dot[1]}px` }"></span>
        <span class="step-label plan-label">Plan</span>
        <p class="loop-title">Human-<br>Centered <span class="serif">Design</span></p>
        <div v-for="phase in phases" :key="phase.name" class="phase">
          <h3 class="step-label" :style="{ left: `${phase.x}px`, top: `${phase.y}px` }">{{ phase.name }}</h3>
          <ul v-for="(row, index) in phase.rows" :key="index" class="pill-row" :style="{ left: `${row.x || phase.x}px`, top: `${row.y}px` }">
            <li v-for="pill in row.pills" :key="pill[0]" :class="['pill', row.level]" :style="{ transform: `translate(var(--dodge-x, 0px), var(--dodge-y, 0px)) rotate(${pill[1]}deg)` }">{{ pill[0] }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- smaller screens: the same phases as a simple list -->
    <div class="loop-list">
      <div v-for="phase in phases" :key="phase.name" class="phase">
        <h3 class="step-label">{{ phase.name }}</h3>
        <ul v-for="(row, index) in phase.rows" :key="index" class="pill-row">
          <li v-for="pill in row.pills" :key="pill[0]" :class="['pill', row.level]" :style="{ transform: `rotate(${pill[1]}deg)` }">{{ pill[0] }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skillLoop",
  data() {
    return {
      scale: 0.75,
      // pills: [label, tilt in degrees]; core = what I want to be hired for, method = what I use in that phase
      phases: [
        {
          name: 'Understand the context', x: 560, y: 16,
          rows: [
            { y: 66, level: 'core', pills: [['Quantitative Research', -1], ['User Research', 2]] },
            { y: 127, level: 'method', pills: [['User Interviews', 1], ['Affinity Diagramming', -2]] },
            { y: 189, level: 'tool', pills: [['PostHog', -1]] }
          ]
        },
        {
          name: 'Specify requirements', x: 1110, y: 30,
          rows: [
            { y: 80, level: 'core', pills: [['Web Accessibility', -1]] },
            { y: 141, level: 'method', pills: [['User Stories', 2], ['Kanban', -2]] },
            { y: 189, level: 'method', pills: [['Jobs to Be Done', -1]] },
            { y: 251, level: 'tool', pills: [['FigJam', 2], ['Notion', -2], ['GitHub Issues', 1]] }
          ]
        },
        {
          name: 'Design & build', x: 1020, y: 640,
          rows: [
            { y: 690, level: 'core', pills: [['Prototyping', -1], ['Design Systems', 2]] },
            { y: 751, level: 'method', pills: [['Wireframing', 1], ['Crazy 8s', -2], ['Design Studio', 2]] },
            { y: 799, level: 'method', pills: [['Design Tokens', -1], ['Web Development', 1]] },
            { y: 861, level: 'tool', pills: [['Figma', 3], ['Vue.js', -2], ['Next.js', 1], ['GitHub', -1]] },
            { y: 903, level: 'tool', pills: [['Supabase', 2], ['Xano', -1], ['Claude Code', -2]] }
          ]
        },
        {
          name: 'Evaluate', x: 330, y: 650,
          rows: [
            { y: 700, level: 'core', pills: [['User Testing', -1], ['KPI Measurement', 2]] },
            { y: 761, level: 'method', pills: [['Accessibility Audits', 1], ['Benchmark Testing', -2]] },
            { y: 823, level: 'tool', pills: [['Figma prototypes', 2], ['Lighthouse', -1]] }
          ]
        }
      ],
      // centres of the white step dots on the loop: understand, specify, design, evaluate
      stepDots: [[584, 266], [1019, 380], [870, 610], [440, 567]],
      returnDots: [
        [439.5, 637.1], [407.3, 611.7], [380.7, 580.3], [363.8, 543.4], [360.7, 502.7], [372.7, 463.6],
        [396.0, 429.9], [426.0, 402.5], [460.4, 380.2], [497.3, 362.5], [536.2, 348.5], [575.9, 338.1]
      ],
      planDots: [
        [96.0, 700.0, 3], [135.4, 697.5, 4], [174.1, 690.2, 5], [212.0, 678.0, 6],
        [248.1, 661.0, 7], [281.0, 639.4, 8], [310.1, 612.6, 9], [332.7, 580.3, 10]
      ]
    }
  },
  methods: {
    fit() {
      this.scale = this.$refs.frame.clientWidth / 1280
    },
    // centres of the pills in stage pixels; offsets ignore transforms, so a pill that is still
    // dodging does not shift its own resting point
    measure() {
      this.pills = [...this.$refs.stage.querySelectorAll('.pill')].map((pill) => {
        const row = pill.offsetParent
        return {
          el: pill,
          x: row.offsetLeft - row.offsetWidth / 2 + pill.offsetLeft + pill.offsetWidth / 2,
          y: row.offsetTop + pill.offsetTop + pill.offsetHeight / 2,
          reach: pill.offsetWidth / 2 + 70
        }
      })
    },
    // pills near the cursor lean away from it a little, the closer the cursor the further
    dodge(event) {
      if (this.reducedMotion || !this.pills) return
      const frame = this.$refs.frame.getBoundingClientRect()
      const cursorX = (event.clientX - frame.left) / this.scale
      const cursorY = (event.clientY - frame.top) / this.scale
      this.pills.forEach((pill) => {
        const dx = pill.x - cursorX
        const dy = pill.y - cursorY
        const distance = Math.hypot(dx, dy) || 1
        const push = Math.max(0, 1 - distance / pill.reach) * 12
        this.move(pill.el, dx / distance * push, dy / distance * push)
      })
    },
    settle() {
      if (this.pills) this.pills.forEach((pill) => this.move(pill.el, 0, 0))
    },
    move(el, x, y) {
      this.$gsap.to(el, { '--dodge-x': `${x}px`, '--dodge-y': `${y}px`, duration: 0.6, ease: 'power3.out', overwrite: true })
    }
  },
  mounted() {
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.fit()
    this.observer = new ResizeObserver(this.fit)
    this.observer.observe(this.$refs.frame)
  },
  beforeDestroy() {
    this.observer.disconnect()
  }
}
</script>

<style scoped>
  .loop-frame{
    aspect-ratio: 1280 / 950;
    @apply relative w-full hidden lg:block;
  }

  .loop-stage{
    width: 1280px;
    height: 950px;
    transform-origin: top left;
    @apply absolute left-0 top-0;
  }

  .loop-line{
    fill: var(--primary-color);
    stroke: var(--primary-color);
    stroke-width: 24;
    stroke-linecap: round;
    stroke-linejoin: round;
    @apply absolute inset-0 w-full h-full overflow-visible;
  }

  .loop-line path{
    fill: none;
  }

  .loop-line circle{
    stroke: none;
  }

  .step-dot{
    border: 8px solid var(--primary-color);
    transform: translate(-50%, -50%);
    @apply absolute w-10 h-10 rounded-full bg-white;
  }

  .loop-title{
    left: 440px;
    top: 386px;
    width: 520px;
    color: #36286e;
    letter-spacing: -0.03em;
    font-size: 56px;
    @apply absolute m-0 p-0 text-center font-semibold leading-none;
  }

  .loop-title .serif{
    font-family: "Inria Serif", serif;
    @apply italic font-normal;
  }

  .step-label{
    color: #36286e;
    @apply relative m-0 w-max text-base font-semibold leading-tight;
  }

  .loop-stage .step-label,
  .loop-stage .pill-row{
    transform: translateX(-50%);
    @apply absolute;
  }

  .loop-stage .plan-label{
    left: 70px;
    top: 590px;
    transform: none;
  }

  .pill-row{
    gap: 10px;
    @apply flex m-0 p-0 list-none whitespace-nowrap;
  }

  .pill{
    letter-spacing: -0.01em;
    @apply flex items-center rounded-full m-0 p-0;
  }

  .pill.core{
    background-color: var(--primary-color);
    font-size: 22px;
    height: 51px;
    @apply px-5 font-semibold;
  }

  .pill.method{
    background-color: var(--primary-color);
    font-size: 17px;
    height: 38px;
    @apply px-4 font-medium;
  }

  /* tools are lavender and separated a little more from the skills above */
  .pill.tool{
    background-color: var(--primary-bright);
    font-size: 15px;
    height: 32px;
    @apply px-3.5 font-semibold;
  }

  .loop-list{
    @apply flex flex-col gap-12 lg:hidden;
  }

  /* on small screens each phase is centred: label above, pill rows below */
  .loop-list .step-label{
    @apply mb-4 mx-auto;
  }

  .loop-list .pill-row{
    @apply flex-wrap justify-center mb-2.5 whitespace-normal;
  }

  .loop-list .pill-row:has(.tool){
    @apply mt-4;
  }

  /* on phones the pills shrink a step so the rows do not break into single items */
  @media (max-width: 767px){
    .loop-list .pill.core{
      font-size: 18px;
      height: 44px;
    }

    .loop-list .pill.method{
      font-size: 15px;
      height: 34px;
    }

    .loop-list .pill.tool{
      font-size: 14px;
      height: 30px;
    }
  }
</style>
