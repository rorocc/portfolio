<template>
  <nav>
    <div class="mx-auto">
      <div class="flex justify-between">
        <div class="flex">
          <div>
            <!-- Website Logo -->
            <a href="/" class="flex items-center py-4">
              <span class="logo">chrisr<span>°</span></span>
            </a>
          </div>
        </div>
        <!-- Primary Navbar items -->
        <div class="hidden md:flex items-center lg:space-x-14 space-x-4">
          <NuxtLink to="/" class="menu__link" exact>
            Home
          </NuxtLink>
          <NuxtLink to="/tools" class="menu__link">
            Tools
          </NuxtLink>
          <NuxtLink to="/about" class="menu__link">
            About
          </NuxtLink>
          <NuxtLink to="#contact" class="cta">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M6.5 33.75q-1.458 0-2.5-1.042-1.042-1.041-1.042-2.5V9.792q0-1.459 1.042-2.5Q5.042 6.25 6.5 6.25h27q1.5 0 2.542 1.042 1.041 1.041 1.041 2.5v20.416q0 1.459-1.041 2.5Q35 33.75 33.5 33.75ZM20 21.792l13.5-8.917V9.792L20 18.542 6.5 9.792v3.083Z"/></svg>
          </NuxtLink>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg class=" w-6 h-6 text-gray-500 hover:text-fuchsia-500 "
                 x-show="!showMenu"
                 fill="none"
                 stroke-linecap="round"
                 stroke-linejoin="round"
                 stroke-width="2"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu">
      <ul class="leading-loose">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/tools">Tools</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact" class="rounded-3xl">Contact</NuxtLink></li>
      </ul>
    </div>
    <script>
      const btn = document.querySelector("button.mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    </script>
  </nav>
<!--  <nav  >
    <div class="mx-auto">
      <div class="flex justify-between">
        <div class="flex">
          <div>
            <a href="/">UX Portfolio</a>
          </div>
        </div>
        <div class="flex space-x-16 items-center font-lato">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/tools">Tools</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact" class="px-8 py-2 rounded-3xl cta">Contact</NuxtLink>
        </div>
      </div>
    </div>

  </nav>-->
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
li{
  @apply my-2;
}

.cta{
  background-color: var(--pink-light);
  @apply p-2 rounded-full;
}

.cta:hover{
  background-color: var(--link-color-active);
}

.cta svg{
  @apply w-6 fill-white;
}

a.menu__link.nuxt-link-active{
  font-weight: 500;
  color: var(--link-color-active);
}

a{
  font-weight: 100;
  color: var(--link-color);
}

a:hover{
  color: var(--link-color-active)
}

.logo{
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  @apply uppercase text-black text-5xl;
}

.logo span{
  color: var(--pink-light);
}


</style>
