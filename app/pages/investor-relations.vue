<template>
  <div id="investors-page">
    <!-- Hero Banner -->
    <PageHeroBanner
      title="Investor Relations"
      background-image="/other-banners/investors-banner.png"
      :showPortalBtn="true"
      PortalBtnTitle="AGM 2024"
      PortalBtnTitle_2="COM 2024"
      PortalUrl="#agm"
      PortalUrl_2="#com"
    />

    <!--=== Text Section ===-->
    <section class="mt-[60px] mb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-base">
          Our stakeholders include shareholders; private and corporate investors; regulatory bodies; trade
          associations; government, at the local state and federal levels and thousands of SME’s in our value
          chain. For close to sixty years, our engagements have been guided by very high professional standards
          and mutual respect to stimulate better outcomes for all.
        </p>
      </div>
    </section>

    <!--=== Reports Section ===-->
    <InvestorReports />

    <!--=== Investors-Contact Section ===-->
    <InvestorsContact />

    <!--=== CEO Quote Section ===-->
    <section class="mt-[60px] mb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="ceo-quote mb-8 p-8 border-l-4 border-green-700 bg-gray-50 rounded-lg">
          <p class="text-gray-700 leading-relaxed">
            It is time to take the company private, put the Businesses in their proper verticals, and attract
            the capital and the necessary technical expertise to grow each of these Businesses, not only for
            Nigerian Market expansion but progressively, Pan African. We are more committed towards getting
            the capital to drive our investment agenda of about $1 Billion within the next five years in
            Nigeria to grow these businesses within the verticals.
          </p>

          <div class="ceo-details mt-6 flex gap-4 items-center">
            <img src="/bod/Chairman_John.jpeg" alt="John G. Coumantaros" class="ceo-img rounded-full w-20 h-20">
            <div>
              <h3 class="text-xl smbold-txt text-gray-900">John G. Coumantaros</h3>
              <div class="text-sm medium-txt">— Chairman, Flour Mills of Nig. Plc, FMN</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style src="@/assets/css/investor-relations.css"></style>