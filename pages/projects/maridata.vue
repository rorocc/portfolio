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
      role="UX & UI Design, Design research"
      context="Funded research project"
      timespan="January 2021 - May 2024"
      keywords="Workshops, Prototyping, Design documentation"
    />
    <div>
      <toc></toc>

      <section class="section-m leading-loose">
        <div class="bg-gray-100 rounded-2xl py-6 px-12 my-12">
          <p>
            The MariData project is not finished yet and <b>still under development.</b> Therefore there will be only a limited amount of information shared here. If you like to receive more information, feel free to contact me or take a look at the <web-link url="https://maridata.app">MariData webpage</web-link>.
          </p>
        </div>
        <h1 id="description-of--the-project">Description of the project</h1>
        <p>Energy efficiency has always been a key concern for shipbuilding and shipping. Whereas in the past it was mainly economic reasons that motivated the search for a low power requirement for a ship, today ecological reasons and compliance with statutory regulations to <b>reduce emissions</b> are coming strongly to the fore with at least equal weight. These call for a consistent strategy of energy efficiency as well as a significant reduction of exhaust emissions not only in the construction but also substantially in the <b>operation of ships</b>.
          <br><br>
          As with any human-technology system, the actual benefit of the system depends on the technical potential and user behavior. Thus, in addition to the technical challenges, factors such as acceptance and trust must also be considered. To this end, prototypes of the MariData front end are being developed in the spirit of <b>user-centered development</b> and evaluated through user studies.
        </p>

        <div class="section-stats">
            <p class="stat">
              <span class="stat-percent font-display">3%</span>
              <br>
              <span class="stat-description">of the world's carbon output was attributed to shipping in 2018</span>
            </p>
          <hr>
          <p class="stat">
            <span class="stat-percent font-display">70%</span>
            <br>
            <span class="stat-description">of ship operating costs are due to energy costs</span>
          </p>
        </div>

        <div class="bg-gray-100 rounded-2xl py-6 px-12 my-12">
          <p>
            <b>Interested in more details?</b> Take a look at the <web-link url="https://doi.org/10.1016/j.erss.2023.102992">paper by Zoubir et al.</web-link> about energy efficiency operations on ships and marine vessels.
          </p>
        </div>

      </section>
      <section class="leading-loose">
        <div class="section-m">
          <h1 id="the-maridata-design-process">The MariData design process</h1>
          <p>
            MariData is a joint project of <b>11 project partners</b> from business and research, so expertise from a wide range of disciplines can be brought together.
            The University of Lübeck is responsible for the <b>interface design and its testing within studies</b>.
            <br><br/>
            Since the context of shipping is uncharted waters for most team members, we rely on knowledge from not only <b>literature and maritime guidelines</b>, but also <b>navigators</b> with whom we are in close exchange and who are consulted for e.g. formative design evaluations.
          </p>
        </div>
        <img class="md:w-3/4 w-4/5 mx-auto" src="~assets/img/work/maridata/md_process.png" alt="The MariData design process includes discussions with the project partners and navigational experts based on publications, guidelines and existing design solutions before prototyping and evaluation the design." />
      </section>
      <section class="mb-56 leading-loose">
        <div class="section-m">
          <h1 id="the-maridata-design-system">The MariData design system</h1>
          <p>
            As one of the main UX/UI designers on the project, I built and developed the MariData design from the beginning.
            This not only ensured that the design was consistent across the team, but also allowed the developers to dive deeper into the design and derive styling requirements.
            <br>
            <br>
            In order to promote quick entry into the system and ease of learning, we have chosen to adopt common standards from existing maritime interfaces (e.g. ECDIS) where appropriate.
            We have also integrated the <web-link url="https://www.openbridge.no/">OpenBridge</web-link> design in some places, which aims to establish a design standard in shipping.
          </p>
        </div>
        <img class="md:w-1/2 w-4/5 mx-auto rounded-lg" src="~assets/img/work/maridata/components.png" alt="The MariData design system." />
      </section>
    </div>
  </div>
</template>

<script>
import DescriptionElement from "~/components/work/descriptionElement";
import WebLink from "~/components/structuralComponents/webLink";

export default {
  name: "maridata",
  components: {DescriptionElement, WebLink},
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
  @apply font-black text-9xl;
}

.stat-description{
  @apply text-xl opacity-50;
}

</style>
