<template>
  <div id="about-page">
    <!-- About FMN Content -->
    <section class="about-content pt-6 sm:pt-10 pb-6 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <div class="content-box">
          <p class="text-gray-700 text-base leading-relaxed mb-6 text-justify sm:text-left">
            Incorporated on the 29th of September 1960, as a limited liability company and pioneer wheat 
            miller in Nigeria, Flour Mills of Nigeria Plc (FMN) started out on a journey that has seen 
            the company evolve into what is now one of the biggest brands in the foods and agro-allied 
            industry in Africa. Over the years, the FMN brand grew tremendously from operating as a single 
            business, flour miller, to a vast business group with strategic investments that cover key 
            sectors of the Nigerian economy. The group’s operations can be categorized into four major 
            sectors of Food, Sugar, Agro-allied, and Support services. Our foray into the Agric sector 
            started in 1978, with the acquisition of a 10,000-hectare farm in Kaboji, Niger state as part 
            of an investment and expansion strategy designed to create value in the supply chain and reduce 
            the reliance on imported raw materials. Since then, we have made substantial investments in the 
            primary processing of locally grown soybean, palm fruit, cassava, maize, sugar cane, sorghum, and 
            the storage, aggregation and distribution of locally sourced grains. At FMN, we are passionate 
            about, ‘feeding and enriching lives.’ for over five decades, we have maintained a rich tradition 
            of enhancing the quality of living for Nigerian families by producing a wholesome portfolio of 
            food options – The company’s iconic food brand, ‘Golden Penny,’ is a household name that is 
            trusted by many for good food and for daily nourishment.
          </p>
        </div>

        <!-- FMN Agro Section -->
        <div class="fmna-section mt-12 p-8 border-l-6 border-green-700 bg-gray-50 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">FMN Agro Ltd</h3>
          <p class="text-gray-700 leading-relaxed text-base">
            FMN is furthest to improving the nation's leading food-business company. It furthered by entities 
            operating in agriculture, livestock feed and solids extraction processing. Some of which offers 
            simultaneous markets with over twelve thousand full and part-time employees, we are listening the 
            green revolution in Nigeria with the use of locally-sourced raw materials to develop and produce 
            local consumer products for local markets. This strategy of reducing dependence on imported raw 
            materials and creating value for business, consumers, and the continent remains central to our 
            business.
          </p>
        </div>
      </div>
    </section>

    <!-- Business Verticals Component (Already exists) -->
    <BuisnessVerticalsSection 
        :header="{
            label: '',
            title: 'The FMN Group',
            description: 'Evolving from a single Flour Mill in the port of Apapa more than five decades ago, we are now a publicly traded, vertically integrated supply chain of food, agro-allied and logistics and support businesses.'
        }"
    />
  </div>
</template>

<script lang="ts" setup>
</script>

<style>
.content-box {
  animation: fadeIn 0.6s ease;
}
.fmna-section {
  border: 1px solid rgba(235, 235, 235, 1);
  border-left: 6px solid var(--pry-color);
}
.fmna-section h3 {
    font-family: var(--font-medium);
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
.dark-mode .content-box p {
  color: #d1d5db;
}
.dark-mode .fmna-section {
  background-color: #1f2937;
  border: 1px solid rgb(43, 57, 78);
  border-left: 6px solid var(--pry-color);
}
.dark-mode .fmna-section h3 {
    color: #fff;
}
.dark-mode .fmna-section p {
  color: #d1d5db;
}
</style>