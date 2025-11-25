<template>
  <div id="contact-page">
    <!-- Hero Banner -->
    <PageHeroBanner
      title="Contact"
      background-image="/other-banners/contact.png"
    />

    <!--=== Contact Form Section ===-->
    <ContactForm />
    
    <!--=== Contact Platforms Section ===-->
    <ContactPlatforms />

    <!-- Enquiries And Complaints Section -->
     <section class="my-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 class="section-title">Enquiries and Complaints</h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 my-6 border border-[#ebebeb] rounded-lg">
            <div class="p-4 lg:p-12">
              <span class="pry-color">FOR GENERAL ENQUIRIES:</span> <br>
              <div>
                <a href="mailto:info@fmnplc.com">info@fmnplc.com</a> and <a href="mailto:contactus@fmnplc.com">contactus@fmnplc.com</a>
              </div>
            </div>
            <div class="p-4 lg:p-12">
              <span class="pry-color">FOR GOLDEN PENNY FOODS RELATED ENQUIRIES:</span> <br>
              <div>
                <a href="mailto:goldenpennyfoods@fmnplc.com">goldenpennyfoods@fmnplc.com</a> or website - <a href="https://www.fmnfoods.com">www.fmnfoods.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--=== Business Locations Section ===-->
    <BusinessLocations />

    <!--=== Map Section ===-->
    <section id="map-div" class="my-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
              <iframe
                  id="gmap_canvas"
                  src="https://www.google.com/maps/d/embed?mid=1M6ggTmoPQCMqLRou9VhjKOM_vdY"
                  width="100%"
                  height="550"
              ></iframe>
          </div>
        </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style src="@/assets/css/contact.css"></style>