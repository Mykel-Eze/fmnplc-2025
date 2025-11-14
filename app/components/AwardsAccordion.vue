<template>
  <section class="awards-section py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Accordion :multiple="true" class="awards-accordion">
        <AccordionPanel
          v-for="(award, index) in awards"
          :key="award.id"
          :value="String(index)"
        >
          <AccordionHeader>{{ award.title }}</AccordionHeader>
          <AccordionContent>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 p-4">
              <div
                v-for="(photo, photoIndex) in award.photos"
                :key="photoIndex"
                class="award-photo-wrapper"
              >
                <img
                  :src="photo.src"
                  :alt="photo.alt"
                  class="award-photo w-full h-48 sm:h-[280px] object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  @click="openLightbox(photo.src, photo.alt)"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div
          v-if="isLightboxOpen"
          class="lightbox-overlay"
          @click="closeLightbox"
        >
          <div class="lightbox-container">
            <button
              class="lightbox-close"
              @click.stop="closeLightbox"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div class="lightbox-content" @click.stop>
              <img
                :src="currentImage"
                :alt="currentImageAlt"
                class="lightbox-image"
              />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

interface Photo {
  src: string;
  alt: string;
}

interface Award {
  id: string;
  title: string;
  photos: Photo[];
}

interface Props {
  awards: Award[];
}

defineProps<Props>();

// Lightbox state
const isLightboxOpen = ref(false);
const currentImage = ref('');
const currentImageAlt = ref('');

const openLightbox = (src: string, alt: string) => {
  currentImage.value = src;
  currentImageAlt.value = alt;
  isLightboxOpen.value = true;
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
  currentImage.value = '';
  currentImageAlt.value = '';
  document.body.style.overflow = ''; // Restore scrolling
};

// Close lightbox on ESC key press
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isLightboxOpen.value) {
    closeLightbox();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = ''; // Cleanup
});
</script>

<style scoped></style>