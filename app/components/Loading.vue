<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loading-overlay fixed inset-0 z-[9999] flex items-center justify-center">
      <div class="loading-content text-center">
        <!-- Logo -->
        <div class="mb-6">
          <img 
            src="@/assets/images/fmn-black.png" 
            alt="FMN Logo" 
            class="loading-logo h-16 w-auto mx-auto"
          />
        </div>

        <!-- Spinner -->
        <!-- <ProgressSpinner
          style="width: 60px; height: 60px"
          strokeWidth="4"
          fill="transparent"
          animationDuration="1s"
          class="loading-spinner"
        /> -->

        <!-- Loading Text -->
        <!-- <p class="loading-text mt-6 text-lg font-medium">
          Loading...
        </p> -->
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import ProgressSpinner from 'primevue/progressspinner';

const isLoading = ref(true);

onMounted(() => {
  // Simulate initial load time
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});

// Expose loading state to parent
defineExpose({
  isLoading
});
</script>

<style scoped>
/* Light Mode */
.loading-overlay {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
}

.loading-text {
  color: #374151;
}

.loading-logo {
  animation: pulse 2s ease-in-out infinite;
}

/* Dark Mode */
.dark-mode .loading-overlay {
  background-color: rgba(17, 24, 39, 0.95);
}

.dark-mode .loading-text {
  color: #d1d5db;
}

.dark-mode .loading-logo {
  filter: brightness(0) invert(1);
}

/* Custom spinner color */
:deep(.p-progress-spinner-circle) {
  stroke: #16a34a !important;
}

.dark-mode :deep(.p-progress-spinner-circle) {
  stroke: #10b981 !important;
}

/* Animations */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>