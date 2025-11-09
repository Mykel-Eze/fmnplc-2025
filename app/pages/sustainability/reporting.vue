<template>
  <div id="sustainability-reporting-page">
    <!-- Hero Banner -->
    <PageHeroBanner
      title="Reporting"
      background-image="/other-banners/sustainability-banner.png"
    />

    <!-- Reporting Content -->
    <section class="reporting-content py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Introduction -->
        <div class="intro-section mb-16 max-w-6xl mx-auto">
          <div class="reporting-txt-img items-center">
            <div class="reporting-txt-side">
              <p class="text-gray-700 text-lg leading-relaxed">
                We report against our sustainability goals in our Annual Sustainability Reports using the Global Reporting Initiative (GRI) as a guidance framework. In addition, we are participants in the United Nations Global Compact (UNGC) and submit our communication of progress (CoP) against ten principles on an annual basis.
              </p>
            </div>
            <div class="reporting-img-side">
              <img
                src="~/assets/images/un-global-compact.png"
                alt="UN Global Compact"
                class="reporting-img"
              />
            </div>
          </div>
        </div>

        <!-- Reports Section -->
        <div>
          <h2 class="text-3xl bold-txt pry-color mb-8">Sustainability Reports</h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="report in reports"
              :key="report.id"
              class="report-card group cursor-pointer"
              @click="downloadReport(report.file)"
            >
              <!-- Report Cover -->
              <div class="report-cover relative overflow-hidden rounded-t-[8px] shadow-lg">
                <img
                  :src="report.cover"
                  :alt="report.title"
                  class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>

              <!-- Report Info -->
              <div class="report-info bg-white p-5 rounded-[8px] mt-[-8px] shadow-lg border-b-4 border-green-700 z-1 relative">
                <span class="report-title text-[12px] bold-txt text-gray-900 mb-2">
                  {{ report.title }}
                </span>
                <!-- <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">{{ report.year }}</span>
                  <i class="pi pi-download text-green-700 group-hover:scale-125 transition-transform"></i>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
interface Report {
  id: string;
  title: string;
  year: string;
  cover: string;
  file: string;
}

const reports: Report[] = [
  {
    id: '1',
    title: 'FMN 2023 Sustainability Report',
    year: '2023',
    file: 'https://www.fmnplc.com/reports/2023%20_Flour%20Mill%20of%20Nigeria_Sustainability%20Report.pdf',
    cover: '/thumbnails/2023-thumbnail.jpg'
  },
  {
    id: '2',
    title: 'FMN 2021 - 2022 Sustainability Report',
    year: '2021-2022',
    file: 'https://flourmills.s3.eu-central-1.amazonaws.com/reports/2022/2022_Flour+Mills+of+Nig.+Plc_+Sustainability+Report.pdf',
    cover: '/thumbnails/2022-thumbnail.png'
  },
  {
    id: '3',
    title: 'FMN 2020 - 2021 Sustainability Report',
    year: '2020-2021',
    file: 'https://flourmills.s3.eu-central-1.amazonaws.com/reports/2022/2022_Flour+Mills+of+Nig.+Plc_+Sustainability+Report.pdf',
    cover: '/thumbnails/2021-thumbnail.jpg'
  },
  {
    id: '4',
    title: 'FMN 2019 - 2020 Sustainability Report',
    year: '2019-2020',
    file: 'https://flourmills.s3.eu-central-1.amazonaws.com/reports/FMN%2B2019-2020%2BSustainability%2BReport.pdf',
    cover: '/thumbnails/2019-thumbnail.jpg'
  }
];

const downloadReport = (file: string) => {
  console.log('Downloading report:', file);
  // Implement download functionality
  // window.open(file, '_blank');
};
</script>

<style scoped>
.reporting-content {
  background-color: #ffffff;
}
.intro-section {
  animation: fadeIn 0.8s ease;
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

.reporting-txt-img {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 24px;
}

.reporting-img {
  border: 1px solid rgba(235, 235, 235, 1);
  border-radius: 10px;
}

.report-card {
  transition: transform 0.3s ease;
}
.report-card:hover {
  transform: translateY(-8px);
}
.report-cover {
  background-color: #e5e7eb;
}
.report-info {
  transition: all 0.3s ease;
}
.report-card:hover .report-info {
  border-bottom-color: var(--pry-color);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
}

/* Dark Mode */
.dark-mode .reporting-content {
  background-color: #111827;
}
.dark-mode .intro-section p {
  color: #d1d5db;
}
.dark-mode .report-info {
  background-color: #1f2937;
  border-bottom-color: var(--pry-color);
}
.dark-mode .report-card:hover .report-info {
  border-bottom-color: #34d399;
}
.dark-mode .report-title {
  color: #f3f4f6;
}
.dark-mode .report-info span {
  color: #d1d5db;
}
.dark-mode .report-info i {
  color: var(--pry-color);
}

@media (max-width: 640px) {
  .reporting-txt-img {
    grid-template-columns: 100%;
  }
}
</style>