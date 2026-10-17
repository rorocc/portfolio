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
    </section>
    <section class="section-m">
      <h2 class="font-bold" id="main-issues">Main issues</h2>
      <div class="flex flex-col gap-4">
        <p>Before the new platform, running a growing event franchise hit three walls.</p>
        <div class="issue-card">
          <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
          </span>
          <div class="flex flex-col gap-1">
            <span class="text-2xl font-bold">Tools all over the place</span>
            <span>Planning and management were spread across Excel, Brevo, Canva, Squarespace, Stripe and more.</span>
          </div>
        </div>
        <div class="issue-card">
          <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" /><path d="M17 8v6" /><path d="M14 11h6" /></svg>
          </span>
          <div class="flex flex-col gap-1">
            <span class="text-2xl font-bold">No room to scale</span>
            <span>Many separate logins and no role management kept external franchisees from being connected properly and working on their own.</span>
          </div>
        </div>
        <div class="issue-card">
          <span class="icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
          </span>
          <div class="flex flex-col gap-1">
            <span class="text-2xl font-bold">High effort, high fees</span>
            <span>Every task meant manual work across tools, and every tool came with its own fee.</span>
          </div>
        </div>
      </div>
    </section>
    <section class="section-m">
      <h2 class="font-bold" id="quick-stats">Quick stats</h2>
      <p>What the new system changed, in numbers and in daily work.</p>
      <div class="stat-figures">
        <div class="flex flex-col gap-2">
          <span class="figure">15%</span>
          <span><b>more revenue</b> through the introduction of ticket phases</span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="figure">74%</span>
          <span><b>time saved</b> in event management, with automated processes instead of cross-checking guests in Excel</span>
        </div>
      </div>
      <ul class="stat-gains">
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" /></svg>
          <div class="flex flex-col gap-1">
            <span class="text-lg font-semibold">Ready for franchisees</span>
            <span>External franchisees work fully inside the system: they manage their events on their own, see memberships and send newsletters straight from the platform.</span>
          </div>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" /></svg>
          <div class="flex flex-col gap-1">
            <span class="text-lg font-semibold">One single source of truth</span>
            <span>Everyone works from the same data. Through APIs, the platform gets everything for ticketing, billing, event statistics and sending emails.</span>
          </div>
        </li>
      </ul>
    </section>
    <issue
      id="issue-01"
      label="Deep dive"
      title="Countering planning uncertainty with design"
      :steps="issueSteps"
    >
      <template #intro>
        <p>How early ticket sales give an organiser of many events per month more certainty for planning, long before the details of an event are public.</p>
      </template>
      <template #problem>
        <p>For an organiser running many events every month, planning certainty is half the battle, yet usually out of reach. How well an event will sell stays unclear until it can be announced, and that only happens a few weeks before the date, once every detail is fixed. Until then, the organiser often has to pay the venue and other partners such as catering, DJs and photographers in advance.</p>
      </template>
      <template #assumptions>
        <p>The idea rests on three assumptions:</p>
        <ul class="flex flex-col gap-2 mt-4">
          <li><b>A1</b> — Guests will buy a ticket before they know where the event takes place, as long as it is cheaper. Festivals already do this with blind tickets, sold before the line-up is announced.</li>
          <li><b>A2</b> — Revenue from early sales takes pressure off the payments the organiser has to make in advance.</li>
          <li><b>A3</b> — Early sales are a reliable enough signal to plan staff, catering and the size of the venue.</li>
        </ul>
      </template>
      <template #concept>
        <p>We introduced “Save the date” events: an event can go on presale before it is announced where it takes place and what exactly will happen. In return for buying blind, guests pay a lower price, just like blind tickets at festivals.</p>
        <p class="mt-4">We followed the Double Diamond: first the requirements were explored and defined, then we opened up the solution space with many different variants and narrowed them down to the best elements of each.</p>
        <figure-component
          class="breakout"
          src="img/work/ueberstunde/phases-dd.png"
          classes="rounded-lg"
          alt="Double Diamond of the process: Discover with stakeholder interviews, user flow analysis and state-of-the-art research, Define with design principles, Develop with sketches, wireframes, prototypes and AI supported ideation, Deliver with the implementation"
          figcaption="Double Diamond: understand and define the problem, then open up the solution space and narrow it down to the best elements"
        />
        <div class="flex flex-col gap-6">
          <div>
            <p class="font-medium"><span class="text-gray-500 mr-2">1</span>Discover</p>
            <p>Stakeholder interviews, an analysis of the existing user flows and state-of-the-art research to understand the requirements: what the organiser can afford financially, the time frames of planning an event, and how costs are split across the different memberships.</p>
          </div>
          <div>
            <p class="font-medium"><span class="text-gray-500 mr-2">2</span>Define</p>
            <p>Condensing the findings into design principles that every variant had to follow.</p>
          </div>
          <div>
            <p class="font-medium"><span class="text-gray-500 mr-2">3</span>Develop</p>
            <p>Sketches, wireframes and prototypes, supported by AI-assisted ideation: a wide range of first drafts was generated with Figma Make and Claude Code.</p>
            <tool-list :tools="['Figma Make', 'Claude Code']" class="mt-3" />
          </div>
          <div>
            <p class="font-medium"><span class="text-gray-500 mr-2">4</span>Deliver</p>
            <p>Testing the favoured variants on the live site and discussing them with the stakeholders, then refining the final design by hand, combining the best elements of the variants, and implementing it.</p>
          </div>
        </div>
        <figure-component
          class="breakout"
          src="img/work/ueberstunde/phases-sketches.png"
          classes="rounded-lg"
          alt="Concept sketches of the ticket component in several variants, showing sale phases from blind phase to late bird and prices for guests and club members, annotated with sticky notes on open design questions"
          figcaption="Early sketches of the ticket phases. Open questions: interactive or purely visual, placed in the hero or next to the event details, relative or absolute savings, and how to create scarcity with expired phases and countdown badges."
        />
      </template>
      <template #implementation>
        <tool-list :tools="['Nordcraft', 'Xano', 'Stripe']" class="mb-4" />
        <p>We built the solution with Nordcraft for the interface, Xano for the database and API, and Stripe for payments.</p>
        <ul class="flex flex-col gap-2 mt-4 pl-5 list-disc">
          <li>Management options were set up both on the customer side and in the internal dashboard.</li>
          <li>The database was extended with a phase structure that is taken into account with every purchase.</li>
          <li>For every phase and user group, a separate Stripe price is stored on the product.</li>
          <li>Tickets are bought through a Stripe Checkout Session.</li>
        </ul>
        <h4 class="text-lg font-semibold leading-snug mt-10 mb-2">Exploration &amp; scarcity</h4>
        <p>All phases stay visible in the ticket module, not only the current one. Guests can tap past and upcoming phases to explore them: they see what they have already missed on price, and how much more a ticket will cost later, which is a reason to buy now. A badge on the current phase shows how long it still runs, which adds scarcity.</p>
        <ticket-phases
          class="breakout mt-10"
          figcaption="The ticket module on the event page. The active sale phase moves into view, and the price counts to its new amount."
        />
        <h4 class="text-lg font-semibold leading-snug mt-10 mb-2">Buying always in sight</h4>
        <p>The way to buy a ticket is always in view. In the hero, a call to action jumps straight to the ticket module. From there, the module scrolls along with the page while guests read the event details next to it. The details make the event appealing, and the purchase is never more than one click away.</p>
        <p class="mt-4">The hero button sits exactly where the old buy button was, with the same look and label. Guests did not have to relearn anything, so we expected no drop in conversion or click-through rate, and none showed up.</p>
        <figure class="breakout my-12">
          <video
            class="w-full rounded-lg"
            src="/videos/ueberstunde-ticket-module.mp4"
            autoplay
            muted
            loop
            playsinline
            preload="metadata"
            aria-label="Screen recording of a live event page on ueberstunde.com: the ticket module stays in view while the page scrolls, then the Regular and Last Minute phases are selected and the price changes."
          />
          <figcaption class="opacity-50 text-center pt-4 max-w-prose mx-auto">
            Live on ueberstunde.com: the ticket module scrolls along with the event details, and every phase shows its own price.
          </figcaption>
        </figure>
      </template>
      <template #outcome>
        <p>Guests save money, and the organiser earns revenue before the event has even started.</p>
        <div class="breakout grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4 mt-10">
          <div class="outcome-card">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>
            </span>
            <span class="title">+15% revenue</span>
            <p>through tiered ticket prices across the sale phases</p>
          </div>
          <div class="outcome-card">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M14 15H9" /><path d="M11 13l-2 2 2 2" /></svg>
            </span>
            <span class="title">4 weeks earlier</span>
            <p>Revenue comes in four weeks earlier than before, because tickets go on sale before the event is announced</p>
          </div>
          <div class="outcome-card">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" /><circle cx="17" cy="9" r="2.8" /><path d="M16.5 14.6c2.7.2 4.5 2 5 5.4" /></svg>
            </span>
            <span class="title">Long-term planning</span>
            <p>Demand is visible weeks ahead, so staff, catering and venue size can be planned early</p>
          </div>
        </div>
      </template>
    </issue>
    <section class="section-m">
      <div class="have-a-look p-8 rounded-xl my-4 flex flex-col gap-2">
        <img src="~/assets/img/work/ueberstunde/ueberstunde-logo.png" alt="ÜBERSTUNDE" class="h-10 w-auto self-start mb-4">
        <span class="text-xl font-bold">Have a look</span>
        <span class="opacity-75">See for yourself what the ÜBERSTUNDE community event platform has to offer. It's where events are showcased and tickets are sold.</span>
        <a href="https://ueberstunde.com" target="_blank" rel="noopener" class="ueberstunde-button mt-6 mb-2 mx-auto">Visit the ÜBERSTUNDE community platform</a>
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
import Issue from "~/components/work/issue";
import ToolList from "~/components/work/toolList";
import TicketPhases from "~/components/work/ticketPhases";


