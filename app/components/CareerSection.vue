<template>
  <section 
    ref="careersSection"
    id="careers" 
    class="careers-section relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
  >
    <!-- Desktop View - Animated Images -->
    <div class="hidden md:block career-block-desktop">
      <!-- Background Images Container -->
      <div class="images-container absolute inset-0">
        <!-- Top Left Image -->
        <div 
            v-for="(image, index) in careerImages"
            :key="`career-img-${index}`"
            :class="['career-image', `career-image-${index + 1}`, 'absolute', { active: isInView }]"
        >
            <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
        </div>
      </div>

      <!-- Content Card (Centered) -->
      <div class="relative flex items-center justify-center min-h-[600px]">
        <Card class="careers-card max-w-2xl w-full">
          <template #content>
            <div class="text-center p-8">
              <p class="section-label careers-label">
                CAREERS
              </p>
              <h2 class="section-title careers-title">
                Join the FMN Family
              </h2>
              <p class="section-description careers-description text-gray-600 text-base mb-8 leading-relaxed">
                Build your career with Nigeria's leading food and agro-allied group. 
                We offer diverse opportunities for growth and development in a dynamic environment.
              </p>
              <Button
                label="View Open Roles"
                severity="success"
                size="large"
                class="careers-cta-button"
                @click="viewRoles"
              />
            </div>
          </template>
        </Card>
      </div>
    </div>

    <!-- Mobile View - Simple Layout with Marquee -->
    <div class="md:hidden career-block-mobile">
      <!-- Content (Top) -->
      <div class="mb-12">
        <p class="section-label careers-label-mobile">
          CAREERS
        </p>
        <h2 class="section-title careers-title-mobile mb-4">
          Join the FMN Family
        </h2>
        <p class="section-description careers-description-mobile text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
          Build your career with Nigeria's leading food and agro-allied group. 
          We offer diverse opportunities for growth and development in a dynamic environment.
        </p>
        <NuxtLink to="/careers">
          <Button
            label="View Open Roles"
            severity="success"
            size="large"
            class="careers-cta-button"
          />
        </NuxtLink>
      </div>

      <!-- Marquee Images (Bottom) -->
      <div class="marquee-container relative overflow-hidden py-8">
        <div class="marquee-track flex gap-4">
          <!-- First set of images -->
          <div 
            v-for="(image, index) in careerImages" 
            :key="`img-1-${index}`"
            class="marquee-item flex-shrink-0"
          >
            <img 
              :src="image.src" 
              :alt="image.alt" 
              class="w-64 h-48 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <!-- Duplicate set for seamless loop -->
          <div 
            v-for="(image, index) in careerImages" 
            :key="`img-2-${index}`"
            class="marquee-item flex-shrink-0"
          >
            <img 
              :src="image.src" 
              :alt="image.alt" 
              class="w-64 h-48 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

const careersSection = ref<HTMLElement | null>(null);
const isInView = ref(false);

const careerImages = [
  { src: '/join/join-1.png', alt: 'join-img-1' },
  { src: '/join/join-2.png', alt: 'join-img-2' },
  { src: '/join/join-3.png', alt: 'join-img-3' },
  { src: '/join/join-4.png', alt: 'join-img-4' },
  { src: '/join/join-5.png', alt: 'join-img-5' },
  { src: '/join/join-6.png', alt: 'join-img-6' },
  { src: '/join/join-7.png', alt: 'join-img-7' }
];

const viewRoles = () => {
  // Navigate to careers page or open modal
  // console.log('View Open Roles clicked');
  // window.open('https://www.fmnplc.com/careers', '_blank');
};

// Intersection Observer for scroll animation
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (careersSection.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInView.value = entry.isIntersecting;
        });
      },
      {
        threshold: 0.3
      }
    );

    observer.observe(careersSection.value);
  }
});

onUnmounted(() => {
  if (observer && careersSection.value) {
    observer.unobserve(careersSection.value);
  }
});
</script>

<style scoped></style>