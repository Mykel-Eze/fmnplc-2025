<template>
  <div class="layout-wrapper min-h-screen">
    <!-- Loading Component -->
    <Loading ref="loadingRef" />

    <!-- Main Layout Content -->
    <Transition name="fade-in">
      <div v-if="isReady" class="layout-content">
        <!--=== Header ===-->
        <Navbar />

        <!--=== Main Content ===-->
        <main class="main-wrapper w-full">
          <slot />
        </main>

        <!--=== Subscribe-To-Newsletter Section ===-->
        <SubscribeToNewsletter />

        <!--=== Footer ===-->
        <Footer />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const loadingRef = ref<any>(null);
const isReady = ref(false);

onMounted(() => {
  // Wait for initial content to load
  setTimeout(() => {
    isReady.value = true;
  }, 800);
});
</script>

<style scoped>
/* Layout wrapper */
.layout-wrapper {
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

.dark-mode .layout-wrapper {
  background-color: #111827;
}

/* Main content wrapper */
.main-wrapper {
  min-height: calc(100vh - 64px - 200px); /* viewport - header - footer approx */
}

/* Fade in transition for main content */
.fade-in-enter-active {
  transition: opacity 0.6s ease 0.2s;
}

.fade-in-enter-from {
  opacity: 0;
}

.fade-in-enter-to {
  opacity: 1;
}
</style>