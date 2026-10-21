<template>
  <nav role="doc-toc" class="tocHelper z-40 m-auto my-8 h-0 overflow-visible sticky hidden md:block relative max-w-prose top-12">
    <div class="toc">
      <div tabindex="0" role="button" aria-pressed="false" class="cursor-pointer py-2 px-4 flex justify-between border-b" @click="() => {this.isOpen = !isOpen}">
        <span class="toc-heading" v-show="isOpen">Table of contents</span>
        <div>
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" fill="rgba(0,0,0,1)"/></svg>      </div>
          <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
        </div>
        <div ref="toc" class="p-2" v-show="isOpen" @click="() => {this.isOpen = !isOpen}">
          <ul>
            <li v-for="heading in headings" :key="heading.id" :class="{ sub: heading.sub }">
              <NuxtLink :to="'#' + heading.id">{{ heading.title }}</NuxtLink>
            </li>
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
      // section headings that can be jumped to; the steps of a deep dive have their id on the
      // surrounding block, so they link there and show indented below the deep dive's title
      const headingElements = document.querySelectorAll("h1[id], h2[id], .step[id] h3");
      headingElements.forEach(heading => {
        const step = heading.closest('.step[id]')
        this.headings.push({
          title: heading.textContent.trim(),
          id: step ? step.id : heading.id,
          sub: Boolean(step)
        })
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

.toc li a{
  @apply block p-2 select-none;
}

.toc li.sub a{
  @apply pl-6 text-sm;
}

.toc li:hover{
  @apply bg-gray-100 rounded;
}

.toc{
  @apply inline-block rounded border right-0 absolute bg-white z-50;
}
</style>
