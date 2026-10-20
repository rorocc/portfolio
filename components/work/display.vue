<template>
  <div>
    <div class="header md:pb-16 pb-4" :style="{backgroundColor: colorLight}">
      <div class="container m-auto fade-in-left mt-6 mb-10">
        <h1 class="display-font work-title my-0" :style="{color: color}">
          {{ title }}
        </h1>
        <h2 class="work-subtitle">
          {{ subtitle }}
        </h2>
      </div>
      <div class="md:px-12 px-2 my-12">
        <img :src="require(`assets/img/${imgUrl}`)" />
      </div>
      <div class="container m-auto flex items-start justify-between my-16 md:flex-nowrap flex-wrap gap-6">
        <div class="md:w-1/2">
          <p class="description">
            {{ description }}
          </p>
        </div>
        <div class="flex flex-col gap-6">
          <description-element v-if="role" title="Role" :text="role" />
          <description-element v-if="timespan" title="Timespan" :text="timespan" />
          <description-element v-if="context" title="Context" :text="context" />
          <description-element v-if="keywords" title="Keywords" :text="keywords" />
        </div>
      </div>
      <!-- optional extra content below description and facts, e.g. key results -->
      <div v-if="$slots.default" class="container m-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import DescriptionElement from "~/components/work/descriptionElement";
export default {
  name: "display",
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
    keywords: String,
    imgUrl: {
      type: String,
      default: "work/maridata/showcase-display.png"
    }
  }
}
</script>

<style scoped>

  /* pull the colored hero up behind the floating navbar, content stays where it was */
  .header{
    margin-top: calc(-1 * var(--nav-height));
    padding-top: calc(var(--nav-height) + 1rem);
  }

  @screen md{
    .header{
      padding-top: calc(var(--nav-height) + 4rem);
    }
  }

 p.description{
    @apply md:leading-loose md:text-xl text-lg;
  }

  .work-title{
    text-wrap: balance;
    @apply text-4xl md:text-5xl lg:text-6xl leading-[1.1];
  }

  .work-subtitle{
    @apply opacity-50 leading-relaxed text-xl md:text-2xl max-w-2xl mt-4;
  }
</style>
