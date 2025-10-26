<template>
  <section id="fmn-stories" class="stories-section py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Heading -->
      <h2 class="section-title !mb-8">
        {{ title || 'Our FMN Stories' }}
      </h2>

      <!-- Video Container -->
      <div class="video-wrapper relative rounded-lg overflow-hidden shadow-2xl">
        <!-- Thumbnail with Play Button (shown when not playing) -->
        <div
          v-if="!isPlaying"
          class="video-thumbnail relative cursor-pointer group"
          @click="playVideo"
        >
          <!-- Thumbnail Image -->
          <img
            :src="videoThumbnail"
            alt="FMN Stories Video"
            class="w-full h-full object-cover"
          />

          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>

          <!-- Play Button -->
          <div class="play-button-wrapper absolute inset-0 flex items-center justify-center">
            <div class="play-button w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img src="@/assets/images/play-icon.png" alt="play" class="play-btn w-full h-full object-cover">
            </div>
          </div>
        </div>

        <!-- YouTube Video Player (shown when playing) -->
        <div
          v-else
          class="video-player-container relative"
          style="padding-bottom: 56.25%; height: 0;"
        >
          <iframe
            :src="`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`"
            class="absolute top-0 left-0 w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          
          <!-- Close Button -->
          <button
            @click="stopVideo"
            class="close-video-button absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <i class="pi pi-times text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Props definition
const props = defineProps<{
  title?: string
}>();

// Video configuration
const youtubeVideoId = ref('Rv_ob02Xg04'); // Replace with actual YouTube video ID
// const videoThumbnail = ref('/stories/video-thumbnail.jpg'); // Replace with actual thumbnail
const videoThumbnail = ref(`https://img.youtube.com/vi/${youtubeVideoId.value}/maxresdefault.jpg`);
const isPlaying = ref(false);

const playVideo = () => {
  isPlaying.value = true;
};

const stopVideo = () => {
  isPlaying.value = false;
};
</script>

<style scoped></style>