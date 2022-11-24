<template>
  <section class="pb-8 bg-white bg-opacity-50">
    <div class="container">
      <div class="flex">
        <div class="my-8 inline-block">
          <SectionHeading heading="What's my favorite tool?" />
          <p class="mt-4 mb-12">Let me show you some of my favorite tools that I use to be creative.</p>
        </div>
        <div class="inline-block my-auto mx-auto">
          <cursor-chat text="Did you mean 'Tool the band'?" name="Clippy 📎" />
        </div>
      </div>
      <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-3 gap-6">
        <ToolBlock title="Figma & FigJam"
                   descr="It's not only about the functionalities of Figma, but also the community - there are virtually an endless amount of community plugins and files. That's why I love Figma since quite a few years now."
                   short="Fg"
                   color="#2a2a2a"
                   colorText="#E0E0E0FF"
                   opacity="0.08" />
        <ToolBlock title="Affinity Suite" descr="After ending subscribing to a big creative software company, I'm now transitioning to the underdog. Creating illustrations for leveling up my designs? Sure. Editing my photographs? Oh yeah." short="Af" color="#85C9DAFF" colorText="#fff"></ToolBlock>
        <ToolBlock title="ProtoPie" descr="I feel like with ProtoPie, there are no limits to prototyping. Just perfect for user testing or modelling interactions for design purposes. For the future, I hope there will be a software that combines these functionalities with a design environment." short="Pi" color="#FF674CFF" colorText="#fff" />
        <ToolBlock title="WebStorm" descr="Sometimes I get to do some frontend (web) development, too. Of course, one result of it is this little portfolio page. For that, WebStorm is a very convenient and easy to use development environment." short="Ws" color="#85C9DAFF" colorText="#fff" />
        <ToolBlock title="Panasonic Lumix GH5" descr="While my first DSLR was a Canon camera, I'm glad I switched to the GH5 a few years later. Its images are so sharp, it'll capture every single of your wrinkles! Since I got it, I brought it to quite a few adventures so far - hopefully more to come." short="Gh" color="#2CB29DFF" colorText="#fff" />
        <ToolBlock title="DaVinci Resolve"
                   descr="Aaaand action! What's better than one image? 24+ images per second. Sometimes I like create some motion pictures as well. I like to document travel adventures, events or participate in short film competitions."
                   short="Rv"
                   color="#2a2a2a"
                   colorText="#E0E0E0FF"
                   opacity="0.08" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "tools"
}
</script>

<style scoped>
ul{
  color: #85c9da;
}
</style>
