<template>
  <nav>
    <div class="mx-auto">
      <div class="flex justify-between">
        <div class="flex">
          <div>
            <!-- Website Logo -->
            <a href="#" class="flex items-center py-4">
              <span class="font-semibold text-gray-500 text-lg">Portfolio</span>
            </a>
          </div>
        </div>
        <!-- Primary Navbar items -->
        <div class="hidden md:flex items-center lg:space-x-14 space-x-4">
          <NuxtLink to="/" class="menu__link">
            Home
          </NuxtLink>
          <NuxtLink to="/tools" class="menu__link">
            Tools
          </NuxtLink>
          <NuxtLink to="/about" class="menu__link">
            About
          </NuxtLink>
          <NuxtLink to="/contact" class="menu__link">
            Contact
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
  background-color: #f0daff;
}

.cta.nuxt-link-exact-active{
  background: none;
  border: 1px solid #f0daff;
  transition: .25s;
}

.cta.nuxt-link-exact-active:after{
  left: 45%;
  top: 20%;
  animation: none;
}

a{
  font-weight: 100;
  color: var(--link-color);
}

a:hover{
  color: var(--link-color-active)
}

a.nuxt-link-exact-active{
  position: relative;
  z-index: 1;
}


</style>
