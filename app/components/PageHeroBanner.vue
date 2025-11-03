<template>
  <section class="page-hero relative overflow-hidden p-2">
    <div class="hero-image-wrapper relative h-64 md:h-80 lg:h-96 rounded-md md:rounded-2xl overflow-hidden">
      <!-- Background Image -->
      <img
        :src="backgroundImage"
        :alt="title"
        class="w-full h-full object-cover"
      />
      
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      <!-- Content -->
      <div class="hero-content absolute inset-0 flex items-center">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="hero-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            {{ title }}
          </h1>
          <div v-if="showUnderline" class="hero-underline w-[130px] h-2 sec-bg"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  backgroundImage: string;
  showUnderline?: boolean;
}

withDefaults(defineProps<Props>(), {
  showUnderline: true
});
</script>

<style scoped>
.hero-image-wrapper {
  background-color: var(--pry-color);
}
.hero-title {
  animation: fadeInUp 0.8s ease;
  font-family: var(--font-bold);
  font-size: 56px;
}
.hero-underline {
  animation: slideInLeft 0.6s ease 0.3s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    width: 0;
  }
  to {
    width: 6rem;
  }
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 32px;
  }
}

</style>