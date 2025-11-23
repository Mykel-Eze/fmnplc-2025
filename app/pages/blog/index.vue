<template>
  <div id="blog-page">
    <!-- Hero Banner -->
    <PageHeroBanner
      title="Blog"
      background-image="/other-banners/blog.jpg"
    />

    <section class="my-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Category Filter -->
            <div class="category-filter mb-12 flex flex-col lg:flex-row lg:gap-5 lg:items-center">
                <p class="filter-label text-gray-900 font-semibold mb-4">Browse by categories:</p>
                <div class="category-btn-wrapper flex flex-wrap gap-3">
                    <Button
                        v-for="category in categories"
                        :key="category"
                        :label="category"
                        :class="['category-btn', { 'active': selectedCategory === category }]"
                        @click="selectCategory(category)"
                    />
                </div>
            </div>

            <!-- Blog Posts Grid -->
            <div class="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <NuxtLink
                    v-for="post in displayedPosts"
                    :key="post.id"
                    :to="post.link"
                    class="blog-card group"
                >
                    <!-- Image -->
                    <div class="blog-image-wrapper relative overflow-hidden rounded-t-2xl bg-gray-200">
                        <img
                            :src="post.image"
                            :alt="post.title"
                            class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <!-- Content -->
                    <div class="blog-content min-h-[120px] px-5 py-4 border-b-4 border-green-700">
                        <h3 class="blog-title text-gray-900 mb-8">
                            {{ post.title }}
                        </h3>
                        <div class="blog-meta flex justify-between items-center">
                            <span class="blog-date text-gray-600">
                                {{ formatDate(post.date) }}
                            </span>
                            <span class="blog-category text-gray-700">
                                {{ post.category }}
                            </span>
                        </div>
                    </div>
                </NuxtLink>
            </div>

            <!-- View More Button -->
            <div class="flex justify-center">
                <Button
                    label="View More"
                    class="view-more-btn"
                    :disabled="!hasMorePosts"
                    @click="loadMore"
                />
            </div>
        </div>
    </section>
  </div>
</template>

<script setup>
// Categories - General is first as requested
const categories = ref(['General', 'AGM', 'CSR', 'Sustainability', 'Press']);
const selectedCategory = ref('General');

// Pagination
const postsPerPage = 6;
const currentPage = ref(1);

// Sample blog posts data - Replace with actual API call
const allBlogPosts = ref([
  {
    id: 1,
    title: 'Flour Mills of Nigeria Stakes Big on Pan-African Expansion with ...',
    date: new Date('2024-11-13'),
    category: 'General',
    image: '/blog/post1.jpg',
    link: '/blog/details'
  },
  {
    id: 2,
    title: 'How FMN Is at The Forefront of Driving Food Security in Nigeria Through...',
    date: new Date('2024-06-21'),
    category: 'General',
    image: '/blog/post2.jpg',
    link: '/blog/details'
  },
  {
    id: 3,
    title: 'FMN Wins Prestigious Global Brand Award 2024',
    date: new Date('2024-06-21'),
    category: 'Press',
    image: '/blog/post3.jpg',
    link: '/blog/details'
  },
  {
    id: 4,
    title: 'FMN Women Network Drives Gender Parity and ...',
    date: new Date('2023-10-11'),
    category: 'CSR',
    image: '/blog/post4.jpg',
    link: '/blog/details'
  },
  // Add more posts here to test pagination
  {
    id: 5,
    title: 'Sustainability Initiatives Drive Growth',
    date: new Date('2024-05-15'),
    category: 'Sustainability',
    image: '/blog/post3.jpg',
    link: '/blog/details'
  },
  {
    id: 6,
    title: 'Annual General Meeting Highlights',
    date: new Date('2024-04-20'),
    category: 'AGM',
    image: '/blog/post4.jpg',
    link: '/blog/details'
  },
  {
    id: 7,
    title: 'Sustainability Initiatives Drive Growth',
    date: new Date('2024-05-15'),
    category: 'AGM',
    image: '/blog/post3.jpg',
    link: '/blog/details'
  },
  {
    id: 8,
    title: 'Annual General Meeting Highlights',
    date: new Date('2024-04-20'),
    category: 'Press',
    image: '/blog/post4.jpg',
    link: '/blog/details'
  },
  {
    id: 9,
    title: 'Annual General Meeting Highlights',
    date: new Date('2024-04-20'),
    category: 'Press',
    image: '/blog/post4.jpg',
    link: '/blog/details'
  },
  // Add more sample posts to demonstrate pagination...
]);

// Filter posts by selected category
const filteredPosts = computed(() => {
  // "General" shows all posts
  if (selectedCategory.value === 'General') {
    return allBlogPosts.value;
  }
  // Other categories filter by specific category
  return allBlogPosts.value.filter(post => post.category === selectedCategory.value);
});

// Get posts to display based on current page
const displayedPosts = computed(() => {
  const start = 0;
  const end = currentPage.value * postsPerPage;
  return filteredPosts.value.slice(start, end);
});

// Check if there are more posts to load
const hasMorePosts = computed(() => {
  return displayedPosts.value.length < filteredPosts.value.length;
});

// Select category
const selectCategory = (category) => {
  selectedCategory.value = category;
  currentPage.value = 1; // Reset to first page when changing category
};

// Load more posts
const loadMore = () => {
  if (hasMorePosts.value) {
    currentPage.value++;
  }
};

// Format date
const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: '2-digit' };
  return new Date(date).toLocaleDateString('en-GB', options);
};

// Fetch blog posts on mount - Replace with actual API call
onMounted(async () => {
  // await fetchBlogPosts();
});
</script>

<style scoped src="@/assets/css/blog.css"></style>
