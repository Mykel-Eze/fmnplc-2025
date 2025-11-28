<template>
  <div id="diversity-and-inclusion">
    <section class="mb-12 mt-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content-box">
          <div class="text-base space-y-3">
            <p>
              The fifth of the 17 Sustainable Development Goals established by United Nations in
              2015, challenges the world to “Achieve Gender Equality and Empower All Women and
              Girls.” This is not only a basic human right, but its achievement has enormous
              socio-economic ramifications. Empowering women fuels thriving economies, spurs
              productivity and growth. The quality of women’s talent and leadership is important
              to business; the skills and experience they bring, including experience gained outside
              of the workplace have proven to be essential in strategic decision-making.
            </p>
            <p>
              We are committed to empowering our women, recognizing their immense potential and value
              add to the business. By providing equal opportunities to all, our women are able to explore
              and advance into senior-level positions thereby inspiring others to reach their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!---=== Promoting Gender Equality ===--->
    <section class="mb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content-box">
          <h2 class="section-title pry-color">Promoting Gender Equality</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 items-center text-base mb-3">
            <div class="space-y-3">
              <p>
                As a diverse group, FMN promotes gender inclusivity at all levels of its operations and at
                every stage of our employee's careers. This is because we are committed to fostering a positive
                work culture that encourage a truly gender-equal workplace where all employees can collaborate
                and innovate to reach their career aspirations.
              </p>
              <p>
                As part of a broader strategy to empower women across the value chain, we will continue to
                incorporate gender equality into our workplace policies, recruitment practices, employee
                experience, as well as increasing representation at all levels within the group.
              </p>
            </div>
            <div class="my-4 md:my-0">
              <img src="@/assets/images/fmn-women-network.png" alt="fmn-women-network">
            </div>
          </div>
          <div class="text-base space-y-3">
            <p>
              The network was set up to enable the FMN Woman thrive and flourish professionally across all career
              levels by removing structural impediments to career advancement and work-life balance, and
              consequently increasing organizational value.
              We believe that as we create more awareness and the network grows, there will be a positive impact on
              the performance of business.
            </p>
            <p>
              An extensive series of initiatives and clear goals have been established to help advance our gender
              balance agenda and bolster our inclusive culture. This is evident in our clear commitment to provide
              equal opportunities for all employees in the company.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!---=== Objectives ===--->
    <section class="mb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content-box">
          <div class="objectives-box">
            <div class="box-txt-side">
              <h2 class="box-title">
                <span>Objectives</span>
              </h2>
              <div class="box-description">
                <ul>
                  <li>Improve gender diversity, especially at management levels</li>
                  <li>
                    Improve performance & engagement ratings by driving self and career
                    leadership of the FMN Woman
                  </li>
                  <li>
                    Proactively manage gender related workplace challenges
                  </li>
                  <li>
                    Contribute to the overall success and development of FMN
                  </li>
                </ul>
              </div>
            </div>
            <div class="box-img-side min-h-[200px] lg:min-h-10">
              <img src="@/assets/images/smiling-women.jpg" alt="smiling-women">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!---=== Our Diversity ===--->
    <section class="mb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content-box">
          <h2 class="section-title pry-color">Our Diversity</h2>
          <div>
            <p>
              We believe that achieving gender equality is not only important, but also right. This is
              because we recognize that fostering an equal-opportunity culture in our workplaces encourages
              a healthier and happy workforce, which in turn stimulates creativity, innovation, and
              advancement. Already we are improving the numbers across our operations by increasing the
              numbers of women across the group.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!---=== Our Programmes ===--->
    <section class="mb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content-box">
          <h2 class="section-title pry-color">Our Programmes</h2>
          <div class="programme-wrapper mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="programme in programmes"
              :key="programme.id"
              class="report-card"
            >
              <!-- Report Cover -->
              <div class="report-cover relative overflow-hidden rounded-t-[8px] shadow-lg">
                <img
                  :src="programme.cover"
                  :alt="programme.title"
                  class="w-full h-80 object-cover transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>

              <!-- Report Info -->
              <div class="report-info bg-white p-5 rounded-[8px] mt-[-8px] shadow-lg border-b-4 border-green-700 z-1 relative">
                <span class="report-title text-[16px] bold-txt text-gray-900 mb-2">
                  {{ programme.title }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!---=== Video Carousel ===--->
    <!-- <section class="mb-12">
      <VideoCarousel 
        title="" 
        subtitle="" 
        :videos="testimonialVideos" 
      />
    </section> -->

    <!---=== Our Partnerships ===--->
    <section class="mb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content-box">
          <h2 class="section-title pry-color">Our Partnerships</h2>
          <div class="mb-12">
            <p>
              We are proud to join the Nigeria2Equal program implemented by the International Finance
              Corporation (IFC) in partnership with the Nigerian Stock Exchange (NSE) which aims to reduce
              gender gaps across employment and entrepreneurship in the private sector. This is a public
              recognition of our commitment to:
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <ul class="partnership-list-text">
                <li>Champion and contribute towards advocacy work to advance gender equality</li>
                <li>Promote women's entrepreneurship</li>
                <li>Promote women's leadership and employment</li>
              </ul>
            </div>
            <div>
              <img src="@/assets/images/female-worker.png" alt="female-worker">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
interface Programmes {
  id: string;
  title: string;
  cover: string;
}

const programmes: Programmes[] = [
  {
    id: '1',
    title: 'International Women\'s Day',
    cover: '/programmes/prog-1.jpg'
  },
  {
    id: '2',
    title: 'Mentorship Programme',
    cover: '/programmes/prog-2.jpg'
  },
  {
    id: '3',
    title: 'Quarterly Mentoring  Sessions',
    cover: '/programmes/prog-3.jpg'
  },
  {
    id: '4',
    title: 'Annual Women\'s Conference',
    cover: '/programmes/prog-4.jpg'
  }
];

const testimonialVideos = [
  {
    youtubeId: 'GFGg67imKaA', // Replace with actual YouTube ID
    title: 'Nike Tinubu',
    role: 'General Manager',
    company: 'Premium Cassava Products Ltd'
  },
  {
    youtubeId: 'cRhgu3cQ2u8', // Replace with actual YouTube ID
    title: 'Adebayo Ogunlesi',
    role: 'Chief Executive Officer',
    company: 'Global Infrastructure Partners'
  },
  {
    youtubeId: 'glgd_1M9Xbc',
    title: 'Chidi Okoro',
    role: 'Supply Chain Manager',
    company: 'West African Logistics Ltd'
  },
  {
    youtubeId: 'SFwghDrWBGQ',
    title: 'Sarah Mitchell',
    role: 'Regional Director',
    company: 'International Trade Partners'
  },
  {
    youtubeId: '_fUUQHk1MVs',
    title: 'Mohammed Ibrahim',
    role: 'Business Development Head',
    company: 'Northern States Trading Co.'
  }
];

</script>

<style scoped>
.section-title {
  font-size: 24px;
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

.dark-mode .report-info {
  background-color: #1f2937;
  border-bottom-color: var(--pry-color);
}
.dark-mode .report-info span {
  color: #d1d5db;
}
</style>