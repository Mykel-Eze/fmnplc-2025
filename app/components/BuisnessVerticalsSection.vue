<template>
  <section id="business-verticals" class="verticals-section py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <p class="section-label">
          {{ header.label }}
        </p>
        <h2 class="section-title mb-4">
          {{ header.title }}
        </h2>
        <p class="section-description max-w-[806px] mx-auto mb-4">
          {{ header.description }}
        </p>
      </div>

      <!-- Verticals Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NuxtLink 
          v-for="vertical in verticals"
          :key="vertical.id"
          :to="vertical.url"
          class="vertical-card group overflow-hidden rounded-xl cursor-pointer"
          @mouseenter="hoveredCard = vertical.id"
          @mouseleave="hoveredCard = null"
        >
          <!-- Background Image -->
          <div class="vertical-image-wrapper relative h-[460px] overflow-hidden">
            <img
              :src="vertical.image"
              :alt="vertical.name"
              class="vertical-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Default Content (Always Visible) -->
          <div class="vertical-content absolute bottom-0 left-0 right-0">
            <div class="p-6 ">
              <h3 class="vertical-name text-white mb-1 w-full flex-div justify-between">
                <div class="flex-div gap-3">
                  <span>{{ vertical.name }}</span>
                  <hr v-if="vertical.subtitle" class="dash" />
                  <small v-if="vertical.subtitle" class="vertical-subtitle">{{ vertical.subtitle }}</small>
                </div>

                <img src="@/assets/images/arrow-forward.svg" alt="arrow-forward" class="arrow-forward">
              </h3>
              <p v-if="hoveredCard === vertical.id" class="vertical-description">
                {{ vertical.description }}
              </p>
            </div>
          </div>

          <!-- Hover Overlay with Description -->
          <Transition name="fade-slide">
            <div :class="hoveredCard === vertical.id ? 'hovered' : ''" class="vertical-hover-overlay">
            </div>
          </Transition>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Props for the section header passed from parent
interface Header {
  label: string;
  title: string;
  description?: string;
}

// Expose `header` to the template via defineProps
const { header } = defineProps<{ header: Header }>();

interface Vertical {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  image: string;
  url: string
}

const hoveredCard = ref<string | null>(null);

const verticals: Vertical[] = [
  {
    id: 'golden-penny',
    name: 'Golden Penny Foods',
    description: 'Golden Penny Foods Ltd is a leading food and agro-allied company in Nigeria, producing a range of high-quality food products. We are committed to providing nutritious and affordable food options for Nigerian families.',
    image: '/verticals/for-gpf.jpg',
    url: '#'
  },
  {
    id: 'fmn-agro',
    name: 'FMN Agro',
    description: 'Supporting local farmers with agricultural inputs, technical assistance, and market access. Through our outgrower programs, we empower thousands of farmers across Nigeria to improve their yields and livelihoods.',
    image: '/verticals/for-fmn-agro.jpg',
    url: '#'
  },
  {
    id: 'golden-sugar',
    name: 'Golden Sugar Company',
    description: 'Golden Sugar Company Ltd produces high-quality refined sugar while promoting sustainable sugar cultivation. We operate one of the largest sugar refineries in West Africa with state-of-the-art facilities.',
    image: '/verticals/for-gsc.jpg',
    url: '#'
  },
  {
    id: 'bagco',
    name: 'BAGCO Packaging Solutions',
    description: 'BAGCO is Africa\'s largest polyethylene converting plant and West Africa\'s largest woven polypropylene sack manufacturing facility, offering innovative packaging solutions for various industries.',
    image: '/verticals/for-bagco.jpg',
    url: '#'
  },
  {
    id: 'infrastructure',
    name: 'FMN Infrastructure',
    subtitle: '(ABTL)',
    description: 'Apapa Bulk Terminal Limited (ABTL) is a leading Nigerian Port Terminal company with state-of-the-art port facilities. We provide efficient cargo handling services and contribute to Nigeria\'s logistics infrastructure.',
    image: '/verticals/for-abtl.jpg',
    url: '#'
  },
  {
    id: 'holdings',
    name: 'FMN Holdings',
    subtitle: '(FMN HoldCo)',
    description: 'FMN HoldCo is our parent company overseeing all FMN business verticals. We provide strategic direction and ensure operational excellence across our diverse portfolio of food and agro-allied businesses.',
    image: '/verticals/for-holdings.jpg',
    url: '#'
  }
];
</script>

<style scoped></style>