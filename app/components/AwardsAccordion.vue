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

<style>
.awards-section {
  background-color: #ffffff;
}

/* Custom Accordion Styling */
.p-accordion.p-component.awards-accordion {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.awards-accordion .p-accordionheader {
  background-color: var(--pry-color) !important;
  color: #ffffff;
  font-weight: 600;
  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;
}

.awards-accordion .p-accordionheader:hover {
  background-color: #15803d !important;
}

.awards-accordion .p-accordioncontent-content {
  background-color: transparent !important;
  border: none;
  padding: 0;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
}

.award-photo {
  transition: all 0.3s ease;
}

.award-photo:hover {
  transform: scale(1.05);
}

.p-accordionpanel .p-accordionheader-toggle-icon {
  color: white !important;
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.lightbox-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10000;
}

.lightbox-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.lightbox-close:active {
  transform: scale(0.95);
}

/* Lightbox Transitions */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-active .lightbox-image,
.lightbox-fade-leave-active .lightbox-image {
  transition: transform 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

.lightbox-fade-enter-from .lightbox-image {
  transform: scale(0.9);
}

.lightbox-fade-leave-to .lightbox-image {
  transform: scale(0.9);
}

/* Responsive Lightbox */
@media (max-width: 768px) {
  .lightbox-close {
    top: 0.5rem;
    right: 0.5rem;
    width: 40px;
    height: 40px;
  }

  .lightbox-close svg {
    width: 24px;
    height: 24px;
  }
}

/* Dark Mode */
.dark-mode .awards-section {
  background-color: #000;
}
</style>