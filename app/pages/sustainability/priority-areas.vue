<template>
  <div id="priority-areas-page">
    <!-- Hero Banner -->
    <PageHeroBanner
      title="Priority Areas"
      background-image="/other-banners/priority-areas.jpg"
    />

    <!-- Priority Areas Navigation -->
    <TabNavigation :tabs="tabs" />

    <!-- Other Pages -->
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
const tabs = [
  { id: 'backward-integration', label: 'Backward Integration', route: '/sustainability/priority-areas/backward-integration' },
  { id: 'feeding-lives', label: 'Feeding and Enriching Lives', route: '/sustainability/priority-areas/feeding-lives' },
  { id: 'diversity-and-inclusion', label: 'Diversity and Inclusion', route: '/sustainability/priority-areas/diversity-and-inclusion' },
  { id: 'community-investment', label: 'Community Investment', route: '/sustainability/priority-areas/community-investment' },
];
</script>

<style>

</style>