<template>
  <div>
    <div class="bg-purple-600 mb-12">
      <div class="container w-3/4 m-auto">
        <Navbar />
        <div class="py-12">
          <h1 class="mina-title">
            Mobile Interface for Nutrition Awareness
          </h1>
          <h2 class="mina-title">
            Comprehensible rating of meals and their nutrition (Bachelor thesis)
          </h2>
        </div>
      </div>
    </div>
    <div class="container w-3/5 m-auto contentContainer grid grid-cols-12 space-x-4">
      <div class="col-span-8">
        <h1>Overview</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu. Sed velit neque, tincidunt sit amet sem et, pretium sodales turpis. Integer feugiat, ex et pretium ultrices, ipsum tellus bibendum nulla, ut dictum metus purus ut sem.</p>
      </div>
      <div class="col-span-4">
        <h1>About</h1>
        <p class="font-bold">Media informatics - Bachelor thesis</p>
        <p>April - October 2021</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Mina",
  layout: 'project'
}
</script>

<style scoped>
.contentContainer h1{
  @apply text-gray-400 uppercase tracking-widest font-light pb-4;
}

h1.mina-title{
  @apply text-white text-4xl font-bold py-2;
}
h2.mina-title{
  @apply text-white text-xl font-light;
}
</style>
