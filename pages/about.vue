<template>
  <div class="container py-12">
    <h1>About me</h1>
    <div class="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 w-full gap-8">
      <div class="col-span-1 relative rounded">
        <img src="../assets/me.jpeg" class="w-full rounded" />
        <stickynote class="absolute left-0 top-2/3 p-1 w-fit rotate-12">
          <about-dalek class="w-24 p-6 text-lg" />
        </stickynote>
      </div>
      <div class="md:col-span-2 col-span-1 bg-white aboutBlock">
        <p class="max-w-prose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu.
        </p>
      </div>
      <div class="col-span-2 bg-purple-600 aboutBlock">
      a
      </div>
      <div class="col-span-1 bg-purple-600 cinnanom aspect-square text-center aboutBlock relative">
        <div class="mx-auto top-1/2 mt-4">
          <about-bun class="w-1/3 mx-auto" />
          <p>I love cinnamon buns! I rated a lot of them throughout my semester in Oslo and built a webpage for it.</p>
        </div>
        <a href="https://rorocc.github.io/cinnanom" rel="noopener noreferrer" target="_blank">
          <div class="cinnanomBottom absolute bottom-0 left-0 w-full">
            <div class="absolute left-0 right-0 bottom-1/4">
              <p class="inline-block uppercase tracking-wider text-sm">Check it out</p>
              <svg class="ml-2 inline-block chevron" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 4.5L1 8" stroke="#C8986D" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <svg class="w-full" viewBox="0 0 292 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M292 53.4151C292 113.293 242.707 98.3233 214.109 87.4139C185.51 76.5045 136.611 74.142 87.8257 91.4441C39.0404 108.746 1.07298e-05 90.8682 1.97879e-05 48.809C2.88459e-05 6.74983 -2.01347e-05 25.2034 1.01216e-05 9.0825C116.894 -21.432 138.958 37.2941 292 6.77957L292 53.4151Z" fill="#FFF3E8"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
  .aboutBlock{
    @apply rounded p-4 overflow-clip drop-shadow-sm;
  }

  .cinnanom{
    background-color: #ffead7;
    color: #724012;
  }

  .cinnanomBottom .chevron{
    transition-duration: .25s;
  }

  .cinnanomBottom:hover {
    font-weight: bold;
  }

  .cinnanomBottom:hover .chevron{
    transition-duration: .25s;
    transform: translateX(4px);
  }
</style>
