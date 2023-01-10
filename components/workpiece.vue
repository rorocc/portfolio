<template>
  <a :href="url" :class="[isAvailable ? 'cursor-pointer' : 'cursor-default']">
    <div class="workpiece overflow-hidden" :class="[isAvailable ? 'opacity-100' : 'opacity-50']">
      <div class="grid lg:grid-cols-12 grid-cols-1 lg:h-96 place-items-center lg:gap-4" :style="{backgroundColor: bgColor, color: textColor}">
        <div class="lg:col-span-5 col-span-1 h-96 w-full" >
          <img class="w-full object-cover h-full" :src="require(`~/assets/img/work/${imgUrl}`)" />
        </div>
        <div class="col-span-7 w-2/3 ml-0 py-4">
          <p class="headText">{{ headText }}</p>
          <h1>{{ title }}</h1>
          <div class="bottom-0 w-full mt-8">
            <hr class="my-4" :style="{borderColor: textColor, opacity: .25}" />
            <div v-if="isAvailable">
              <span>View case study</span>
              <span class="chevron float-right">
                <img src="~assets/img/chevron_right.svg" class="h-8" />
              </span>
            </div>
            <div v-else >
              <span>Case study available soon</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bar hidden lg:block" :style="{backgroundColor: textColor}" >
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
    isAvailable: {
      type: Boolean,
      default: true
    }
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

.opacity-100:hover .bar{
  opacity: 1;
}

.opacity-100:hover{
  @apply shadow-xl;
}

h1{
  font-family: 'PPMori', sans-serif;
  font-weight: 100;
  @apply text-2xl md:text-3xl pt-2 pb-4 md:leading-normal;
}
</style>
