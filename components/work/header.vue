<template>
  <div>
    <div class="header">
      <div class="grid lg:grid-cols-2 grid-cols-1 items-center header-grid place-items-center">
        <div class="text-left grid-first justify-center" :style="{backgroundColor: color}">
          <div class="fade-in-left">
            <span class="work-title" :style="{color: textColor}">
              {{ title }}
            </span>
            <span class="work-subtitle" :style="{color: textColor}">
              {{ subtitle }}
            </span>
          </div>
        </div>
        <div class="grid-second bg-mina-light w-full" :style="{backgroundColor: colorLight}">
          <p class="description">
            {{ description }}
          </p>
          <hr class="my-12 border-gray-200" />
          <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
            <description-element v-if="role"  title="Role" :text="role"/>
            <description-element v-if="timespan" title="Timespan" :text="timespan"/>
            <description-element v-if="context" title="Context" :text="context"/>
            <description-element v-if="keywords" title="Keywords" :text="keywords" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DescriptionElement from "~/components/work/descriptionElement";
export default {
  name: "header",
  components: {DescriptionElement},
  props: {
    title: String,
    subtitle: String,
    description: String,
    color: String,
    colorLight: String,
    textColor: {
      default: '#282828',
      type: String
    },
    role: String,
    timespan: String,
    context: String,
    keywords: String
  }
}
</script>

<style scoped>
  .header-grid{
    height: 600px;
    @apply h-fit;
  }

  .header .grid-first{
    @apply h-full px-12 pt-24 pb-12;
  }

  .header .grid-second{
    @apply h-full font-light px-12 pt-24 pb-24 leading-relaxed;
  }

  .header .grid-second p.description{
    @apply leading-loose text-2xl;
  }

  .work-title, .work-subtitle{
    font-family: 'PPMori', sans-serif;
    @apply text-4xl md:text-6xl;
  }


  .work-title{
    @apply m-0 font-bold;
  }

  .work-subtitle{
    @apply opacity-50 leading-normal;
  }
</style>
