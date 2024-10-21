<template>
  <div>
    <display
      color="rgba(0, 30, 75, 1)"
      color-light="#EFF3FA"
      title="AID Simulation"
      text-color="#fff"
      subtitle="Diabetes type 1 closed-loop simulator"
      description="Closed-loop systems can already positively influence the treatment of diabetes.
      Nevertheless, these systems have a health-critical influence on the users, which is why trust and comprehensive knowledge about them are essential. In this project, a closed-loop simulator was redesigned so that patients have exactly these insights into the algorithms."
      role="UX & Visual Designer, Researcher"
      timespan="May - July 2022"
      context="Media informatics project"
      keywords="Design research, Interviews, Prototyping, Frontend development"
    />
    <div>
      <toc />
      <section class="section-m">
        <h1 id="motivation">Motivation</h1>
        <p>
          Studies show that <b>closed-loop (CL) systems</b> can successfully support diabetes type 1 management and achieve better clinical outcomes than comparable treatment options.
          Such systems include many components, such as <b>continuous glucose monitoring, insulin pump</b> and a device that performs <b>calculations</b> such as insulin dosing.
         </p>
        <p class="quote">
          <span class="text-lg">"It’s hard to give up control. I think about my diabetes constantly. I make a million decisions a day. So it’s hard to let that go."</span>
          <br>
          <span class="opacity-50">Participant in the study by <web-link url="https://doi.org/10.1177/1359105317718615">Tanenbaum et al. (2020)</web-link></span>
        </p>
        <p>
          While the successful use of such a system means a great benefit to the quality of life of those affected, incorrect insulin dosing can have life-threatening consequences.
          Accordingly, it is important that users of such a system have complete confidence in the automated form of therapy. The goal of this project is to <b>establish</b> such <b>trust</b> through <b>traceability</b> of system behavior.
        </p>
        <div class="section-stats">
          <p class="stat">
            <span class="stat-percent font-display">24%</span>
            <br>
            <span class="stat-description">diabetics used diabetes management apps in 2017 (<web-link url="https://doi.org/10.1089/dia.2017.0235">Trawley et al., 2017</web-link>)</span>
          </p>
          <hr>
          <p class="stat">
            <span class="stat-percent font-display">70%</span>
            <br>
            <span class="stat-description">of users of closed-loop systems trusted them in a physician-controlled setting, according to a metastudy by <web-link url="https://doi.org/10.1111/dme.13567">Farrington (2018)</web-link>.</span>
          </p>
        </div>
      </section>
      <section class="section-m">
        <h1 id="research">Research</h1>
        <p>
          To be able to dive deeper into the context, we have worked intensively with the <web-link url="https://lt1.org/">LoopInsight1 (LT1)</web-link> simulator. LT1 is an open source project from the University of Applied Sciences Ulm, which simulates the <b>interaction between a person with type 1 diabetes and an AID system</b>.
          The simulator of LT1 forms the algorithmic basis for this project. Therefore, we took the functional basis of this simulator and adapted the user interface to our findings, e.g. to strengthen the promotion of trust in the system.
        </p>
        <figure-component
          src="img/work/aid/aid-figure-reality.png"
          alt="The closed loop process contains the insulin pump, the real patient, the glucose sensor and the algorithm."
          figcaption="Process of a closed-loop system in reality"
        />

        <h2>Challenges</h2>
        <p>We identified the following challenges in the development and design of AID systems:</p>
        <card tagline="Challenge #1"
              headline="Mental workload"
              text="In diabetes management, there are a variety of (numerical) factors to consider that demand cognitive resources from users."
        />
        <card tagline="Challenge #2"
              headline="Skill degredation"
              text="If tasks are completely automated without involving users, they may lose the skills to perform them by themselves. This also leads to them being more insensitive to possible error conditions of the automation."
        />
        <card tagline="Challenge #3"
              headline="Trust"
              text="The administration of insulin can cause health-critical conditions. Therefore, it is even more important that users can trust the capabilities of the system."
        />
        <card tagline="Challenge #4"
              headline="Situation awareness"
              text="Users can understand the system's states and even anticipate them. This in turn has an impact on trust and can influence the extent to which the skills are degredated."
        />

        <h2>Interviews</h2>
        <p>
          To learn more about the context, we conducted interviews with three people with type 1 diabetes. The goals of the interviews were to find out <b>what data</b> are necessary for diabetes management and what <b>problems or challenges</b> are encountered in this process. These interviews were also a content entry point to learn more about the context of use.
        </p>
        <p class="quote">
          <span class="text-lg">"At the moment, I have to trust the system blindly and hope that it makes the right decision. Of course, it's also very difficult in the first few weeks to completely relinquish this control."</span>
          <br>
          <span class="opacity-50">Interviewee who currently uses a closed-loop system</span>
        </p>
        <p>
          As a first step in building trust in closed-loop systems, interviewees expressed a desire to be able to <b>test the functionalities without effects on their own bodies</b>.
          Existing systems are far too non-transparent and do not offer any explanations, according to the interviewees. <br>
          In addition, the desire was expressed to be able to <b>use the simulation spontaneously and on the go</b>, in order to be able to play through spontaneous activities for safety's sake.
        </p>
      </section>
      <section class="bg-aid-light rounded-lg md:w-2/3 w-full pb-4 pt-1 mx-auto">
        <div class="max-w-prose mx-auto container leading-loose">
          <h2 class="mt-2">Excursus: The first-failure effect</h2>
          <p>
            According to the first-failure effect, the operator's <b>trust</b> in an automated system <b>decreases</b> as soon as a <b>system error occurs for the first time</b>. After that, trust is restored only slowly.
            An exposure to the possible failures may allow for better calibration to the actual reliability <web-link url="https://doi.org/10.1177/0018720810376055">(Parasuraman & Manzey, 2010)</web-link>.
          </p>
          <figure-component
            src="img/work/aid/aid-firstfailure.png"
            figcaption="Rough sketch of the first-failure effect. The level of trust immediately drops after an unexpected system underperformance."
          />
        </div>
      </section>
      <section class="section-m">
        <h2>Requirements</h2>
        <p>
         We were able to derive some requirements for the design of the simulator from the interviews:
        </p>
        <ul>
          <li>Reduction and <b>simplification</b> of parameters to set the simulator</li>
          <li><b>Provide insights</b> into the calculation process</li>
          <li>Communicate <b>capabilities and limitations</b> of the system</li>
          <li>In a <b>wide variety of everyday situations</b>, the question could arise as to how the system would react. Therefore, the simulator should be <b>accessible on the go</b> with mobile devices.</li>
          <li>Offer <b>scenario presets</b> that represent a specific situation that affect blood glucose</li>
        </ul>
        <p>
          In particular, these requirements are intended to promote the level of trust in the system through familiarization with its functionalities and limitations.
        </p>
      </section>
      <section>
        <figure-component class="mx-auto md:w-2/3 w-full" classes="rounded-lg"
                          src="img/work/aid/aid-requirements.png"
                          alt=""
        />
      </section>
      <section class="section-m">
        <h1 id="design">Design</h1>
        <p>
          The result of this project is a mobile AID simulation app based on the LoopInsight1 algorithm.
          As a basic requirement for the design, we focused on usability for a broad target group. Therefore, we have <b>reduced</b> the adjustable parameters to the most necessary and extended them by an <b>expert mode</b> with further setting options.
          <br>
          <br>
          The use of Google's <b>Material Design 3</b> guideline is intended to help users recognize familiar interactions and reduce the required learning of functionality.</p>
      </section>
      <section class="container">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 my-6">
          <div class="card">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.16113 4.46875C5.58508 2.0448 9.44716 1.9355 12.0008 4.14085C14.5528 1.9355 18.4149 2.0448 20.8388 4.46875C23.2584 6.88836 23.3716 10.741 21.1785 13.2947L13.4142 21.0858C12.6686 21.8313 11.4809 21.8652 10.6952 21.1874L10.5858 21.0858L2.82141 13.2947C0.628282 10.741 0.741522 6.88836 3.16113 4.46875ZM4.57534 5.88296C2.86819 7.59011 2.81942 10.3276 4.42902 12.0937L4.57534 12.2469L12 19.6715L17.3026 14.3675L13.7677 10.8327L12.7071 11.8934C11.5355 13.0649 9.636 13.0649 8.46443 11.8934C7.29286 10.7218 7.29286 8.8223 8.46443 7.65073L10.5656 5.54823C8.85292 4.17713 6.37076 4.23993 4.7286 5.73663L4.57534 5.88296ZM13.0606 8.71139C13.4511 8.32086 14.0843 8.32086 14.4748 8.71139L18.7168 12.9533L19.4246 12.2469C21.1819 10.4896 21.1819 7.64032 19.4246 5.88296C17.7174 4.17581 14.9799 4.12704 13.2139 5.73663L13.0606 5.88296L9.87864 9.06494C9.51601 9.42757 9.49011 9.99942 9.80094 10.3919L9.87864 10.4792C10.2413 10.8418 10.8131 10.8677 11.2056 10.5569L11.2929 10.4792L13.0606 8.71139Z" fill="rgba(30,65,101,1)"></path></svg>            </span>
            <span>Honesty, not marketing</span>
            <p>The simulator communicates not only possibilities but also functional limitations to create realistic expectations</p>
          </div>

          <div class="card">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 16C17.6569 16 19 17.3431 19 19C19 20.6569 17.6569 22 16 22C14.3431 22 13 20.6569 13 19C13 17.3431 14.3431 16 16 16ZM6 12C8.20914 12 10 13.7909 10 16C10 18.2091 8.20914 20 6 20C3.79086 20 2 18.2091 2 16C2 13.7909 3.79086 12 6 12ZM16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18ZM6 14C4.89543 14 4 14.8954 4 16C4 17.1046 4.89543 18 6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14ZM14.5 2C17.5376 2 20 4.46243 20 7.5C20 10.5376 17.5376 13 14.5 13C11.4624 13 9 10.5376 9 7.5C9 4.46243 11.4624 2 14.5 2ZM14.5 4C12.567 4 11 5.567 11 7.5C11 9.433 12.567 11 14.5 11C16.433 11 18 9.433 18 7.5C18 5.567 16.433 4 14.5 4Z" fill="rgba(30,65,101,1)"></path></svg>
            </span>
            <span>Traceability & Interaction</span>
            <p>Users can explore the flow of their data through interacting with the process visualization</p>
          </div>

          <div class="card">
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z" fill="rgba(30,65,101,1)"></path></svg>            </span>
            <span>Preset of common scenarios</span>
            <p>Typical everyday scenarios extracted from interviews are available as presets that can be selected quickly</p>
          </div>
        </div>
      </section>

      <section class="section-m">
        <h2>Dealing with the first-failure effect</h2>
        <p>In order to <b>deal with the first-failure effect</b>, we allow the users to actively observe challenging scenarios (e.g.
          through several preset scenarios).
          This includes not only <b>communicating</b> the scenarios that can be covered by the system, but also <b>functional limitations</b> to avoid overreliance.
        </p>

        <h2>Ability through traceability</h2>
        <p>
          In order to gain an understanding of the system behavior, users should <b>play around with the system themselves</b> as interactively as possible.
          For this purpose, we have introduced two different types of explanations:
        </p>
        <ul>
          <li><b>Local explanations</b> — Users can check out extreme points on the curve and get insights on the expression of the data at that point</li>
          <li><b>Global explanations</b> — An interactive visualization of the data flow conveys the influence of the inputs on the calculation process. Users can thus track step by step which changes certain inputs result in.</li>
        </ul>
      </section>

      <section class="bg-gray-100 py-32">
        <div class="lg:container md:flex space-y-8 flex-none mx-auto">
          <img class="lg:w-72 md:w-1/4 mx-auto md:translate-y-6" src="~assets/img/work/aid/aid-frame-anim.gif" alt="Simulator screen of the statistics overview showing blood sugar ranges over time" />
          <img class="lg:w-72 md:w-1/4 mx-auto md:-translate-y-6" src="~assets/img/work/aid/aid-frame-stats.png" alt="Simulator screen of the statistics overview showing blood sugar ranges over time" />
          <img class="z-0 lg:w-72 md:w-1/4 mx-auto md:translate-y-6" src="~assets/img/work/aid/aid-frame-sim.png" alt="Simulator screen of the statistics overview showing blood sugar ranges over time" />
        </div>
      </section>
    </div>
    <section class="section-m">
      <h1 id="conclusion">Conclusion</h1>
      <p>As part of this project, the LoopInsight1 AID simulator was considered and a revision of the user interface was carried out.
        In order to find out to what extent the simulator can be optimised for patients, we conducted interviews with those affected and derived goals for the design.
        <br> <br>
        Unfortunately, due to a lack of capacity, the design approach could not be finally evaluated with potential users.
      </p>
      <h2>Learnings</h2>
      <card tagline="Learning #1"
            headline="Involve users. Do it."
            text="I gained so much insight from talking to people - not just about requirements, but also about the emotional impact of the system on users. Involve users wherever possible."
      />
      <card tagline="Learning #2"
            headline="Do your research."
            text="With this topic in particular, I had to realise that the market is very difficult to analyse, whether because of a lack of products or because of proprietary content. This makes it all the more important to consult research literature, for example, to build a solid foundation."
      />
    </section>
  </div>
