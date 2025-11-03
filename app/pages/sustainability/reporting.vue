<template>
  <div id="sustainability-reporting-page">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Banner -->
    <PageHeroBanner
      title="Reporting"
      background-image="/other-banners/sustainability-banner.png"
    />

    <!-- Reporting Content -->
    <section class="reporting-content py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- Introduction -->
        <div class="intro-section mb-16 max-w-4xl">
          <div class="flex flex-col lg:flex-row gap-8 items-start">
            <div class="flex-1">
              <p class="text-gray-700 text-lg leading-relaxed">
                We report against our sustainability goals in our Annual Sustainability Reports using the Global Reporting Initiative (GRI) as a guidance framework. In addition, we are participants in the United Nations Global Compact (UNGC) and submit our communication of progress (CoP) against ten principles on an annual basis.
              </p>
            </div>
            <div class="flex-shrink-0">
              <!-- <img
                src="/sustainability/ungc-logo.png"
                alt="UN Global Compact"
                class="w-48 h-auto"
              /> -->
            </div>
          </div>
        </div>

        <!-- Reports Section -->
        <div>
          <h2 class="text-3xl font-bold text-green-700 mb-8">Sustainability Reports</h2>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="report in reports"
              :key="report.id"
              class="report-card group cursor-pointer"
              @click="downloadReport(report.file)"
            >
              <!-- Report Cover -->
              <div class="report-cover relative overflow-hidden rounded-t-2xl shadow-lg">
                <img
                  :src="report.cover"
                  :alt="report.title"
                  class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>

              <!-- Report Info -->
              <div class="report-info bg-white p-5 rounded-b-2xl shadow-lg border-b-4 border-green-700">
                <h3 class="report-title text-base font-bold text-gray-900 mb-2">
                  {{ report.title }}
                </h3>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-600">{{ report.year }}</span>
                  <i class="pi pi-download text-green-700 group-hover:scale-125 transition-transform"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <SubscribeToNewsletter />

    <!-- Footer -->
    <Footer />
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
    cover: '/reports/2023-cover.jpg',
    file: '/downloads/fmn-sustainability-report-2023.pdf'
  },
  {
    id: '2',
    title: 'FMN 2021 - 2022 Sustainability Report',
    year: '2021-2022',
    cover: '/reports/2021-2022-cover.jpg',
    file: '/downloads/fmn-sustainability-report-2021-2022.pdf'
  },
  {
    id: '3',
    title: 'FMN 2020 - 2021 Sustainability Report',
    year: '2020-2021',
    cover: '/reports/2020-2021-cover.jpg',
    file: '/downloads/fmn-sustainability-report-2020-2021.pdf'
  },
  {
    id: '4',
    title: 'FMN 2019 - 2020 Sustainability Report',
    year: '2019-2020',
    cover: '/reports/2019-2020-cover.jpg',
    file: '/downloads/fmn-sustainability-report-2019-2020.pdf'
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
</style>