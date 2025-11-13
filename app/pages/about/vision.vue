<template>
  <div id="vision-page">
    <!--=== FMN Video Section ===-->
    <OurFMNStories title=" " />
    <!--=== end of FMN Video Section ===-->

    <!-- About FMN Content -->
    <section class="about-content pt-6 sm:pt-10 pb-6 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content-box">
          <p class="text-gray-700 text-base leading-relaxed mb-6 text-justify sm:text-left"></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
  const activeTab = ref('vision');
</script>

<style>
#vision-page #fmn-stories {
  padding-top: 16px;
  padding-bottom: 40px;
}
</style>