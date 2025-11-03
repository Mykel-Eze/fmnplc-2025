<!--=== /pages/index.vue ===-->

<template>
    <!--=== Hero Section ===-->
    <Hero />
    <!--=== end of Hero Section ===-->

    <!--=== Business Verticals Section ===-->
    <BuisnessVerticalsSection 
      :header="{
        label: 'OUR SIX BUSINESS VERTICALS',
        title: 'Pioneering the Future of Food Production',
        description: ''
      }"
    />
    <!--=== end of Business Verticals Section ===-->

    <!--=== Sustainability Impact Section ===-->
    <SustainabilityImpact />
    <!--=== end of Sustainability Impact Section ===-->

    <!--=== FMN Video Section ===-->
    <OurFMNStories />
    <!--=== end of FMN Video Section ===-->

    <!--=== Explore Products Section ===-->
    <ExploreProductsSection />
    <!--=== end of Explore Products Section ===-->

    <!--=== Company Marquee Section ===-->
    <CompaniesMarqueeSection />
    <!--=== end of Company Marquee Section ===-->

    <!--=== Latest News Section ===-->
    <LatestNews />
    <!--=== end of Latest News Section ===-->

    <!--=== Career Section ===-->
    <CareerSection />
    <!--=== end of Career Section ===-->
</template>

<script lang="ts" setup>
useHead({
    title: "Home"
})
</script>

<style></style>