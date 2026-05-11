<template>
  <div class="relative">
    <display
      color="#222222"
      color-light="222222"
      title="The Traceable Design System"
      img-url="work/traceable-ds/showcase-display.png"
      text-color="#222222"
      subtitle="Integrating Design Rationale into Design Systems"
      description="The documentation of design decisions is a common practice across various disciplines to capture the decision-making process and promote reflection on the decisions made. Design systems are becoming an increasingly prominent tool for documenting such design decisions. This research project explores the extent to which the incorporation of design rationale into design systems can facilitate the traceability of design decisions."
      role="UX & Visual Designer, Researcher"
      timespan="February - August 2024"
      context="Master Thesis"
      keywords="Design Systems, Design Research, Prototyping, Interview Study"
    />
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
  </div>
</template>

<script>
import Display from "~/components/work/display";
import Card from "~/components/work/card";
import FigureComponent from "~/components/figureComponent";
import WebLink from "~/components/structuralComponents/webLink";
import Collapse from "~/components/structuralComponents/collapse.vue";


export default {
  name: "sparkysbarn-page",
  components: {Collapse, Card, FigureComponent, WebLink, Display},
  head: {
    title: 'SparkysBarn –',
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
