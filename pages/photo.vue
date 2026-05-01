<template>
  <div ref="mainDiv" class="m-auto overflow-x-hidden">
    <section class="container pt-8 pb-16">
      <div class="flex flex-row flex-wrap">
        <img src="../assets/3d-waving.png" class="h-64 w-auto self-center" alt="" />
        <div>
          <h1 class="text-5xl landing-title py-0">Photography</h1>
          <p class="leading-8 landing-description max-w-prose md:text-left opacity-50">
            Capturing special, fun and sometimes even stupid moments.
          </p>
          <hr class="w-full mt-8" />
          <div class="w-fit mt-8">
            <a href="https://instagram.com/chrisrock.mov" target="_blank">
              <div class="contact-btn-inverted">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g>
                    <path
                      d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
                    <path
                      d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </g>
                </svg>
                <span>Instagram</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-50 py-8">
      <div class="container">
        <h1 class="mt-12 mb-0 section-title"><span class="emph pr-2">01</span> Events</h1>
        <PhotoGrid :photos="eventPhotos" />
      </div>
    </section>
    <section class="py-8">
      <div class="container">
        <h1 class="mt-12 mb-0 section-title"><span class="emph pr-2">02</span> People</h1>
        <PhotoGrid :photos="peoplePhotos" />
      </div>
    </section>
    <section class="bg-gray-50 py-8">
      <div class="container">
        <h1 class="mt-12 mb-0 section-title"><span class="emph pr-2">03</span> Landscape</h1>
        <PhotoGrid :photos="landscapePhotos" />
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
  components: { Badge, ActionTag, WebLink, BobbleHead, Workpiece, CursorChat, CircleDecoration },
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
  data() {
    return {
      eventPhotos: [
        { src: '/visual/c24-okdt-1.webp', label: 'ok.danke.tschüss', category: 'Festival' },
        { src: '/visual/c24-okdt-2.webp', label: 'ok.danke.tschüss', category: 'Festival' },
        { src: '/visual/c24-okdt-3.webp', label: 'ok.danke.tschüss', category: 'Festival' },
        { src: '/visual/c24-okdt-4.webp', label: 'ok.danke.tschüss', category: 'Festival' },
        { src: '/visual/c24-okdt-5.webp', label: 'ok.danke.tschüss', category: 'Festival' },
        { src: '/visual/c24-okdt-6.webp', label: 'ok.danke.tschüss', category: 'Festival' },
        { src: '/visual/c25-carla-ahad-1.webp', label: 'Carla Ahad', category: 'Festival' },
        { src: '/visual/c25-carla-ahad-3.webp', label: 'Carla Ahad', category: 'Festival' },
        { src: '/visual/c25-carla-ahad-2.webp', label: 'Carla Ahad', category: 'Festival' },
        { src: '/visual/c25-carla-ahad-4.webp', label: 'Carla Ahad', category: 'Festival' },
        { src: '/visual/c25-carla-ahad-5.webp', label: 'Carla Ahad', category: 'Festival' },
        { src: '/visual/c25-carla-ahad-6.webp', label: 'Carla Ahad', category: 'Festival' },
        { src: '/visual/c25-carla-ahad-7.webp', label: 'Carla Ahad', category: 'Festival' },
        { src: '/visual/cr24-bothmer-1.webp', label: 'Marie Bothmer', category: 'Festival' },
        { src: '/visual/cr24-bothmer-2.webp', label: 'Marie Bothmer', category: 'Festival' },
        { src: '/visual/cr24-bothmer-3.webp', label: 'Marie Bothmer', category: 'Festival' },
        { src: '/visual/cr24-bothmer-4.webp', label: 'Marie Bothmer', category: 'Festival' },
        { src: '/visual/cr24-bothmer-5.webp', label: 'Marie Bothmer', category: 'Festival' },
        { src: '/visual/c25-carla-ahad-8.webp', label: 'Carla Ahad', category: 'Festival' }
      ],
      peoplePhotos: [
        { src: '/visual/muellmorty-hd.jpg' },
        { src: '/visual/party.jpg' },
        { src: '/visual/cr-people-1.webp' },
        { src: '/visual/cr-23-morty-underground-1.webp' },
        { src: '/visual/cr-23-morty-boat-1.webp' },
        { src: '/visual/cr-23-morty-splash-1.webp' },
        { src: '/visual/cr-noise-collage.webp', label: 'Short Film Stills', category: 'Videography' }
      ],
      landscapePhotos: [
        { src: '/visual/waterfall.jpg' },
        { src: '/visual/cr-nature-1.webp' },
        { src: '/visual/cr-nature-2.webp' },
      ]
    }
  }
}
</script>

<style></style>
