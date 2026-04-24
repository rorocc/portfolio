<template>
  <div ref="mainDiv" class="m-auto overflow-x-hidden">
    <section class="container pt-8 pb-16">
      <h1 class="text-5xl landing-title uppercase py-0">Photography</h1>
      <p class="leading-8 landing-description max-w-prose md:text-left text-center opacity-50">
        Capturing special, fun and sometimes even stupid moments.
      </p>
    </section>
    <section class="bg-gray-50 py-8">
      <div class="container">
        <h1 class="mt-12 mb-0 section-title"><span class="emph pr-2">01</span> Events</h1>
        <PhotoGrid :photos="eventPhotos"/>
      </div>
    </section>
    <section class="py-8">
      <div class="container">
        <h1 class="mt-12 mb-0 section-title"><span class="emph pr-2">02</span> People</h1>
        <PhotoGrid :photos="peoplePhotos"/>
      </div>
    </section>
    <section class="bg-gray-50 py-8">
      <div class="container">
        <h1 class="mt-12 mb-0 section-title"><span class="emph pr-2">03</span> Landscape</h1>
        <PhotoGrid :photos="landscapePhotos"/>
      </div>
    </section>
  </div>
</template>

<script>
import BobbleHead from "~/components/pages/index/BobbleHead";
import Workpiece from "~/components/pages/index/workpiece";
import CursorChat from "~/components/pages/index/CursorChat";
import CircleDecoration from "~/components/stylistic/DecorationCircle";
import WebLink from "~/components/structuralComponents/webLink";
import ActionTag from "~/components/structuralComponents/actionTag";
import Badge from "~/components/pages/index/badge";
import PhotoGrid from "~/components/PhotoGrid.vue";

export default {
  name: 'PhotoPage',
  components: {Badge, ActionTag, WebLink, BobbleHead, Workpiece, CursorChat, CircleDecoration},
  head() {
    return {
      meta: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://chrisrock.rocks/'
        }
      ]
    }
  },
  data(){
    return{
      eventPhotos: [
        {src: '/visual/c24-okdt-1.webp', label:'ok.danke.tschüss', category:'Festival'},
        {src: '/visual/c24-okdt-2.webp', label:'ok.danke.tschüss', category:'Festival'},
        {src: '/visual/c24-okdt-3.webp', label:'ok.danke.tschüss', category:'Festival'},
        {src: '/visual/c24-okdt-4.webp', label:'ok.danke.tschüss', category:'Festival'},
        {src: '/visual/c25-carla-ahad-1.webp', label:'Carla Ahad', category:'Festival'},
      ],
      peoplePhotos: [
        {src: '/visual/muellmorty-hd.jpg'},
        {src: '/visual/party.jpg'},
        {src: '/visual/cr-23-morty-underground-1.webp'},
        {src: '/visual/cr-23-morty-boat-1.webp'},
        {src: '/visual/cr-23-morty-splash-1.webp'},
        {src: '/visual/cr-noise-collage.webp', label:'Short Film Stills', category:'Videography'},
        {src: '/visual/rainbow.jpg'}
      ],
      landscapePhotos: [
        {src: '/visual/waterfall.jpg', label:'Norwegen', category:null}
      ]
    }
  }
}
</script>

<style>

</style>
