<template>
  <div class="relative">
    <display
      color="#ba387f"
      color-light="#fff7fc"
      title="gamesding"
      img-url="work/gamesding/showcase-display.png"
      text-color="#1a1c20"
      subtitle="Your board game shelf, always with you"
      description="gamesding is an app for board game geeks: it keeps track of the games you own and connects you with your friends. Add a game by searching for its title or scanning the barcode on the box, log your plays and see what's new on your friends' shelves."
      role="UX Designer & Engineer"
      timespan="August 2026 - today"
      context="Side project"
      keywords="PWA, Android, UX Design, Full Stack Development"
    />
    <section class="section-m !pb-2">
      <p class="text-gray-400">Last updated: 16.10.2026</p>
      <div class="bg-gray-100 py-4 px-6 rounded-xl my-4">
        <p class="text-xl font-bold opacity-80 my-1">Work in progress</p>
        <p>gamesding is still being built and hasn't been released yet. A few geeks are already testing it, so their feedback can shape the app before launch. This page will grow into a full case study once gamesding is out.</p>
      </div>
    </section>
    <section class="section-m !pt-6">
      <h2 class="font-bold" id="idea">The idea</h2>
      <p>At the latest when my girlfriend took a photo of her board game shelf to show her friends which games she already owns, it was clear to me: there have to be far more elegant solutions than a picture of a dark shelf. So I started designing an app that lets you simply <b class="!font-semibold">scan your collection by barcode and share it</b> with your friends.</p>
      <p class="mt-4">And when I first shared it with people who love board games, it became clear that the idea is really well received, and that there is so much room for more features. How about an activity feed, tracking your plays and your own profile to connect with others? And that is only the beginning of what is still to come.</p>
      <p class="mt-4">My approach: talk to the people your product is made for, and they will love it. The app has <b class="!font-semibold">already started an internal test phase</b> as a web app and in the Google Play Store. In this phase, I want to find further room for improvement together with the small test group before moving on to a larger one.</p>
      <p class="mt-4">The <b class="!font-semibold">current state is mainly a prototype</b>. Its structure, user flows and certainly also its brand design will need to be reworked for the "final" app.</p>
    </section>
    <div class="feature-cards">
      <div v-for="feature in features" :key="feature.title" class="feature-card" :style="{ backgroundColor: feature.color }">
        <div class="feature-media">
          <video v-if="feature.video" autoplay muted loop playsinline preload="metadata" :aria-label="feature.alt">
            <source :src="`/videos/gamesding-${feature.video}.webm`" type="video/webm">
            <source :src="`/videos/gamesding-${feature.video}.mp4`" type="video/mp4">
          </video>
          <img v-else :src="require(`~/assets/img/work/gamesding/${feature.image}`)" :alt="feature.alt">
        </div>
        <div class="feature-text">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.text }}</p>
        </div>
      </div>
    </div>
    <section class="section-m">
      <div class="have-a-look p-8 rounded-xl mb-4 flex flex-col gap-2">
        <div class="flex items-center justify-between gap-4 mb-2">
          <span class="text-xl font-bold">Have a look</span>
          <img src="~/assets/img/work/gamesding/gamesding-logo.svg" alt="gamesding" class="h-12 w-auto">
        </div>
        <span>The landing page is live. Join the waitlist to be among the first to know when gamesding launches.</span>
        <a href="https://gamesding.app" target="_blank" rel="noopener" class="font-bold px-6 py-2 mt-6 rounded-md mb-2 text-white w-fit mx-auto bg-[#ba387f] hover:bg-[#9e2f6b]">Visit gamesding.app</a>
      </div>
    </section>
  </div>
</template>

<script>
import Display from "~/components/work/display";

export default {
  name: "gamesding-page",
  components: {Display},
  data() {
    return {
      // blocks of the new landing page, recorded from its animated views
      features: [
        {
          title: "Your game shelf in your pocket",
          text: "You're standing in the shop and can't remember which games you own? Your friends want to give you a game but don't know whether you already have it? That's what your digital collection is perfect for.",
          color: "#fef3d5",
          video: "shelf",
          alt: "Animation: a phone shows a shelf of board games while titles are typed into the search field, and the matching game is highlighted."
        },
        {
          title: "Scan and ready to go",
          text: "Beep – feel like a game shop cashier! Scan the barcode on the box with your camera and the game is in your collection.",
          color: "#cff7f7",
          video: "scan",
          alt: "Animation: the back of a Catan box, a magnifier scans its barcode, and a card with the recognised game appears."
        },
        {
          title: "What your friends are playing",
          text: "Your activity feed shows what your friends are playing and what's new on their lists. And most importantly: you can stick your reaction right on top as a sticker!",
          color: "#fadff0",
          image: "feature-feed.jpg",
          alt: "A feed card with three games a friend added, and a row of emoji stickers below it."
        },
        {
          title: "Stats and favourites at a glance",
          text: "You think Catan is your favourite game. But how often was it really on your table last year? You'll see all of that in your profile.",
          color: "#c9ebdd",
          video: "stats",
          alt: "Animation: a profile with play time, number of plays, win rate and a bar chart that switches between month, year and all time."
        }
      ]
    }
  },
  head: {
    title: 'gamesding –',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'gamesding is an app for board game geeks: it keeps track of the games you own and connects you with your friends. Work in progress.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        keywords: "board games, collection, barcode scanner, pwa, ux design, full stack development"
      }
    ]
  }
}
</script>

<style scoped>
.section-m{
  @apply max-w-prose m-auto py-12 md:px-0 px-4 leading-loose;
}
/* "Have a look" block in the gamesding look: light pink like the landing page, logo on the right */
.have-a-look{
  background-color: #fadff0;
}

/* feature cards from the landing page: wider than the text column, media and text alternate sides */
.feature-cards{
  width: min(64rem, calc(100vw - 2rem));
  margin-left: 50%;
  transform: translateX(-50%);
  @apply flex flex-col gap-6 mb-12;
}

.feature-card{
  @apply grid md:grid-cols-2 grid-cols-1 items-center overflow-hidden rounded-3xl;
}

.feature-media img,
.feature-media video{
  @apply block w-full h-auto;
}

.feature-text{
  @apply flex flex-col gap-3 md:p-10 p-6;
}

.feature-text h3{
  @apply text-2xl font-bold leading-snug;
}

.feature-text p{
  @apply leading-relaxed;
}

@screen md{
  .feature-card:nth-child(even) .feature-media{
    order: 2;
  }
}
</style>
