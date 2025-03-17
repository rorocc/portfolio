<template>
  <div class="w-full">
    <work-display
      color="#4C5B63"
      color-light="rgba(76, 91, 99, 0.15)"
      text-color="#FFFFFFFF"
      title="MariData"
      imgUrl="aid/header_texture.jpeg"
      subtitle="Comprehensive technologies for ship energy management"
      description="In the MariData project, a future-oriented energy management and decision support system based on rational methods is to be developed, taking into account current operational status data as well as geoinformation."
      role="UX & UI Design, Design Research"
      context="Funded research project"
      timespan="December 2021 - May 2024"
      keywords="Workshops, Prototyping, Design documentation"
    />
    <div>
      <section class="md:px-12 px-6">
        <figure-component
          classes="mx-auto w-full"
          src="img/work/maridata/showcase-display.png"
          alt=""
        />
      </section>
      <toc></toc>

      <section class="leading-loose">
        <div class="section-m">
          <h1 id="problem-statement">Problems & Challenges</h1>
          <card tagline="Challenge #1"
                headline="How can we design a maritime navigational system that supports in operating ships in a more energy-effient way?"
                text="Shipping is a complex context that brings with it legal regulations and standards that need to be taken into account when designing and implementing."
          />
          <NuxtLink to="#self-determination-theory">
            <card tagline="Challenge #2"
                  headline="How can we support the successful adoption of the system in the operational routines by design?"
                  text="The provision of new expert systems and the associated change in work routines can create barriers to their adoption."
                  hasHover
            />
          </NuxtLink>
          <NuxtLink to="#the-maridata-design-system">
            <card tagline="Challenge #3"
                  headline="How can we set up the design infrastructure to ensure consistency across all project partners and states?"
                  text="Due to the high number of project partners and the fluctuation of employees (as many student employees are involved), a project structure must be defined at the beginning that brings long-term consistency."
                  hasHover
            />
          </NuxtLink>
        </div>
      </section>

      <section class="bg-gray-100">
        <div class="section-m leading-loose">
          <div class="flex justify-between mb-4">
            <h2>Excursus: The MariData Project</h2>
            <img class="w-44" src="~assets/img/work/maridata/logo.svg" />
          </div>
          <p>
            Whereas in the past it was mainly economic reasons that motivated the search for a low power requirement for a ship, today ecological reasons and compliance with legal regulations to reduce emissions are at least equally important. These call for a <b>consistent strategy of energy efficiency</b> and a significant reduction in exhaust emissions not only during construction but also <b>during the operation of ships</b>.
          </p>
          <p class="stat">
            <span class="stat-percent font-display">3%</span>
            <br>
            <span class="stat-description">of the world's carbon output was attributed to shipping in 2018</span>
          </p>
          <p class="stat">
            <span class="stat-percent font-display">70%</span>
            <br>
            <span class="stat-description">of ship operating costs are due to energy costs</span>
          </p>
          <p>
            <web-link url="https://maridata.app">MariData</web-link> is a joint project of <b>11 project partners</b> from business and research with the aim to develop a forward-looking energy management and decision support system based on rational methods.
            The University of Lübeck was responsible for the psychological concept, the <b>interface design and its testing within studies</b>.
          </p>
          <div class="bg-gray-50 rounded-2xl py-6 px-12 mt-12 mb-6">
            <p>
              <b>Interested in more details?</b> Take a look at the <web-link url="https://doi.org/10.1016/j.erss.2023.102992">paper by Zoubir et al.</web-link> about energy efficiency operations on ships and marine vessels.
            </p>
          </div>
        </div>
      </section>
      <section class="leading-loose">
        <div class="section-m">
          <h1 id="the-design-process">The Design Process</h1>
          <p>
            Since the context of shipping is uncharted waters for most team members, we rely on knowledge from not only <b>literature and maritime guidelines</b>, but also <b>navigators</b> with whom we are in close exchange and who are consulted for e.g. formative design evaluations.
          </p>
        </div>
        <img class="md:w-3/4 w-4/5 mx-auto" src="~assets/img/work/maridata/md_process.png" alt="The MariData design process includes discussions with the project partners and navigational experts based on publications, guidelines and existing design solutions before prototyping and evaluation the design." />
      </section>
      <section class="leading-loose">
        <div class="section-m">
          <h1 id="requirements">Requirements</h1>
          <p>
            As the context of shipping and the associated work routines were largely unknown to me and other designers, we decided to formulate the <b>requirements based on User Stories</b> defined by experts.
          </p>
          <figure-component
            classes="w-full"
            src="img/work/maridata/userstories.png"
            alt="Over 150 User Stories were defined by nautical experts and project partners"
            figcaption=""
          />
        </div>
      </section>
      <section id="self-determination-theory" class="bg-gray-100">
        <div class="section-m leading-loose">
          <div class="flex justify-between mb-4">
            <h2>Excursus: Self-Determination Theory</h2>
          </div>
          <p>
            The <web-link url="https://doi.org/10.1037/0003-066X.55.1.68">Self-Determination Theory (SDT)</web-link> suggests that people are motivated to grow and achieve their full potential when their basic psychological needs are satisfied. These needs are categorized into three main components:
          </p>
          <div class="flex flex-col gap-4 my-6 md:mx-6 mx-0">
            <div class="bg-blue-100 rounded-2xl p-6 flex gap-4 place-items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M240-120 87-273l153-153 49 49-69 69h520l-69-69 49-49 153 153-153 153-49-49 69-69H220l69 69-49 49ZM99-535v-13q0-21.08 11.41-38.65T142-613q25.08-10.52 51.6-16.26 26.53-5.74 55.46-5.74 28.94 0 55.42 5.74T356-613q20.18 8.78 31.59 26.35T399-548v13H99Zm462 0v-13q0-21.08 11.41-38.65T604-613q25.08-10.52 51.6-16.26 26.53-5.74 55.46-5.74 28.94 0 55.42 5.74T818-613q20.18 8.78 31.59 26.35T861-548v13H561ZM248.96-690Q218-690 196-712.04q-22-22.05-22-53Q174-796 196.04-818q22.05-22 53-22Q280-840 302-817.96q22 22.05 22 53Q324-734 301.96-712q-22.05 22-53 22Zm462 0Q680-690 658-712.04q-22-22.05-22-53Q636-796 658.04-818q22.05-22 53-22Q742-840 764-817.96q22 22.05 22 53Q786-734 763.96-712q-22.05 22-53 22Z"/></svg>
              </div>
              <div>
                <p class="text-lg font-bold">Autonomy</p>
                <p>The need to feel in control of one’s actions and decisions</p>
              </div>
            </div>
            <div class="bg-blue-100 rounded-2xl p-6 flex gap-4 place-items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l55 218q4 14-5 25.5T853-360h-93v140q0 24.75-17.62 42.37Q724.75-160 700-160H600v80h-60v-140h160v-200h114l-45-180q-24-97-105-158.5T480-820q-125 0-212.5 86.5T180-522.46q0 64.42 26.32 122.39Q232.65-342.09 281-297l19 18v199h-60Zm257-370Zm-48 76h60l3-44q12-2 22.47-8.46Q544.94-432.92 553-441l42 14 28-48-30-24q5-14 5-29t-5-29l30-24-28-48-42 14q-8.33-7.69-19.17-13.85Q523-635 512-638l-3-44h-60l-3 44q-11 3-21.83 9.15Q413.33-622.69 405-615l-42-14-28 48 30 24q-5 14-5 29t5 29l-30 24 28 48 42-14q8.06 8.08 18.53 14.54Q434-420 446-418l3 44Zm30.12-84q-29.12 0-49.62-20.38-20.5-20.38-20.5-49.5t20.38-49.62q20.38-20.5 49.5-20.5t49.62 20.38q20.5 20.38 20.5 49.5t-20.38 49.62q-20.38 20.5-49.5 20.5Z"/></svg>              </div>
              <div>
                <p class="text-lg font-bold">Competence</p>
                <p>The need to feel capable and effective in interacting with the environment and mastering challenges</p>
              </div>
            </div>
            <div class="bg-blue-100 rounded-2xl p-6 flex gap-4 place-items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M40-160v-160q0-29 20.5-49.5T110-390h141q17 0 32.5 8.5T310-358q29 42 74 65t96 23q51 0 96-23t75-65q11-15 26-23.5t32-8.5h141q29 0 49.5 20.5T920-320v160H660v-119q-36 33-82.5 51T480-210q-51 0-97-18t-83-51v119H40Zm440-170q-35 0-67.5-16.5T360-392q-16-23-38.5-37T273-448q29-30 91-46t116-16q54 0 116.5 16t91.5 46q-26 5-48.5 19T601-392q-20 29-52.5 45.5T480-330ZM160-460q-45 0-77.5-32.5T50-570q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T160-460Zm640 0q-45 0-77.5-32.5T690-570q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T800-460ZM480-580q-45 0-77.5-32.5T370-690q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T480-580Z"/></svg>              </div>
              <div>
                <p class="text-lg font-bold">Relatedness</p>
                <p>The need to feel connected to others, to belong to a group, and to have meaningful social relationships</p>
              </div>
            </div>
          </div>
          <p>
            When these psychological needs are met, users are more likely to internalize the benefits of the system, see its value, and make it a regular part of their routines.
          </p>
        </div>
      </section>
      <section class="mb-56 leading-loose">
        <div class="section-m">
          <h1 id="the-maridata-design-system">The Design System: Anchor of the Interface</h1>
          <p>
            Since multiple designers and developers are participating in the MariData project, we designed and implemented a design system to ensure consistency and efficiency across the entire product.
            The design system helps to establish common design principles, components and standards that are used by all team members.
          </p>
          <br />
          <p>
            On the design side, we <b>build a component library in Figma</b> based on the <web-link url="https://atomicdesign.bradfrost.com/">atomic design framework</web-link>.
            We decided to build the design system from scratch, as we believed it is the best way to integrate maritime interface standards into the design and popular design systems, such as Material Design, are not suitable for the context.
          </p>
        </div>
        <img class="md:w-1/2 w-4/5 mx-auto rounded-lg" src="~assets/img/work/maridata/components.png" alt="The MariData design system." />
      <div class="section-m">
        <p>
          The design system allowed us to ensure that all design elements look and feel the same, regardless of in which feature or view they are used.
          It also facilitated collaboration between designers and developers, as both sides could access the same reusable components and guidelines.
          This not only sped up the development process, but also minimised errors and reduces the effort required for subsequent adjustments and maintenance.
        </p>
      </div>
      </section>
    </div>
  </div>
</template>

<script>
import DescriptionElement from "~/components/work/descriptionElement";
import WebLink from "~/components/structuralComponents/webLink";
import Card from "~/components/work/card.vue";

export default {
  name: "maridata",
  components: {Card, DescriptionElement, WebLink},
  head: {
      title: 'MariData -',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'In the MariData project, a future-oriented energy management and decision support system based on rational methods is to be developed, taking into account current operational status data as well as geoinformation.'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://chrisrock.rocks/seo/projects/maridata.png'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          keywords: "maridata, ship energy efficiency, environment protection, vessel energy management, engineering psychology, university of lübeck, research, energy interface, human centered design"
        }
      ]
  }
}
</script>

<style scoped>
.bg-ships{
  background-image: url("~assets/img/work/maridata/header_bg.png");
  background-repeat: repeat;
  background-size: auto;
  background-blend-mode: difference;
}

h1:after{
  content: none;
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

.section-stats{
  @apply my-24;
}

.stat{
  color: #1E4165;
  @apply flex-wrap my-16;
}

.stat-percent{
  @apply font-black text-7xl;
}

.stat-description{
  @apply text-xl opacity-50;
}

</style>
