<template>
  <section id="home" class="hero-section relative overflow-hidden">
    <!-- Hero Carousel -->
    <Carousel
      :value="slides"
      :num-visible="1"
      :num-scroll="1"
      :circular="true"
      :autoplay-interval="7000"
      :show-indicators="false"
      :show-navigators="false"
      class="hero-carousel"
      v-model:page="currentSlide"
    >
      <template #item="{ data }">
        <div class="relative h-[calc(100vh-4rem)] min-h-[600px]">
          <!-- Background Image with Overlay -->
          <div class="absolute inset-0">
            <img
              :src="data.image"
              :alt="data.title"
              class="w-full h-full object-cover"
            />
            <!-- <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div> -->
          </div>

          <!-- Content -->
          <div class="relative h-full container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center h-full">
              <div class="hero-card">
                <h1 class="hero-title bold-txt mb-4">
                  {{ data.title }}
                </h1>
                <p class="hero-description mb-8 leading-relaxed line-clamp-4">
                  {{ data.description }}
                </p>
                <NuxtLink :to="data.link" class="cta-wrapper">
                  <Button
                    label="LEARN MORE"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    size="small"
                    class="hero-cta-button"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>

    <!-- Custom Indicators -->
    <div class="custom-indicators absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10">
      <button
        v-for="(slide, index) in slides"
        :key="`dot-${slide.id}`"
        @click="goToSlide(index)"
        :class="[
          'transition-all duration-300',
          currentSlide === index
            ? 'w-7 h-2 bg-white rounded-full'
            : 'w-2 h-2 bg-white/50 hover:bg-white/75 rounded-full'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const currentSlide = ref(0);

const slides: Slide[] = [
  {
    id: 1,
    title: 'Feeding and Enriching Lives Every Day',
    description: 'As one of the largest Food and Agro-allied groups in Nigeria, we are passionate influencing health',
    image: '/banners/banner-1.jpg',
    link: '#'
  },
  {
    id: 2,
    title: 'Content Localization',
    description: 'Our foray into the Agric sector started in 1978, with the acquisition of a 10,000-hectare farm in Kaboji, Niger state, as part of an investment and expansion strategy designed to create value in the Sugar',
    image: '/banners/banner-2.jpg',
    link: '#'
  },
  {
    id: 3,
    title: 'Grains For Growth',
    description: 'Through the FMN Outgrower Program, we have empowered over 400,000 farmers by providing viable agricultural extension practices, access to high-yielding seeds, technology transfer and',
    image: '/banners/banner-3.jpg',
    link: '#'
  },
  {
    id: 4,
    title: 'Edible Oil You Can Trust',
    description: 'Through our unwavering commitment to product and process innovation, we developed the Golden Penny edible oil and spread to carter to the daily nutritional demands of our consumers.',
    image: '/banners/banner-4.jpg',
    link: '#'
  },
  {
    id: 5,
    title: 'Rooted In Abundance',
    description: 'As a key player in the cassava value chain, we have successfully localised the cultivation of cassava in Nigeria through a mutually beneficial partnership with farmers. Our strategy of providing the farmers with ...',
    image: '/banners/banner-5.jpg',
    link: '#'
  },
  {
    id: 6,
    title: 'Nourishing Today,Sustaining Tomorrow',
    description: 'It is at the core of our daily commitment and endeavours to always leave a legacy of Impact by nourishing today and sustaining tomorrow.',
    image: '/banners/banner-6.jpg',
    link: '#'
  },
  {
    id: 7,
    title: 'Premium Nutrition for Your Livestock',
    description: 'Through our Premier Feeds brand, we are consistently supplying top-quality Poultry and Aqua feed under the brand name "TOPFEEDS"',
    image: '/banners/banner-7.jpg',
    link: '#'
  },
  {
    id: 8,
    title: 'Sweetness From Sunti',
    description: 'With a proven strategy of reducing dependence on imported raw materials and creating value for businesses, consumers, and the continent, we ventured into the Agric sector in 1978, with the acquisition of...',
    image: '/banners/banner-3.jpg',
    link: '#'
  }
];

const goToSlide = (index: number) => {
  currentSlide.value = index;
};
</script>

<style scoped>

</style>