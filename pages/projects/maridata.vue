<template>
  <div class="w-full">
    <work-header
      color="#4C5B63"
      color-light="rgba(76, 91, 99, 0.15)"
      text-color="#FFFFFFFF"
      title="MariData"
      subtitle="Comprehensive technologies for ship energy management"
      description="In the MariData project, a future-oriented energy management and decision support system based on rational methods is to be developed, taking into account current operational status data as well as geoinformation."
      role="UX & UI Design, Design research"
      context="Funded research project"
      timespan="January 2021 - now"
      keywords="Workshops, Prototyping, Design documentation"
    />
    <div>
      <toc></toc>

      <section class="section-m leading-loose">
        <div class="bg-gray-100 rounded-2xl py-6 px-12 my-12">
          <p>
            The MariData project is not finished yet and currently under development. If you like to receive more information, feel free to contact me or take a look at the <web-link url="https://maridata.org">MariData webpage</web-link>.
          </p>
        </div>
        <h1 id="description-of--the-project">Description of the project</h1>
        <p>Energy efficiency has always been a key concern for shipbuilding and shipping. Whereas in the past it was mainly economic reasons that motivated the search for a low power requirement for a ship, today ecological reasons and compliance with statutory regulations to reduce emissions are coming strongly to the fore with at least equal weight. These call for a consistent strategy of energy efficiency as well as a significant reduction of exhaust emissions not only in the construction but also substantially in the operation of ships.
          <br><br>
          As with any human-technology system, the actual benefit of the system depends on the technical potential and user behavior. Thus, in addition to the technical challenges, factors such as acceptance and trust must also be considered. To this end, prototypes of the MariData front end are being developed in the spirit of user-centered development and evaluated through user studies.
        </p>
      </section>
      <section class="leading-loose mb-56">
        <div class="section-m">
          <h1 id="the-maridata-design-process">The MariData design process</h1>
          <p>
            The Maridata design process is characterized by communication with project partners and navigators based on publications, existing system solutions and regulations.
            <br><br>
            To be able to validate the design solutions, the development runs in close cooperation with experts from the maritime context and goes through several evaluations during the iterations.
          </p>
        </div>
        <img class="md:w-3/4 w-full mx-auto" src="~assets/img/work/maridata/md_process.png" alt="The MariData design process includes discussions with the project partners and navigational experts based on publications, guidelines and existing design solutions before prototyping and evaluation the design." />
      </section>
    </div>
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
</style>
