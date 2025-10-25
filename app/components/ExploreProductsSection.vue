<template>
  <section id="products-showcase" class="products-section relative overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="max-w-[435px] ml-auto">
            <h2 class="section-title-2">
                Explore a Selection of Our Brands
            </h2>
        </div>
        
        <div class="hidden lg:flex flex-row items-center gap-8">
            <div class="w-full flex items-center justify-center">
                <div class="product-item-container relative">
                    <Transition :name="slideDirection" mode="out-in">
                        <div :key="currentSlide" class="product-item-wrapper items-center gap-8 p-8 shadow-lg">
                            <div class="product-image-wrapper relative z-10">
                                <img
                                    :src="products[currentSlide]?.image"
                                    :alt="products[currentSlide]?.name"
                                    class="product-image object-contain"
                                />
                            </div>
                            <div class="product-details max-w-[350px]">
                                <h3 class="product-name text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                                    {{ products[currentSlide]?.name }}
                                </h3>
                                <!-- <hr class="product-details-line" /> -->
                                <div class="product-description text-gray-700 space-y-3">
                                    <p
                                        v-for="(paragraph, index) in products[currentSlide]?.description"
                                        :key="index"
                                        class="leading-relaxed"
                                    >
                                        {{ paragraph }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>

            <!-- Right Side -->
            <div class="navigation-arrows z-20 flex flex-col gap-4">
                <Button
                    icon="pi pi-arrow-left"
                    rounded
                    class="nav-button nav-button-prev"
                    @click="prevSlide"
                    aria-label="Previous product"
                />
                <Button
                    icon="pi pi-arrow-right"
                    rounded
                    class="nav-button nav-button-next"
                    @click="nextSlide"
                    aria-label="Next product"
                />
            </div>
        </div>

        <!-- Mobile View -->
        <div class="lg:hidden">
            <!-- Curved Header Section -->
            <div class="mobile-header relative mb-8">
                <!-- Header Content -->
                <div class="mobile-header-content absolute inset-0 flex flex-col items-center justify-center px-6 py-8">
                    <h2 class="text-2xl sm:text-3xl font-bold text-white text-center mb-6 leading-tight">
                        Explore a Selection of Our Brands
                    </h2>

                    <!-- Navigation Arrows -->
                    <div class="flex gap-4">
                        <Button
                            icon="pi pi-arrow-left"
                            rounded
                            outlined
                            class="mobile-nav-button"
                            @click="prevSlide"
                            aria-label="Previous product"
                        />
                        <Button
                            icon="pi pi-arrow-right"
                            rounded
                            outlined
                            class="mobile-nav-button"
                            @click="nextSlide"
                            aria-label="Next product"
                        />
                    </div>
                </div>
            </div>

            <!-- Product Card -->
            <Transition :name="slideDirection" mode="out-in">
                <div :key="currentSlide" class="mobile-product-card bg-gray-100 rounded-3xl p-6 shadow-lg mx-4">
                    <!-- Product Image -->
                    <div class="product-image-mobile mb-6 flex items-center justify-center">
                        <img
                            :src="products[currentSlide]?.image"
                            :alt="products[currentSlide]?.name"
                            class="w-full max-w-xs h-auto object-contain"
                        />
                    </div>

                    <!-- Product Details -->
                    <div class="product-details-mobile">
                        <h3 class="product-name-mobile text-xl font-bold text-gray-900 mb-4 pb-4 border-b-2 border-gray-300">
                            {{ products[currentSlide]?.name }}
                        </h3>
                        <div class="product-description-mobile text-gray-700 space-y-3">
                            <p
                                v-for="(paragraph, index) in products[currentSlide]?.description"
                                :key="index"
                                class="leading-relaxed text-sm"
                            >
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

interface Product {
  id: number;
  name: string;
  description: string[];
  image: string;
}

const currentSlide = ref(0);
const slideDirection = ref<'slide-left' | 'slide-right'>('slide-right');

const nextSlide = () => {
  slideDirection.value = 'slide-left';
  currentSlide.value = (currentSlide.value + 1) % products.length;
};

const prevSlide = () => {
  slideDirection.value = 'slide-right';
  currentSlide.value = currentSlide.value === 0 ? products.length - 1 : currentSlide.value - 1;
};

const products: Product[] = [
  {
    id: 1,
    name: 'PASTA',
    description: [
      'Discover our diverse portfolio of businesses that work together to deliver quality products and services across Nigeria. Discover our diverse portfolio of businesses that work together to deliver quality products and services across Nigeria.'
    ],
    image: '/products/macaroni.png'
  },
  {
    id: 2,
    name: 'GOLDEN PENNY SPREAD',
    description: [
      'Deliciously tasting spread that makes good bread taste even better.',
      'Enriched with 7 essential vitamins (A, D, E, Niacin, Folic Acid, B6, b12)'
    ],
    image: '/products/spread.png'
  },
  {
    id: 3,
    name: 'GOLDEN PENNY VEGETABLE OIL',
    description: [
      'Premium quality vegetable oil for tasty meals. Enriched with 7 Essential Vitamins (A, D, E, Niacin, Folic Acid, B6, b12)',
      'INGREDIENTS',
      'Refine palm Olein, Vitamin A&E'
    ],
    image: '/products/vegetable-oil.png'
  },
  {
    id: 4,
    name: 'SEMOVITA',
    description: [
      'Made from high-quality premium wheat, it is nutritious, healthy and aids digestion. It goes with any type of soup. Golden Penny Semovita is smooth, moldable, easy to cook and swallow.',
      'Contains Fibre, Protein, Fortified with Micro-nutrients like Vitamins A, B, Iron and Folic Acid'
    ],
    image: '/products/semovita.png'
  },
  {
    id: 5,
    name: 'NOODLES',
    description: [
      'Golden Penny Noodles is a delicious instant noodle fortified with protein, vitamins & minerals to keep your body energized. Its fine blend of spices creates a zing moment when it meets your taste buds, it is no wonder it is everyone’s favourite noodles.',
      'Available in different flavours; Golden Penny Chicken Noodles, Goat Meat Pepper Soup Noodles, Golden Penny Jollof Hot Hot Noodles, Golden Penny Jollof Chicken Noodles'
    ],
    image: '/products/noodles.png'
  },
  {
    id: 6,
    name: 'PASTA',
    description: [
      'Pasta lovers know what time it is when Golden Penny Spaghetti is on the menu. Loved for its smooth texture and delicate flavour, this high-quality pasta is a family favourite across the country.',
      'A good source of Protein',
      'A good source of Vitamins',
      'It contains no cholesterol'
    ],
    image: '/products/pasta.png'
  },
  {
    id: 7,
    name: 'GOLDEN FERTILIZER',
    description: [
      'Discover our diverse portfolio of businesses that work together to deliver quality products and services across Nigeria. Discover our diverse portfolio of businesses that work together to deliver quality products and services across Nigeria.',
    ],
    image: '/products/fertilizer.png'
  },
  {
    id: 8,
    name: 'TOP FEED (LAYER WISE)',
    description: [
      'Our innovative poultry feed is designed to help farmers. With balanced nutrition, it boosts egg productivity, strengthens bird health, and ensures lasting value for profitability. Stakeholders and partners joined us to celebrate this milestone. With LayerWise, your birds don’t just lay, they lay smart!',
    ],
    image: '/products/top-feed-layer.png'
  },
  {
    id: 9,
    name: 'TOP FEED',
    description: [
      'Premier feeds (TOPFEEDS) operates three major animal feed lines and other livestock feed lines on request. These lines are as follows; Layer line, Broiler line, Aqua Line, and Concentrates. Others on request includes, cattle, pig ration Ostrich, etc.',
    ],
    image: '/products/top-feed.png'
  },
  {
    id: 10,
    name: 'GOLDEN PENNY AMAIZING DAY',
    description: [
      'Golden Penny Amaizing Day is a soft-flakes Instant Breakfast cereal made from the right Combination of nutritious natural ingredients which are Whole Maize, Pure Soya Bean flour and Cassava flour. It is also fortified with Vitamins and Minerals that support the growth and development of a healthy body, strong bones, and sharp eyes.',
      'Contains Calcium, Protein, Dietary Fibre, Vitamin A'
    ],
    image: '/products/amazing-day.png'
  },
  {
    id: 11,
    name: 'GOLDEN PENNY WHITE SUGAR',
    description: [
      'This premium, all-natural enriched cane sugar packages just the right amount of sweetness into individual cubes, providing the perfect amount for your beverages, cereals and more.',
      'Fortified with Vit A to regulatory standards'
    ],
    image: '/products/cube-sugar.png'
  },
  {
    id: 12,
    name: 'GOLDEN PENNY CONFECTIONERY FLOUR',
    description: [
      'Pastries and baked treats turn out even more irresistible when made with this quality vitamin-enriched flour.',
      'It’s the easiest way to make special Bread recipes even more special, and it’s just as great for regular bread too.',
      'Great source of energy, Enriched with Zinc, enriched with Vitamins A & B, Enriched with Iron, Good Yield, Good Quality, No blending required'
    ],
    image: '/products/confectionery-flour.png'
  },
  {
    id: 13,
    name: 'GOLDEN PENNY CHOC OH',
    description: [
      'It is made from pure soya oil and natural cocoa sourced from local farmers. It contains Omega 3 & 6 which are a good source of energy.',
      'It is smooth with a rich sweet taste. Easy to spread on bread, pastries, biscuits, and a delicious dip for fruits.',
      'A source of Carbohydrate, Contains Protein, Contains Vitamins'
    ],
    image: '/products/choc-oh.png'
  },
];
</script>

<style scoped>

</style>