<template>
  <div class="relative">
    <div class="relative video-container">
      <video class="w-2/3 m-auto z-1" autoplay loop muted playsinline>
        <source v-if="supportsHEVC()" src="3d-hevc.mov" type="video/webm">
        <source src="3d.webm" type="video/webm">
      </video>
    </div>
    <div class="hidden md:block">
      <div class="hidden">
        <structural-components-action-tag icon="📷" text="Take a Photo" class="intro-left absolute top-1/3 -left-4 z-1" state="disabled"/>
        <structural-components-action-tag icon="✏️" text="Draw Wireframe" class="intro-left absolute top-1/2 -left-6 z-1" state="disabled"/>
        <structural-components-action-tag icon="👨‍🍳" text="Bake a Cinnamon Bun" class="intro-left absolute top-2/3 -left-12 z-1" state="disabled"/>
      </div>
        <structural-components-action-tag icon="⛓️" text="Build Design System" class="intro-right absolute top-1/3 -right-16 z-1" state="disabled"/>
        <structural-components-action-tag icon="👥" text="Design to Empower" class="intro-right absolute top-1/2 -right-12 z-1" state="disabled"/>
        <structural-components-action-tag state="disabled" icon="🐷" text="Hug some Pigs" class="intro-right absolute top-2/3 right-0 z-1"/>
      <a href="#contact">
        <structural-components-action-tag icon="✉️" text="Contact Me" :cta="true" class="absolute -bottom-4 left-1/3"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sims",
  methods: {
    supportsHEVC(){
      if(!this.navigator) return
      const ua = this.navigator.userAgent.toLowerCase()
      const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo)
      const isSafari = ((ua.indexOf('safari') !== -1) && (!(ua.indexOf('chrome')!== -1) && (ua.indexOf('version/')!== -1)))
      return isSafari && hasMediaCapabilities
    },
  }
}
</script>

<style scoped>
  .video-container{
    background-image: url("/blob.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .intro-left{
    animation: intro-left ease .5s;
  }

  .intro-right{
    animation: intro-right ease .5s;
  }

  @keyframes intro-right {
    0%{ transform: translateX(-24px)}
    100%{ transform: translateX(0px); }
  }

  @keyframes intro-left {
    0%{ transform: translateX(24px)}
    100%{ transform: translateX(0px); }
  }
</style>
