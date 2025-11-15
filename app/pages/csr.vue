<template>
  <div class="csr-pages-container">
    <!-- Hero Banner -->
    <PageHeroBanner
      :title="pageTitle"
      background-image="/other-banners/csr-banner.png"
    />

    <!-- About Pages Navigation -->
    <TabNavigation :tabs="tabs" />

    <!-- Other Pages -->
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
  const route = useRoute();

  const tabs = [
    { id: 'fmn-foundation', label: 'About FMN Foundation', route: '/csr/fmn-foundation' },
    { id: 'Objectives', label: 'Objectives', route: '/csr/objectives' },
    { id: 'project-pillars', label: 'Project Pillars', route: '/csr/project-pillars' },
  ];

  const pageTitle = computed(() => {
    return route.meta.title as string || 'Corporate Social Responsibility';
  });
</script>

<style src="@/assets/css/csr.css"></style>