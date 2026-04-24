<template>
  <nav>
    <div class="mx-auto my-4">
        <!-- Primary Navbar items -->
        <div class="hidden md:flex justify-center lg:space-x-6 space-x-4">
          <NuxtLink to="/" class="menu__link" exact>
            <span>
              Home
            </span>
          </NuxtLink>
          <NuxtLink to="/about" class="menu__link">
            <span>
              About
            </span>
          </NuxtLink>
          <NuxtLink to="/photo" class="menu__link">
            <span>
              Photo
            </span>
          </NuxtLink>
          <NuxtLink to="#contact" class="menu__link">
            <span>
              Contact
            </span>
          </NuxtLink>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button menu__link">
            <span>
              MENU
            </span>
          </button>
        </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu duration-500 opacity-0">
      <ul class="leading-loose">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/photo">Photography</NuxtLink></li>
        <li><NuxtLink to="#contact" class="rounded-3xl">Contact</NuxtLink></li>
      </ul>
    </div>
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
  name: "Navbar",
  mounted() {
    const btn = document.querySelector('button.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      if(menu.classList.contains('hidden')){
        menu.classList.replace("opacity-100","opacity-0")
      }else{
        menu.classList.replace('opacity-0', 'opacity-100');
      }
    });
  }
}
</script>

<style scoped>
li{
  @apply my-2;
}

.cta:hover{
  background-color: var(--link-color-active);
}

a.menu__link.nuxt-link-active{
  font-weight: 500;
  color: var(--link-color-active);
}

.menu__link span{
  border-color: var(--primary-color);
  position: relative;
  @apply py-2 px-6;
}

.menu__link.nuxt-link-active :before,
.menu__link:hover :before {
  position: absolute;
  bottom: 0;
  display: block;
  height: 3px;
  width: 25%;
  left:40%;
  content: "";
  background-color: var(--link-color-active);
  @apply rounded-2xl;
}

a{
  font-weight: 300;
  color: var(--link-color);
}

.menu__link :hover{
  color: var(--link-color-active)
}

.mobile-menu-button{
  color: var(--primary-color);
  @apply font-bold;
}


.logo{
  font-family: "DM Sans", sans-serif;
  font-weight: bold;
  @apply uppercase text-black text-5xl;
}

.logo span{
  color: var(--primary-color);
}


</style>
