<template>
  <div class="relative">
    <display
      color="#222222"
      color-light="rgba(76, 91, 99, 0.025)"
      title="ÜBERSTUNDE – Afterwork Event Platform"
      img-url="work/ueberstunde/showcase-display.png"
      text-color="#fff"
      subtitle="Community & Event Managment Platform for one of Germany's most popular Networking Event organizers"
      description="ÜBERSTUNDE is a well-known organiser of after-work events, with a presence in more than 10 cities across Germany. In order to address the requirements of this expanding franchise, a tailored platform has been developed for the management of events and the establishment of a community, both in online and offline spaces."
      role="UX Designer & Engineer"
      timespan="June 2025 - today"
      context="Agency project @ ventureon"
      keywords="Full Stack Development, API Design, UX Design, Stripe Integration"
    />
    <toc />
    <section class="section-m">
      <p class="text-gray-400">Last updated: 11.05.2026</p>
      <div class="bg-gray-100 p-8 rounded-xl my-4 flex flex-col gap-2">
        <span class="text-xl font-bold">Have a look</span>
        <span>See for yourself what the ÜBERSTUNDE community event platform has to offer. It's where events are showcased and tickets are sold.</span>
        <a href="" target="_blank" class="font-bold px-6 py-2 mt-6 rounded-md mb-2 text-white w-fit mx-auto bg-[#E94F11] hover:bg-[#EE7E51]">Visit the ÜBERSTUNDE community platform</a>
      </div>
    </section>
    <section class="section-m">
      <h2 class="font-bold" id="quick-stats">Quick stats</h2>
      <div class="flex flex-col gap-4">
        <p>Here are a few statistics on what we've been able to achieve by designing and implementing the new system.</p>
        <div class="flex flex-col bg-gray-100 p-8 rounded-md gap-1">
          <span class="text-2xl font-bold">10% increase in revenue</span>
          <span>through the introduction of ticket phases</span>
        </div>
        <div class="flex flex-col bg-gray-100 p-8 rounded-md gap-1">
          <span class="text-2xl font-bold">74% time savings</span>
          <span>in event management by automating processes instead of manually cross-checking participants in Excel spreadsheets</span>
        </div>
      </div>
    </section>
    <section class="section-m">
      <h2 id="ueberstunde-ticket-phases" class="font-bold">Ticket Phases</h2>
      The next step in event planning was the functionality of creating "Save the date" events in order to communicate future event dates without revealing locations.
      To make attendance at these events more predictable and encourage early ticket purchases, we have introduced ticket phases. This allows community members to save on admission by purchasing tickets in advance.
      <figure-component
          class="mx-auto w-full"
          src="img/work/ueberstunde/ueberstunde-screen-phases-1.png"
          alt=""
          figcaption=""
        />
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
  name: "ueberstunde-page",
  components: {Collapse, Card, FigureComponent, WebLink, Display},
  head: {
    title: 'ÜBERSTUNDE –',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Community & Event Managment Platform for one of Germany\'s most popular Afterwork event organizers'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://chrisrock.rocks/seo/projects/tds.png'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        keywords: "networking event, afterwork, business, linkedin, ux design, scalable community platform"
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
