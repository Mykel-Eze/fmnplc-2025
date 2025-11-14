<template>
  <div class="video-carousel-container">
    <div class="carousel-inner">
      <!-- Section Header (Optional) -->
      <div v-if="title || subtitle" class="carousel-header">
        <h2 v-if="title" class="carousel-title">{{ title }}</h2>
        <p v-if="subtitle" class="carousel-subtitle">{{ subtitle }}</p>
      </div>

      <!-- Main Carousel -->
      <div class="carousel-stage">
        <!-- Previous Button -->
        <button
          class="nav-arrow nav-arrow-prev"
          @click="previousVideo"
          :disabled="currentIndex === 0"
          aria-label="Previous video"
        >
          <i class="pi pi-chevron-left"></i>
        </button>

        <!-- Videos Track -->
        <div class="videos-viewport">
          <div 
            class="videos-track"
            :style="trackStyle"
          >
            <div
              v-for="(video, index) in videos"
              :key="`video-${index}`"
              class="video-card"
              :class="getSlideClass(index)"
              @click="handleSlideClick(index)"
            >
              <div class="video-content">
                <!-- Thumbnail View (Not Playing) -->
                <div
                  v-if="!isPlaying[index]"
                  class="video-thumbnail-view"
                >
                  <!-- Thumbnail Image -->
                  <img
                    :src="getThumbnailUrl(video.youtubeId)"
                    :alt="video.title"
                    class="video-thumbnail"
                    @error="handleImageError($event, video)"
                  />
                  
                  <!-- Overlay Gradient -->
                  <div class="thumbnail-overlay"></div>
                  
                  <!-- Play Button -->
                  <div class="play-button-wrapper">
                    <button 
                      class="play-button"
                      @click.stop="playVideo(index)"
                      aria-label="Play video"
                    >
                      <i class="pi pi-play"></i>
                    </button>
                  </div>
                  
                  <!-- Video Info -->
                  <div class="video-info">
                    <h3 class="video-title">{{ video.title }}</h3>
                    <p v-if="video.role" class="video-role">{{ video.role }}</p>
                    <p v-if="video.company" class="video-company">{{ video.company }}</p>
                  </div>
                </div>

                <!-- YouTube Iframe (Playing) -->
                <div v-else class="video-iframe-wrapper">
                  <iframe
                    :src="`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`"
                    class="video-iframe"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  
                  <!-- Close Button -->
                  <button
                    class="close-button"
                    @click.stop="stopVideo(index)"
                    aria-label="Close video"
                  >
                    <i class="pi pi-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Next Button -->
        <button
          class="nav-arrow nav-arrow-next"
          @click="nextVideo"
          :disabled="currentIndex === videos.length - 1"
          aria-label="Next video"
        >
          <i class="pi pi-chevron-right"></i>
        </button>
      </div>

      <!-- Dots Indicator -->
      <div class="carousel-dots">
        <button
          v-for="(video, index) in videos"
          :key="`dot-${index}`"
          class="carousel-dot"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
          :aria-label="`Go to video ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue';

interface Video {
  youtubeId: string;
  title: string;
  role?: string;
  company?: string;
}

