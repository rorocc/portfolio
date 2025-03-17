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
    <section>
      <figure-component
        classes="mx-auto w-full"
        src="img/work/traceable-ds/showcase-display.png"
        alt=""
      />
    </section>
    <toc />
    <section class="section-m">
      <div class="bg-gray-100 py-4 px-6 rounded-xl my-4">
        <p class="text-xl font-bold opacity-80 my-1">There's more to it</p>
        <p>This article only scratches the surface of the thoughts and actions behind what was realised in the project. <a class="decoration-dotted underline-offset-4 underline" href="#contact">Let's talk</a> if you're interested in more details!</p>
      </div>
      <p class="text-gray-400">Last updated: 02.12.2024</p>
      <h1 id="motivation">Motivation</h1>
      <p>
        In the field of user experience design, the utilization of Design Systems is a commonly
        favored approach to document design. In design departments of companies, for example,
        <b>design systems are used to communicate and establish a shared understanding</b> of the design
        language throughout several designers. However, this type of documentation <b>usually represents the current state</b> of
        the design and lacks of information about the design process and its design artifacts, including
        the steps and knowledge that informed the final design decision. The use of design
        systems in their contemporary definition represents a first step, but <b>only scratches the
        surface when it comes to capturing the entirety of design processes in a traceable manner</b>.
      </p>
      <p>
        <br/>
        This project further explores the design systems approach, investigating the potential
        for enhancing the structure of design systems to facilitate more traceable and transparent
        documentation of design processes. To this end, it will be discussed how the concept of
        design rationale can be applied to the field of interaction design.
      </p>
      <p class="rq-block">
        <span class="font-bold text-pink-600">Research Question 1</span>
        <br/>
        <span>How are design processes <b>structured</b> and what <b>outcomes</b> should be documented
to facilitate the traceability of design decisions?</span>
        <br />
        <NuxtLink class="text-sm" to="#research">Jump to Section</NuxtLink>
      </p>

      <p class="rq-block">
        <span class="font-bold text-pink-600">Research Question 2</span> <br/>
        <span>How can <b>design rationales</b> for interaction design decisions be <b>structured</b> in a
systematic way?</span>
        <br />
        <NuxtLink class="text-sm" to="#designrationaleframework">Jump to Section</NuxtLink>
      </p>

      <p class="rq-block">
        <span class="font-bold text-pink-600">Research Question 3</span> <br/>
        <span>How can an <b>design system interface</b> be designed that not only <b>guides</b> interaction
