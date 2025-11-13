<template>
  <div id="history-page">
    <!--=== FMN Video Section ===-->
    <OurFMNStories title=" " />
    <!--=== end of FMN Video Section ===-->

    <!-- About FMN Content -->
    <section class="about-content pt-6 sm:pt-10 pb-6 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content-box">
          <p class="text-gray-700 text-base leading-relaxed mb-6 text-justify sm:text-left">
            Flour Mills of Nigeria Plc (FMN) was incorporated on 29th September, 1960 as a private limited 
            liability company with a modest paid-up share capital of N1 million and converted to a public 
            company in November, 1978. The beneficial interest in the company’s equity is held by Nigerian 
            and Overseas shareholders. In line with the AFS 2020, our foreign shareholders include Excelsior 
            Shipping Company Limited with 62.95% shareholdings. The balance is held by over 75,000 individuals 
            and institutional investors.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  const activeTab = ref('history');
</script>

<style>
#history-page #fmn-stories {
  padding-top: 16px;
  padding-bottom: 40px;
}
</style>