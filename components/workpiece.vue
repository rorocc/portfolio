<template>
  <a :href="url">
    <div class="workpiece overflow-hidden">
      <div class="grid lg:grid-cols-12 grid-cols-1 lg:h-96 place-items-center gap-4" :style="{backgroundColor: bgColor, color: textColor}">
        <div class="col-span-5 h-96 bg-red-500 w-full" >
          <img class="w-full object-cover h-full" :src="imgUrl" />
        </div>
        <div class="col-span-7 w-2/3 ml-0">
          <p class="headText">{{ headText }}</p>
          <h1>{{ title }}</h1>
          <div class="bottom-0 w-full mt-8">
            <hr class="my-4" :style="{borderColor: textColor, opacity: .25}" />
            <span>View case study</span>
            <span class="chevron float-right">
              <img src="/img/chevron_right.svg" class="h-8" />
            </span>
          </div>
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
.chevron{
  transform: translateX(0px);
  transition-duration: .25s;
}

a:hover .chevron{
  transform: translateX(10px);
  transition-duration: .25s;
}

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
