<template>
  <div id="awards-page">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Banner -->
    <PageHeroBanner
      title="Awards"
      background-image="/other-banners/awards-banner.png"
    />

    <!-- Awards Accordion -->
    <AwardsAccordion :awards="awardsData" />

    <!-- Newsletter -->
    <SubscribeToNewsletter />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const awardsData = [
  {
    id: '1',
    title: 'ICSAN Corporate Governance Award (2022)',
    photos: [
      { src: '/awards/icsan-2022/icsan-1.jpg', alt: 'ICSAN Award Ceremony' },
      { src: '/awards/icsan-2022/icsan-2.jpg', alt: 'ICSAN Award Ceremony' },
      { src: '/awards/icsan-2022/icsan-3.jpg', alt: 'ICSAN Award Ceremony' },
      { src: '/awards/icsan-2022/icsan-4.jpg', alt: 'ICSAN Award Ceremony' },
      { src: '/awards/icsan-2022/icsan-5.jpg', alt: 'ICSAN Award Ceremony' },
      { src: '/awards/icsan-2022/icsan-6.jpg', alt: 'ICSAN Award Ceremony' },
      { src: '/awards/icsan-2022/icsan-7.jpg', alt: 'ICSAN Award Ceremony' },
      { src: '/awards/icsan-2022/icsan-8.jpg', alt: 'ICSAN Award Ceremony' },
      { src: '/awards/icsan-2022/icsan-9.jpg', alt: 'ICSAN Award Ceremony' },
      { src: '/awards/icsan-2022/icsan-10.jpg', alt: 'ICSAN Award Ceremony' },
      { src: '/awards/icsan-2022/icsan-11.jpg', alt: 'ICSAN Award Ceremony' }
    ]
  },
  {
    id: '2',
    title: 'Pearl Awards (2022)',
    photos: [
      { src: '/awards/pearl-2022/pearl-1.jpg', alt: 'Pearl Awards 2022' },
      { src: '/awards/pearl-2022/pearl-2.jpg', alt: 'Pearl Awards 2022' },
      { src: '/awards/pearl-2022/pearl-3.jpg', alt: 'Pearl Awards 2022' },
      { src: '/awards/pearl-2022/pearl-4.jpg', alt: 'Pearl Awards 2022' },
      { src: '/awards/pearl-2022/pearl-5.jpg', alt: 'Pearl Awards 2022' },
      { src: '/awards/pearl-2022/pearl-6.jpg', alt: 'Pearl Awards 2022' },
      { src: '/awards/pearl-2022/pearl-7.jpg', alt: 'Pearl Awards 2022' },
      { src: '/awards/pearl-2022/pearl-8.jpg', alt: 'Pearl Awards 2022' },
      { src: '/awards/pearl-2022/pearl-9.jpg', alt: 'Pearl Awards 2022' }
    ]
  },
  {
    id: '3',
    title: 'SERAS Award for Supply Chain Management (2020 and 2021)',
    photos: [
      { src: '/awards/seras-2020-2021/award-1.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-2.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-3.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-4.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-5.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-6.jpg', alt: 'SERAS Award' },   
      { src: '/awards/seras-2020-2021/award-7.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-8.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-9.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-10.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-11.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-12.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-13.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-14.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-15.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-16.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-17.jpg', alt: 'SERAS Award' },
      { src: '/awards/seras-2020-2021/award-18.jpg', alt: 'SERAS Award' }
      
    ]
  },
  {
    id: '4',
    title: 'SERAS Award for Best New Entry (2019)',
    photos: [
    { src: '/awards/seras-2019/seras-1.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-2.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-3.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-4.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-5.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-6.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-7.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-8.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-9.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-10.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-11.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-12.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-13.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-14.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-15.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-16.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-17.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-18.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-19.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-20.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-21.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-22.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-23.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-24.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-25.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-26.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-27.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-28.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-29.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-30.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-31.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-32.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-33.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-34.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-35.jpg', alt: 'SERAS Award 2019' },
    { src: '/awards/seras-2019/seras-36.jpg', alt: 'SERAS Award 2019' }
    ]
  }
];
</script>

<style scoped>
.awards-page {
  background-color: #ffffff;
}

:global(.dark-mode) .awards-page {
  background-color: #111827;
}
</style>