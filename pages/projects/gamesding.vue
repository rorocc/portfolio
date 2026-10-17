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
      context="Side project, presented by SparkysBarn"
      keywords="PWA, Android, UX Design, Full Stack Development"
    />
    <section class="section-m">
      <p class="text-gray-400">Last updated: 16.10.2026</p>
      <div class="bg-gray-100 py-4 px-6 rounded-xl my-4">
        <p class="text-xl font-bold opacity-80 my-1">Work in progress</p>
        <p>gamesding is still being built and hasn't been released yet. A few geeks are already testing it, so their feedback can shape the app before launch. This page will grow into a full case study once gamesding is out.</p>
      </div>
      <div class="bg-gray-100 p-8 rounded-xl my-4 flex flex-col gap-2">
        <span class="text-xl font-bold">Have a look</span>
        <span>The landing page is live. Join the waitlist to be among the first to know when gamesding launches.</span>
        <a href="https://gamesding.app" target="_blank" rel="noopener" class="font-bold px-6 py-2 mt-6 rounded-md mb-2 text-white w-fit mx-auto bg-[#ba387f] hover:bg-[#9e2f6b]">Visit gamesding.app</a>
      </div>
    </section>
    <section class="section-m">
      <h2 class="font-bold" id="idea">The idea</h2>
      <p>Board game collections grow faster than anyone can remember what's on the shelf. gamesding puts that shelf in your pocket:</p>
      <ul class="list-disc pl-6 my-4">
        <li>Add a game in seconds by searching for its title or scanning the barcode on the box. The game data comes from BoardGameGeek.</li>
        <li>Browse and sort your collection, and keep lists and wishlists.</li>
        <li>Log your plays and rate the games you've played.</li>
        <li>Follow your friends and see what's new on their shelves.</li>
      </ul>
      <p>gamesding runs as a progressive web app in the browser, with an Android app on the way.</p>
    </section>
  </div>
</template>

<script>
import Display from "~/components/work/display";

export default {
  name: "gamesding-page",
  components: {Display},
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
</style>
