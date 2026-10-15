<template>
  <header>
    <!-- keeps the page content below the floating nav -->
    <div class="h-14 md:h-[88px]" aria-hidden="true" />

    <div class="pill-wrapper">
      <nav aria-label="Main" class="pill">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :exact="link.exact"
          class="pill-link"
        >
          {{ link.title }}
        </NuxtLink>
        <a href="#contact" class="flex">
          <structural-components-action-tag icon="✉️" text="Contact" :cta="true" />
        </a>
      </nav>
    </div>

    <button
      type="button"
      class="menu-button"
      :class="{ 'is-open': open }"
      :aria-label="open ? 'Close menu' : 'Open menu'"
      :aria-expanded="open ? 'true' : 'false'"
      aria-controls="mobile-menu"
      @click="open = !open"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
        <line class="line-top" x1="4" y1="6" x2="20" y2="6" />
        <line class="line-middle" x1="4" y1="12" x2="20" y2="12" />
        <line class="line-bottom" x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </button>

    <transition name="menu">
      <div v-if="open" id="mobile-menu" class="mobile-menu">
        <nav aria-label="Main" class="flex flex-col gap-1">
          <NuxtLink
            v-for="(link, index) in links"
            :key="link.to"
            :to="link.to"
            :exact="link.exact"
            class="menu-link"
            :style="{ animationDelay: `${0.1 + index * 0.06}s` }"
          >
            <span class="menu-number">{{ number(index) }}</span>
            <span class="menu-title">{{ link.title }}</span>
          </NuxtLink>
        </nav>
        <div class="menu-footer">
          <a href="#contact" class="flex" @click="open = false">
            <structural-components-action-tag icon="✉️" text="Contact" :cta="true" />
          </a>
          <a href="https://linkedin.com/in/rock-christopher" rel="noopener noreferrer" target="_blank" class="icon-button" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
          <a href="mailto:moin@chrisrock.rocks" class="icon-button" aria-label="E-Mail">
            <svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6.5 33.75q-1.458 0-2.5-1.042-1.042-1.041-1.042-2.5V9.792q0-1.459 1.042-2.5Q5.042 6.25 6.5 6.25h27q1.5 0 2.542 1.042 1.041 1.041 1.041 2.5v20.416q0 1.459-1.041 2.5Q35 33.75 33.5 33.75ZM20 21.792l13.5-8.917V9.792L20 18.542 6.5 9.792v3.083Z" /></svg>
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      open: false,
      links: [
        { to: "/", title: "Home", exact: true },
        { to: "/about", title: "About", exact: false },
        { to: "/photo", title: "Photo", exact: false }
      ]
    }
  },
  watch: {
    $route() {
      this.open = false
    },
    open(isOpen) {
      document.documentElement.style.overflow = isOpen ? "hidden" : ""
    }
  },
  mounted() {
    document.addEventListener("keydown", this.onKeydown)
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onKeydown)
    document.documentElement.style.overflow = ""
  },
  methods: {
    number(index) {
      return String(index + 1).padStart(2, "0")
    },
    onKeydown(event) {
      if (event.key === "Escape") {
        this.open = false
      }
    }
  }
}
</script>

<style scoped>
header{
  /* darker than --link-color-active so it stays readable when dark content scrolls under the glass */
  --nav-active: #4f4485;
}

/* desktop: floating glass pill, styled like the action tags */
.pill-wrapper{
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 50;
  display: none;
  justify-content: center;
  pointer-events: none;
}

.pill{
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 5px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.75);
  -webkit-backdrop-filter: blur(20px) saturate(1.8);
  backdrop-filter: blur(20px) saturate(1.8);
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.07);
  pointer-events: auto;
  animation: nav-drop 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.pill-link{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 96px;
  height: 44px;
  padding: 0 20px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 300;
  color: #4b4b4b;
  transition: color 0.3s ease;
}

.pill-link::after{
  content: "";
  position: absolute;
  left: 50%;
  bottom: 6px;
  width: 20px;
  height: 3px;
  margin-left: -10px;
  border-radius: 4px;
  background-color: var(--nav-active);
  opacity: 0;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease;
}

.pill-link:hover,
.pill-link.nuxt-link-active{
  color: var(--nav-active);
}

.pill-link.nuxt-link-active{
  font-weight: 500;
}

.pill-link:hover::after,
.pill-link.nuxt-link-active::after{
  opacity: 1;
  transform: scaleX(1);
}

/* mobile: glass icon button and full-screen glass menu */
.menu-button{
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.75);
  -webkit-backdrop-filter: blur(20px) saturate(1.8);
  backdrop-filter: blur(20px) saturate(1.8);
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.07);
  color: var(--nav-active);
  transition: background-color 0.3s ease, color 0.3s ease;
  animation: nav-drop 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.menu-button.is-open{
  background: #1f2937;
  color: white;
}

.menu-button line{
  transform-box: view-box;
  transform-origin: 12px 12px;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.2s ease;
}

.menu-button.is-open .line-top{
  transform: rotate(45deg) translateY(6px);
}

.menu-button.is-open .line-middle{
  opacity: 0;
  transform: scaleX(0);
}

.menu-button.is-open .line-bottom{
  transform: rotate(-45deg) translateY(-6px);
}

.mobile-menu{
  position: fixed;
  inset: 0;
  z-index: 55;
  display: flex;
  flex-direction: column;
  padding: 112px 28px calc(40px + env(safe-area-inset-bottom));
  background: rgba(255, 255, 255, 0.75);
  -webkit-backdrop-filter: blur(24px) saturate(1.4);
  backdrop-filter: blur(24px) saturate(1.4);
}

.menu-link{
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 6px 0;
  color: #1f2937;
  animation: rise 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.menu-link.nuxt-link-active{
  color: var(--nav-active);
}

.menu-number{
  font-family: "Inria Serif", serif;
  font-style: italic;
  font-size: 18px;
  color: var(--nav-active);
}

.menu-title{
  font-family: "GeistSans", sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.menu-footer{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  animation: rise 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both;
}

.icon-button{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.07);
  color: #1f2937;
}

.icon-button svg{
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.menu-enter-active,
.menu-leave-active{
  transition: opacity 0.3s ease;
}

.menu-enter,
.menu-leave-to{
  opacity: 0;
}

@screen md{
  .pill-wrapper{
    display: flex;
  }

  .menu-button,
  .mobile-menu{
    display: none;
  }
}

@keyframes nav-drop{
  from{ opacity: 0; transform: translateY(-16px); }
  to{ opacity: 1; transform: none; }
}

@keyframes rise{
  from{ opacity: 0; transform: translateY(18px); }
  to{ opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce){
  .pill,
  .menu-button,
  .menu-link,
  .menu-footer{
    animation: none;
  }

  .menu-enter-active,
  .menu-leave-active{
    transition: none;
  }
}
</style>
