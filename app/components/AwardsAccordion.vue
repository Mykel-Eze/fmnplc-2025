<template>
  <section class="awards-section py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <Accordion :multiple="true" class="awards-accordion">
        <AccordionTab
          v-for="award in awards"
          :key="award.id"
          :header="award.title"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            <div
              v-for="(photo, index) in award.photos"
              :key="index"
              class="award-photo-wrapper"
            >
              <img
                :src="photo.src"
                :alt="photo.alt"
                class="award-photo w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                @click="openLightbox(photo.src)"
              />
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  </section>
</template>

<script lang="ts" setup>

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

const openLightbox = (src: string) => {
  console.log('Open lightbox:', src);
  // Implement lightbox/modal functionality
};
</script>

<style scoped>
.awards-section {
  background-color: #ffffff;
}

/* Custom Accordion Styling */
.awards-accordion .p-accordion-header-link {
  background-color: var(--pry-color);
  color: #ffffff;
  font-weight: 600;
  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
}
.awards-accordion .p-accordion-header-link:hover {
  background-color: #15803d;
}
.awards-accordion .p-accordion-content {
  background-color: #f9fafb;
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

/* Dark Mode */
.dark-mode .awards-section {
  background-color: #111827;
}
.dark-mode .awards-accordion .p-accordion-header-link {
  background-color: var(--pry-color);
}
.dark-mode .awards-accordion .p-accordion-header-link:hover {
  background-color: #166534;
}
.dark-mode .awards-accordion .p-accordion-content {
  background-color: #1f2937;
}
</style>