<template>
  <div id="sustainability-approach-page">
    <!-- Hero Banner -->
    <PageHeroBanner
      title="Our Approach"
      background-image="/other-banners/sustainability-banner.png"
    />

    <!-- Approach Content -->
    <section class="approach-content pt-16 pb-1 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="mb-14">
          <div class="approach-section mb-8 p-6 border-l-4 border-green-700 bg-gray-50 rounded-lg">
            <h3 class="text-2xl smbold-txt text-gray-900 mb-4">Approach</h3>
            <p class="text-gray-700 leading-relaxed">
              FMN's Sustainability approach is based on respect for our people, cultures and the natural environment. We are committed to preserving biodiversity, reducing water usage, waste and the emission of Greenhouse gases. We care for the livelihood of the local communities and our employees in terms of health and welfare.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Our dedication is also to improve the governance, economic, environmental, and social aspects of our operations. Our vision becomes reality by putting into action programs and practices that optimize the use of natural resources, by developing energy efficient products and technologies, and by fostering innovation and creative solutions.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Our approach to embedding sustainability across the business is driven through FMN's "Tropos" - 4 Pillar Framework comprising Governance, Economic, Environmental, and Social pillars. These four pillars set out the areas where our knowledge and resources are enabling us to make a positive change and give structure for consolidation of all our sustainable efforts.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center items-center mt-12">
            <img
              src="@/assets/images/gese-image.png"
              alt="GESE"
              class="w-full sm:w-[80%]"
            />
        </div>
      </div>
    </section>

    <div class="section-divider-wrapper">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <hr class="section-divider">
            <span>Brand Statements</span>
            <hr class="section-divider">
        </div>
    </div>

    <section class="my-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="sdg-grid-wrapper">
                <img src="@/assets/images/sdg/sdg-1.png" alt="sdg" class="sdg-img">
                <img src="@/assets/images/sdg/sdg-2.png" alt="sdg" class="sdg-img">
                <img src="@/assets/images/sdg/sdg-3.png" alt="sdg" class="sdg-img">
                <img src="@/assets/images/sdg/sdg-4.png" alt="sdg" class="sdg-img">
                <img src="@/assets/images/sdg/sdg-5.png" alt="sdg" class="sdg-img">
                <img src="@/assets/images/sdg/sdg-6.png" alt="sdg" class="sdg-img">
                <img src="@/assets/images/sdg/sdg-9.png" alt="sdg" class="sdg-img">
                <img src="@/assets/images/sdg/sdg-12.png" alt="sdg" class="sdg-img">
                <img src="@/assets/images/sdg/sdg-13.png" alt="sdg" class="sdg-img">
                <img src="@/assets/images/sdg/sdg-17.png" alt="sdg" class="sdg-img">
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <SubscribeToNewsletter />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts" setup>
const sdgGoals = [
  { id: 2, title: 'Zero Hunger', image: '/sdg/goal-2.png' },
  { id: 3, title: 'Good Health and Well-being', image: '/sdg/goal-3.png' },
  { id: 4, title: 'Quality Education', image: '/sdg/goal-4.png' },
  { id: 5, title: 'Gender Equality', image: '/sdg/goal-5.png' },
  { id: 6, title: 'Clean Water and Sanitation', image: '/sdg/goal-6.png' },
  { id: 8, title: 'Decent Work and Economic Growth', image: '/sdg/goal-8.png' },
  { id: 9, title: 'Industry, Innovation and Infrastructure', image: '/sdg/goal-9.png' },
  { id: 11, title: 'Sustainable Cities and Communities', image: '/sdg/goal-11.png' },
  { id: 13, title: 'Climate Action', image: '/sdg/goal-13.png' },
  { id: 17, title: 'Partnerships for the Goals', image: '/sdg/goal-17.png' }
];
</script>

<style scoped>
.approach-content {
  background-color: #ffffff;
}
.approach-section {
  animation: fadeIn 0.8s ease;
}
.text-content {
  animation: fadeIn 0.8s ease 0.2s both;
}
.sdg-grid {
  animation: fadeIn 0.8s ease 0.4s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dark Mode */
.dark-mode .approach-content {
  background-color: #000;
}
.dark-mode .approach-section {
  background-color: #1f2937;
  border-left-color: var(--pry-color);
}
.dark-mode .approach-section h3 {
  color: #f3f4f6;
}
.dark-mode .approach-section p,
.dark-mode .text-content p {
  color: #d1d5db;
}
</style>