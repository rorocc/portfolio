<template>
  <a :href="url">
    <div class="workpiece overflow-hidden">
      <div class="grid grid-cols-8 max-h-80 place-items-center" :style="{backgroundColor: bgColor, color: textColor}">
        <div class="col-span-3 h-80 w-full">
          <img :src="imgUrl" class="bottom-0 bg-img"/>
        </div>
        <div class="col-span-5 w-2/3 ml-0">
          <p class="headText">{{ headText }}</p>
          <h1>{{ title }}</h1>
          <span class="description">{{ description }}</span>
        </div>
      </div>
      <div class="bar" :style="{backgroundColor: textColor}" >
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
    url: String
  }
}
</script>

<style scoped>
.headText{
  letter-spacing: 2px;
  @apply uppercase text-sm opacity-50;
}

.description{
  @apply hidden md:block opacity-75 tracking-wide;
}

.bg-img{
  @apply drop-shadow-xl w-auto min-h-full mx-auto;
}

.workpiece{
  @apply rounded-lg drop-shadow-lg m-auto w-full;
}

.bar{
  opacity: .1;
  transition: .25s;
  @apply h-full w-6 absolute right-0 top-0 bottom-0;
}

.workpiece:hover .bar{
  opacity: 1;
}

.workpiece:hover{
  @apply shadow-xl;
}

h1{
  font-weight: 500;
  @apply text-lg md:text-3xl pt-2 pb-4;
}
</style>