interface Props {
  videos?: Video[];
  title?: string;
  subtitle?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const props = withDefaults(defineProps<Props>(), {
  videos: () => [
    {
      youtubeId: 'GFGg67imKaA', // Replace with actual video IDs
      title: 'Nike Tinubu',
      role: 'General Manager',
      company: 'Premium Cassava Products Ltd'
    },
    {
      youtubeId: 'cRhgu3cQ2u8',
      title: 'John Doe',
      role: 'Operations Director',
      company: 'Partner Company Ltd'
    },
    {
      youtubeId: 'glgd_1M9Xbc',
      title: 'Jane Smith',
      role: 'Regional Manager',
      company: 'Distribution Partners'
    },
    {
      youtubeId: 'SFwghDrWBGQ',
      title: 'Ahmed Ibrahim',
      role: 'Supply Chain Director',
      company: 'Logistics Solutions'
    },
    {
      youtubeId: '_fUUQHk1MVs',
      title: 'Mary Johnson',
      role: 'Business Development',
      company: 'Growth Ventures'
    }
  ],
  title: '',
  subtitle: '',
  autoPlay: false,
  autoPlayInterval: 5000
});

// State
const currentIndex = ref(0);
const isPlaying = reactive<{ [key: number]: boolean }>({});
const slideWidth = ref(0);
const centerOffset = ref(0);
const isTransitioning = ref(false);

// Auto-play timer
let autoPlayTimer: ReturnType<typeof setInterval> | null = null;

// Computed styles
const trackStyle = computed(() => {
  const translateX = -(currentIndex.value * slideWidth.value) + centerOffset.value;
  return {
    transform: `translateX(${translateX}px)`,
    transition: isTransitioning.value ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
  };
});

// Methods
const getThumbnailUrl = (youtubeId: string) => {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
};

const handleImageError = (event: Event, video: Video) => {
  const img = event.target as HTMLImageElement;
  // Fallback to high quality thumbnail
  img.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
};

const getSlideClass = (index: number) => {
  const diff = index - currentIndex.value;
  
  if (diff === 0) return 'slide-active';
  if (Math.abs(diff) === 1) return diff < 0 ? 'slide-prev' : 'slide-next';
  if (Math.abs(diff) === 2) return diff < 0 ? 'slide-far-prev' : 'slide-far-next';
  return 'slide-hidden';
};

const handleSlideClick = (index: number) => {
  if (index !== currentIndex.value) {
    goToSlide(index);
  }
};

const goToSlide = (index: number) => {
  if (index < 0 || index >= props.videos.length) return;
  
  // Stop any playing videos
  Object.keys(isPlaying).forEach(key => {
    isPlaying[parseInt(key)] = false;
  });
  
  isTransitioning.value = true;
  currentIndex.value = index;
  
  // Reset transition flag after animation
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
  
  // Reset auto-play timer if active
  if (props.autoPlay) {
    resetAutoPlay();
  }
};

const nextVideo = () => {
  if (currentIndex.value < props.videos.length - 1) {
    goToSlide(currentIndex.value + 1);
  } else if (props.autoPlay) {
    // Loop back to start if auto-playing
    goToSlide(0);
  }
};

const previousVideo = () => {
  if (currentIndex.value > 0) {
    goToSlide(currentIndex.value - 1);
  }
};

const playVideo = (index: number) => {
  // First navigate to the video if not current
  if (index !== currentIndex.value) {
    goToSlide(index);
  }
  
  // Then play it after a short delay for smooth transition
  setTimeout(() => {
    isPlaying[index] = true;
  }, index !== currentIndex.value ? 300 : 0);
  
  // Stop auto-play when user plays a video
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

const stopVideo = (index: number) => {
  isPlaying[index] = false;
  
  // Resume auto-play if it was active
  if (props.autoPlay) {
    resetAutoPlay();
  }
};

const resetAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
  }
  
  if (props.autoPlay) {
    autoPlayTimer = setInterval(() => {
      nextVideo();
    }, props.autoPlayInterval);
  }
};

const calculateDimensions = () => {
  const container = document.querySelector('.videos-viewport');
  if (container) {
    const containerWidth = container.clientWidth;
    
    // Calculate slide width and center offset based on viewport
    if (window.innerWidth >= 1024) {
      slideWidth.value = containerWidth * 0.7; // Main slide takes 70%
      centerOffset.value = containerWidth * 0.15; // Center the active slide
    } else if (window.innerWidth >= 768) {
      slideWidth.value = containerWidth * 0.8;
      centerOffset.value = containerWidth * 0.1;
    } else {
      slideWidth.value = containerWidth;
      centerOffset.value = 0;
    }
  }
};

// Lifecycle
onMounted(() => {
  calculateDimensions();
  window.addEventListener('resize', calculateDimensions);
  
  // Start auto-play if enabled
  if (props.autoPlay) {
    resetAutoPlay();
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', calculateDimensions);
  
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
  }
});
</script>

<style src="@/assets/css/video-carousel.css" scoped></style>