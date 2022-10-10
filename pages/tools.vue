<template>
  <section class="container">
    <div class="mb-8">
      <h1>
        What's my favorite tool?
      </h1>
      <p class="leading-relaxed">... and I'm not talking about the amazing band here! <br /> Let me present some of my favorite tools I absolutely love to use.</p>
    </div>
    <div class="grid grid-rows-2 space-y-3">
      <div class="grid lg:grid-flow-col-dense lg:grid-rows-none grid-cols-none grid-rows-3 lg:space-y-0 space-y-3 space-x-6">
        <ToolBlock title="Figma & FigJam" descr="After a few years of using it, Figma is still my favorite tool for prototyping. Let's hope this won't be affected by the buyout that recently happened..." short="Fg" color="#2a2a2a" colorText="#E0E0E0FF"></ToolBlock>
        <ToolBlock title="Affinity Suite" descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu." short="Af" color="#85C9DAFF" colorText="#fff"></ToolBlock>
        <ToolBlock title="ProtoPie" descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu." short="Pi" color="#FF674CFF" colorText="#fff"></ToolBlock>
      </div>
      <div class="grid lg:grid-flow-col-dense lg:grid-rows-none grid-cols-none grid-rows-3 lg:space-y-0 space-y-3 space-x-6">
        <ToolBlock title="WebStorm" descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu." short="Ws" color="#85C9DAFF" colorText="#fff"></ToolBlock>
        <ToolBlock title="Panasonic GH5" descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu." short="Gh" color="#2CB29DFF" colorText="#fff"></ToolBlock>
        <ToolBlock title="DaVinci Resolve" descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque sapien justo, sed egestas urna ornare eu." short="Rv" color="#2a2a2a" colorText="#E0E0E0FF"></ToolBlock>
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
