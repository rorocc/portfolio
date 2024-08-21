<template>
  <div>
    <div class="w-full bg-white relative">
      <Navbar class="container m-auto p-4" />
    </div>
    <div class="mx-auto m-auto">
      <Nuxt />
    </div>
    <div id="contact">
      <div class="container space-y-8">
        <p>
          <span class="opacity-75 text-xl">Gurr gurr...</span><br>
          <span class="font-bold text-5xl">
            Send me a mail pigeon 🐦
          </span>
        </p>
        <div class="m-auto flex space-x-6 justify-center text-center auto-cols-min">
          <a href="https://linkedin.com/in/rock-christopher" rel="noopener noreferrer" target="_blank">
            <div class="contact-btn-inverted">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span>LinkedIn</span>
            </div>
          </a>
          <a href="mailto:moin@chrisrock.rocks">
            <div class="contact-btn-inverted">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M6.5 33.75q-1.458 0-2.5-1.042-1.042-1.041-1.042-2.5V9.792q0-1.459 1.042-2.5Q5.042 6.25 6.5 6.25h27q1.5 0 2.542 1.042 1.041 1.041 1.041 2.5v20.416q0 1.459-1.041 2.5Q35 33.75 33.5 33.75ZM20 21.792l13.5-8.917V9.792L20 18.542 6.5 9.792v3.083Z"/></svg>
              <span>E-Mail</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="w-full bg-white">
      <Footer />
    </div>
    <scroll-top-button />
  </div>
</template>

<style scoped>
#mobileWarning{
  background-color: var(--link-color-active);
  @apply w-full p-10 text-center text-white block hidden;
}

#contact{
  background-image: url("/gradient.jpeg");
  background-size: cover;
  color: white;
  @apply py-32 text-center;
}

</style>
