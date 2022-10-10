<template>
  <section class="container">
    <div class="mb-8">
      <h1>
        What's my favorite tool?
      </h1>
      <p class="leading-relaxed">... and I'm not talking about the amazing band here! <br /> Let me present some of my favorite tools I absolutely love to use.</p>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-3 gap-6">
        <ToolBlock title="Figma & FigJam"
                   descr="It's not only about the functionalities of Figma, but also the community - there are virtually an endless amount of community plugins and files. That's why I love Figma since quite a few years now."
                   short="Fg"
                   color="#2a2a2a"
                   colorText="#E0E0E0FF"
                   opacity="0.08" />
        <ToolBlock title="Affinity Suite" descr="After ending subscribing to a big creative software company, I'm now transitioning to the underdog. Creating illustrations for leveling up my designs? Sure. Editing my photographs? Oh yeah." short="Af" color="#85C9DAFF" colorText="#fff"></ToolBlock>
        <ToolBlock title="ProtoPie" descr="I feel like with ProtoPie, there are no limits to prototyping. Just perfect for user testing or modelling interactions for design purposes." short="Pi" color="#FF674CFF" colorText="#fff"></ToolBlock>
        <ToolBlock title="WebStorm" descr="Sometimes I get to do some frontend (web) development, too. I mean, you're looking at the result of it right now!" short="Ws" color="#85C9DAFF" colorText="#fff"></ToolBlock>
        <ToolBlock title="Panasonic Lumix GH5" descr="While my first DSLR was a Canon camera, I'm glad I switched to the GH5 a few years later. But you gotta be careful - this cinematograph will capture every single wrinkle." short="Gh" color="#2CB29DFF" colorText="#fff"></ToolBlock>
        <ToolBlock title="DaVinci Resolve"
                   descr="Aaaand action! Sometimes I like to get creative on motion pictures as well. I like to document travel adventures, events or participate in short film competitions."
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
