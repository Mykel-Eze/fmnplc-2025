<template>
  <div id="sustainability-purpose-page">
    <!-- Hero Banner -->
    <PageHeroBanner
      title="Purpose"
      background-image="/other-banners/sustainability-banner.png"
    />

    <!-- Purpose Content -->
    <section class="purpose-content py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column - Text -->
          <div>
            <div class="content-text space-y-1">
              <p class="text-gray-700 text-base leading-relaxed m-0">
                Our business sustainability is rooted in backward integration and local content 
                development, with core focus on processing of agricultural raw materials into superior 
                quality within five value chains of grains, sweeteners, fats & oils, starches and proteins.
              </p>
              <p class="text-gray-700 text-base leading-relaxed m-0">
                We understand that we live in a resource finite world and depletion of resources 
                beyond sustainable limits is a real harm to people and planet as well as undermine 
                shared prosperity.
              </p>
              <p class="text-gray-700 text-base leading-relaxed m-0">
                We are committed to sustainable, restorative and regenerative agricultural production 
                through integration of circular economy principles in our business model, to ensure that 
                our core purpose of feeding and enriching lives, every day with safe and nutritious food 
                are within the planetary limit and in line with sustainable development goals (SGDs).
              </p>
            </div>
          </div>

          <!-- Right Column - SDG Logo -->
          <div class="flex justify-center">
            <img
              src="@/assets/images/sdg.png"
              alt="UN Sustainable Development Goals"
              class="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.purpose-content {
  background-color: #ffffff;
}
.content-text {
  animation: fadeIn 0.8s ease;
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
.dark-mode .purpose-content {
  background-color: #111827;
}
.dark-mode .content-text p {
  color: #d1d5db;
}
</style>