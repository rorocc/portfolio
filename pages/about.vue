<template>
  <div class="bg-pinkLight">
    <div class="container py-12">
      <h1>About me</h1>
      <div class="aboutGrid">
        <div class="md:col-span-1 col-span-2 relative rounded">
          <img src="../assets/me.jpeg" class="rounded" />
          <stickynote class="absolute left-0 top-2/3 p-1 w-fit rotate-12">
            <about-dalek class="w-24 p-6 text-lg" />
          </stickynote>
        </div>
        <div class="md:col-span-1 col-span-2 bg-white aboutBlock w-full aspect-square leading-relaxed">
          <p>I'm a media informatics student, aspiring to become a UX Designer.</p>
          <br/><p>Through some projects, I also have some background knowledge and skills in frontend web development. Therefore, I can assess whether designs are feasible to implement, for example.</p>
          <br/><p class="font-semibold uppercase opacity-20 tracking-wider">wireframing • workshops • prototyping • user testing • human-centered design</p>
        </div>
        <div class="md:col-span-1 col-span-2 p-6 bg-pinkDark aspect-square display-font text-white lg:text-2xl rounded text-xl min-w-fit">
          <img src="~assets/img/about/uzl.svg"  class="w-1/4" />
          <div class="my-auto py-4">
            <p class="mb-4">Currently a master student at the University of Lübeck.</p>
            <p class="opacity-40">Including one semester at the University of Oslo.</p>
          </div>
        </div>
      </div>
      <section id="interests">
        <h2>Interests</h2>
        <div class="aboutGrid">
          <div class="md:col-span-1 col-span-2 bg-purple-600 cinnanom aspect-square text-center aboutBlock relative">
            <a href="https://rorocc.github.io/cinnanom" rel="noopener noreferrer" target="_blank">
              <div class="mx-auto top-1/2 mt-4">
                <about-bun class="w-1/3 mx-auto" />
                <p>I love cinnamon buns! I rated a lot of them throughout my semester in Oslo and built a webpage for it.</p>
              </div>
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

          <div class="col-span-2 md:col-span-1 aurora">
            <div class="bg-teal-700 text-white font-bold w-fit py-2 px-4 tracking-wide uppercase"> I like taking photos 📷</div>
          </div>
          <div class="col-span-2 md:col-span-1 spooky relative">
            <about-nadu class="absolute h-1/2 -bottom-8 -right-12"/>
          </div>
        </div>
      </section>
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

  section{
    @apply my-16;
  }

  section h2{
    @apply my-6;
  }

  .aboutGrid{
    @apply grid md:grid-cols-3 grid-cols-1 w-full gap-0 md:gap-8 md:space-y-0 space-y-4;
  }

  .aboutBlock{
    @apply rounded p-4 overflow-clip drop-shadow-sm;
  }

  .cinnanom{
    background-color: #ffead7;
    color: #724012;
  }

  .cinnanom .cinnanomBottom .chevron{
    transition-duration: .25s;
  }

  .cinnanom:hover .cinnanomBottom{
    font-weight: bold;
  }

  .cinnanom:hover .cinnanomBottom .chevron{
    transition-duration: .25s;
    transform: translateX(4px);
  }

  .aurora{
    background-image: url("~assets/img/about/aurora.jpg");
    background-size: cover;
    background-position: left;
    @apply aspect-square rounded p-4 drop-shadow-sm;
  }

  .spooky{
    background-image: url("~assets/img/about/spooky.jpg");
    background-size: cover;
    background-position: center;
    @apply aspect-square rounded p-4 drop-shadow-sm;
  }
</style>
