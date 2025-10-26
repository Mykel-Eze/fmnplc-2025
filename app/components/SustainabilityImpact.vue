<template>
  <section id="sustainability-impact" class="impact-section py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <!-- Left Side - Image Group -->
        <div class="w-full lg:w-1/2">
          <!-- image that shows in light-mode -->
          <img
            src="@/assets/images/farm-to-table-black.png"
            alt="Sustainability Impact - Farm to Table Strategy"
            class="impact-image w-full h-auto light-mode-img"
          />
          <!-- image that shows in dark-mode -->
          <img
            src="@/assets/images/farm-to-table-white.png"
            alt="Sustainability Impact - Farm to Table Strategy"
            class="impact-image w-full h-auto dark-mode-img"
          />
        </div>

        <!-- Right Side - Content -->
        <div class="w-full lg:w-1/2">
          <!-- Section Label -->
          <p class="section-label">
            SUSTAINABILITY
          </p>

          <!-- Heading -->
          <h2 class="section-title mb-2">
            Our Impact & Sustainability
          </h2>

          <!-- Description -->
          <p class="section-description text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            At FMN, we believe in creating shared value for all stakeholders. Our commitment to 
            sustainable practices and community development has led to significant positive impacts 
            across Nigeria.
          </p>

          <!-- Statistics -->
          <div class="stats-container space-y-6 mb-10">
            <!-- Stat 1 -->
            <div class="stat-item flex items-center gap-4">
              <img src="@/assets/images/s-1.svg" alt="stat-icon" class="stat-icon">
              <div>
                <h3 class="stat-number">
                  400,000+
                </h3>
                <p class="stat-label">
                  Small Holder Farmers Empowered
                </p>
              </div>
            </div>

            <!-- Stat 2 -->
            <div class="stat-item flex items-center gap-4">
              <img src="@/assets/images/s-2.svg" alt="stat-icon" class="stat-icon">
              <div>
                <h3 class="stat-number">
                  12,000+
                </h3>
                <p class="stat-label text-gray-600 text-base md:text-lg">
                  Direct Employees
                </p>
              </div>
            </div>

            <!-- Stat 3 -->
            <div class="stat-item flex items-center gap-4">
              <img src="@/assets/images/s-3.svg" alt="stat-icon" class="stat-icon">
              <div>
                <h3 class="stat-number">
                  3,000,000+
                </h3>
                <p class="stat-label text-gray-600 text-base md:text-lg">
                  Millions of Families are fed annually
                </p>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <Button
            label="View Sustainability Report"
            class="cta-button"
            @click="viewReport"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const viewReport = () => {
  // Navigate to sustainability report or open PDF
  console.log('View Sustainability Report clicked');
  // window.open('/sustainability-report.pdf', '_blank');
};
</script>

<style scoped></style>