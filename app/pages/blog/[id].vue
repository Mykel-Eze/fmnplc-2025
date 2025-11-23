<template>
  <div class="blog-details-page py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Back Button -->
      <Button
        label="Back to Blog"
        icon="pi pi-arrow-left"
        class="back-btn mb-8"
        @click="goBack"
        text
      />

      <!-- Category Badge -->
      <div class="mb-4">
        <span class="category-badge">{{ blogPost.category }}</span>
      </div>

      <!-- Title -->
      <h1 class="blog-title text-gray-900 mb-4">
        {{ blogPost.title }}
      </h1>

      <!-- Meta Info -->
      <div class="blog-meta flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
        <div class="flex items-center gap-2">
          <i class="pi pi-calendar text-gray-600"></i>
          <span class="text-gray-600">{{ formatDate(blogPost.date) }}</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="pi pi-user text-gray-600"></i>
          <span class="text-gray-600">{{ blogPost.author }}</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="pi pi-clock text-gray-600"></i>
          <span class="text-gray-600">{{ blogPost.readTime }} min read</span>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="featured-image mb-12 rounded-2xl overflow-hidden">
        <img
          :src="blogPost.image"
          :alt="blogPost.title"
          class="w-full h-auto object-cover"
        />
      </div>

      <!-- Content -->
      <div class="blog-details-content">
        <p class="mb-6">
          Flour Mills of Nigeria Plc (FMN) continues to solidify its position as a leading food and agro-allied 
          group in Nigeria and across Africa. With a rich history spanning several decades, FMN has consistently 
          demonstrated its commitment to food security, innovation, and sustainable business practices.
        </p>

        <p class="mb-6">
          The company's strategic expansion initiatives have positioned it as a key player in addressing the 
          continent's growing food needs. Through significant investments in modern infrastructure, technology, 
          and human capital development, FMN is not just meeting current demands but anticipating future 
          challenges in the food and beverage sector.
        </p>

        <h2 class="content-heading text-gray-900 mb-4">Strategic Investment in Pan-African Expansion</h2>

        <p class="mb-6">
          FMN's pan-African expansion strategy represents a bold vision for the future of food production and 
          distribution across the continent. The company has invested heavily in state-of-the-art facilities 
          that leverage cutting-edge technology to ensure efficiency, quality, and sustainability.
        </p>

        <p class="mb-6">
          This expansion is not merely about geographical reach; it's about creating value chains that benefit 
          local communities, farmers, and consumers. By establishing strategic partnerships and investing in 
          local capacity building, FMN is fostering economic growth and creating employment opportunities 
          across multiple African markets.
        </p>

        <h2 class="content-heading text-gray-900 mb-4">Commitment to Food Security</h2>

        <p class="mb-6">
          At the heart of FMN's operations is an unwavering commitment to ensuring food security for millions 
          of people across Africa. The company understands that access to nutritious, affordable, and safe food 
          is fundamental to human development and economic prosperity.
        </p>

        <p class="mb-6">
          Through its diverse portfolio of products spanning flour, pasta, sugar, dairy, and other essential 
          food items, FMN serves as a critical link in Africa's food value chain. The company's investments in 
          backward integration ensure reliable supply chains while supporting local agriculture and reducing 
          dependence on imports.
        </p>

        <h2 class="content-heading text-gray-900 mb-4">Sustainability and Innovation</h2>

        <p class="mb-6">
          FMN recognizes that long-term success depends on sustainable practices that protect the environment 
          and preserve resources for future generations. The company has implemented comprehensive sustainability 
          programs across its operations, focusing on energy efficiency, water conservation, and waste reduction.
        </p>

        <p class="mb-6">
          Innovation drives everything FMN does, from product development to operational excellence. By embracing 
          digital transformation and investing in research and development, the company continues to stay ahead 
          of market trends and consumer preferences.
        </p>

        <h2 class="content-heading text-gray-900 mb-4">Looking Ahead</h2>

        <p class="mb-6">
          As FMN looks to the future, the company remains committed to its vision of being Africa's leading 
          food and agro-allied group. With continued investment in expansion, innovation, and people development, 
          FMN is well-positioned to drive positive change across the continent.
        </p>

        <p class="mb-0">
          The journey ahead holds immense potential, and FMN is ready to seize the opportunities while navigating 
          the challenges that come with operating in dynamic African markets. Through strategic partnerships, 
          operational excellence, and a steadfast commitment to stakeholders, FMN continues to write its success 
          story in Africa's food and beverage industry.
        </p>
      </div>

      <!-- Share Section -->
      <div class="share-section mt-12 pt-8 border-t border-gray-200">
        <h3 class="share-title text-gray-900 mb-4">Share this article</h3>
        <div class="flex gap-4">
          <Button
            icon="pi pi-facebook"
            class="share-btn facebook"
            rounded
            aria-label="Share on Facebook"
          />
          <Button
            icon="pi pi-twitter"
            class="share-btn twitter"
            rounded
            aria-label="Share on Twitter"
          />
          <Button
            icon="pi pi-linkedin"
            class="share-btn linkedin"
            rounded
            aria-label="Share on LinkedIn"
          />
          <Button
            icon="pi pi-envelope"
            class="share-btn email"
            rounded
            aria-label="Share via Email"
          />
        </div>
      </div>

      <!-- Related Posts -->
      <div class="related-posts mt-16">
        <h3 class="related-title text-gray-900 mb-8">Related Articles</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink
            v-for="post in relatedPosts"
            :key="post.id"
            :to="post.link"
            class="related-card group cursor-pointer"
          >
            <div class="related-image-wrapper rounded-lg overflow-hidden mb-4">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 class="related-card-title text-gray-900 mb-2">{{ post.title }}</h4>
            <p class="text-gray-600 text-sm">{{ formatDate(post.date) }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

// Main blog post data
const blogPost = ref({
  id: 1,
  title: 'Flour Mills of Nigeria Stakes Big on Pan-African Expansion with Strategic Investments',
  date: new Date('2024-11-13'),
  category: 'General',
  author: 'FMN Communications',
  readTime: 5,
  image: '/blog/post1.jpg'
});

// Related posts
const relatedPosts = ref([
  {
    id: 2,
    title: 'How FMN Is at The Forefront of Driving Food Security in Nigeria',
    date: new Date('2024-06-21'),
    image: '/blog/post2.jpg',
    link: '/blog/2'
  },
  {
    id: 3,
    title: 'FMN Wins Prestigious Global Brand Award 2024',
    date: new Date('2024-06-21'),
    image: '/blog/post3.jpg',
    link: '/blog/3'
  },
  {
    id: 4,
    title: 'FMN Women Network Drives Gender Parity and Inclusion',
    date: new Date('2023-10-11'),
    image: '/blog/post4.jpg',
    link: '/blog/4'
  }
]);

// Format date
const formatDate = (date) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
};

// Go back to blog list
const goBack = () => {
  router.push('/blog');
};

// Load a different post
const loadPost = (postId) => {
  // Navigate to the new post or scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // In real implementation, fetch and load the new post data
};
</script>

<style scoped src="@/assets/css/blog-details.css"></style>
