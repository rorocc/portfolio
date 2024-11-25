<template>
  <div class="relative">
    <display
      color="#B0114B"
      color-light="#EFF3FA"
      title="The Traceable Design System"
      text-color="#fff"
      subtitle="Integrating Design Rationale into Design Systems"
      description="The documentation of design decisions is a common practice across various disciplines to capture the decision-making process and promote reflection on the decisions made. Design systems are becoming an increasingly prominent tool for documenting such design decisions. This research project explores the extent to which the incorporation of design rationale into design systems can facilitate the traceability of design decisions."
      role="UX & Visual Designer, Researcher"
      timespan="February - August 2024"
      context="Master Thesis"
      keywords="Design Systems, Design Research, Prototyping, Interview Study"
    />
    <toc />
    <section class="section-m">
      <p class="text-gray-400">Last updated: 19.11.2024</p>
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
      The concept addressed both the visual design and the construction of a template for the structure of a design rationale.    </section>
    <div class="cinema">
      <figure-component
        class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it1-main.jpg"
        alt=""
        figcaption="Start page of the design system"
      />
      <figure-component
        class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it1-comp-main.jpg"
        alt=""
        figcaption="Component detail page with annotations marking the design rationales"
      />
      <figure-component
        class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it1-ar-overview.jpg"
        alt=""
        figcaption="Overview of the artifact repository containing all design artifacts"
      />
      <figure-component
        class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it1-ar-graph.jpg"
        alt=""
        figcaption="Graph view of the design artifacts visualizing clusters and relationships between artifacts"
      />
      <figure-component
        class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it1-create-dialog.jpg"
        alt=""
        figcaption="Guided process of documenting design rationale"
      />
    </div>
    <section class="section-m">
      <h2>Pilot Interview Study</h2>
      The design from the first generation was evaluated in a pilot study.
      This aimed to generate insights about the suitability of the design.
      Additionally, it also served as a pilot to identify and adjust the study design for the second interview study with a larger sample size.
      <h3>Participants & Structure</h3>
      <figure-component
        class="mx-auto md:w-3/4 w-full"
        src="img/work/traceable-ds/it1-study-participants.png"
        alt="4 designers were invited for the study. 2 designers from academia and 2 from the design industry. They had between 2 and 7 years of professional design experience, but on average 4.1 years."
        figcaption=""
      />
      <p>
        The study took place online with one participant per session.
        The sessions consisted of four parts: (1) a brief introduction to the study procedure, (2) a short demography interview, (3) tasks and interaction with the prototype, and (4) a semi-structured interview.
        <br /> <br />
        In the third part of the study, the participants were asked to solve tasks that were intended to guide the interviewees through the functionalities
        of the system and to obtain initial observations of how they navigate through the design system.
        <br /> <br />
        In phase 4, a semi-structured interview was conducted. For this purpose, a set of fixed questions was prepared, followed by questions that were adapted to the individual observations.
        The fixed questions related to the documentation process and the perceived traceability, usability, applicability.
      </p>
      <h3>Results</h3>
      <p>
        The method to analyse the data was inspired by the affinity diagramming technique as described by <web-link url="https://doi.org/10.1007/978-3-319-22668-2_19">Lucero (2015)</web-link>.
        The observations made during the interaction with the prototype and responses of the interviewees were collected on the whiteboard tool FigJam in the form of sticky notes.
        Each note was labelled with the interviewee’s identifier (e.g., A1-2 or B1-2) and color-coded with one color per participant.
        After each day, the notes were ordered and clustered according to the recurrence of themes.
      </p>
      <figure-component
        class="mx-auto w-full"
        src="img/work/traceable-ds/it1-affinity.png"
        alt=""
        figcaption="Five clusters were identified according to the recurrence of themes: Guidance, Structure, Traceability, Wording, and Applicability."
      />
      <p>
        The participants perceived guidance through the structure of the documentation process:
      </p>
      <p class="quote">
        <span class="text-lg">"(...) it was a bit like progressive disclosure, where you really only get the information that is relevant to you at the time. (...) I think that's good, that's why I perceived such guidance."</span>
        <br>
        <span class="opacity-50">Participant B2 in the pilot interview study</span>
      </p>
      <p>
        Although the structural framework was provided, they felt that they had to decide a lot themselves during the documentation process, which would be only beneficial for designers who have a clear vision of the desired documentation outcome. It was indicated that more detailed guidance in what content should be filled in would have been preferred.
      </p>
      <br />
      <p>
        The participating designers felt comfortable in accessing available design rationales in the system and mention benefits in comparison to state of the art design systems:
      </p>
      <p class="quote">
        <span class="text-lg">"You can definitely find the corresponding rationales. You can definitely [trace it] better than you usually can at the moment in design systems, because that never seems to be a requirement at all."</span>
        <br>
        <span class="opacity-50">Participant B1 in the pilot interview study</span>
      </p>

      <p>
        Even though the interviewees recognise the benefits of the documentation tool, they argued that the detailed documentation of design decisions is only applicable to larger design projects and teams. A2, personally, cannot imagine using it, since they rely on fast paced design output, rather than full transparency of the process.
      </p>

      <p class="quote">
        <span class="text-lg">“It would make a lot of sense to include a justification for the design decision, so as not to prevent discussions with colleagues, but at least to put a clear point behind it. And to say: 'Yes, we did it, it's reflected here'. Or that they themselves are able to recognize that (...) a lot of thought went into most of these decisions."</span>
        <br>
        <span class="opacity-50">Participant B1 in the pilot interview study</span>
      </p>

      <p>
        Next to small usability issues, such as the navigational structure, almost all participants were struggling with the terms 'rationale' and 'artifact'. Thus, this had to be addressed in the second iteration.
      </p>
    </section>

    <section class="section-m">
      <h1 id="seconditeration">Second Iteration</h1>
      <h2>Design Changes</h2>
    </section>
    <div class="cinema">
      <figure-component
        class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it2-ds-button-rationale1.png"
        alt=""
        figcaption="The design of the rationale detail provides a stronger visual hierarchy."
      />
      <figure-component
        class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it2-ar-graph.png"
        alt=""
        figcaption="The artifact repository graph provides additional labels and filtering options."
      />
      <figure-component
        class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it2-ar-overview.png"
        alt=""
        figcaption="The navigational structure of the artifact repository was modified in order to make the available views more salient."
      />
      <figure-component
        class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
        src="img/work/traceable-ds/it2-dialog-rationale.png"
        alt=""
        figcaption="The new rationale dialogue is structured as a step-by-step process to guide designers and show only relevant information."
      />
    </div>
    <section class="section-m">
      <h2>Interview Study</h2>
      <h3>Participants & Structure</h3>
      For the final interview study, designers from the academic and industrial context were invited to interact with the prototype of the design system.
      <figure-component
        class="mx-auto md:w-3/4 w-full"
        src="img/work/traceable-ds/it2-study-participants.png"
        alt="9 designers were invited for the study. 2 designers from academia and 7 from the design industry. They had between 2 and 26 years of professional design experience, but on average 8.9 years."
        figcaption=""
      />
      <p>The structure follows that of the initial pilot interview study, with the addition of the processing of the <web-link url="https://www.ueq-online.org/">User Experience Questionnaire</web-link> (short version).</p>
      <p>Furthermore, detailed scenarios were added to the tasks to enable participants to gain a deeper understanding of the context.</p>
      <h3>Results</h3>
      <p>For the data analysis, the same procedure as in the pilot interview study was used, utilizing the affinity diagramming method.</p>
      <p></p>

      <p class="quote">
        <span class="text-lg">"The documents I can link make sense, but I think I need more space to say 'I decided this because...' and who decided it? They had that opinion and they had this opinion and we agreed on it."</span>
        <br>
        <span class="opacity-50">Participant I6 in the final interview study</span>
      </p>

      <p class="quote">
        <span class="text-lg">"I'm telling you, the case is 90% of users no longer go to the documentation page, they just stay in Figma. And it can happen that such things become outdated. And outdated content is always the beginning of the end of the design system. So I think it's nice to have something like this, but I think it places demands on design system teams that probably not many can fulfill.”</span>
        <br>
        <span class="opacity-50">Participant I3 in the final interview study</span>
      </p>
      <figure-component
        class="mx-auto w-full"
        src="img/work/traceable-ds/it2-quant-diagram.png"
        alt="The pragmatic quality results of the prototype are below average, but the hedonic quality is excellent in comparison to the benchmark data set. The prototype showed overall excellent results on average."
        figcaption="Relation of the scale scores from the study results to the benchmark categories offered by the UEQ authors"
      />
      <h2>Key Insights & Discussion</h2>
      <p class="pb-4">
        The findings of the study and the extent of perceived traceability and guidance in the rationale documentation process can be summarized as follows:
      </p>
      <collapse headline="Design System as a Centralized Design Knowledge Repository" text="The interface was perceived as a centralized knowledge repository that stores design
      rationales and is accessible for all parties involved in design. Rasmussen et al. (2020)
      have found that designers are frustrated by having to search for relevant information from
      a variety of tools, as there are no standardized tools for the purpose of design documentation.
      As the participants stated that they work with design systems anyway, the concept
      of extending design systems is therefore not an additional tool that might cause further
      frustration, but rather combines different tools." />
      <collapse headline="Documentation Templates Guide through the Process" text="With regard to the degree of guidance provided by the process, it can be summarized that the participants perceived guidance
      in the Rationale Documentation Process, in particular through the predefined structure
      of the template and the interactive process. Additionally, the participants believed that they would be able to navigate
      the system more flawlessly after a short period of using the system through the structured
      process. In combination with the on average positive quantitative results and qualitative
      comments, it can be assumed that the designers acknowledged the novelty of the concept
      as one of the reasons for the initial comprehension issues" />
      <collapse headline="Additional Effort Inhibits the Documentation Practice" text="The most controversial topic was the applicability of the concept in terms of the cost-benefit
        ratio in the context of everyday design work. One of the key concerns was the
        effort needed to document design rationales, as some decisions can be defined in arbitrarily
        small steps, which may reduce the level of productivity rather than saving time in the long
        term. This observation cannot be validated by the results of the UEQ-S, as the evaluation
        of the system tends more towards “efficient”. On the contrary, the qualitative results show that the tool requires too much effort.
        It is unclear whether this is due to the template itself or the implementation in the interface." />
      <br />

      <h2>Limitations</h2>
        <p>The results of the study must be interpreted with caution and cannot easily be generalized.
          This is due to the fact that the study was only conducted with a small sample, which must be taken into account for both the qualitative and quantitative results.
          Thus, the results of the UEQ-S were not used to generate generally valid findings, but rather to compare the statements of the participants with the quantitative tendencies.</p>
        <p>
          It is also important to acknowledge that the tasks that were solved in the study only represent a hypothetical scenario that can hardly reflect the challenges of day-to-day design
          practice. Furthermore, the interactive prototype with its limited range of functions cannot fully represent a design system into which the concept would be integrated.
        </p>
      <h1>Learnings</h1>

    </section>
  </div>
</template>

<script>
import Display from "~/components/work/display";
import Card from "~/components/work/card";
import FigureComponent from "~/components/figureComponent";
import WebLink from "~/components/structuralComponents/webLink";
import Collapse from "~/components/structuralComponents/collapse.vue";


export default {
  name: "traceable-design-system",
  components: {Collapse, Card, FigureComponent, WebLink, Display},
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
  @apply ml-8 lg:ml-32 px-8 md:px-16 rounded-lg flex gap-8 overflow-x-scroll snap-center scroll-smooth snap-x snap-proximity;
}

.section-m{
  @apply max-w-prose m-auto py-12 md:px-0 px-4 leading-loose;
}

.quote{
  border-left: 16px solid rgba(255, 0, 92, 1);
  @apply pl-4 my-6;
}

h3{
  @apply mt-6;
}
</style>