designers in documenting design decision rationales, but also presents those rationales
          and the design process in a <b>traceable</b> way?</span>
        <br/>
        <NuxtLink class="text-sm" to="#firstiteration">Jump to Section</NuxtLink>
      </p>

      <p>
        Another two research questions addressed the evaluation of the concept in terms of useful guidance and the extent of promoted traceability of design decisions.
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
        classes="mx-auto md:w-2/3 w-full"
        src="img/work/traceable-ds/procedure-dd.png"
        alt=""
        figcaption="Design activities that have been carried out mapped into the double diamond process by the Design Council"
      />
    </section>

    <section class="section-m">
      <h1 id="research">Research</h1>
      <h2>Design Systems</h2>
      <p>
        When it comes to documenting and presenting design decisions, the usage of a Design
        System (DS) is an increasingly favored approach in the industry (<web-link url="https://doi.org/10.1007/s10664-
022-10181-y">Lamine & Cheng, 2022</web-link>).
        Albeit there is no universal definition of what a design system should comprise, <web-link url="https://www.nngroup.com/articles/design-systems-101/">Fessenden (2021)</web-link>
         summarizes the concept as ”a set of standards to manage design at scale by reducing
        redundancy while creating a shared language and visual consistency across different
        pages and channels”.
      </p>
      <p>
        <br />
        In order to gain a deeper understanding of the extent to which traceability
        already plays a role in the implementation of design systems, different design systems (<i>N</i> = 10) were reviewed.
        The following features and information were identified:
      </p>
      <ol class="bg-gray-50 p-4 rounded-xl my-6">
        <li>
          <p><b>Changelogs</b> (<i>N</i> = 8) – The changelogs in the reviewed design systems outlined the
          changes made to the design in text form, some also included images showcasing the
          modifications made</p>
        </li>
        <li>
          <p><b>Blogs</b> (<i>N</i> = 5) – Similar to changelogs, blog posts were used to inform about changes
            made to content of the design system or for tutorials on how to use the design system</p>
        </li>
        <li>
          <p><b>References</b> (<i>N</i> = 4) – Linking other resources (e.g., articles or discussions) whenever
            it had impact on the design decisions made</p>
        </li>
        <li>
          <p><b>Status tables or checklists</b> (<i>N</i> = 4) – The checklists showed the status of the component,
            for example, whether accessibility tests have been carried out, or whether the
            component is available to developers on certain development environments. They
            provide insight into the design process by indicating if certain steps have been carried
            out</p>
        </li>
      </ol>
      <p>The review revealed that design system teams are already trying to make design modifications
        visible through a diverse set of features. However, in the design systems reviewed,
        the documentation and highlighting of selected changes were prioritized, rather than the
        outlining of the design process behind the decisions made. Design rationales were rarely
        conveyed and if so, they were only available to explain curated decisions.</p>
      <h2 class="mt-32">Design Rationale</h2>
        <p>
          Documentation often only represents the description of the final outcome of the process
          itself, rather than including the thoughts and decisions that were considered throughout
          the decision-making process (<web-link url="https:
//doi.org/10.1007/978-94-011-4154-3_30">Burge & Brown, 2000</web-link>). In response to this need, the concept
          of Design Rationale (DR) has received considerable attention within the field of engineering.
          DR can be defined as a <b>historical record of the decision-making process that resulted
          in the selection of a particular option </b> (<web-link url="https://dl.acm.org/doi/abs/10.1207/s15327051hci0603%25264_3">Lee & Lai, 1991</web-link>).
        </p>
        <p>
          <br />
          <web-link url="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003064053-4/questions-options-criteria-elements-design-space-analysis-allan-maclean-richard-young-victoria-bellotti-thomas-moran"> MacLean et al. (1991)</web-link> introduced a semi-formal structure with the <b>Questions, Options,
          and Criteria (QOC) notation</b>, which represents design rationale by capturing the
          design space. As the name implies, it consists of three components: (1) questions, which
          reproduce the problem statement, (2) options, which comprise design alternatives, that
          were considered to answer the questions, and (3) criteria that help choose the final option.
        </p>
        <figure-component
          class="mx-auto w-full"
          src="img/work/traceable-ds/r-qoc-diagram.png"
          alt=""
          figcaption="Questions, Options & Criteria (QOC) notation by MacLean et al. (1991) represented as a diagram"
        />
      <h2>Architectural Decision Record</h2>
      <p>
        Architectural Decision Records (ADR) are becoming a standard practice in the software
        industry to make design decisions accessible. Through offering a <b>template for the capturing of design decisions</b>, ADRs provide structure
        and guidance to authors in the process of creating documentation (<web-link url="https://doi.org/10.1109/MS.2022.3166266">Keeling, 2022</web-link>).
        Additionally, it allows for <b>decision socialization</b>,
        where the entire team collectively reflects and agrees upon the decision made, rather than
        individuals acting in isolation (<web-link url="https:
//github.blog/engineering/architecture-optimization/why-write-adrs/">Perkins, 2020</web-link>).
      </p>
      <p>
        <br />
        <web-link url="https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions">Nygard (2011)</web-link> suggests a five-part template for ADRs:
      </p>
      <ol class="bg-gray-50 p-4 rounded-xl my-4">
        <li>
          <p>
            <b>Title</b> – A short document name
          </p>
         </li>
        <li>
          <p>
            <b>Context</b> – A description of the context the decision is located in. This might be
            articulated as a problem statement
          </p>
        </li>
        <li>
          <p>
            <b>Decision</b> – This part includes a description of the final decision that was made and
            chosen
          </p>
        </li>
        <li>
          <p>
            <b>Status</b> – This indicates the status of a decision. For example, proposed, accepted or
            deprecated
          </p>
        </li>
        <li>
          <p>
            <b>Consequences</b> – In this section, the resulting changes to the context through the
            decision must be stated. This includes both positive and neutral consequences, as
            well as those with negative tendencies
          </p>
        </li>
      </ol>
      <h2 class="mt-32">Design Reflection</h2>
      <p>
        Reflection can be seen as a ”cognitive process that allows a designer to develop new insight
        into her design, generate alternative solutions, and reframe the design problem” <web-link url="https://doi.org/10.1145/2466627.2466645">(Sharmin
        & Bailey, 2013)</web-link>. This is particularly relevant in the context of design, where a potential
        barrier to the creative process can be <b>design fixation</b>. It is defined by <web-link url="https://doi.org/10.1016/0142-694X(91)90003-F">Jansson and Smith
        (1991)</web-link> as <b>”blind adherence to a set of ideas or concepts limiting the output of conceptual
        design”</b>. Fixation can occur when a designer or team only considers a few design concept
        and fails to include new knowledge (<web-link url="https://doi.org/10.1017/S0890060414000043">Youmans & Arciszewski, 2014</web-link>). Reflecting on the
        design process can then help to unveil facilitators of design fixation as knowledge and
        concepts are being revisited.
      </p>
      <p>
        However, the degree of reflection may vary depending on the specific task and context
        in question. <web-link url="https://doi.org/10.1145/1952222.1952269">Fleck and Fitzpatrick (2010)</web-link> present a five-level categorization of reflection.
      </p>
      <figure-component
        class="mx-auto w-full"
        src="img/work/traceable-ds/r-levels-reflection.png"
        alt=""
        figcaption="Levels of reflection according to Fleck and Fitzpatrick (2010)"
      />
      <p>
        This adds to the conceptualization of
        reflection as a learning progression, whereby knowledge is reprocessed and results in the
        generation of further knowledge (<web-link url="https://doi.org/10.1145/2702123.2702234">Baumer, 2015</web-link>).
      </p>
    </section>

    <section class="section-m">
      <h1 id="designprinciples">Design Principles</h1>
      <p>
        The requirements and context analysis resulted in four design principles, that were considered throughout the conception phase.
      </p>
      <collapse class="mt-2" headline="Capturing the Evolution of the Design Process">
        <p>
          Giving insight into the history of a design
          process can establish a shared understanding and the collection of feedback, which ultimately results in moments of reflection (<web-link url="https://doi.org/10.1145/3544548.3581255">Sterman et al., 2023</web-link>). Through the documentation,
          stories about the process, rationales and milestones can be constructed, that can
          be used to communicate the process to stakeholders (<web-link url="https://doi.org/10.1145/2466627.2466645">Sharmin
          & Bailey, 2013)</web-link>). Therefore,
          the concept should aim for reconstructing the rationales and activities of the design
          process.
        </p>
      </collapse>

      <collapse headline="Enable Exploration">
        <p>
          There are only a few tools dedicated to the documentation of
          design activities (<web-link url="https://doi.org/10.1145/
2317956.2318020">Dalsgaard & Halskov, 2012</web-link>), resulting in designers develop their own
          documentation strategies and utilizing tools that are not originally intended for this purpose
          (<web-link url="https://doi.org/10.
1145/3369457.3369476">Rasmussen et al., 2020</web-link>). This leads to the unavailability of design artifacts to other
          designers. However, as knowledge from prior projects can be seen as a source of inspiration
          to generate ideas (<web-link url="https://doi.org/10.1145/1518701.1519064">Sharmin et al., 2009</web-link>), the concept to be developed should allow for the
          revisiting of one’s own artifacts and exploration of the artifacts created by others (<web-link url="https://doi.org/10.1145/3357236.
3395537">Khan et al., 2020</web-link>).
        </p>
      </collapse>

      <collapse headline="Ensuring Traceability">
        <p>
          In Kaleidoscope, <web-link url="https://doi.org/10.1145/3544548.3581255">Sterman et al. (2023)</web-link> demonstrate how the capturing
          of design artifacts can lead to reflection on design activities. <web-link url="https://doi.org/10.1145/
2317956.2318020">Dalsgaard & Halskov, 2012</web-link> discuss how the disclosure of the design process not only encourages the individual
          reflection, but also shared reflection among designers, establishing a foundation for discussions.
          Additionally, prevalent design systems are already incorporating features that
          provide information regarding modifications made to components. The concept should
          build on these very first approaches on making design decisions more traceable. This
          principle enforces the fourth research question.
        </p>
      </collapse>

      <collapse headline="Guiding through the Process">
        <p>
          Other disciplines have shown that it is possible to guide
          through documentation processes by providing, thereby making it accessible to professionals
          of varying levels of experience (e.g., <web-link url="https://doi.org/10.1109/MS.2022.3166266">Keeling, 2022</web-link>; <web-link url="https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions">Nygard (2011)</web-link>). However, due to
          the lack of standardized design documentation processes, the design field is missing anchor
          points for the capturing and formatting of design decisions (e.g., <web-link url="https://doi.org/10.1145/3369457.3369476">Rasmussen et al. (2020)</web-link>).
          To address this issue, the interface concept should provide guidance on how to capture
          design rationales. This principle enforces the fifth research question.
        </p>
      </collapse>


    </section>


    <section class="section-m">
      <h1 id="firstiteration">First Iteration</h1>
      <h2>Conception Phase</h2>
      <p>
        As part of the conception phase, it was not only necessary to develop a visual design for
        the interactive prototype, but also a theoretical framework for capturing design rationales,
        which could then be applied to the interface. The outcomes of both steps are presented
        in the following sections.
      </p>
      <h3 id="designrationaleframework">Design Rationale Framework</h3>
      <p>The simple structure of ADR
        templates enable software architects to document rationales by giving a clear guidance. As
        ADRs are successfully widely adopted in software architecture, a template for capturing
        design rationale was composed based on the approaches of <web-link url="https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions">Nygard (2011)</web-link> and <web-link url="https://www.researchgate.net/publication/324745676_Markdown_Architectural_Decision_Records_Format_and_Tool_Support">Kopp et al.
          (2018)</web-link>. This resulted in a template for capturing design rationale, comprising six fields.</p>
        <collapse class="my-2" headline="6 fields of the design rationale template">
          <ol class="my-2 bg-gray-50 rounded-xl p-4">
            <li>
              <p><b>Problem statement</b> — A short description of the problem that needs to be solved.
                This can also be the objective of the decision-making process, defined as a statement
                or question</p>
            </li>
            <li>
              <p>
                <b>Contributors / Actors in the Decision-Making</b> — In this field, the decision makers
                should be specified in order to record those responsible for the decision and to be
                able to identify contact persons, as design work is highly collaborative (e.g., <web-link url="https://doi.org/10.1145/3544548.3581273">Feng
                et al., 2023</web-link>).
              </p>
            </li>
            <li>
              <p>
                <b>Considered Design Options</b> — The addition of considered design alternatives allows
                for the retracing of thoughts and experiments throughout the design process. For
                example, the lack of design options may be an indicator for design fixation.
              </p>
            </li>
            <li>
              <p>
                <b>Final Design Decision</b> — The final design decision needs to be documented, of course.
                This may take the form of a descriptive text, images, explicit design properties or
                other forms of artifacts.
              </p>
            </li>
            <li>
              <p>
                <b>Related Artifacts</b> — The linking of artifacts that are associated with the decision
                helps to retrace the decision-making process, including all influencing factors.
              </p>
            </li>
            <li>
              <p>
                <b>Criteria</b> — The criteria that the final decision should ideally fulfill are described here.
                For each considered design option and the final decision, it needs to be evaluated
                whether the criteria are met in each case. This not only allows the options to be
                compared on the basis of the criteria, but can also form the basis of discussions
                (<web-link url="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003064053-4/questions-options-criteria-elements-design-space-analysis-allan-maclean-richard-young-victoria-bellotti-thomas-moran"> MacLean et al. (1991)</web-link>).
              </p>
            </li>
          </ol>
        </collapse>
      <h3>Design Procedure</h3>
      <p>
        For the generation of design ideas, the <web-link url="https://designsprintkit.withgoogle.com/methodology/phase3-sketch/crazy-8s">Crazy 8’s method</web-link> was used. The original proposal
        for this method is to sketch eight ideas in eight minutes. However, further approaches
        were designed outside the eight minute time frame. The aim of this was to have a wide
        range of potential solutions on which can be build on.
      </p>
      <p>
        After sketching and wireframing, some of the designs were converted into </b>low-fidelity</b> designs. Their
        <b>pros and cons were weighed up</b> against each other and fitting solutions identified. These
        were then implemented as <b>high-fidelity</b> concepts in Figma and later integrated
        into the <b>interactive prototype</b>, which acts as the main source for the evaluation
        phase.
      </p>

      <h3>System Structure</h3>
      <p>
        As demonstrated by the findings of <web-link url="https://doi.org/10.1145/3544548.3581255">Sterman et al., 2023</web-link> and <web-link url="https://doi.org/10.1145/3148330.3148334">Gutierrez Lopez et al. (2018)</web-link>, the integration of
        a space for the purpose of exploring design artifacts has been shown positive effects on the
        facilitation of reflection of design processes. The structure of the developed documentation
        interface follows that proposal and is divided into two subsystems. <br/>
        The first subsystem is the <b>Design System</b>. It not only covers the documentation process
        itself but also the design outcome, typical design system features and the design rationale.
      </p>
      <figure-component
        class="mx-auto w-full"
        src="img/work/traceable-ds/it1-overview-page.png"
        alt=""
        figcaption="The traceable design systems comprises elements like versioning, feedback features, annotations, and status insights to facilitate traceability of documented decisions."
      />
      <p>
        Secondly, the <b>Artifact Repository</b> consists of the overview page, presenting all available
        design artifacts. These artifacts can be examined in further detail on the individual artifact
        detail pages.
      </p>
    </section>
    <div class="cinema">
      <div class="cinema-head -mb-8">
        <p>Views of the <span class="font-inria italic">Traceable Design System</span> (It. 1)</p>
      </div>
      <div class="cinema-slider">
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
          src="img/work/traceable-ds/it1-rationale-details.png"
          alt=""
          figcaption="Detailed rationale information in a sidebar view"
        />
        <figure-component
          class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
          src="img/work/traceable-ds/it1-version-history.png"
          alt=""
          figcaption="History of all versions of the component or decision"
        />
        <figure-component
          class="mx-auto lg:w-1/3 w-5/6 flex-shrink-0"
          src="img/work/traceable-ds/it1-version-comparison.png"
          alt=""
          figcaption="Comparison view of two different version entries"
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
        The method to analyse the data was inspired by the <b>affinity diagramming technique</b> as described by <web-link url="https://doi.org/10.1007/978-3-319-22668-2_19">Lucero (2015)</web-link>.
        The observations made during the interaction with the prototype and responses of the interviewees were collected on the whiteboard tool FigJam in the form of sticky notes.
        Each note was labelled with the interviewee’s identifier (e.g., A1-2 or B1-2) and color-coded with one color per participant.
        After each day, the notes were <b>ordered and clustered</b> according to the recurrence of themes.
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
        Although the structural framework was provided, they felt that they had to decide a lot themselves during the documentation process, which would be only beneficial for designers who have a clear vision of the desired documentation outcome. It was indicated that <b>more detailed guidance in what content should be filled in</b> would have been preferred.
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
        Even though the interviewees recognise the benefits of the documentation tool, they argued that the detailed documentation of design decisions is only applicable to larger design projects and teams. A2, personally, <b>cannot imagine using it, since they rely on fast paced design output</b>, rather than full transparency of the process.
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
      <p>
        The first iteration has already led to initial insights into how design rationale can be
        integrated into the structure of a design system in order to increase the traceability of
        design decisions. The second iteration will build on these findings in order to refine the
        concept with regard to these objectives.
      </p>
      <h2 class="mt-6">Design Changes</h2>
      <p>
        The pilot interview study with experts from the user experience design field generated
        preliminary insights into the usability of the interface regarding the task of documenting
        and tracing design decisions. Based on these findings, design adjustments were made to
        the concept, which are described in the following sections.
      </p>
      <h3>Rationale Capturing Process</h3>
      <p>Although the system offered guidance through the automatic step-by-step opening and
        closing of documentation steps, the participants seemed overwhelmed by the structure.
        This is partly due to the fact that it was not clear to them why blocks were suddenly
        minimized, and partly because the prototype had bugs with regard to this function.
        The functionality of the process dialog has therefore been completely redesigned to provide
        a step-by-step process, adopting the format of a wizard dialog. Wizards can be used to
        route through complex processes, while reducing the cognitive effort needed to complete it
        (<web-link url="https://www.nngroup.com/articles/wizards/">Budiu, 2017</web-link>).</p>

      <figure class="my-4">
        <video class="rounded-xl" autoplay muted loop src="~/assets/img/work/traceable-ds/it2-dialog-video.mp4" />
        <figcaption class="opacity-50 text-center pt-4 max-w-prose mx-auto">The wizard structure offers guidance through the individual steps and instant validation</figcaption>
      </figure>
      <h3>Miscellaneous</h3>
      <p>It was observed that the implementation hardly allows the influence that the individual artifacts have on decisions or other
        artifacts to be understood. Both in the design rationales and on the artifact detail
        pages, the artifact card was modified so that it now allows free text for the <b>description of
        the impact</b> on the design. Additionally, <b>avatars of the designers</b> who worked on the artifact have been
        added to provide information about those responsible and to allow for follow-up questions.</p>
      <p>
        The Artifact Repository consists of two views, each designed to
        address distinct tasks. The graph view allows for the inspection of artifact relations and
        clusters, while the list serves as a quick overview of all artifacts and allows for in-depth
        filtering. However, designers mostly interacted with the list view and <b>overlooked the tab
        for the graph view</b> in the sidebar, as it was the default page when accessing the Artifact
        Repository. To make the option of using two different view modes more salient, they were
        merged onto the same page. For that, the switch to <b>toggle between the two view modes</b>
        was moved to the top bar, where the filtering options are located, too.
      </p>
    </section>
    <div class="cinema">
      <div class="cinema-head -mb-8">
        <p><span class="font-inria italic">Adjusted</span> Views after Iteration 2</p>
      </div>
      <div class="cinema-slider">
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
      <p>The tightly defined structure limits the flexibility to incorporate individual capturing practices.
        However, participants stated that design decisions are far more complex than what can be covered
        by the proposed interface.</p>

      <p class="quote">
        <span class="text-lg">"The documents I can link make sense, but I think I need more space to say 'I decided this because...' and who decided it? They had that opinion and they had this opinion and we agreed on it."</span>
        <br>
        <span class="opacity-50">Participant I6 in the final interview study</span>
      </p>

      <p>A designer stated that a certain degree of effort might be needed when initially creating the design
        system with additional design rationales. However, they thought that the <b>guided process
        provides a supportive basis</b> for this task to reduce the effort required. I3 pointed out that
        design systems are usually a side-project, managed by a small team and thus the required
        effort to document rationales cannot be invested. Similarly, R2 raised the question,
        to which level of detail the <b>documentation is consuming more time compared to what it
        would save in the long term</b>.
        Nevertheless, the interviewees also reported that available documentation is not always actively
        used in the daily work life, further reducing the value of documentation. I4 claimed to have created detailed design documentation before, but experienced that other design
        colleagues still did not want to read it. If this leads to documentation scarcely being
        updated, it could cause a vicious cycle:</p>

      <p class="quote">
        <span class="text-lg">"I'm telling you, the case is 90% of users no longer go to the documentation page, they just stay in Figma. And it can happen that such things become outdated. And outdated content is always the beginning of the end of the design system. So I think it's nice to have something like this, but I think it places demands on design system teams that probably not many can fulfill.”</span>
        <br>
        <span class="opacity-50">Participant I3 in the final interview study</span>
      </p>

      <p>
        Additionally to the qualitative interview, the interviewees were asked to fill out the short
        version of the User Experience Questionnaire. The pragmatic quality scale scores on average one point lower than the hedonic quality
        scale. Nevertheless, the scales show a positive trend both individually
        and overall.
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
      <collapse headline="Design System as a Centralized Design Knowledge Repository">The interface was <b>perceived as a centralized knowledge repository</b> that stores design
        rationales and is accessible for all parties involved in design. <web-link url="https://doi.org/10.1145/3369457.3369476">Rasmussen et al. (2020)</web-link>
        have found that designers are frustrated by having to search for relevant information from
        a variety of tools, as there are no standardized tools for the purpose of design documentation.
        As the participants stated that they work with design systems anyway, the concept
        of <b>extending design systems</b> is therefore not an additional tool that might cause further
        frustration, but rather combines different tools.
      </collapse>
      <collapse headline="Documentation Templates Guide through the Process">
        With regard to the degree of guidance provided by the process, it can be summarized that the <b>participants perceived guidance</b>
        in the rationale documentation process, in particular <b>through the predefined structure
        of the template</b> and the interactive process. Additionally, the participants believed that they would be able to navigate
        the system more flawlessly after a short period of using the system through the structured
        process. In combination with the on average positive quantitative results and qualitative
        comments, it can be assumed that the designers acknowledged the novelty of the concept
        as one of the reasons for the initial comprehension issues.
      </collapse>
      <collapse headline="Additional Effort Inhibits the Documentation Practice">
        The most controversial topic was the applicability of the concept in terms of the <b>cost-benefit
        ratio</b> in the context of everyday design work. One of the key concerns was the
        effort needed to document design rationales, as some decisions can be defined in arbitrarily
        small steps, which may <b>reduce the level of productivity</b> rather than saving time in the long
        term. This observation cannot be <b>validated by the results of the UEQ-S</b>, as the evaluation
        of the system tends more towards “efficient”. On the contrary, the qualitative results show that the tool requires too much effort.
        It is unclear whether this is due to the template itself or the implementation in the interface.
      </collapse>
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
      <div class="flex border-gray-200 border p-4 rounded-xl gap-4 mb-4">
        <work-traceable-ds-bubble class="flex-shrink-0" number="1" />
        <div>
          <p class="font-bold text-xl">Lack of task context might impact study result</p>
          <p>Especially when confronting participants with complex tasks during a user study, a scenario description, for example, should be provided so that they can empathize with the context.</p>
        </div>
      </div>

      <div class="flex border-gray-200 border p-4 rounded-xl gap-4 mb-4">
        <work-traceable-ds-bubble class="flex-shrink-0" number="2" />
        <div>
          <p class="font-bold text-xl">Diversify the sample</p>
          <p>It was noticeable that the views and statements varied greatly depending on how much professional experience the participants had. While more experienced designers tended to argue pragmatically, novices were more easily enthused by the topic.</p>
        </div>
      </div>

      <div class="flex border-gray-200 border p-4 rounded-xl gap-4">
        <work-traceable-ds-bubble class="flex-shrink-0" number="3" />
        <div>
          <p class="font-bold text-xl">Do not pre-fill input fields</p>
          <p>At the moment it is not possible to integrate interactive input fields in Figma without further ado. One attempt was to pre-fill the fields with one click. However, this resulted in the participants focussing too much on the predefined content and losing focus on their own points.</p>
        </div>
      </div>
      <div class="bg-gray-100 py-4 px-6 rounded-xl mt-16 my-8">
        <p class="text-xl font-bold opacity-80 my-1">There's more to it</p>
        <p>This article only scratches the surface of the thoughts and actions behind what was realised in the project. <a class="decoration-dotted underline-offset-4 underline" href="#contact">Let's talk</a> if you're interested in more details!</p>
      </div>
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
        content: 'https://chrisrock.rocks/seo/projects/tds.png'
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
b{
  font-weight: 500;
}

.cinema{
  background-color: #EFF3FA;
  @apply ml-8 lg:ml-32 rounded-lg px-8 md:px-16;
}

.cinema-head{
  @apply pt-8 text-xl;
}

.cinema-slider{

  @apply flex gap-8 overflow-x-scroll snap-center scroll-smooth snap-x snap-proximity;
}

.section-m{
  @apply max-w-prose m-auto py-12 md:px-0 px-4 leading-loose;
}

.quote{
  border-left: 16px solid rgba(255, 0, 92, 1);
  @apply pl-4 my-6;
}

ol {
  list-style: none;
  counter-reset: my-awesome-counter;
}
ol li {
  counter-increment: my-awesome-counter;
  @apply inline-flex text-left indent-0 my-2;
}
ol li::before {
  content: "0" counter(my-awesome-counter);
  font-family: "Inria Serif", serif;
  font-style: italic;
  color: rgba(255, 0, 92, 1);
  @apply text-4xl mr-4;
}

h3{
  @apply mt-6;
}

.rq-block{
  @apply m-4 p-4 border border-gray-200 rounded-xl;
}

.rq-block>a{
  @apply underline decoration-dotted underline-offset-4 opacity-60;
}
</style>
