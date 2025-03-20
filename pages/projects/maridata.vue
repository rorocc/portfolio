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
      timespan="December 2020 - March 2023"
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
          <NuxtLink to="#system-features-structure">
            <card tagline="Challenge #1"
                  headline="How can we design a maritime navigational system that supports in operating ships in a more energy-effient way?"
                  text="Shipping is a complex context that brings with it legal regulations and standards that need to be taken into account when designing and implementing."
                  hasHover
            />
          </NuxtLink>
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
            <h2>About the MariData Project</h2>
            <img class="w-44" src="~assets/img/work/maridata/logo.svg"/>
          </div>
          <p>
            Whereas in the past it was mainly economic reasons that motivated the search for a low power requirement for
            a ship, today ecological reasons and compliance with legal regulations to reduce emissions are at least
            equally important. These call for a <b>consistent strategy of energy efficiency</b> and a significant
            reduction in exhaust emissions not only during construction but also <b>during the operation of ships</b>.
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
            <web-link url="https://maridata.app">MariData</web-link>
            is a joint project of <b>11 project partners</b> from business and research with the aim to develop a
            forward-looking energy management and decision support system based on rational methods.
            The University of Lübeck was responsible for the psychological concept, the <b>interface design and its
            testing within studies</b>.
          </p>
          <div class="bg-gray-50 rounded-2xl py-6 px-12 mt-12 mb-6">
            <p>
              <b>Interested in more details?</b> Take a look at the
              <web-link url="https://doi.org/10.1016/j.erss.2023.102992">paper by Zoubir et al.</web-link>
              about energy efficiency operations on ships and marine vessels.
            </p>
          </div>
        </div>
      </section>
      <section class="leading-loose">
        <div class="section-m">
          <h1 id="requirements">Requirements</h1>
          <p>
            As the context of shipping and the associated work routines were largely unknown to me and other designers,
            we decided to formulate the <b>requirements based on User Stories</b> defined by experts.
          </p>
          <figure-component
            classes="w-full"
            src="img/work/maridata/userstories.png"
            alt="Over 150 User Stories were defined by nautical experts and project partners"
            figcaption=""
          />
          <p>
            These mainly comprised user stories from the following categories:
          </p>
          <ol>
            <li><b>Types of Data</b> (e.g., ETA, Under Keel Clearance, Fuel Oil Consumption)</li>
            <li><b>Subsystems</b> (e.g., Route Planning, Route Monitoring, Machine Control, DSS Interface)</li>
            <li><b>Routines</b> (e.g., obtain information about the vessels tidal window for a certain draft and port)
            </li>
          </ol>
          <p>Together with maritime guidelines, we transferred these user stories into a draft of the system
            structure.
          </p>
        </div>
      </section>
      <section class="leading-loose">
        <div class="section-m">
          <h1 id="the-design-process">The Design Process</h1>
          <p>
            Since the context of shipping is uncharted waters for most team members, we rely on knowledge from not only
            <b>literature and maritime guidelines</b>, but also <b>navigators</b> with whom we are in close exchange and
            who are consulted for e.g. formative design evaluations.
          </p>
        </div>
        <img class="md:w-3/4 w-4/5 mx-auto" src="~assets/img/work/maridata/md_process.png"
             alt="The MariData design process includes discussions with the project partners and navigational experts based on publications, guidelines and existing design solutions before prototyping and evaluation the design."/>
        <div class="section-m">
          <h2>Example: Visualizing Effects of changes in Speed</h2>
          <p>The choice of speed is essential for both, ETA and emission output. The planning and monitoring of ship speed is therefore often mentioned in the user stories. Here are two examples:</p>
          <div class="flex flex-col gap-3 mt-2 mb-4">
            <div class="rounded-lg py-2 px-4 bg-yellow-50">
              <p class="uppercase text-sm">
                <span class="font-bold">User Story</span> · Route Planning
              </p>
              <hr class="border-white border-2 -mx-4 my-1" />
              <p>
                As a <b>Navigation Officer</b> I can <b>simulate different speeds</b> and ETAs at the English Channel entrance waypoint or other high tidal current areas to get a fuel saving prediction for different ETAs and transit speeds so that <b>I can plan the voyage to maximize positive tidal / current influence</b>.
              </p>
            </div>
            <div class="rounded-lg py-2 px-4 bg-yellow-50">
              <p class="uppercase text-sm">
                <span class="font-bold">User Story</span> · Route Monitoring
              </p>
              <hr class="border-white border-2 -mx-4 my-1" />
              <p>
                As a <b>Captain</b> I can <b>choose the speed and trim for the stretch ahead based on the DSS prognosis</b> so that <b>I meet the ETA with a minimum fuel consumption</b> by not only reducing the speed.
              </p>
            </div>
          </div>
          <p>This led to the assumption that the MariData interface should provide a visualisation of the influence that speed has on the route.</p>
          <p class="quote">
            <span class="text-lg">Problem statement: How can we visualise the effects of a speed change for seafarers during route monitoring?</span>
          </p>
          <p>
            The first approaches to this problem were drafted during a <web-link url="https://www.nngroup.com/articles/facilitating-design-studio-workshop/">Design Studio Workshop</web-link> with various MariData colleagues from different disciplines.
            Afterwards, I discussed these sketches with an expert from the maritime industry to define relevant use cases and data for this type of visualization.
          </p>
          <figure-component
            classes="w-full"
            src="img/work/maridata/md_layer3.png"
            alt=""
            figcaption="The visualization form was sketched among other drafts throughout a creative workshop and refined for the context of the route monitoring"
          />
          <p>
            The feature makes it possible to divide the route into definable sections, which are then evaluated and colour-coded based on the predicted energy efficiency.
          </p>
        </div>
        <div class="section-m">
          <h2>Example: Color Palette</h2>
          <p>
            The choice of color palette is crucial for user experience and aesthetics because it directly impacts how users perceive and interact with the interface.
            It can, if poorly chosen, overwhelm users, reduce accessibility, and create a disjointed or frustrating interface.
            Especially in a complex environment such as a ship's bridge, where lighting conditions are constantly changing, a functional choice of colour is essential.
          </p>
          <figure-component
            classes="w-full"
            src="img/work/maridata/md_colorpalette.png"
            alt=""
            figcaption="The MariData color palette was derived and extended from the IHO's Specifications for Chart Content and Display Aspects of ECDIS"
          />
          <p>
            In order to build on the system that the ship's crew is already familiar with, we have based our choice of colours on the standards of the International Hydrographic Organization. These offer different colour palettes for day, dusk and night.
            For the prototype and proof of concept, we used the dusk palette as this is the best compromise for day and night use.
            In order to achieve better colour contrasts and thus better readability of texts, for example, we added additional white and grey shades.
          </p>
        </div>
      </section>
      <section id="self-determination-theory" class="bg-gray-100">
        <div class="section-m leading-loose">
          <div class="flex justify-between mb-4">
            <h2>Excursus: Self-Determination Theory</h2>
          </div>
          <p>
            The
            <web-link url="https://doi.org/10.1037/0003-066X.55.1.68">Self-Determination Theory (SDT)</web-link>
            suggests that people are motivated to grow and achieve their full potential when their basic psychological
            needs are satisfied. These needs are categorized into three main components:
          </p>
          <div class="flex flex-col gap-4 my-6 md:mx-6 mx-0">
            <div class="bg-blue-100 rounded-2xl p-6 flex gap-4 place-items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                     fill="#000000">
                  <path
                    d="M240-120 87-273l153-153 49 49-69 69h520l-69-69 49-49 153 153-153 153-49-49 69-69H220l69 69-49 49ZM99-535v-13q0-21.08 11.41-38.65T142-613q25.08-10.52 51.6-16.26 26.53-5.74 55.46-5.74 28.94 0 55.42 5.74T356-613q20.18 8.78 31.59 26.35T399-548v13H99Zm462 0v-13q0-21.08 11.41-38.65T604-613q25.08-10.52 51.6-16.26 26.53-5.74 55.46-5.74 28.94 0 55.42 5.74T818-613q20.18 8.78 31.59 26.35T861-548v13H561ZM248.96-690Q218-690 196-712.04q-22-22.05-22-53Q174-796 196.04-818q22.05-22 53-22Q280-840 302-817.96q22 22.05 22 53Q324-734 301.96-712q-22.05 22-53 22Zm462 0Q680-690 658-712.04q-22-22.05-22-53Q636-796 658.04-818q22.05-22 53-22Q742-840 764-817.96q22 22.05 22 53Q786-734 763.96-712q-22.05 22-53 22Z"/>
                </svg>
              </div>
              <div>
                <p class="text-lg font-bold">Autonomy</p>
                <p>The need to feel in control of one’s actions and decisions</p>
              </div>
            </div>
            <div class="bg-blue-100 rounded-2xl p-6 flex gap-4 place-items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                     fill="#000000">
                  <path
                    d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l55 218q4 14-5 25.5T853-360h-93v140q0 24.75-17.62 42.37Q724.75-160 700-160H600v80h-60v-140h160v-200h114l-45-180q-24-97-105-158.5T480-820q-125 0-212.5 86.5T180-522.46q0 64.42 26.32 122.39Q232.65-342.09 281-297l19 18v199h-60Zm257-370Zm-48 76h60l3-44q12-2 22.47-8.46Q544.94-432.92 553-441l42 14 28-48-30-24q5-14 5-29t-5-29l30-24-28-48-42 14q-8.33-7.69-19.17-13.85Q523-635 512-638l-3-44h-60l-3 44q-11 3-21.83 9.15Q413.33-622.69 405-615l-42-14-28 48 30 24q-5 14-5 29t5 29l-30 24 28 48 42-14q8.06 8.08 18.53 14.54Q434-420 446-418l3 44Zm30.12-84q-29.12 0-49.62-20.38-20.5-20.38-20.5-49.5t20.38-49.62q20.38-20.5 49.5-20.5t49.62 20.38q20.5 20.38 20.5 49.5t-20.38 49.62q-20.38 20.5-49.5 20.5Z"/>
                </svg>
              </div>
              <div>
                <p class="text-lg font-bold">Competence</p>
                <p>The need to feel capable and effective in interacting with the environment and mastering
                  challenges</p>
              </div>
            </div>
            <div class="bg-blue-100 rounded-2xl p-6 flex gap-4 place-items-center">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                     fill="#000000">
                  <path
                    d="M40-160v-160q0-29 20.5-49.5T110-390h141q17 0 32.5 8.5T310-358q29 42 74 65t96 23q51 0 96-23t75-65q11-15 26-23.5t32-8.5h141q29 0 49.5 20.5T920-320v160H660v-119q-36 33-82.5 51T480-210q-51 0-97-18t-83-51v119H40Zm440-170q-35 0-67.5-16.5T360-392q-16-23-38.5-37T273-448q29-30 91-46t116-16q54 0 116.5 16t91.5 46q-26 5-48.5 19T601-392q-20 29-52.5 45.5T480-330ZM160-460q-45 0-77.5-32.5T50-570q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T160-460Zm640 0q-45 0-77.5-32.5T690-570q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T800-460ZM480-580q-45 0-77.5-32.5T370-690q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T480-580Z"/>
                </svg>
              </div>
              <div>
                <p class="text-lg font-bold">Relatedness</p>
                <p>The need to feel connected to others, to belong to a group, and to have meaningful social
                  relationships</p>
              </div>
            </div>
          </div>
          <p>
            When these psychological needs are met, users are more likely to internalize the benefits of the system, see
            its value, and make it a regular part of their routines.
          </p>
        </div>
      </section>
      <section class="leading-loose">
        <div class="section-m">
          <h1 id="system-features-structure">
            System Features and Structure
          </h1>
          <p>
            As the nautical chart is a central element of navigation tools, the aim was to place as much information as possible around it. We therefore had to differentiate which KPIs were worth integrating on the map view and which would only be visible in further detailed views.
            This led us to introduce a system of three levels of information, in which the information can be found according to importance and level of detail.
          </p>
        </div>
        <figure-component
          classes="md:w-2/3 w-full mx-auto"
          src="img/work/maridata/md_layers.png"
          alt="The system contains three types of information layers"
          figcaption="The system contains three layers, which can be subdivided according to information density and level of detail.
          In addition, information layer 1 hardly takes up any screen space, while layer 3 is a full-screen view"
        />
        <figure-component
          classes="md:w-2/3 w-full mx-auto"
          src="img/work/maridata/md_map_features.png"
          alt="The main interface consists of the sea map and overlays that are standard in the industry.
          They can be hidden via toggles on the right side. Also, key KPIs are always accessible in navigational blocks on the left side.
          The alternative routes can be seen on the map where they also feature ghost ships.
          Ghost ships show the calculated position of the ship if it were on one of the alternative routes.
          The route timeline on the bottom displays main events and waypoints on the route. It also allows the simulation of the route in combination with the ghost ships."
          figcaption="The main features on the map view focused on traditional navigational elements combined with the indication of alternative routes and their simulation"
        />
      </section>
      <section class="leading-loose">
        <div class="section-m">
          <h1 id="the-maridata-design-system">The Design System: Anchor of the Interface</h1>
          <p>
            Since multiple designers and developers are participating in the MariData project, we designed and
            implemented a design system to ensure consistency and efficiency across the entire product.
            The design system helps to establish common design principles, components and standards that are used by all
            team members.
          </p>
          <div class="flex justify-between">
            <p class="stat">
              <span class="stat-percent font-display">~30</span>
              <br>
              <span class="stat-description">Atoms</span>
            </p>
            <p class="stat">
              <span class="stat-percent font-display">~50</span>
              <br>
              <span class="stat-description">Organisms</span>
            </p>
            <p class="stat">
              <span class="stat-percent font-display">~25</span>
              <br>
              <span class="stat-description">Templates</span>
            </p>
          </div>
          <p>
            On the design side, we <b>built a component library in Figma</b> based on the
            <web-link url="https://atomicdesign.bradfrost.com/">atomic design framework</web-link>
            .
            We decided to build the design system from scratch, as we believed it is the best way to integrate maritime
            interface standards into the design and popular design systems, such as Material Design, are not suitable
            for the context. However, during a later stage of the project, the <web-link url="https://openbridge.no">OpenBridge</web-link> project was launched, so we migrated on their Icons.
          </p>
        </div>
        <img class="md:w-1/2 w-4/5 mx-auto rounded-lg" src="~assets/img/work/maridata/components.png"
             alt="The MariData design system."/>
        <div class="section-m">
          <p>
            The design system allowed us to ensure that all design elements look and feel the same, regardless of in
            which feature or view they are used.
            It also facilitated collaboration between designers and developers, as both sides could access the same
            reusable components and guidelines.
            This not only sped up the development process, but also minimised errors and reduces the effort required for
            subsequent adjustments and maintenance.
          </p>
        </div>
      </section>
      <section class="section-m leading-loose">
        <h1 id="learnings">
          Learnings
        </h1>
        As I was a part from the beginning of the project, I learnt a lot about initiating a project, such as building a design infrastructure and planning a design system from scratch.
        <div class="my-6">
          <h2>Focus on what really matters – don't reinvent the wheel!</h2>
          <p>
            The focus of the MariData project was the development of a decision support system to promote energy efficiency in shipping.
            In order to <b>achieve results quickly and be able to iterate</b>, it makes sense to draw on and <b>utilise existing resources</b>.
            Nevertheless, we had to go the extra mile and build our own design system that meets the requirements of the industry and can be used on a tablet.
            We later came across the <web-link url="https://www.openbridge.no/">OpenBridge</web-link> project, which offers a design standard for maritime interfaces. At this point, MariData was already too far advanced to adapt all the elements to this.
            Nevertheless, we decided to adopt their icons instead of developing our own icons - as this is time-consuming and does not directly contribute to the project goal.
          </p>
        </div>
        <div class="my-6">
          <h2>Finding the right documentation strategy is essential</h2>
          <p>
            Throughout the project we had to adjust the way we documented and handover the design several times as we have certainly learned a lot about design documentation.
            As some student assistants were working on the project, there was a high turnover and new ones had to be regularly onboarded. A standardised method of documentation from the very beginning would certainly have helped with comprehensibility there.
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
  components: { Card, DescriptionElement, WebLink },
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
.bg-ships {
  background-image: url("~assets/img/work/maridata/header_bg.png");
  background-repeat: repeat;
  background-size: auto;
  background-blend-mode: difference;
}

h1:after {
  content: none;
}

.section-m {
  @apply max-w-prose m-auto py-12 md:px-0 px-4;
}

.header {
  color: white;
  background-color: #4C5B63;
}

.header h1 {
  color: white;
  @apply text-6xl;
}

.section-stats {
  @apply my-24;
}

.stat {
  color: #1E4165;
  @apply flex-wrap my-16;
}

.stat-percent {
  @apply font-black text-7xl;
}

.stat-description {
  @apply text-xl opacity-50;
}

li {
  list-style: none;
  @apply my-2;
}

li::before {
  content: '\276F';
  color: #1E4165;
  @apply mr-2;
}

.quote{
  border-left: 16px solid #1E4165;
  @apply pl-4 my-8;
}
</style>