export default {
  name: "ueberstunde-page",
  components: {Collapse, Card, FigureComponent, WebLink, Display, Issue, ToolList, TicketPhases},
  data() {
    return {
      issueSteps: [
        {id: "problem", title: "Problem"},
        {id: "assumptions", title: "Assumptions"},
        {id: "concept", title: "Concept"},
        {id: "implementation", title: "Implementation"},
        {id: "outcome", title: "Outcome"}
      ]
    }
  },
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
/* quick stats: two big figures, then what the system enables */
.stat-figures{
  @apply grid sm:grid-cols-2 grid-cols-1 gap-8 mt-8 pb-8 border-b border-gray-200;
}

.stat-figures .figure{
  color: #E94F11;
  @apply text-7xl font-bold leading-none tracking-tighter;
}

.stat-gains{
  @apply flex flex-col gap-6 pt-8;
}

.stat-gains li{
  @apply flex gap-4;
}

.stat-gains svg{
  color: #E94F11;
  @apply flex-shrink-0 w-6 h-6 mt-1;
}

/* main issues: quick-stats cards with an icon in a light circle */
.issue-card{
  @apply flex items-start gap-5 bg-gray-100 p-8 rounded-md;
}

/* staggered on wider screens: the first card sticks out to the left, the last one to the right */
@screen md{
  .issue-card:nth-of-type(1){
    margin-left: -3rem;
    margin-right: 3rem;
  }

  .issue-card:nth-of-type(3){
    margin-left: 3rem;
    margin-right: -3rem;
  }
}

.issue-card .icon{
  color: #E94F11;
  @apply flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white;
}

.issue-card .icon svg{
  @apply w-6 h-6;
}

/* "Have a look" block in the ÜBERSTUNDE look: dark, orange button with a cut corner */
.have-a-look{
  background-color: #0a0a0a;
  color: #f8f9fb;
}

.ueberstunde-button{
  display: inline-block;
  width: fit-content;
  padding: 0.75rem 1.5rem;
  background-color: #e94f10;
  color: #f8f9fb;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
  transition: background-color 0.2s ease;
}

.ueberstunde-button:hover,
.ueberstunde-button:focus-visible{
  background-color: #ee7e51;
}

/* outcome cards, styled like the principle cards on the AID case */
/* each card spans three rows of the shared grid (subgrid), so icons, titles and texts line up across cards */
.outcome-card{
  background-color: #222222;
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid;
  row-gap: 1rem;
  align-content: start;
  @apply px-6 py-10 rounded-3xl text-center text-white;
}

.outcome-card .icon{
  color: #E94F11;
}

.outcome-card .icon svg{
  @apply mx-auto lg:w-12 w-10;
}

.outcome-card .title{
  @apply lg:text-2xl text-xl font-bold uppercase tracking-wide;
}

.outcome-card p{
  @apply opacity-75 leading-relaxed;
}

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
