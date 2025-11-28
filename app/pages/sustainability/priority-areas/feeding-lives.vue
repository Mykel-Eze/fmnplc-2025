<template>
  <div class="farm-to-table-container mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="ftc-first-grid mb-16">
        <div class="ftc-big-side">
          <div class="content-area mb-12">
            <h1 class="main-title medium-txt text-3xl">
              Feeding and Enriching Lives, Everyday
            </h1>
            
            <h2 class="subtitle text-[20px] smbold-txt my-4">
              Our Farm-to-table strategy
            </h2>
            
            <p class="description text-sm leading-relaxed">
              Our mission at Flour Mills of Nigeria Plc (FMN) is "Feeding the Nation, Everyday," something we have been doing 
              since Nigeria's independence and the inception of our company in 1960. As one of the largest food and agro allied 
              companies in Nigeria, we make products of superior quality and value for the Nigerian market thereby enriching 
              lives and creating value for suppliers, customers, communities, distributors, employees, shareholders and all our 
              stakeholders.
            </p>
          </div>

          <div class="value-chains mb-8">
            <h2 class="section-title">
              Our Five Key Value Chains
            </h2>
            
            <div class="value-chain-wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              <div 
                v-for="chain in valueChains" 
                :key="chain.name"
                class="value-chain-card"
              >
                <div class="image-wrapper overflow-hidden mb-3">
                  <img 
                    :src="chain.image" 
                    :alt="chain.name"
                    class="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div class="chain-name text-sm">
                  {{ chain.name }}
                </div>
              </div>
            </div>
          </div>

          <div class="supply-chains-section bottom-border-divider mb-8 pb-8">
            <h2 class="section-title">
              Developing competitive, and world-class internal supply chains.
            </h2>
            <div class="supply-chain-content grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <p class="text-sm leading-relaxed">
                Within the agriculture sector, we work closely with a network of smallholder farmers and young entrepreneurs 
                to secure essential raw materials for our production process. To strengthen their capabilities, FMN continues 
                to invest in the provision of enabling structures, particularly in the areas of specialized training, agronomy 
                support and related extension services. Harnessing our expertise and the reach of our business, these farmers 
                enjoy access to better inputs, aggregation and storage at our network of warehouses, collection points and silos 
                complexes to reduce post-harvest losses, improve yields and help distribution. Better crop yields for farmers means 
                that they can now earn more for themselves, and their families. This is just one of the many ways that we positively 
                impact on the general standard of living in the communities in which we operate.
              </p>
              <div>
                <p class="text-sm leading-relaxed">
                  Our aim is essentially to promote stronger ties with our partner farmers, because we know that the sustainability 
                  and future growth of our business depends on it.
                </p>
                <div class="supply-image mt-3">
                  <img 
                    src="@/assets/images/farmers-empowerment.jpg" 
                    alt="Empowering small scale farmers across Nigeria"
                    class="rounded-lg shadow-lg w-full h-auto"
                  />
                  <p class="image-caption mt-2">
                    Empowering small scale farmers across Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Left Image -->
            <div class="fertilizer-image">
              <img 
                src="@/assets/images/fertilizer-application.jpg" 
                alt="Fertilizer Application"
                class="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <!-- Right Content -->
            <div class="fertilizer-content">
              <p class="text-sm leading-relaxed">
                Our Golden Fertilizer Division continues to support and align with the Federal Government's Presidential Fertilizer 
                Initiatives (PFI) working with the support of partners including Fertilizer Producers & Suppliers Association of 
                Nigeria (FEPSAN) and Nigeria Sovereign Investment Authority (NSIA) to ensure that farmers across the country have 
                access to NPK fertilizer.
              </p>
            </div>
          </div>
        </div>

        <div class="ftc-small-side">
          <div class="bottom-border-divider mb-8 pb-8">
            <!-- Left Image -->
            <div class="sugar-image mb-4">
              <img 
                src="@/assets/images/sunti-golden-sugar-estates-aerial.png" 
                alt="The Sunti Golden Sugar Estates - Aerial View"
                class="rounded-lg shadow-lg w-full h-auto"
              />
              <p class="image-caption mt-2">
                The Sunti Golden Sugar Estates
              </p>
            </div>
            
            <!-- Right Content -->
            <div class="sugar-content">
              <h2 class="section-title yellow-line">
                Developing the Sugar Value Chain in Nigeria
              </h2>
              
              <p class="text-sm leading-relaxed mb-3">
                Sunti Golden Sugar Estates (SGSE) illustrates our commitment to reduce sugar importation, save billions in 
                foreign exchange, boost local capacity, and reduce unemployment by putting thousands of Nigerians to work.
              </p>
              
              <p class="text-sm leading-relaxed">
                SGSE is situated on 17,000 hectares of irrigable farmland and features a sugar mill with the capacity to process 
                4,500 metric tons of sugarcane per day. The mill has an installed capacity to produce 1 million tons of Sugarcane 
                which roughly translates into 100,000 metric tons of sugar yearly.
              </p>
            </div>
          </div>

          <div class="">
            <div class="sorghum-image mb-5">
              <img 
                src="@/assets/images/NNFM.jpg" 
                alt="Sorghum Mill in Kano"
                class="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div class="sorghum-content order-2 lg:order-1">
              <h2 class="section-title yellow-line">
                Promoting Local Content with Sorghum Mill in Kano.
              </h2>
              
              <p class="text-sm leading-relaxed">
                As part of a strategic plan to develop a centrally located grains hub in Nigeria, FMN unveiled one of the biggest, 
                grains hub in Nigeria, FMN unveiled one of the biggest, ultra-modern Sorghum milling plants in Kano in 2017. 
                The mill which has an installed capacity of 100,000 metric tons per annum, at full capacity engages a network of 
                about 10,000 farmers in an outgrowers scheme, and create jobs for at least another 40,000 people, and small-scale 
                businesses. The Sorghum mill is a hub for local content processing, value addition, and center of Excellence for 
                Research & Development and Extension.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="ftc-second-grid">
        <div class="ftc-1">
          <div class="">
            <div class="sorghum-content order-2 lg:order-1">
              <h2 class="section-title yellow-line">
                Promoting innovative and sustainable development in our operations
              </h2>
              
              <p class="text-sm leading-relaxed mb-2">
                Recognizing that our business is ultimately about providing for the livelihoods of millions
                of Nigerian families, FMN is committed to collaborating across the food value chain, while
                transforming the role of agriculture in society.
              </p>
              <p class="text-sm leading-relaxed mb-2">
                We have continued to put into action, programs and practices that optimize the use of natural
                resources to ensure that our vision becomes a reality. We have accomplished this by developing
                energy efficient technologies, and by fostering innovations and creative solutions that add
                value for our clients, communities and the environment.
              </p>
              <p class="text-sm leading-relaxed mb-2">
                To reduce the emission of harmful gases and hazardous air pollutants, we have adopted gas-fired
                engines for our power generation requirements in most of our factories. This is part of a
                phaseout process for old diesel engine generators in all our factories.
              </p>
              <p class="text-sm leading-relaxed">
                To this end, we have adopted environmentally friendly designs that feature, low noise 
                pollution, dust extraction monitoring systems, and have adopted a production process with 
                minimal impact
              </p>
            </div>

            <div class="pasta-plant-image mt-5">
              <img 
                src="@/assets/images/pasta-plant.png" 
                alt="Pasta plant Agbara - Interior"
                class="rounded-lg shadow-lg w-full h-auto"
              />
              <p class="image-caption mt-2">
                Pasta plant Agbara - Interior
              </p>
            </div>
          </div>
        </div>

        <div class="ftc-2">
          <div class="bottom-border-divider mb-8 pb-8">
            <!-- Left Image -->
            <div class="sugar-image mb-4">
              <img 
                src="@/assets/images/bagco-plant.png" 
                alt="Bagco plant"
                class="rounded-lg shadow-lg w-full h-auto"
              />
              <p class="image-caption mt-2">
                Our bag and packaging division, BAGCO Plant
              </p>
            </div>
            
            <!-- Right Content -->
            <div class="sugar-content">
              <h2 class="section-title yellow-line">
                Leading the market in bagging and flexible packaging solutions
              </h2>
              
              <p class="text-sm leading-relaxed mb-3">
                Our products are processed and packaged with the utmost care, every time.
              </p>
              
              <p class="text-sm leading-relaxed">
                To ensure that our consumers are assured of the quality
                of our products, we are constantly investing in
                innovative technologies at Bagco, our bagging and
                packaging division. Bagco is already a trusted brand, in
                the local and international markets for laminated woven
                polypropylene sacks and flexible packaging materials.
              </p>
            </div>
          </div>

          <div class="">
            <div class="sugar-content">
              <h2 class="section-title yellow-line">
                World Class Logistics and Transport support
              </h2>

              <div class="sugar-image mb-5">
                <img 
                  src="@/assets/images/transport.png" 
                  alt="Bagco plant"
                  class="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              <p class="text-sm leading-relaxed mb-3">
                Through our transport division, we have a network of
                specialized trucks to provide transportation and
                logistics support for our businesses across the country.
                Golden Transport division runs an efficient logistics
                support system that ensure that our promise of quality
                is upheld from the point of processing to the final
                consumers.
              </p>
              
              <p class="text-sm leading-relaxed">
                The FMN Group also operates Terminals A and B at the
                Apapa Port in Lagos, through one of its subsidiaries -
                Apapa Bulk Terminal, offering specialized services to
                support our operations including customs clearing,
                forwarding agency, shipping agency and logistics.
              </p>
            </div>
          </div>
        </div>

        <div class="ftc-3">
          <div class="bottom-border-divider mb-8 pb-8">
            <!-- Left Image -->
            <div class="sugar-image mb-4">
              <img 
                src="@/assets/images/pasta-shop.png" 
                alt="Pasta shop"
                class="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <!-- Right Content -->
            <div class="sugar-content">
              <h2 class="section-title yellow-line">
                Empowering our trade partners for growth and profitability
              </h2>
              
              <p class="text-sm leading-relaxed mb-3">
                Our products are consumed by millions of Nigerian
                families every day. To ensure that our consumers get
                the assured quality that Golden Penny products are
                known for, we work closely with several downstream
                partners across various target markets.
              </p>
              
              <p class="text-sm leading-relaxed">
                We retain our leadership position across different
                food segments, by continuously investing in the
                development and growth of our partner businesses.
              </p>
            </div>
          </div>

          <div class="">
            <!-- Left Image -->
            <div class="sugar-image mb-4">
              <img 
                src="@/assets/images/lady-cooking.png" 
                alt="Pasta shop"
                class="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <!-- Right Content -->
            <div class="sugar-content">
              <h2 class="section-title yellow-line">
                Nutritious and great tasting food every time
              </h2>
              
              <p class="text-sm leading-relaxed mb-3">
                Our promise to deliver quality products is deeply
                rooted in our promise to our consumers, to provide
                nothing but the best products at every turn,
                because we know that millions of Nigerian families
                depend on us for great tasting meals that are
                healthy and nutritious.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Value Chains Data
const valueChains = ref([
  {
    name: 'Grains',
    image: '/value-chains/grains.jpg'
  },
  {
    name: 'Sweeteners',
    image: '/value-chains/sweeteners.jpg'
  },
  {
    name: 'Oils & Fats',
    image: '/value-chains/oils-fats.jpg'
  },
  {
    name: 'Feeds & Proteins',
    image: '/value-chains/feeds-proteins.jpg'
  },
  {
    name: 'Starches',
    image: '/value-chains/starches.jpg'
  }
]);
</script>

<style src="@/assets/css/feeding-lives.css" scoped></style>