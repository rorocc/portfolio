<template>
  <div>
    <div class="header bg-ships md:py-32 py-6">
      <div class="container fade-in-left grid md:grid-cols-2 grid-cols-none md:grid-rows-none grid-rows-2 items-center">
        <div class="text-center md:text-left">
          <h1 class="mina-title">
            MariData
          </h1>
          <h2 class="mina-title">
            Comprehensive technologies for ship energy management
          </h2>
        </div>
        <div>
          <img src="../../assets/img/work/mina/header.png" />
        </div>
      </div>
    </div>
    <section class="section-m">
      <div class="bg-gray-100 rounded-3xl shadow-lg py-6 px-12">
        <description-element title="Role" text="UX & UI Design, Design research" />
        <description-element title="Context" text="Media informatics - Bachelor thesis" />
        <description-element title="timespan" text="January 2021 - now" />
        <description-element title="Keywords" text="Workshops, Prototyping, Design documentation" />
        <hr />
        <web-link class="bg-slate-700 rounded-lg p-4" url="https://maridata.org">MariData webpage</web-link>
      </div>
    </section>
  </div>
</template>

<script>
import DescriptionElement from "~/components/work/descriptionElement";
export default {
  name: "maridata",
  components: {DescriptionElement}
}
</script>

<style scoped>
.bg-ships{
  background-image: url("~assets/img/work/maridata/header_bg.png");
  background-repeat: repeat;
  background-size: auto;
  background-blend-mode: difference;
}

.section-m{
  @apply max-w-prose m-auto py-12 md:px-0 px-4;
}

.header{
  color: white;
  background-color: #4C5B63;
}

.header h1{
  color: white;
  @apply text-6xl;
}
</style>
