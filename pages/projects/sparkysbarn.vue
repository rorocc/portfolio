<template>
  <div class="relative">
    <display
      color="#222222"
      color-light="#F1F7FF"
      title="SparkysBarn – Stickers for everyone"
      img-url="work/screen_sparkysbarn.png"
      text-color="#222222"
      subtitle="Brand identity, illustration and website for a small sticker label from Leipzig"
      description="SparkysBarn is a small sticker label that stands up for love, equality and inclusion. Every motif is drawn by hand – without AI – and printed, cut and shipped from Leipzig. The project covers the whole brand: from the mascot and the illustration style to the website that introduces the label and leads to the shop."
      role="Brand Designer, Illustrator, Web Designer & Developer"
      timespan="XXXX – today"
      context="Side project with Chici"
      keywords="Brand Design, Illustration, Web Design, Next.js"
    />
    <toc />
    <section class="section-m">
      <p class="text-gray-400">Last updated: 15.10.2026</p>
      <div class="bg-gray-100 p-8 rounded-xl my-4 flex flex-col gap-2">
        <span class="text-xl font-bold">Have a look</span>
        <span>The best way to get a feel for the brand is the website itself – including the stickers, the reviews and the FAQ.</span>
        <a href="https://www.sparkysbarn.de" target="_blank" class="font-bold px-6 py-2 mt-6 rounded-md mb-2 text-white w-fit mx-auto bg-[#D972AA] hover:bg-[#E59AC3]">Visit sparkysbarn.de</a>
      </div>
    </section>

    <section class="section-m">
      <h1 id="at-a-glance">At a glance</h1>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col bg-gray-100 p-8 rounded-md gap-1">
          <span class="text-2xl font-bold">XX hand-drawn motifs</span>
          <span>in three collections: Pride, Feminism and ADHD</span>
        </div>
        <div class="flex flex-col bg-gray-100 p-8 rounded-md gap-1">
          <span class="text-2xl font-bold">0 AI-generated designs</span>
          <span>every line is drawn by hand, which became a core part of the brand promise</span>
        </div>
        <div class="flex flex-col bg-gray-100 p-8 rounded-md gap-1">
          <span class="text-2xl font-bold">X.X ★ on Etsy</span>
          <span>across XXX reviews</span>
        </div>
      </div>
    </section>

    <section class="section-m">
      <h1 id="the-idea">The idea</h1>
      <p>
        Most merch with a political message is either loud and angry or so generic that nobody remembers it.
        SparkysBarn wanted to be something in between: <b>a brand that takes a clear stance on Pride, feminism and
        neurodiversity, but says it with a smile</b>. Stickers are a good fit for that – they are cheap, personal and
        end up on laptops, water bottles and notebooks where other people see them.
      </p>
      <p class="mt-4">
        Since the stickers are sold on Etsy, the website does not need a checkout. Its job is a different one:
        <b>make people fall for the brand and trust it</b> before they click through to the shop.
      </p>
      <h3>Three principles that guided every decision</h3>
      <ol>
        <li><span><b>Loud, but kind.</b> A clear stance, told with warmth instead of anger.</span></li>
        <li><span><b>Visibly handmade.</b> Imperfection is part of the brand – especially as a counterpoint to AI-generated merch.</span></li>
        <li><span><b>Everyone is welcome.</b> Friendly characters, informal language, no insider codes.</span></li>
      </ol>
    </section>

    <section class="section-m">
      <h1 id="brand-identity">Brand identity</h1>
      <p>
        The identity is built around Sparky, the mascot who gives the label its name. Next to the illustrated
        logo, a small set of colors and two typefaces keep the brand recognisable across stickers, website and social media.
      </p>
      <figure class="my-12">
        <div class="placeholder aspect-[16/9]">Logo: Sparky + wordmark, construction and variants</div>
        <figcaption>The logo combines the mascot with a hand-lettered wordmark</figcaption>
      </figure>

      <h3>Colors</h3>
      <p>
        A bubblegum pink carries the brand. It is paired with a soft sky blue and warm off-whites, so the
        colorful stickers always remain the loudest element on the page.
      </p>
      <div class="grid grid-cols-3 md:grid-cols-5 gap-4 my-8">
        <div v-for="swatch in palette" :key="swatch.hex" class="flex flex-col gap-2">
          <div class="aspect-square rounded-xl border border-gray-200" :style="{backgroundColor: swatch.hex}" />
          <span class="text-sm leading-tight">
            <span class="font-medium">{{ swatch.name }}</span><br>
            <span class="text-gray-400">{{ swatch.hex }}</span>
          </span>
        </div>
      </div>

      <h3>Typography</h3>
      <p>
        Headlines are set in <b>Barlow Condensed Black</b> in uppercase – compact and loud, like a sign at a demo.
        Body copy uses <b>Sora</b>, which stays friendly and readable at small sizes. <b>Rammetto One</b> adds a
        playful accent in selected places.
      </p>
      <figure class="my-12">
        <div class="placeholder aspect-[16/9]">Type specimen: Barlow Condensed, Sora, Rammetto One</div>
      </figure>
    </section>

    <section class="section-m">
      <h1 id="illustration">Illustration</h1>
      <p>
        The stickers are the product, so the illustration style is the heart of the brand. Every motif goes
        through the same steps: <b>a pencil sketch, a clean vector version and a printed test sticker</b> to
        check the cut line and how the colors hold up on vinyl.
      </p>
      <figure class="my-12">
        <div class="placeholder aspect-[3/1]">Process of one motif: sketch → vector → printed sticker</div>
        <figcaption>From sketch to sticker</figcaption>
      </figure>
      <p>
        The motifs are grouped into collections that match the topics the brand stands for. Recurring
        characters – geese, frogs, ducks and dinosaurs – connect the collections and give the shop a cast that
        people come back for.
      </p>
      <figure class="my-12">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="motif in stickers" :key="motif" class="placeholder aspect-square">{{ motif }}</div>
        </div>
        <figcaption>A selection from the Pride, Feminism and ADHD collections</figcaption>
      </figure>
    </section>

    <section class="section-m">
      <h1 id="website">Website</h1>
      <p>
        I designed and built the website with Next.js. It works like a shop window: it shows the stickers by
        topic, explains what makes them special and then hands over to Etsy.
      </p>
      <figure class="my-12">
        <div class="placeholder aspect-[3/4] md:aspect-[4/3]">Homepage, desktop and mobile</div>
      </figure>

      <h3>Topics as entry points</h3>
      <p>
        Visitors usually come for one topic. That is why the hero offers Pride, Feminism and ADHD as direct
        shortcuts, and each topic gets its own section further down the page.
      </p>

      <h3>Trust instead of a checkout</h3>
      <p>
        A personal welcome letter from the two of us, customer reviews and a FAQ answer the questions people
        have before buying from a small label – most importantly whether the designs are made with AI.
      </p>
      <figure class="my-12">
        <div class="placeholder aspect-[16/9]">Detail: welcome letter, reviews and FAQ</div>
      </figure>

      <h3>Details that carry the brand</h3>
      <p>
        The ticker banner with "Ganz ohne KI ❤ Love &amp; Pride", the checkerboard pattern and the flowers
        repeat the brand on every scroll without adding extra text.
      </p>
      <figure class="my-12">
        <div class="placeholder aspect-[16/9]">Close-ups: ticker banner, pattern, flowers</div>
      </figure>
    </section>

    <section class="section-m">
      <h1 id="brand-in-use">Brand in use</h1>
      <p>
        Beyond the website, the brand shows up wherever the stickers are: in the Etsy shop, on Instagram and
        TikTok and in the letter that arrives at the customer's door.
      </p>
      <figure class="my-12">
        <div class="grid grid-cols-2 gap-4">
          <div class="placeholder aspect-square">Etsy shop banner and listing images</div>
          <div class="placeholder aspect-square">Instagram posts</div>
          <div class="placeholder aspect-square">Packaging and letter</div>
          <div class="placeholder aspect-square">Stickers in the wild</div>
        </div>
      </figure>
    </section>

    <section class="section-m">
      <h1 id="reflection">Reflection</h1>
      <p>
        Being designer and client at the same time was the most interesting part of this project. XXX
      </p>
    </section>
  </div>
