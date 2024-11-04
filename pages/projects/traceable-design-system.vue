<template>
  <div class="relative">
    <display
      color="rgba(255, 0, 92, 1)"
      color-light="#EFF3FA"
      title="The Traceable Design System"
      text-color="#fff"
      subtitle="Integrating Design Rationale into Design Systems"
      description="The documentation of design decisions is a common practice across various disciplines to capture the decision-making process and promote reflection on the decisions made. Design systems are becoming an increasingly prominent tool for documenting design decisions. This research project explores the extent to which the incorporation of design rationale into design systems can facilitate the traceability of design decisions."
      role="UX & Visual Designer, Researcher"
      timespan="February - August 2024"
      context="Master Thesis"
      keywords="Design Systems, Design Research, Prototyping, Interview Study"
    />
    <toc />
    <section class="section-m">
      <h1 id="motivation">Motivation</h1>
      <p>The utilization of design systems is a commonly favored approach in the field of user experience.</p>
      <p class="quote">
        <span class="text-lg">"It would make a lot of sense to include a justification for the design decision, so as not to prevent discussions with colleagues, but at least to put a clear point behind it. And to say: 'Yes, we did it, it's reflected here'. Or that they themselves are able to recognize that (...) a lot of thought went into most of these decisions."</span>
        <br>
        <span class="opacity-50">Participant B1 in the final interview study</span>
      </p>
    </section>

    <section class="section-m">
      <h1 id="procedure">Procedure</h1>
      The procedure for this project is inspired by the <web-link url="https://www.iso.org/obp/ui/en/#iso:std:iso:9241:-210:ed-2:v1:en">Human-Centered Design Process</web-link> and the <web-link url="https://www.designcouncil.org.uk/our-resources/the-double-diamond/">Double Diamond Design Process</web-link>.
      <br />
      Additionally, the design process was carried out in two iterations in order to be able to evaluate interim results and adapt both requirements and design in a further iteration.
    </section>
    <section>
      <figure-component
        class="mx-auto md:w-2/3 w-full"
        src="img/work/traceable-ds/procedure-dd.png"
        alt=""
        figcaption="Design activities that have been carried out mapped into the double diamond process by the Design Council"
      />
    </section>

    <section class="section-m">
      <h1 id="research">Research</h1>
      <h2>Design Systems</h2>
      <h2>Design Rationale</h2>
      <h2>Architectural Decision Record</h2>
      <h2>Design Reflection</h2>
    </section>

    <section class="section-m">
      <h1 id="firstiteration">First Iteration</h1>
      <h2>Conception Phase</h2>
    </section>
    <section class="cinema">
      <figure-component
        class="mx-auto md:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it1-main.jpg"
        alt=""
        figcaption="Start page of the design system"
      />
      <figure-component
        class="mx-auto md:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it1-comp-main.jpg"
        alt=""
        figcaption="Component detail page with annotations marking the design rationales"
      />
      <figure-component
        class="mx-auto md:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it1-ar-overview.jpg"
        alt=""
        figcaption="Overview of the artifact repository containing all design artifacts"
      />
      <figure-component
        class="mx-auto md:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it1-ar-graph.jpg"
        alt=""
        figcaption="Graph view of the design artifacts visualizing clusters and relationships between artifacts"
      />
      <figure-component
        class="mx-auto md:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it1-create-dialog.jpg"
        alt=""
        figcaption="Guided process of documenting design rationale"
      />
    </section>
    <section class="section-m">
      <h2>Pilot Interview Study</h2>
      The design from the first generation was evaluated in a pilot study.
      This aimed to generate insights about the suitability of the design.
      Additionally, it also served as a pilot to identify and adjust the study design for the second interview study with a larger sample size.
      <h3>Participants</h3>
      <figure-component
        class="mx-auto md:w-3/4 w-full"
        src="img/work/traceable-ds/it1-study-participants.png"
        alt=""
        figcaption=""
      />
      <h3>Results</h3>
      <p class="quote">
        <span class="text-lg">"It would make a lot of sense to include a justification for the design decision, so as not to prevent discussions with colleagues, but at least to put a clear point behind it. And to say: 'Yes, we did it, it's reflected here'. Or that they themselves are able to recognize that (...) a lot of thought went into most of these decisions."</span>
        <br>
        <span class="opacity-50">Participant B1 in the final interview study</span>
      </p>
    </section>

    <section class="section-m">
      <h1 id="seconditeration">Second Iteration</h1>
      <h2>Design Changes</h2>
    </section>
    <section class="cinema">
      <figure-component
        class="mx-auto md:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it2-ds-button-rationale1.png"
        alt=""
        figcaption="The design of the rationale detail provides a stronger visual hierarchy."
      />
      <figure-component
        class="mx-auto md:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it2-ar-graph.png"
        alt=""
        figcaption="The artifact repository graph provides additional labels and filtering options."
      />
      <figure-component
        class="mx-auto md:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it2-ar-overview.png"
        alt=""
        figcaption="The navigational structure of the artifact repository was modified in order to make the available views more salient."
      />
      <figure-component
        class="mx-auto md:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it2-dialog-rationale.png"
        alt=""
        figcaption="The new rationale dialogue is structured as a step-by-step process to guide designers and show only relevant information."
      />
    </section>
    <section class="section-m">
      <h2>Interview Study</h2>
      <h3>Participants</h3>
      For the final interview study, designers from the academic and industrial context were invited to interact with the prototype of the design system.
      <figure-component
        class="mx-auto md:w-3/4 w-full"
        src="img/work/traceable-ds/it2-study-participants.png"
        alt=""
        figcaption=""
      />
      Each interview session consisted of five parts: (1) a brief introduction to the study procedure, (2) a short demography interview, (3) tasks and interaction with the prototype, (4) completing a short user experience questionnaire, and (5) a semi-structured interview.
      <h3>Results</h3>
      The method to analyse the data was inspired by the affinity diagramming technique as described by <web-link url="https://doi.org/10.1007/978-3-319-22668-2_19">Lucero (2015)</web-link>.
    </section>

    <section class="section-m">
      <h1 id="conclusion">Conclusion</h1>
    </section>
  </div>
</template>

<script>
import Display from "~/components/work/display";
import Card from "~/components/work/card";
import FigureComponent from "~/components/figureComponent";
import WebLink from "~/components/structuralComponents/webLink";


export default {
  name: "traceable-design-system",
  components: {Card, FigureComponent, WebLink, Display},
  head: {
    title: 'Traceable Design System –',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'The documentation of design decisions is a common practice across various disciplines to capture the decision-making process and promote reflection on the decisions made. Design systems are becoming an increasingly prominent tool for documenting design decisions. This research project explores the extent to which the incorporation of design rationale into design systems can facilitate the traceability of design decisions.'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://chrisrock.rocks/seo/projects/aid.png'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        keywords: "hci, interaction design, design rationale, design decisions, design system, ux design, user experience, chi"
      }
    ]
  }
}
</script>

<style scoped>
.cinema{
  background-color: #EFF3FA;
  @apply ml-8 md:ml-32 px-8 md:px-16 rounded-lg flex gap-8 overflow-x-scroll snap-center scroll-smooth snap-x snap-proximity;
}

.section-m{
  @apply max-w-prose m-auto py-12 md:px-0 px-4 leading-loose;
}

.quote{
  border-left: 16px solid rgba(255, 0, 92, 1);
  @apply pl-4 my-2;
}
</style>
