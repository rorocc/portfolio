<template>
  <a :href="url" :class="[isAvailable ? 'cursor-pointer' : 'cursor-not-allowed']">
    <div class="workpiece overflow-hidden" :class="[isAvailable ? 'opacity-100' : 'opacity-50']">
      <div class="grid lg:grid-cols-12 grid-cols-1 lg:h-80 place-items-center lg:gap-4 bg-white " :style="{backgroundColor: bgColor, color: textColor}">
        <div class="lg:col-span-5 col-span-1 h-80 w-full bg-white" :style="{backgroundColor: textColor}">
          <img class="w-full object-cover h-full" :src="require(`~/assets/img/work/${imgUrl}`)" />
        </div>
        <div class="col-span-7 w-full md:px-12 px-8 md:pt-4 md:pb-4 pt-8 pb-12 ml-0">
          <h1 class="py-0 my-0" :style="{color: textColor}">{{ title }}</h1>
          <p>{{ description }}</p>
          <div class="flex flex-wrap gap-2 mt-4">
            <div class="pill whitespace-nowrap" v-for="pill in pills">{{ pill }}</div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "workpiece",
  props: {
    headText: String,
    title: String,
    description: String,
    bgColor: String,
    textColor: String,
    imgUrl: String,
    url: String,
    pills: Array,
    isAvailable: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

.workpiece{
  transition-duration: .15s;
  transition-timing-function: ease-in-out;
  @apply rounded-3xl m-auto w-full;
}

h1{
  font-family: 'PPMori', sans-serif;
  font-weight: 100;
  @apply text-2xl md:text-3xl py-2 md:leading-tight;
}

.pill{
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  font-size: 14px;
  padding: 2px 8px;
  line-break: strict;
  @apply w-fit;
}

</style>