</template>

<script>
import Display from "~/components/work/display";
import WebLink from "~/components/structuralComponents/webLink";
import FigureComponent from "~/components/figureComponent";
import Card from "~/components/work/card";
export default {
  name: "aid",
  components: {Card, FigureComponent, WebLink, Display},
  head: {
    title: 'AID Simulator UX Rework -',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'This UX case study is about the redesign of an automated insulin delivery (AID) system simulator. The goal is to give insights into the functionality of closed-loop systems for the management of diabetes.'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://chrisrock.rocks/seo/projects/aid.png'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        keywords: "diabetic, t1dm, diabetes mellitus, automation, explainable artificial intelligence, engineering psychology, lübeck, user interface, user experience, virtual patient, OpenAPS, insulin therapy, human-machine interaction, understandability"
      }
    ]
  }
}
</script>

<style scoped>
.bg-aid-light,.card{
  background-color: #EFF3FA;
}

.header h1{
  color: white;
}

.section-m{
  @apply max-w-prose m-auto py-12 md:px-0 px-4 leading-loose;
}

h1:after{
  content: "";
}

h2{
  @apply mt-16;
}

ul{
  list-style: unset;
}

li{
  @apply my-2 mx-4;
}

.section-stats{
  @apply my-24;
}

.stat, .quote{
  color: #1E4165;
  @apply flex-wrap my-16;
}

b{
  color: #1E4165;
}

.scrollTopButton{
  background-color: #1E4165;
}

.quote{
  border-left: 10px solid rgba(30, 65, 101, 0.1);
  @apply pl-4;
}

li{
  list-style: none;
}

li::before{
  content: '\276F';
  color: #1E4165;
  @apply mr-2;
}

.stat-percent{
  @apply font-black text-9xl;
}

.stat-description{
  @apply text-xl opacity-50;
}

.card{
  @apply px-6 py-6 md:mx-0 mx-8 rounded-3xl aspect-square text-center flex flex-col justify-center align-top;
}

.card .icon svg{
  @apply mx-auto md:w-12 w-8 opacity-100;
}

.card p{
  @apply opacity-75;
}

.card span{
  @apply md:text-2xl text-xl font-medium my-4;
}
</style>
