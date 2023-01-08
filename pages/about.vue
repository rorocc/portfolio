<template>
  <div >
    <div class="container py-12 grid md:grid-cols-2 grid-cols-none md:grid-rows-none grid-rows-2 leading-loose">
      <div>
        <img src="../assets/img/about/min/me-min.jpeg" class="w-3/4 m-auto my-20" />
        <img src="../assets/img/about/min/sticky_snow-min.png" class="w-1/2 m-auto z-10 ml-6 hidden md:block" />
      </div>
      <div>
        <h1>Yep, <span class="underlined whitespace-nowrap">that's me.</span></h1>
        <p>I'm currently student of the Media Informatics masters program and research assistant at the <a class="inline-link" href="https://www.imis.uni-luebeck.de/de/institut/team/christopher-rock">Institute for Multimedia and Interactive Systems</a> at the University of Lübeck.
          <br>
          <br>
          There, I'm part of the <a class="inline-link" href="https://maridata.org/">MariData</a> research project and responsible for the UI and UX development of a decision support system for ship energy management since 2021.
          <br>
          <br>
          At the same time in 2021, I finished my bachelors degree in Media Informatics in Lübeck. The thesis for that included the human-centered design of a nutritional app, which focused on the comprehensible visualization of the rating of the healthiness of meals.
          <br>
          <br>
          Sometimes I like to get inspired by simply taking walks in nature or getting lost in other forms of creative expression like photography or painting.
          <br>
          <br>
          Oh, and I love <a class="inline-link" href="https://rorocc.github.io/cinnanom">cinnamon buns</a>.
        </p>
        <img src="../assets/img/about/min/sticky_hovedoya-min.png" class="w-1/2 m-auto z-10 mr-0 hidden md:block" />
      </div>
      <div class="block md:hidden">
        <img src="../assets/img/about/min/sticky_snow-min.png" class="w-1/2 m-auto z-10 ml-0" />
        <img src="../assets/img/about/min/sticky_hovedoya-min.png" class="w-1/2 m-auto z-10 mr-0" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://chrisrock.rocks/about'
        }
      ]
    }
  },
}
</script>

<style scoped>
 p{
   @apply pb-4;
 }
</style>
