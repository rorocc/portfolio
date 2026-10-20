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
    >
      <ul class="stat-cards" aria-label="Key results">
        <li class="stat-card">
          <span class="value">4.9 days</span>
          <span class="title">Earlier ticket purchases</span>
          <span class="text">Tickets are now bought around 14 days before the event, thanks to the introduction of ticket phases</span>
        </li>
        <li class="stat-card">
          <span class="value">74%</span>
          <span class="title">Time saved</span>
          <span class="text">in event management, with automated processes instead of cross-checking guests in Excel</span>
        </li>
        <li class="stat-card">
          <span class="value">Self-service</span>
          <span class="title">Ready for franchisees</span>
          <span class="text">External franchisees manage their events, see memberships and send newsletters straight from the platform.</span>
        </li>
      </ul>
    </display>
    <toc />
    <!-- from md up almost no top padding, so the date sits level with the TOC button (hidden on mobile) -->
    <section class="section-m md:!pt-1">
      <p class="text-gray-400">Last updated: 11.05.2026</p>
    </section>
    <section class="section-m">
      <h2 class="font-bold" id="main-issues">Main issues</h2>
      <p>What started as an afterwork event in Leipzig quickly expanded to Dresden and Berlin in the beginning. The previous ÜBERSTUNDE website, put together with a website builder, soon reached its limits. Editing it by hand for every city and every event, and managing memberships in Excel, quickly turned into a barrier to growth.</p>
      <ul class="issue-list">
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12" /><path d="M18 6L6 18" /></svg>
          <p><b>Tools all over the place.</b> Planning and management were spread across Excel, Brevo, Canva, Squarespace, Stripe and more.</p>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12" /><path d="M18 6L6 18" /></svg>
          <p><b>No room to scale.</b> Many separate logins and no role management kept external franchisees from being connected properly and working on their own.</p>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12" /><path d="M18 6L6 18" /></svg>
          <p><b>High effort, high fees.</b> Every task meant manual work across tools, and every tool came with its own fee.</p>
        </li>
      </ul>
    </section>
    <section class="section-m">
      <h2 class="font-bold" id="features">Features</h2>
      <p>After the initial launch of the new platform, I looked after it closely for over a year. I kept thinking ahead about how to streamline the internal management through the dashboard, and how to make the contact with guests through the website and emails a better experience. As a result, <b>I planned, designed and built the following features</b> over that time together with the ÜBERSTUNDE Leipzig team.</p>
      <div class="feature-cards">
        <div class="feature-card">
          <div class="feature-media">
            <video
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              aria-label="Screen recording of an event page: scrolling to the event insights, hovering a segment of the industries chart, and on to the recommendations for other events on the same day."
            >
              <source src="/videos/ueberstunde-event-page.webm" type="video/webm">
              <source src="/videos/ueberstunde-event-page.mp4" type="video/mp4">
            </video>
          </div>
          <div class="feature-text">
            <h3>Optimised event detail page</h3>
            <p>Event data is managed in the dashboard and shown consistently on every event page, with ticket phases, insights into who is attending, and recommendations for other events.</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-media">
            <video
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              aria-label="Screen recording of the member area: from the community requests to the KLUB members, searching for a member, opening the onboarding steps with the welcome step, and showing the KLUB card. Other members' names and details are fictitious."
            >
              <source src="/videos/ueberstunde-members.webm" type="video/webm">
              <source src="/videos/ueberstunde-members.mp4" type="video/mp4">
            </video>
            <span class="media-badge">Fictitious data</span>
          </div>
          <div class="feature-text">
            <h3>Member overview</h3>
            <p>Accept new members, view profiles and see KLUB memberships, including the subscription period and onboarding status.</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-media">
            <img src="~/assets/img/work/ueberstunde/feature-billing.png" alt="Billing page with key figures, KLUB memberships, payout calculation and the form for adding a manual booking, shown with placeholder amounts">
            <span class="media-badge">Fictitious data</span>
          </div>
          <div class="feature-text">
            <h3>Billing dashboard</h3>
            <p>All data on ticket sales, memberships and sponsorships comes together summarized in one place. Billing gets much simpler, because no data has to be copied together from different sources and reports.</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-media">
            <video
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              aria-label="Screen recording of the newsletter editor: changing the subject while the phone preview updates, moving through the content, switching on the upcoming global events block and scrolling the preview down to the events."
            >
              <source src="/videos/ueberstunde-newsletter.webm" type="video/webm">
              <source src="/videos/ueberstunde-newsletter.mp4" type="video/mp4">
            </video>
          </div>
          <div class="feature-text">
            <h3>Newsletter tool</h3>
            <p>Instead of an external tool with separate accounts, every ÜBERSTUNDE partner structures and sends newsletters right in the dashboard. Headquarters can see which marketing activities ran and how they affected ticket sales.</p>
          </div>
        </div>
        <div class="feature-card">
          <img src="~/assets/img/work/ueberstunde/feature-mail-auto.png" alt="Automated internal email about an unpaid KLUB membership, listing the member, the KLUB type and the open onboarding and payment steps">
          <div class="feature-text">
            <h3>Email automations</h3>
            <p>Optimised email marketing flows: reminder emails to the guest and/or the team when a ticket purchase or membership is still incomplete. On the day of the event, the ticket is sent again, so guests spend less time searching for it at check-in.</p>
          </div>
        </div>
      </div>
    </section>
    <issue
      id="issue-01"
      label="Deep dive"
      title="Countering planning uncertainty with design"
      :steps="issueSteps"
    >
      <template #intro>
        <p>ÜBERSTUNDE runs a <b class="!font-semibold">large number of events every month</b>, sometimes even every week. Under the previous concept, tickets could <b class="!font-semibold">only go on sale once an event was fully planned</b> and its details could be shared. In practice, that meant no income until roughly four weeks before the event.</p>
        <p class="mt-4">This not only restricted the organiser financially, it also made it <b class="!font-semibold">hard to plan capacity and staffing</b> in advance.</p>
        <p class="mt-4">To tackle the problem, I followed the <web-link url="https://www.designcouncil.org.uk/resources/the-double-diamond/">Double Diamond</web-link> process, whose four phases also structure this deep dive.</p>
        <figure-component
          class="breakout"
          src="img/work/ueberstunde/phases-dd.png"
          classes="rounded-lg"
          alt="Double Diamond of the process: Discover with stakeholder interviews, user flow analysis and state-of-the-art research, Define with design principles, Develop with sketches, wireframes, prototypes and AI supported ideation, Deliver with the implementation"
          figcaption="Double Diamond: understand and define the problem, then open up the solution space and narrow it down to the best elements"
        />
      </template>
      <template #discover>
        <p>I ran stakeholder interviews, analysed the existing user flows and did state-of-the-art research to understand the requirements: what the organiser can afford financially, the time frames of planning an event, and how costs are split across the different memberships.</p>
        <p class="mt-4">The first step showed that some costs arise long before the actual income. The venue and partners such as catering, DJs and photographers often have to be paid in advance, while it stays unclear how well the event will sell.</p>
        <p class="mt-4"><b class="!font-semibold">Key finding:</b> this is not a problem that a redesign of the interface alone can solve, because it is deeply tied to the sales and event management process. Under the previous process, an event could only be published, and ticket sales could only start, once all its details were in place and agreed with the event partners. <b class="!font-semibold">As long as the process is structured this way, planning will always be uncertain</b>, and the organiser will have to pay for the event up front without any income.</p>
        <p class="mt-4">I learned this in conversations with one of the ÜBERSTUNDE managing directors, and the internal figures confirm it: half of all tickets were bought in the last nine days before the event.</p>
        <p class="mt-4">Looking at similar platforms in the industry showed that <b class="!font-semibold">ticket phases are a common way</b> to move ticket sales forward. Organisers accept a trade-off: they announce the event without details such as the line-up or the exact location, and lower the ticket price in return. As the event gets closer or more details are released, the next phase starts and the price goes up.</p>
        <p class="mt-4">At first glance, this concept only partly fits ÜBERSTUNDE: there is usually no clear event agenda to reveal step by step, and depending on the type of membership, prices need to be discounted differently.</p>
        <figure-component
          class="breakout !mt-8 !mb-4"
          src="img/work/ueberstunde/phases-inspo.png"
          classes="rounded-lg"
          alt="Ticket modules from other event platforms, from festivals to party ticketing, annotated with sticky notes: past phases listed one below the other take up a lot of space, inactive phases could be greyed out, a date selector could double as a phase selector, and the open challenge of showing four to five phases on mobile without hurting conversion"
          figcaption="State-of-the-art research: how other event platforms show ticket phases and price tiers, and the open questions they raised."
        />
      </template>
      <template #define>
        <p>From the findings of the Discover phase, I derived four how-might-we questions that set the frame for the more detailed work:</p>
        <table class="hmw-table">
          <thead>
            <tr>
              <th scope="col">Focus</th>
              <th scope="col">How might we …</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Awareness</td>
              <td>… <b class="!font-semibold">create awareness for upcoming events</b>, even before they are fully planned?</td>
            </tr>
            <tr>
              <td>Appeal</td>
              <td>… <b class="!font-semibold">make events attractive</b> even before all their details are known?</td>
            </tr>
            <tr>
              <td>Reward</td>
              <td>… <b class="!font-semibold">reward guests</b> for committing early?</td>
            </tr>
            <tr>
              <td>Clarity</td>
              <td>… <b class="!font-semibold">help guests understand the extra price information</b> without getting in the way of buying a ticket?</td>
            </tr>
          </tbody>
        </table>
        <p class="mt-8">Together with the ÜBERSTUNDE team, we answered these questions with ticket phases and save-the-date events, meaning events published before all their details are revealed.</p>
        <h4 class="text-lg font-semibold leading-snug mt-10 mb-2">Assumptions</h4>
        <p>The idea rests on three assumptions:</p>
        <ul class="assumption-list">
          <li>
            <span class="marker"><svg viewBox="0 0 100 100" role="img" aria-label="A1"><path :d="badgePath" /><text x="50" y="51">A1</text></svg></span>
            <p>Guests will <b>buy a ticket before they know where the event takes place</b>, as long as it is cheaper. Festivals already do this with blind tickets, sold before the line-up is announced.</p>
          </li>
          <li>
            <span class="marker"><svg viewBox="0 0 100 100" role="img" aria-label="A2"><path :d="badgePath" /><text x="50" y="51">A2</text></svg></span>
            <p>Revenue from <b>early sales takes pressure off</b> the payments the organiser has to make in advance.</p>
          </li>
          <li>
            <span class="marker"><svg viewBox="0 0 100 100" role="img" aria-label="A3"><path :d="badgePath" /><text x="50" y="51">A3</text></svg></span>
            <p>Early sales are a reliable enough signal to plan staff, catering and the size of the venue.</p>
          </li>
        </ul>
        <h4 class="text-lg font-semibold leading-snug mt-10 mb-2">Requirements</h4>
        <p>Any solution had to meet these requirements from both sides:</p>
        <div class="req-cards">
          <div class="req-card">
            <p class="req-head"><span class="req-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></svg></span>Business</p>
            <ul>
              <li><b>Three prices have to be visible</b>: for guests and the community, for KLUB White and for KLUB Black members.</li>
              <li><b>Events without ticket phases have to keep working</b>, for example KLUB events that only members can attend.</li>
              <li>KLUB members pay the <b>same price across all phases</b>.</li>
              <li>The new checkout <b>must not hurt conversion</b>.</li>
            </ul>
          </div>
          <div class="req-card">
            <p class="req-head"><span class="req-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" /><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8" /><path d="M18 14.8c2 .7 3.2 2.4 3.6 5.2" /></svg></span>Guests</p>
            <ul>
              <li>The journey to buying a ticket <b>changes as little as possible</b>.</li>
              <li>Phases <b>need no extra effort from guests</b> and add no clicks on the way to a ticket.</li>
              <li>The checkout stays simple, because the ÜBERSTUNDE <b>audience is very diverse</b>.</li>
            </ul>
          </div>
        </div>
      </template>
      <template #develop>
        <p>I worked with sketches, wireframes and prototypes, supported by AI-assisted ideation: I generated a wide range of first drafts with Figma Make and Claude Code. Small interactive prototypes of the variants helped to find the strongest ones, tested with the ÜBERSTUNDE team and with guests. I then merged the best elements of the AI drafts with my own designs and adapted them to the ÜBERSTUNDE corporate identity, which the AI struggled to get right.</p>
        <tool-list :tools="['Human Brainpower', 'Figma', 'Figma Make', 'Claude Code', 'Mobbin']" class="mt-3" />
        <figure-component
          class="breakout !mt-8 !mb-4"
          src="img/work/ueberstunde/phases-sketches.png"
          classes="rounded-lg"
          alt="Concept sketches of the ticket component in several variants, showing sale phases from blind phase to late bird and prices for guests and club members, annotated with sticky notes on open design questions"
          figcaption="Early sketches of the ticket phases."
        />
      </template>
      <template #deliver>
        <tool-list :tools="['Nordcraft', 'Xano', 'Stripe']" class="mb-4" />
        <p>I tested the favoured variants on the live site and discussed them with the stakeholders, then refined the final design by hand, combined the best elements of the variants, and implemented it.</p>
        <p class="mt-4">I built the ticket phases with Nordcraft for the website interface, Xano for the database and API, and Stripe for payments. For this, I extended the database with a phase table that the price table references. It sits directly on top of the existing database structure, without a complex migration.</p>
        <p class="mt-4">When a ticket is bought, the correct price is fetched and passed to an externally hosted Stripe Checkout Session, where the purchase takes place.</p>
        <p class="mt-4">I also extended the ÜBERSTUNDE dashboard with a way to manage ticket phases. Since the technical skills of ÜBERSTUNDE partners vary widely, phases are managed in a simple table, and a single switch turns them on or off for an event.</p>
        <figure-component
          class="!mt-8 !mb-4"
          src="img/work/ueberstunde/phases-dashboard.png"
          classes="rounded-lg"
          alt="Event settings in the ÜBERSTUNDE dashboard: the switch &quot;Ticketphasen verwenden&quot; is on, with a price recommendation below it, and a table sets the Early Bird and Regular prices for community members and guests, KLUB White and KLUB Black. On top sits a save-the-date event card for ÜBERSTUNDE Osnabrück that already sells tickets for 29 euros while only saying where the event will be revealed soon."
          figcaption="Managing ticket phases in the dashboard, with KLUB prices calculated automatically because they follow a fixed discount."
        />
        <h4 class="text-lg font-semibold leading-snug mt-10 mb-2">Exploration &amp; scarcity</h4>
        <p>All phases stay visible in the ticket module, not only the current one. Guests can tap past and upcoming phases to explore them: they see what they have already missed on price, and how much more a ticket will cost later, which is a reason to buy now. A badge on the current phase shows how long it still runs, which adds scarcity.</p>
        <ticket-phases
          class="breakout mt-10"
          figcaption="The ticket module on the event page. The active sale phase moves into view, and the price counts to its new amount."
        />
        <h4 class="text-lg font-semibold leading-snug mt-10 mb-2">Buying always in sight</h4>
        <p>The way to buy a ticket is always in view. In the hero, a call to action jumps straight to the ticket module. From there, the module scrolls along with the page while guests read the event details next to it. The details make the event appealing, and the purchase is never more than one click away.</p>
        <p class="mt-4">The hero button sits exactly where the old buy button was, with the same look and label. Guests did not have to relearn anything.</p>
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
            The ticket module scrolls along with the event details, and every phase shows its own price.
          </figcaption>
        </figure>
      </template>
      <template #outcome>
        <h4 class="text-lg font-semibold leading-snug mb-2">Results</h4>
        <p>To find out whether the ticket phases reach the intended goals and so confirm the assumptions, I <b class="!font-semibold">compared the ticket sales of 76 events</b> between January and October 2026: 28 events before the feature was released and 48 after. Because the ticket phases were added to events step by step, May is left out of both groups.</p>
        <p class="mt-4">Tickets are bought earlier. The <b class="!font-semibold">median lead time rose from 9.3 to 14.2 days</b>, a shift of 4.9 days (95% confidence interval: 1.5 to 6.7 days). Two weeks before an event, half of all tickets are now sold, compared with 40% before. The share sold more than four weeks ahead rose from 4.0% to 10.4%, which was hardly possible before, as sales opened about four weeks ahead. The share sold in the last 48 hours fell only slightly, from 16.2% to 14.3%.</p>
        <p class="mt-4">The new level has held for five months in a row, and both guests (8.9 to 13.3 days) and KLUB members (13.3 to 16.3 days) buy earlier. In conversations, guests described the discounted early prices as a clear positive, even though the price goes up in the later phases.</p>
        <figure-component
          class="breakout !mt-8 !mb-4"
          src="img/work/ueberstunde/phases-vorlauf-stats.png"
          classes="rounded-lg"
          alt="Line chart of the median number of days between ticket purchase and event, January to September. Before the ticket phases were introduced in May, the median moves between about 9 and 12 days; afterwards it rises to 13 to 15 days. Next to the chart: median lead time 14.2 days, before 9.3 days; a shift of 4.9 days with a 95 percent confidence interval of 1.5 to 6.7 days; and 10.4 percent of tickets sold more than 28 days ahead, before 4.0 percent."
          figcaption="How far ahead tickets are bought, before and after the ticket phases were introduced."
        />
        <div class="breakout grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4 mt-10">
          <div class="outcome-card">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>
            </span>
            <span class="title">Half sold at two weeks</span>
            <p>Two weeks before an event, 50.9% of tickets are now sold, instead of 40.4% before</p>
          </div>
          <div class="outcome-card">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18" /><path d="M8 3v4" /><path d="M16 3v4" /><path d="M14 15H9" /><path d="M11 13l-2 2 2 2" /></svg>
            </span>
            <span class="title">4.9 days earlier</span>
            <p>The median ticket is now bought 14.2 days before the event instead of 9.3, so revenue comes in sooner</p>
          </div>
          <div class="outcome-card">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" /><circle cx="17" cy="9" r="2.8" /><path d="M16.5 14.6c2.7.2 4.5 2 5 5.4" /></svg>
            </span>
            <span class="title">Earlier on sale</span>
            <p>Save-the-date events go on sale up to 75 days ahead, instead of about four weeks before the event</p>
          </div>
        </div>
        <h4 class="text-lg font-semibold leading-snug mt-14 mb-2">Discussion</h4>
        <p>Looking back at the three assumptions from Define:</p>
        <ul class="assumption-list">
          <li>
            <span class="marker"><svg viewBox="0 0 100 100" role="img" aria-label="A1"><path :d="badgePath" /><text x="50" y="51">A1</text></svg></span>
            <p><span class="assumption-short">Guests buy before all details are known, if it is cheaper.</span><b>Supported, with a limit.</b> Guests buy earlier even within the period that was already open before: 21 to 28 days ahead, the share of tickets sold rose from 12.7% to 17.3%, and two weeks before an event half of all tickets are sold instead of 40%. But the audience seems to have its own planning horizon of about two weeks: opening sales even earlier, 40 to 75 days ahead instead of around 30, barely moved the median lead time.</p>
          </li>
          <li>
            <span class="marker"><svg viewBox="0 0 100 100" role="img" aria-label="A2"><path :d="badgePath" /><text x="50" y="51">A2</text></svg></span>
            <p><span class="assumption-short">Early sales take pressure off the payments made in advance.</span><b>Partly supported.</b> Revenue comes in earlier: four weeks before an event, 7.8% of tickets are now sold instead of 1.3%. That eases the payments made in advance, but it cannot cover costs that are due months ahead.</p>
          </li>
          <li>
            <span class="marker"><svg viewBox="0 0 100 100" role="img" aria-label="A3"><path :d="badgePath" /><text x="50" y="51">A3</text></svg></span>
            <p><span class="assumption-short">Early sales are a reliable signal for planning.</span><b>Not confirmed.</b> Events did not become more predictable. The lead times of individual events now vary more than before, partly because new cities joined during the period. What planning can rely on is the point two weeks before an event, when half of the tickets are sold, not four weeks.</p>
          </li>
        </ul>
        <p class="mt-8">The figures do not control for seasonality, the growing number of cities, a wider reach or changed reminder emails, so the effect cannot be attributed to the ticket phases alone. Still, the shift appeared exactly with the rollout and has stayed stable since. Beyond the numbers, the feature rewards regular guests without a membership: they attend events anyway and benefit most from the lower early prices.</p>
      </template>
    </issue>
    <section class="section-m">
      <div class="have-a-look p-8 rounded-xl my-4 flex flex-col gap-2">
        <div class="flex items-center justify-between gap-4 mb-2">
          <span class="text-xl font-bold">Have a look</span>
          <img src="~/assets/img/work/ueberstunde/ueberstunde-logo.png" alt="ÜBERSTUNDE" class="h-10 w-auto">
        </div>
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
      // a scalloped circle like a "verified" sticker: 12 soft bumps around the badge
      badgePath: 'M' + Array.from({length: 120}, (_, i) => {
        const t = 2 * Math.PI * i / 120;
        const r = 44 + 3.2 * Math.cos(12 * t);
        return `${(50 + r * Math.sin(t)).toFixed(2)},${(50 - r * Math.cos(t)).toFixed(2)}`;
      }).join(' L') + 'Z',
      issueSteps: [
        {id: "discover", title: "Discover"},
        {id: "define", title: "Define"},
        {id: "develop", title: "Develop"},
        {id: "deliver", title: "Deliver"},
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
/* feature cards: wider than the text column, image and text alternate sides and the cards are staggered */
.feature-cards{
  width: min(64rem, calc(100vw - 2rem));
  margin-left: 50%;
  transform: translateX(-50%);
  @apply flex flex-col gap-6 mt-8;
}

.feature-card{
  @apply grid md:grid-cols-2 grid-cols-1 overflow-hidden rounded-3xl bg-gray-100;
}

.feature-card img,
.feature-card video{
  @apply w-full md:h-full h-56 object-cover;
}

/* wraps an image or video when something sits on top of it, like the data badge */
.feature-media{
  @apply relative;
}

.media-badge{
  @apply absolute left-1/2 bottom-4 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-medium whitespace-nowrap;
}

.feature-text{
  @apply flex flex-col justify-center gap-3 md:p-12 p-6;
}

.feature-text h3{
  @apply text-2xl font-bold leading-tight;
}

.feature-text p{
  @apply text-gray-700 leading-relaxed;
}

@screen md{
  .feature-card{
    min-height: 22rem;
  }

  /* image right on every second card */
  .feature-card:nth-child(even) img,
  .feature-card:nth-child(even) video,
  .feature-card:nth-child(even) .feature-media{
    order: 2;
  }
}

/* staggered only on wide screens, so the outer cards never leave the viewport */
@screen lg{
  .feature-card:nth-child(odd){
    margin-left: -3rem;
    margin-right: 3rem;
  }

  .feature-card:nth-child(even){
    margin-left: 3rem;
    margin-right: -3rem;
  }
}

/* key results in the hero: three cards, value on top */
.stat-cards{
  @apply grid md:grid-cols-3 grid-cols-1 gap-4 pb-4;
}

.stat-card{
  @apply flex flex-col gap-2 p-6 rounded-2xl bg-gray-100;
}

.stat-card .value{
  @apply text-4xl font-semibold leading-none tracking-tight mb-2;
}

.stat-card .title{
  @apply font-semibold;
}

.stat-card .text{
  @apply text-gray-600 leading-relaxed;
}

/* main issues: compact list, an orange × marks each problem */
.issue-list{
  @apply flex flex-col gap-4 mt-6;
}

.issue-list li{
  @apply flex gap-3;
}

.issue-list svg{
  color: #E94F11;
  @apply flex-shrink-0 w-4 h-4 mt-2;
}

.issue-list b{
  @apply font-semibold;
}

/* define: how-might-we questions as a plain two-column table */
.hmw-table{
  @apply w-full mt-6 border-collapse text-base leading-relaxed;
}

.hmw-table th{
  @apply text-left font-medium text-black pb-3 pr-4 border-b border-gray-300;
}

.hmw-table td{
  @apply align-top py-4 pr-4 border-b border-gray-200;
}

.hmw-table td:first-child{
  @apply w-28 text-gray-500 font-medium;
}

/* define: requirements in two cards, business and guests side by side, a bit wider than the text column */
.req-cards{
  width: min(50rem, calc(100vw - 2rem));
  margin-left: 50%;
  transform: translateX(-50%);
  @apply grid md:grid-cols-2 grid-cols-1 gap-4 mt-6 items-start;
}

.req-card{
  @apply bg-white rounded-2xl p-6 flex flex-col gap-3;
}

.req-head{
  @apply flex items-center gap-3 text-lg font-semibold;
}

.req-icon{
  background: #fdf1eb;
  @apply flex items-center justify-center w-9 h-9 rounded-full flex-shrink-0;
}

.req-icon svg{
  @apply w-5 h-5;
  fill: none;
  stroke: #E94F11;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.req-card ul{
  @apply flex flex-col;
}

.req-card li{
  @apply pt-3 mt-3 border-t border-gray-100 text-[15px] leading-relaxed;
}

.req-card li:first-child{
  @apply mt-0;
}

.req-card b{
  @apply font-semibold;
}

/* assumptions: A1–A3 as scalloped orange badges */
.assumption-list{
  @apply flex flex-col gap-8 mt-6;
}

.assumption-list li{
  @apply flex gap-4 items-stretch;
}

/* the badge with a thin orange line running down along the text, like a quote */
.assumption-list .marker{
  @apply flex flex-col items-center flex-shrink-0 w-11;
}

.assumption-list .marker::after{
  content: "";
  width: 2px;
  background: #E94F11;
  @apply flex-grow mt-1.5 rounded-full;
}

.assumption-list svg{
  @apply flex-shrink-0 w-11 h-11;
}

.assumption-list p{
  @apply pt-1.5;
}

/* discussion: short version of each assumption above its verdict */
.assumption-short{
  @apply block font-medium text-gray-500;
}

.assumption-list b{
  @apply font-semibold;
}

.assumption-list path{
  fill: #E94F11;
}

.assumption-list text{
  fill: #fff;
  font-size: 32px;
  font-weight: 700;
  text-anchor: middle;
  dominant-baseline: central;
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
  background-color: #0a0a0a;
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
