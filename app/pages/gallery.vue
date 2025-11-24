<template>
  <div id="gallery-page">
    <!-- Hero Banner -->
    <PageHeroBanner
      title="Gallery"
      background-image="/other-banners/sustainability-banner.png"
    />

    <section class="my-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>
          Exciting bits and clips of who we are and what we do. Our Gallery keeps an expanding collection of videos and pictures for your education, information, and entertainment.
        </p>
        <p>
          Our expanding collection of pictures and videos that tell the story of who we are and what we do.
        </p>
      </div>
    </section>

    <section class="my-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion :multiple="true" :value="['0', '1']" class="awards-accordion">
          <!-- Photos Section -->
          <AccordionPanel value="0">
            <AccordionHeader>Photos</AccordionHeader>
            <AccordionContent>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                <div
                  v-for="(collection, index) in photoCollections"
                  :key="index"
                  class="gallery-card group"
                  @click="openPhotoGallery(collection)"
                >
                  <!-- Image -->
                  <div class="gallery-image-wrapper relative overflow-hidden rounded-t-2xl bg-gray-200">
                    <img
                      :src="collection.thumbnail"
                      :alt="collection.title"
                      class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <!-- Image Count Badge -->
                    <div class="image-count-badge">
                      <i class="pi pi-images"></i>
                      <span>{{ collection.images.length }} Photos</span>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="gallery-content mt-[-8px] min-h-[90px] px-5 py-4 border-b-4 border-green-700">
                    <h3 class="gallery-title text-gray-900 mb-2">
                      {{ collection.title }}
                    </h3>
                    <div class="gallery-meta flex justify-between items-center">
                      <span class="gallery-year text-gray-600">
                        {{ collection.year }}
                      </span>
                      <span class="gallery-count text-gray-700">
                        1/{{ collection.images.length }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>

          <!-- Videos Section -->
          <AccordionPanel value="1">
            <AccordionHeader>Videos</AccordionHeader>
            <AccordionContent>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
                <div
                  v-for="(video, index) in videos"
                  :key="index"
                  class="video-card group"
                  @click="openVideoModal(video)"
                >
                  <!-- Video Thumbnail -->
                  <div class="video-thumbnail-wrapper relative overflow-hidden rounded-2xl bg-gray-200">
                    <img
                      :src="getYouTubeThumbnail(video.videoId)"
                      :alt="video.title"
                      class="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <!-- Play Button Overlay -->
                    <div class="play-overlay">
                      <img src="@/assets/images/play-icon.png" alt="play icon" class="play-icon w-16" />
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>
    </section>

    <!-- Photo Galleria Modal -->
    <Dialog
      v-model:visible="photoModalVisible"
      modal
      :dismissableMask="true"
      class="photo-galleria-modal"
      :style="{ width: '90vw', maxWidth: '1200px' }"
    >
      <template #header>
        <div class="galleria-header">
          <h3>{{ selectedCollection?.title }}</h3>
          <p>{{ selectedCollection?.year }}</p>
        </div>
      </template>
      
      <Galleria
        v-if="selectedCollection"
        v-model:activeIndex="activePhotoIndex"
        :value="selectedCollection.images"
        :numVisible="5"
        :circular="true"
        :showItemNavigators="true"
        :showThumbnails="true"
        :showItemNavigatorsOnHover="true"
        :thumbnailsPosition="thumbnailsPosition"
        :responsiveOptions="galleriaResponsiveOptions"
      >
        <template #item="{ item }">
          <img :src="item.src" :alt="item.alt" class="galleria-image" />
        </template>
        <template #thumbnail="{ item }">
          <img :src="item.src" :alt="item.alt" class="galleria-thumbnail" />
        </template>
      </Galleria>
    </Dialog>

    <!-- Video Modal -->
    <Dialog
      v-model:visible="videoModalVisible"
      modal
      :dismissableMask="true"
      class="video-modal"
      :style="{ width: '90vw', maxWidth: '1000px' }"
      @hide="stopVideo"
    >
      <template #header>
        <h3>{{ selectedVideo?.title }}</h3>
      </template>
      
      <div v-if="selectedVideo" class="video-container">
        <iframe
          :src="`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="youtube-iframe"
        ></iframe>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
// Photo Collections Data
const photoCollections = ref([
  {
    title: 'Agro Awards',
    year: '2018',
    thumbnail: '/gallery/g-1.jpeg',
    images: [
      { src: '/gallery/g-1.jpeg', alt: 'Agro Awards 2018 - Image 1' },
      { src: '/gallery/g-2.jpeg', alt: 'Agro Awards 2018 - Image 2' },
      { src: '/gallery/g-3.jpeg', alt: 'Agro Awards 2018 - Image 3' },
      { src: '/gallery/g-4.jpeg', alt: 'Agro Awards 2018 - Image 4' },
      { src: '/gallery/g-5.jpeg', alt: 'Agro Awards 2018 - Image 5' },
    ]
  },
  {
    title: '2017 Food West Africa EXPO',
    year: '2017',
    thumbnail: '/gallery/g-6.jpeg',
    images: [
      { src: '/gallery/g-6.jpeg', alt: '2017 Food West Africa EXPO - Image 1' },
      { src: '/gallery/g-7.jpeg', alt: '2017 Food West Africa EXPO - Image 2' },
      { src: '/gallery/g-8.jpeg', alt: '2017 Food West Africa EXPO - Image 3' },
      { src: '/gallery/g-9.jpeg', alt: '2017 Food West Africa EXPO - Image 4' },
      { src: '/gallery/g-10.jpeg', alt: '2017 Food West Africa EXPO - Image 5' },
      { src: '/gallery/g-11.jpeg', alt: '2017 Food West Africa EXPO - Image 6' },
      { src: '/gallery/g-12.jpeg', alt: '2017 Food West Africa EXPO - Image 7' },
      { src: '/gallery/g-13.jpeg', alt: '2017 Food West Africa EXPO - Image 8' },
    ]
  },
  {
    title: 'Flag Off of Flour Mills of Nigeria Food Research Center U.I',
    year: '2018',
    thumbnail: '/gallery/g-12.jpeg',
    images: [
      { src: '/gallery/g-12.jpeg', alt: 'Flag Off of Flour Mills of Nigeria Food Research Center U.I - Image 1' },
      { src: '/gallery/g-13.jpeg', alt: 'Flag Off of Flour Mills of Nigeria Food Research Center U.I - Image 2' },
      { src: '/gallery/g-14.jpeg', alt: 'Flag Off of Flour Mills of Nigeria Food Research Center U.I - Image 3' },
      { src: '/gallery/g-15.jpeg', alt: 'Flag Off of Flour Mills of Nigeria Food Research Center U.I - Image 4' },
      { src: '/gallery/g-16.jpeg', alt: 'Flag Off of Flour Mills of Nigeria Food Research Center U.I - Image 5' },
      { src: '/gallery/g-17.jpeg', alt: 'Flag Off of Flour Mills of Nigeria Food Research Center U.I - Image 6' },
    ]
  },
  {
    title: '2017 Food West Africa EXPO',
    year: '2017',
    thumbnail: '/gallery/g-3.jpeg',
    images: [
      { src: '/gallery/g-6.jpeg', alt: '2017 Food West Africa EXPO - Image 1' },
      { src: '/gallery/g-7.jpeg', alt: '2017 Food West Africa EXPO - Image 2' },
      { src: '/gallery/g-8.jpeg', alt: '2017 Food West Africa EXPO - Image 3' },
      { src: '/gallery/g-9.jpeg', alt: '2017 Food West Africa EXPO - Image 4' },
      { src: '/gallery/g-10.jpeg', alt: '2017 Food West Africa EXPO - Image 5' },
      { src: '/gallery/g-11.jpeg', alt: '2017 Food West Africa EXPO - Image 6' },
      { src: '/gallery/g-12.jpeg', alt: '2017 Food West Africa EXPO - Image 7' },
      { src: '/gallery/g-13.jpeg', alt: '2017 Food West Africa EXPO - Image 8' },
    ]
  },
  {
    title: 'Agro Awards',
    year: '2018',
    thumbnail: '/gallery/g-10.jpeg',
    images: [
      { src: '/gallery/g-12.jpeg', alt: 'Agro Awards - Image 1' },
      { src: '/gallery/g-13.jpeg', alt: 'Agro Awards - Image 2' },
      { src: '/gallery/g-14.jpeg', alt: 'Agro Awards - Image 3' },
      { src: '/gallery/g-15.jpeg', alt: 'Agro Awards - Image 4' },
      { src: '/gallery/g-16.jpeg', alt: 'Agro Awards - Image 5' },
    ]
  },
  {
    title: '2017 Food West Africa EXPO',
    year: '2017',
    thumbnail: '/gallery/g-7.jpeg',
    images: [
      { src: '/gallery/g-6.jpeg', alt: '2017 Food West Africa EXPO - Image 1' },
      { src: '/gallery/g-7.jpeg', alt: '2017 Food West Africa EXPO - Image 2' },
      { src: '/gallery/g-8.jpeg', alt: '2017 Food West Africa EXPO - Image 3' },
      { src: '/gallery/g-9.jpeg', alt: '2017 Food West Africa EXPO - Image 4' },
      { src: '/gallery/g-10.jpeg', alt: '2017 Food West Africa EXPO - Image 5' },
      { src: '/gallery/g-11.jpeg', alt: '2017 Food West Africa EXPO - Image 6' },
      { src: '/gallery/g-12.jpeg', alt: '2017 Food West Africa EXPO - Image 7' },
      { src: '/gallery/g-13.jpeg', alt: '2017 Food West Africa EXPO - Image 8' },
    ]
  },
  {
    title: 'Agro Awards',
    year: '2018',
    thumbnail: '/gallery/g-10.jpeg',
    images: [
      { src: '/gallery/g-12.jpeg', alt: 'Agro Awards - Image 1' },
      { src: '/gallery/g-13.jpeg', alt: 'Agro Awards - Image 2' },
      { src: '/gallery/g-14.jpeg', alt: 'Agro Awards - Image 3' },
      { src: '/gallery/g-15.jpeg', alt: 'Agro Awards - Image 4' },
      { src: '/gallery/g-16.jpeg', alt: 'Agro Awards - Image 5' },
    ]
  },
]);

// Videos Data - Using YouTube Video IDs
const videos = ref([
  {
    title: 'Chairman, FMN Group visits AfDB',
    videoId: '49ZFLWv9G1s',
  },
  {
    title: 'No Be Today',
    videoId: 'FzJOwNlChtM',
  },
  {
    title: 'FMN at SERAS 2019 Awards',
    videoId: 'NAk7nd4R1lI',
  },
  {
    title: 'FMN Right Issues',
    videoId: 'o85RCSXj2Gc',
  },
]);

// Photo Gallery State
const photoModalVisible = ref(false);
const selectedCollection = ref(null);
const activePhotoIndex = ref(0);

// Video Modal State
const videoModalVisible = ref(false);
const selectedVideo = ref(null);

// Thumbnail position based on screen size
const thumbnailsPosition = ref('right');

// Galleria Responsive Options
const galleriaResponsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '768px',
    numVisible: 5
  },
  {
    breakpoint: '560px',
    numVisible: 3
  }
]);

// Update thumbnail position based on screen size
const updateThumbnailPosition = () => {
  if (window.innerWidth <= 768) {
    thumbnailsPosition.value = 'bottom';
  } else {
    thumbnailsPosition.value = 'right';
  }
};

// Initialize on mount and listen for resize
onMounted(() => {
  updateThumbnailPosition();
  window.addEventListener('resize', updateThumbnailPosition);
});

// Cleanup on unmount
onUnmounted(() => {
  window.removeEventListener('resize', updateThumbnailPosition);
});

// Get YouTube Thumbnail
const getYouTubeThumbnail = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// Open Photo Gallery
const openPhotoGallery = (collection) => {
  selectedCollection.value = collection;
  activePhotoIndex.value = 0;
  photoModalVisible.value = true;
};

// Open Video Modal
const openVideoModal = (video) => {
  selectedVideo.value = video;
  videoModalVisible.value = true;
};

// Stop Video
const stopVideo = () => {
  selectedVideo.value = null;
};
</script>

<style src="@/assets/css/gallery.css"></style>