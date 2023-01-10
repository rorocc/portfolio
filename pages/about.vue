<template>
  <div >
    <div class="container py-12 grid md:grid-cols-2 grid-cols-none md:grid-rows-none leading-loose">
      <div>
        <img src="../assets/img/about/min/me-min.jpeg" class="w-3/4 m-auto my-20 fade-in-left" />
        <img src="../assets/img/about/min/sticky_snow-min.png" class="w-1/2 m-auto z-10 ml-6 hidden md:block" />
      </div>
      <div>
        <h1>Yep, <span class="underlined whitespace-nowrap">that's me</span></h1>
        <p>I'm currently student of the Media Informatics masters program and research assistant at the <web-link url="https://www.imis.uni-luebeck.de/de/institut/team/christopher-rock">Institute for Multimedia and Interactive Systems</web-link> at the University of Lübeck.
          <br>
          <br>
          There, I'm part of the <web-link url="https://maridata.org/">MariData</web-link> research project and responsible for the UI and UX development of a decision support system for ship energy management since 2021.
          <br>
          <br>
          At the same time in 2021, I finished my bachelors degree in Media Informatics in Lübeck. The thesis for that included the human-centered design of a nutritional app, which focused on the comprehensible visualization of the rating of the healthiness of meals.
          <br>
          <br>
          Sometimes I like to get inspired by simply taking walks in nature or getting lost in other forms of creative expression like photography or painting.
          <br>
          <br>
          Oh, and I love <web-link url="https://rorocc.github.io/cinnanom">cinnamon buns</web-link>.
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