</template>

<script>
import Display from "~/components/work/display";
import FigureComponent from "~/components/figureComponent";


export default {
  name: "sparkysbarn-page",
  components: {FigureComponent, Display},
  data() {
    return {
      palette: [
        {name: 'Sparky Pink', hex: '#D972AA'},
        {name: 'Blush', hex: '#FFF1FB'},
        {name: 'Sky', hex: '#E1EFFF'},
        {name: 'Sunflower', hex: '#F9B223'},
        {name: 'Charcoal', hex: '#3C3C3B'}
      ],
      stickers: [
        'Pride sticker',
        'Pride sticker',
        'Feminism sticker',
        'Feminism sticker',
        'ADHD sticker',
        'ADHD sticker'
      ]
    }
  },
  head: {
    title: 'SparkysBarn –',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Brand identity, illustration and website for SparkysBarn, a small sticker label from Leipzig that stands up for love, equality and inclusion.'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://chrisrock.rocks/seo/projects/tds.png'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        keywords: "brand design, illustration, web design, sticker, pride, feminism, adhd, leipzig"
      }
    ]
  }
}
</script>

<style scoped>
b{
  font-weight: 500;
}

.section-m{
  @apply max-w-prose m-auto py-12 md:px-0 px-4 leading-loose;
}

.placeholder{
  @apply w-full flex items-center justify-center text-center p-6 rounded-xl bg-gray-100 text-sm text-gray-400 leading-normal;
}

figcaption{
  @apply opacity-50 text-center pt-4;
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
  color: #D972AA;
  @apply text-4xl mr-4;
}

h3{
  @apply mt-6;
}
</style>
