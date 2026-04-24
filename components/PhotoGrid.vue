<template>
  <section class="photo-grid">
    <div class="columns-wrapper">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="photo-item"
        @click="openLightbox(index)"
      >
        <img
          :src="photo.src"
          :alt="photo.alt || photo.label"
          loading="lazy"
        />
        <div class="overlay">
          <div class="meta">
            <span v-if="photo.category" class="badge">{{ photo.category }}</span>
            <p v-if="photo.label" class="label">{{ photo.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <transition name="fade">
      <div v-if="lightboxIndex !== null" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">✕</button>
        <button v-if="photos.length > 1" class="lightbox-prev" @click="prevPhoto">‹</button>
        <img
          :src="photos[lightboxIndex].src"
          :alt="photos[lightboxIndex].alt || photos[lightboxIndex].label"
          class="lightbox-img"
        />
        <button v-if="photos.length > 1" class="lightbox-next" @click="nextPhoto">›</button>
        <p v-if="photos[lightboxIndex].label" class="lightbox-caption">
          {{ photos[lightboxIndex].label }}
        </p>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'PhotoGrid',

  props: {
    photos: {
      type: Array,
      required: true,
      // Expected shape per photo object:
      // {
      //   src: String (required) — image path or URL
      //   alt: String           — accessibility description
      //   label: String         — caption shown on hover and in lightbox
      //   category: String      — badge text (e.g. "Portrait", "Landschaft")
      // }
    },
    columns: {
      type: Object,
      default: () => ({
        sm: 1,  // < 640px
        md: 2,  // < 1024px
        lg: 3,  // >= 1024px
      }),
    },
  },

  data () {
    return {
      lightboxIndex: null,
    }
  },

  mounted () {
    window.addEventListener('keydown', this.handleKey)
  },

  beforeDestroy () {
    window.removeEventListener('keydown', this.handleKey)
  },

  methods: {
    openLightbox (index) {
      this.lightboxIndex = index
      document.body.style.overflow = 'hidden'
    },
    closeLightbox () {
      this.lightboxIndex = null
      document.body.style.overflow = ''
    },
    nextPhoto () {
      this.lightboxIndex = (this.lightboxIndex + 1) % this.photos.length
    },
    prevPhoto () {
      this.lightboxIndex = (this.lightboxIndex - 1 + this.photos.length) % this.photos.length
    },
    handleKey (e) {
      if (this.lightboxIndex === null) { return }
      if (e.key === 'ArrowRight') { this.nextPhoto() }
      if (e.key === 'ArrowLeft') { this.prevPhoto() }
      if (e.key === 'Escape') { this.closeLightbox() }
    },
  },
}
</script>

<style scoped>
/* ── Grid ── */
.photo-grid {
  padding: 2rem 0;
}

.columns-wrapper {
  column-count: v-bind('columns.lg');
  column-gap: 12px;
}

/* Responsive columns – override with CSS custom props if needed */
@media (max-width: 1023px) {
  .columns-wrapper {
    column-count: v-bind('columns.md');
  }
}

@media (max-width: 639px) {
  .columns-wrapper {
    column-count: v-bind('columns.sm');
  }
}

/* ── Individual item ── */
.photo-item {
  break-inside: avoid;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.photo-item img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.photo-item:hover img {
  transform: scale(1.04);
}

/* ── Hover overlay ── */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.35s ease;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
}

.photo-item:hover .overlay {
  background: rgba(0, 0, 0, 0.32);
}

.meta {
  transform: translateY(8px);
  opacity: 0;
  transition: all 0.35s ease;
}

.photo-item:hover .meta {
  transform: translateY(0);
  opacity: 1;
}

.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  margin-bottom: 4px;
}

.label {
  margin: 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
}

/* ── Lightbox ── */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-img {
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  border-radius: 6px;
}

.lightbox-caption {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  margin: 0;
}

.lightbox-close,
.lightbox-prev,
.lightbox-next {
  position: absolute;
  background: rgba(255, 255, 255, 0.12);
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.lightbox-close:hover,
.lightbox-prev:hover,
.lightbox-next:hover {
  background: rgba(255, 255, 255, 0.25);
}

.lightbox-close { top: 1.25rem; right: 1.25rem; font-size: 14px; }
.lightbox-prev  { left: 1.25rem; }
.lightbox-next  { right: 1.25rem; }

/* ── Transition ── */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>