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
          <card tagline="Challenge #2"
                headline="How can we support the successful adoption of the system in the operational routines by design?"
                text="The provision of new expert systems and the associated change in work routines can create barriers to their adoption."
          />
          <a href="#the-maridata-design-system">
            <card tagline="Challenge #3"
                  headline="How can we set up the design infrastructure to ensure consistency across all project partners and states?"
                  text="Due to the high number of project partners and the fluctuation of employees (as many student employees are involved), a project structure must be defined at the beginning that brings long-term consistency."
                  hasHover
            />
          </a>
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
