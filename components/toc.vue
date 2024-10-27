<template>
  <nav role="doc-toc" class="tocHelper z-100 m-auto my-8 h-0 overflow-visible sticky block relative max-w-prose top-12">
    <div class="toc">
      <div tabindex="0" role="button" aria-pressed="false" class="cursor-pointer py-2 px-4 flex justify-between border-b" @click="() => {this.isOpen = !isOpen}">
        <span class="toc-heading" v-show="isOpen">Table of contents</span>
        <div>
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" fill="rgba(0,0,0,1)"/></svg>      </div>
          <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
        </div>
        <div ref="toc" class="p-2" v-show="isOpen" @click="() => {this.isOpen = !isOpen}">
          <ul>
            <NuxtLink v-for="heading in headings" :to="'#' + heading.id">
              <li>{{heading.title}}</li>
            </NuxtLink>
          </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "toc",
  data() {
    return{
      isOpen: false,
      headings: []
    }
  },
  mounted() {
      const headingElements = document.querySelectorAll("h1");
      console.log(headingElements)
      headingElements.forEach(heading => {
        this.headings.push({title: heading.textContent, id: heading.id})
      })
  }
}
</script>


<style>
.toc-heading{
  @apply font-bold;
}

.toc ul{
  @apply flex flex-col;
}

.toc li{
  @apply p-2 select-none;
}

.toc li:hover{
  @apply bg-gray-100 rounded;
}

.toc{
  transition-duration: .5s;
  @apply inline-block rounded border right-0 absolute bg-white z-50;
}
</style>
