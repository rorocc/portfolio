<template>
  <div>
    <div class="header mb-12 h-96">
      <div class="container w-3/4 m-auto">
        <div class="py-12">
          <h1 class="mina-title">
            MINA
          </h1>
          <h2 class="mina-title">
            Mobile Interface for Nutrition Awareness
          </h2>
        </div>
      </div>
    </div>
    <section class="contentContainer container w-3/4 m-auto ">
      <div class="section flex justify-between mx-auto">
        <div class="w-3/5 shortDescription">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu. </p>
          <p>Sed velit neque, tincidunt sit amet sem et, pretium sodales turpis. Integer feugiat, ex et pretium ultrices, ipsum tellus bibendum nulla, ut dictum metus purus ut sem.</p>
        </div>
        <div class="bg-white rounded-3xl py-6 px-12 w-1/3">
          <description-element title="Role" text="UX & Visual Design, Researcher, Developer" />
          <description-element title="Context" text="Media informatics - Bachelor thesis" />
          <description-element title="timespan" text="April - October 2021" />
          <description-element title="Keywords" text="Design research, Workshops, Prototyping, Frontend development, User tests, Evaluation" />
        </div>
      </div>
    </section>
    <section class="bg-lime-200 text-center py-28">
      <p class="text-3xl mx-auto italic font-serif">1.9 billion adults worldwide were overweight in 2016, with 650 million obese</p>
      <p>— <a href="https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight">World Health Organization</a></p>
    </section>
    <section class="sectionShort">
      <h1>Background & Motivation</h1>
    </section>
    <section class="sectionShort">
      <h1>The Human-centered design process</h1>
    </section>
  </div>
</template>

<script>
import DescriptionElement from "~/components/work/descriptionElement"
export default {
  name: "Mina",
  components: { DescriptionElement },
  layout: 'default'
}
</script>

<style scoped>
.sectionShort{
  @apply w-3/4 mx-auto;
}

section h1{
  @apply text-2xl;
}

.shortDescription p{
  @apply text-2xl leading-relaxed;
}

p{
  @apply leading-8;
}

.header{
  background-color: #D2FF77FF;
}

.section{
  @apply mb-20;
}

h1.mina-title{
  @apply text-4xl font-bold py-2;
}
h2.mina-title{
  @apply text-xl font-light;
}
</style>
