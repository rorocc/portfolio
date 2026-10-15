<template>
  <div class="px-4 md:px-0 my-12">
    <section
      :id="id"
      :aria-labelledby="`${id}-title`"
      class="max-w-prose md:max-w-[calc(65ch+5rem)] mx-auto px-4 md:px-10 py-12 rounded-xl bg-gray-50 leading-loose"
    >
      <span class="label">{{ label }}</span>
      <h2 :id="`${id}-title`" class="text-2xl font-semibold leading-snug mt-2 mb-3">
        {{ title }}
      </h2>
      <slot name="intro" />
      <nav aria-label="Sections of this issue" class="mt-5">
        <ol class="flex flex-wrap gap-x-5">
          <li v-for="step in steps" :key="step.id">
            <a :href="`#${id}-${step.id}`" class="jump">{{ step.title }}</a>
          </li>
        </ol>
      </nav>
      <div
        v-for="(step, index) in steps"
        :id="`${id}-${step.id}`"
        :key="step.id"
        class="mt-9 pt-9 border-t border-gray-200"
      >
        <h3 class="flex items-baseline gap-3 text-xl leading-snug mt-0 mb-2">
          <span class="number">{{ number(index) }}</span>
          <span>{{ step.title }}</span>
        </h3>
        <slot :name="step.id" />
      </div>
    </section>
  </div>
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
.label{
  @apply block uppercase tracking-wider font-medium text-sm text-gray-500;
}

.number{
  font-family: "Inria Serif", serif;
  @apply italic font-normal text-gray-600;
}

.jump{
  min-height: 44px;
  @apply inline-flex items-center text-sm underline decoration-dotted underline-offset-4;
}
</style>
