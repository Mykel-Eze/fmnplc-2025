<template>
  <div id="fmn-foundation">
    <section class="my-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-12 items-center">
                <div class="ff-img-side">
                    <img src="@/assets/images/girl-holding-plant.jpg" alt="girl-holding-plant" class="rounded-lg">
                </div>
                <div class="ff-txt-side text-base">
                    <p class="mb-2">
                        The FMN Foundation is an initiative of Flour Mills of Nigeria Plc (FMN), established
                        to cater to the Group's key Corporate Social Responsibility (CSR) projects and other
                        human impact and developmental initiatives.
                    </p>
                    <p class="mb-2">
                        For over six decades, FMN has been a source of livelihood for millions of Nigerian
                        families and has continued to feed Nigerians with superior quality products through
                        its iconic brand 'Golden Penny'.
                    </p>
                    <p class="mb-2">
                        Through the FMN Foundation, the Group will broaden its corporate social responsibility
                        touchpoints in Nigeria and progressively, across the continent.
                    </p>
                </div>
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

    <section class="pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content-box">
          <div class="vision-mission-goal-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div class="vmg-block white-txt p-6 rounded-lg">
              <img src="~/assets/images/purpose.svg" alt="purpose" class="vmg-icon">
              <h3 class="vmg-title bold-txt text-2xl mt-[10px] mb-[12px]">Purpose</h3>
              <div class="vmg-description text-base lite-txt">
                Enriching lives by Inspiring Sustainable Growth.
              </div>
            </div>
            <div class="vmg-block white-txt p-6 rounded-lg">
              <img src="~/assets/images/vision-1.svg" alt="vision" class="vmg-icon">
              <h3 class="vmg-title bold-txt text-2xl mt-[10px] mb-[12px]">Vision </h3>
              <div class="vmg-description text-base lite-txt">
                To be one of the top companies recognized for driving impactful CSR initiatives through
                sustainable projects that enrich the lives of people.
              </div>
            </div>
            <div class="vmg-block white-txt p-6 rounded-lg">
              <img src="~/assets/images/mission-1.svg" alt="mission" class="vmg-icon">
              <h3 class="vmg-title bold-txt text-2xl mt-[10px] mb-[12px]">Mission</h3>
              <div class="vmg-description text-base lite-txt">
                To engage in unique and transformative projects within our project execution pillars.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    title: 'FMN Foundation'
  });
</script>

<style scoped>
.vmg-block {
    background: linear-gradient(360deg, #007B47 0%, #159302 100%);
}
</style>