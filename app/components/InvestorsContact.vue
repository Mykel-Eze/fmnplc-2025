<template>
    <section class="mt-[60px] mb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">
          <div class="management-personel grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pr-10">
            <div class="team-card group">
              <!-- Image -->
              <div class="team-image-wrapper relative overflow-hidden rounded-t-2xl bg-gray-200">
                <img
                  src="/team/joseph.jpg"
                  alt="Joseph Umolu"
                  class="w-full h-72 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <!-- Info -->
              <div class="team-info mt-[-8px] min-h-[72px] px-5 border-b-4 border-green-700">
                <h3 class="team-name text-gray-900 mb-1">Joseph Umolu</h3>
                <p class="team-position text-gray-600">
                  Company Secretary / Director, Legal Services
                </p>
              </div>
            </div>

            <div class="team-card group">
              <!-- Image -->
              <div class="team-image-wrapper relative overflow-hidden rounded-t-2xl bg-gray-200">
                <img
                  src="/team/anders.jpg"
                  alt="Anders Kristiansson"
                  class="w-full h-72 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <!-- Info -->
              <div class="team-info mt-[-8px] min-h-[72px] px-5 border-b-4 border-green-700">
                <h3 class="team-name text-gray-900 mb-1">Anders Kristiansson</h3>
                <p class="team-position text-gray-600">
                  Group Chief Finance Officer
                </p>
              </div>
            </div>
          </div>

          <div class="contact-details-side lg:pl-10">
            <div class="mb-7">
                <h2 class="section-title">Contact Investor Relations</h2>
                <a href="mailto:investorrelations@fmnplc.com" class="text-base">
                    investorrelations@fmnplc.com
                </a>
            </div>

            <div class="text-base">
                <h2 class="section-title">Atlas Registrars Limited</h2>
                <div class="investor-contact-address mb-3">
                    Bagco Building (4th Floor) 34 Eric Moore Road Iganmu Surulere, Lagos, Nigeria. P.O Box 3554
                </div>
                <div class="mb-3">
                    <a href="tel:+2348175425054" class="bold-txt underline">+234 817 542 5054</a> | <a href="tel:+2348175425054" class="bold-txt underline">+234 817 542 5054</a>
                </div>
                <div class="mb-3">
                    <a href="www.atlasregistrars.com" class="underline">www.atlasregistrars.com</a>
                </div>

                <NuxtLink to="/contact" class="leave-message-btn mt-7">Leave a Message</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style>
.leave-message-btn {
    display: inline-block;
    background-color: var(--pry-color);
    color: white;
    padding: 10px 24px;
    font-size: 16px;
    font-family: var(--font-medium);
    border-radius: 4px
}

@media(min-width: 1024px) {
    .management-personel {
        border-right: 1px solid rgba(235, 235, 235, 1);
    }
}
</style>