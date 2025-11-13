<template>
  <div class="about-pages-container">
    <!-- Hero Banner -->
    <PageHeroBanner
      title="About Flour Mills of Nigeria"
      background-image="/other-banners/about-banner.png"
    />

    <!-- About Pages Navigation -->
    <TabNavigation :tabs="tabs" />

    <!-- Other Pages -->
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
  const tabs = [
    { id: 'about', label: 'About FMN', route: '/about' },
    { id: 'history', label: 'History & Heritage', route: '/about/history' },
    { id: 'vision', label: 'Vision, Mission & Founder', route: '/about/vision' },
    { id: 'board', label: 'Board of Directors', route: '/about/board' },
    { id: 'management', label: 'Management Team', route: '/about/management' }
  ];
</script>