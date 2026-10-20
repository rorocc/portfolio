<template>
  <section
    :id="id"
    :aria-labelledby="`${id}-title`"
    class="bg-gray-50 pt-16 pb-2 leading-loose"
  >
    <div class="column relative pb-10">
      <span class="label">{{ label }}</span>
      <!-- hand-drawn arrow from the label down to the headline, in the margin left of the column -->
      <svg class="label-arrow" viewBox="0 0 48 64" aria-hidden="true">
        <path d="M42 8C18 6 6 30 12 44c4 8 16 10 30 9" />
        <path d="M34 46l8 7-9 6" />
      </svg>
      <h2 :id="`${id}-title`" class="text-3xl font-semibold leading-tight mt-2 mb-4">
        {{ title }}
      </h2>
      <slot name="intro" />
    </div>
    <div
      v-for="(step, index) in steps"
      :id="`${id}-${step.id}`"
      :key="step.id"
      class="step"
    >
      <div class="column">
        <div class="border-t border-gray-200 pt-12 pb-14">
          <span class="number">{{ number(index) }}</span>
          <h3 class="text-2xl font-semibold leading-snug mt-2 mb-3">
            {{ step.title }}
          </h3>
          <slot :name="step.id" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "issue",
  props: {
    id: String,
    label: String,
    title: String,
    steps: Array
  },
  methods: {
    number(index) {
      return String(index + 1).padStart(2, "0")
    }
  }
}
</script>

<style scoped>
/* text stays in the same column as the rest of the case page */
.column{
  @apply max-w-prose mx-auto px-4 md:px-0;
}

/* handwritten label, slightly tilted, in ÜBERSTUNDE orange */
.label{
  font-family: "Gochi Hand", cursive;
  font-size: 30px;
  line-height: 38px;
  color: #E94F11;
  transform: rotate(-7deg);
  transform-origin: left bottom;
  @apply inline-block;
}

.label-arrow{
  top: 12px;
  left: -57px;
  fill: none;
  stroke: #E94F11;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  @apply absolute hidden md:block w-12 h-16;
}

.number{
  font-family: "Inria Serif", serif;
  @apply block italic font-normal text-3xl leading-none text-gray-500;
}

/* lets a figure inside a step grow wider than the text column */
.step ::v-deep .breakout{
  width: min(64rem, calc(100vw - 2rem));
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
