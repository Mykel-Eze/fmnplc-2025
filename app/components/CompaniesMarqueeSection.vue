<template>
  <section id="companies-marquee" class="companies-section relative overflow-hidden py-5 lg:py-20">
    <!-- <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    </div> -->
    <div class="relative">
        <div class="curved-panel relative lg:absolute w-full lg:w-5/12 z-10">
          <!-- Text Content -->
          <div class="curved-content flex items-center lg:justify-center pl-1 pr-8 lg:px-12 ">
            <h2 class="section-title-2 max-w-[535px] lg:max-w-[435px] pr-10 lg:py-14 lg:pl-6 lg:pr-14">
              Explore more information about our companies
            </h2>
          </div>
        </div>

        <!-- Right Side - Logo Marquees -->
        <div class="w-full rel z-0">
          <!-- Desktop View - Horizontal Marquees -->
          <div class="hidden lg:flex lg:flex-col justify-center space-y-8 min-h-[450px]">
            <!-- First Row - Forward Direction -->
            <div class="marquee-container-horizontal">
              <div class="marquee-track-forward flex gap-8">
                <!-- First set -->
                <a
                  v-for="logo in firstRowLogos"
                  :key="`forward-1-${logo.id}`"
                  :href="logo.url"
                  target="_blank"
                  class="marquee-item-horizontal flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-20 w-auto object-contain"
                  />
                </a>
                <!-- Duplicate set for seamless loop -->
                <a
                  v-for="logo in firstRowLogos"
                  :key="`forward-2-${logo.id}`"
                  :href="logo.url"
                  target="_blank"
                  class="marquee-item-horizontal flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-20 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            <!-- Second Row - Backward Direction -->
            <div class="marquee-container-horizontal">
              <div class="marquee-track-backward flex gap-8">
                <!-- First set -->
                <a
                  v-for="logo in secondRowLogos"
                  :key="`backward-1-${logo.id}`"
                  :href="logo.url"
                  target="_blank"
                  class="marquee-item-horizontal flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-20 w-auto object-contain"
                  />
                </a>
                <!-- Duplicate set for seamless loop -->
                <a
                  v-for="logo in secondRowLogos"
                  :key="`backward-2-${logo.id}`"
                  :href="logo.url"
                  target="_blank"
                  class="marquee-item-horizontal flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-20 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>

          <!-- Mobile View - Vertical Marquees -->
          <div class="mobile-marquee-vertical lg:hidden flex gap-2 justify-center max-w-[750px]">
            <!-- First Column - Upward Direction -->
            <div class="marquee-container-vertical">
              <div class="marquee-track-upward flex flex-col gap-4">
                <!-- First set -->
                <a
                  v-for="logo in firstRowLogos"
                  :key="`up-1-${logo.id}`"
                  :href="logo.url"
                  target="_blank"
                  class="marquee-item-vertical flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image w-auto object-contain"
                  />
                </a>
                <!-- Duplicate set for seamless loop -->
                <a
                  v-for="logo in firstRowLogos"
                  :key="`up-2-${logo.id}`"
                  :href="logo.url"
                  target="_blank"
                  class="marquee-item-vertical flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            <!-- Second Column - Downward Direction -->
            <div class="marquee-container-vertical">
              <div class="marquee-track-downward flex flex-col gap-4">
                <!-- First set -->
                <a
                  v-for="logo in secondRowLogos"
                  :key="`down-1-${logo.id}`"
                  :href="logo.url"
                  target="_blank"
                  class="marquee-item-vertical flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image w-auto object-contain"
                  />
                </a>
                <!-- Duplicate set for seamless loop -->
                <a
                  v-for="logo in secondRowLogos"
                  :key="`down-2-${logo.id}`"
                  :href="logo.url"
                  target="_blank"
                  class="marquee-item-vertical flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Logo {
  id: string;
  src: string;
  alt: string;
  url: string;
}

const firstRowLogos: Logo[] = [
  { id: 'fmn-agro', src: '/logos/fmn-agro.png', alt: 'FMN Agro', url: '#fmn-agro' },
  { id: 'golden-penny', src: '/logos/golden-penny.png', alt: 'Golden Penny Foods', url: '#golden-penny' },
  { id: 'golden-transport', src: '/logos/golden-transport.png', alt: 'Golden Transport Division', url: '#golden-transport' },
  { id: 'bagco', src: '/logos/bagco.png', alt: 'BAGCO', url: '#bagco' },
  { id: 'nnfm', src: '/logos/nnfm.png', alt: 'NNFM', url: '#nnfm' },
  { id: 'golden-sugar', src: '/logos/golden-sugar.png', alt: 'Golden Sugar Company', url: '#golden-sugar' }
];

const secondRowLogos: Logo[] = [
  { id: 'bagco-2', src: '/logos/bagco.png', alt: 'BAGCO', url: '#bagco' },
  { id: 'shao-golden', src: '/logos/shao-golden-farms.png', alt: 'Shao Golden Farms', url: '#shao-golden-farms' },
  { id: 'golden-sugar-2', src: '/logos/golden-sugar.png', alt: 'Golden Sugar Company', url: '#golden-sugar' },
  { id: 'golden-agri', src: '/logos/golden-agri-inputs.png', alt: 'Golden Agri Inputs', url: '#golden-agri-inputs' },
  { id: 'agri-palm', src: '/logos/agri-palm.png', alt: 'Agri Palm', url: '#agri-palm' },
  { id: 'eagle-flour', src: '/logos/eagle-flour.png', alt: 'Eagle Flour', url: '#eagle-flour' },
  { id: 'golden-fertilizer', src: '/logos/golden-fertilizer.png', alt: 'Golden Fertilizer', url: '#golden-fertilizer' },
  { id: 'sunti-golden', src: '/logos/sunti-golden.png', alt: 'Sunti Golden Sugar Estates', url: '#sunti-golden' }
];
</script>

<style scoped>
</style>