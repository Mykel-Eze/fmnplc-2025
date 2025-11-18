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
          <h1 class="hero-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            {{ title }}
          </h1>
          <div v-if="showPortalBtn" class="portal-btn-div flex gap-4 items-center mb-8">
              <NuxtLink rel="noopener" :href="PortalUrl" class="pbd-link flex-div gap-2 justify-center">
                  <span>{{ PortalBtnTitle }}</span>
                  <img src="@/assets/images/white-btn-arrow.svg" alt="portal-arrow" />
              </NuxtLink>

              <NuxtLink rel="noopener" :href="PortalUrl_2" class="pbd-link pbd-link-2 flex-div gap-2 justify-center">
                  <span>{{ PortalBtnTitle_2 }}</span>
                  <img src="@/assets/images/black-btn-arrow.svg" alt="portal-arrow" />
              </NuxtLink>
          </div>
          <div v-if="showUnderline" class="hero-underline w-[130px] h-2 sec-bg rounded-3xl"></div>
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
  showPortalBtn?: boolean;
  PortalBtnTitle?: string;
  PortalBtnTitle_2?: string;
  PortalUrl?: string;
  PortalUrl_2?: string;
}

withDefaults(defineProps<Props>(), {
  showUnderline: true,
  showPortalBtn: false
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

.portal-btn-div a.pbd-link {
    background: var(--pry-color);
    border: none;
    border-radius: 4px;
    color: white;
    width: 135px;
    font-size: 13px;
    text-align: center;
    height: 45px;
    font-family: var(--font-xbold);
}
.portal-btn-div a.pbd-link-2 {
    background: var(--sec-color);
    color: black;
}
.portal-btn-div a.pbd-link:hover {
  animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(241, 241, 241, 0.4);
        box-shadow: 0 0 0 0 rgba(241, 241, 241, 0.4);
    }

    70% {
        -moz-box-shadow: 0 0 0 10px rgba(241, 241, 241, 0);
        box-shadow: 0 0 0 10px rgba(241, 241, 241, 0);
    }

    100% {
        -moz-box-shadow: 0 0 0 0 rgba(241, 241, 241, 0);
        box-shadow: 0 0 0 0 rgba(241, 241, 241, 0);
    }
}

</style>