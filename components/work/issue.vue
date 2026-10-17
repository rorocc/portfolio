<template>
  <section
    :id="id"
    :aria-labelledby="`${id}-title`"
    class="bg-gray-50 pt-16 pb-2 leading-loose"
  >
    <div class="column pb-10">
      <span class="label">{{ label }}</span>
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

.label{
  @apply block uppercase tracking-wider font-medium text-sm text-gray-500;
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
