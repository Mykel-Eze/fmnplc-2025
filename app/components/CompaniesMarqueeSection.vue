<template>
  <section id="companies-marquee" class="companies-section relative overflow-hidden py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <!-- Left Side - Curved Green Panel with Text -->
        <div class="w-full lg:w-5/12 relative">
          <!-- Curved Background Shape -->
          <div class="curved-panel">
            <svg
              viewBox="0 0 600 400"
              class="w-full h-full"
              preserveAspectRatio="none"
            >
              <!-- Yellow accent -->
              <path
                d="M 0,0 L 600,0 Q 550,200 600,400 L 0,400 Z"
                fill="#fbbf24"
              />
              <!-- Main green -->
              <path
                d="M 0,0 L 580,0 Q 530,200 580,400 L 0,400 Z"
                fill="#16a34a"
              />
            </svg>
          </div>

          <!-- Text Content -->
          <div class="curved-content absolute inset-0 flex items-center justify-center px-8 lg:px-12">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Explore more information about our companies
            </h2>
          </div>
        </div>

        <!-- Right Side - Logo Marquees -->
        <div class="w-full lg:w-7/12">
          <!-- Desktop View - Horizontal Marquees -->
          <div class="hidden lg:block space-y-8">
            <!-- First Row - Forward Direction -->
            <div class="marquee-container-horizontal">
              <div class="marquee-track-forward flex gap-8">
                <!-- First set -->
                <div
                  v-for="logo in firstRowLogos"
                  :key="`forward-1-${logo.id}`"
                  class="marquee-item-horizontal flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-20 w-auto object-contain"
                  />
                </div>
                <!-- Duplicate set for seamless loop -->
                <div
                  v-for="logo in firstRowLogos"
                  :key="`forward-2-${logo.id}`"
                  class="marquee-item-horizontal flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <!-- Second Row - Backward Direction -->
            <div class="marquee-container-horizontal">
              <div class="marquee-track-backward flex gap-8">
                <!-- First set -->
                <div
                  v-for="logo in secondRowLogos"
                  :key="`backward-1-${logo.id}`"
                  class="marquee-item-horizontal flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-20 w-auto object-contain"
                  />
                </div>
                <!-- Duplicate set for seamless loop -->
                <div
                  v-for="logo in secondRowLogos"
                  :key="`backward-2-${logo.id}`"
                  class="marquee-item-horizontal flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-20 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile View - Vertical Marquees -->
          <div class="lg:hidden flex gap-8 justify-center">
            <!-- First Column - Upward Direction -->
            <div class="marquee-container-vertical">
              <div class="marquee-track-upward flex flex-col gap-8">
                <!-- First set -->
                <div
                  v-for="logo in firstRowLogos"
                  :key="`up-1-${logo.id}`"
                  class="marquee-item-vertical flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-16 w-auto object-contain"
                  />
                </div>
                <!-- Duplicate set for seamless loop -->
                <div
                  v-for="logo in firstRowLogos"
                  :key="`up-2-${logo.id}`"
                  class="marquee-item-vertical flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-16 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <!-- Second Column - Downward Direction -->
            <div class="marquee-container-vertical">
              <div class="marquee-track-downward flex flex-col gap-8">
                <!-- First set -->
                <div
                  v-for="logo in secondRowLogos"
                  :key="`down-1-${logo.id}`"
                  class="marquee-item-vertical flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-16 w-auto object-contain"
                  />
                </div>
                <!-- Duplicate set for seamless loop -->
                <div
                  v-for="logo in secondRowLogos"
                  :key="`down-2-${logo.id}`"
                  class="marquee-item-vertical flex-shrink-0"
                >
                  <img
                    :src="logo.src"
                    :alt="logo.alt"
                    class="logo-image h-16 w-auto object-contain"
                  />
                </div>
              </div>
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
}

const firstRowLogos: Logo[] = [
  { id: 'fmn-agro', src: '/logos/fmn-agro.png', alt: 'FMN Agro' },
  { id: 'golden-penny', src: '/logos/golden-penny.png', alt: 'Golden Penny Foods' },
  { id: 'golden-transport', src: '/logos/golden-transport.png', alt: 'Golden Transport Division' },
  { id: 'bagco', src: '/logos/bagco.png', alt: 'BAGCO' },
  { id: 'nnfm', src: '/logos/nnfm.png', alt: 'NNFM' },
  { id: 'golden-sugar', src: '/logos/golden-sugar.png', alt: 'Golden Sugar Company' }
];

const secondRowLogos: Logo[] = [
  { id: 'bagco-2', src: '/logos/bagco.png', alt: 'BAGCO' },
  { id: 'shao-golden', src: '/logos/shao-golden-farms.png', alt: 'Shao Golden Farms' },
  { id: 'golden-sugar-2', src: '/logos/golden-sugar.png', alt: 'Golden Sugar Company' },
  { id: 'golden-agri', src: '/logos/golden-agri-inputs.png', alt: 'Golden Agri Inputs' },
  { id: 'agri-palm', src: '/logos/agri-palm.png', alt: 'Agri Palm' },
  { id: 'eagle-flour', src: '/logos/eagle-flour.png', alt: 'Eagle Flour' },
  { id: 'golden-fertilizer', src: '/logos/golden-fertilizer.png', alt: 'Golden Fertilizer' },
  { id: 'sunti-golden', src: '/logos/sunti-golden.png', alt: 'Sunti Golden Sugar Estates' }
];
</script>

<style scoped>
</style>