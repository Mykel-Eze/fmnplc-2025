<template>
  <section id="latest-news" class="news-section pb-16 pt-20 md:pb-20 px-1 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mb-12">
        <p class="section-label">
          PRESS
        </p>
        <h2 class="section-title">
          Latest News
        </h2>
      </div>

      <!-- News Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 sm:gap-8">
        <div
          v-for="article in newsArticles"
          :key="article.id"
          class="news-card group cursor-pointer"
          @click="readArticle(article.id)"
        >
          <!-- Image -->
          <div class="news-image-wrapper relative overflow-hidden rounded-t-lg mb-6">
            <img
              :src="article.image"
              :alt="article.title"
              class="news-image w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Content -->
          <div class="news-content">
            <!-- Date -->
            <p class="news-date text-sm text-[#6B7280] mb-2">
              {{ article.date }}
            </p>

            <!-- Title -->
            <h3 class="news-title text-base md:text-xl smbold-txt text-gray-900 mb-2 leading-tight group-hover:text-green-700 transition-colors">
              {{ article.title }}
            </h3>

            <!-- Excerpt -->
            <p class="news-excerpt text-gray-600 text-sm md:text-base mb-2 leading-relaxed line-clamp-3">
              {{ article.excerpt }}
            </p>

            <!-- Read More Link -->
            <a
              href="#"
              class="read-more-link inline-flex items-center gap-2 pry-color underline text-base hover:gap-3 transition-all"
              @click.stop="readArticle(article.id)"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <!-- <div class="text-center mt-12">
        <Button
          label="View All News"
          outlined
          severity="success"
          size="large"
          class="view-all-button"
          @click="viewAllNews"
        />
      </div> -->
    </div>
  </section>
</template>

<script lang="ts" setup>
interface NewsArticle {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const newsArticles = ref<NewsArticle[]>([
  {
    id: '1',
    date: 'August 28, 2025',
    title: 'FMN Stays Committed to Feeding the Nation',
    excerpt: 'Creates over 400,000 direct and indirect employment. Improves commitment to local content development and food security. Through its commitment to fostering food security in ...',
    image: '/news/fmn-building.jpg'
  },
  {
    id: '2',
    date: 'July 21, 2025',
    title: 'FMN Agro Collaborates FG in the Drive for Cassava Industrialization...',
    excerpt: 'Premium Cassava Products Division (PCPD), a business entity of FMN Agro, recently collaborated with the Federal government for the 2025 World Cassava Day. The event, held at the Banquet Hall...',
    image: '/news/cassava-event.jpg'
  },
  {
    id: '3',
    date: 'September 19, 2025',
    title: "Flour Mills of Nigeria Meets All FG's Silo Concession Revitalization Conditions",
    excerpt: "Following the Federal Government's ongoing drive for food self-sufficiency in Nigeria by combating food wastage through the silo concession revitalization program, Flour Mills of Nigeria (FMN) ...",
    image: '/news/flour-mill-facility.jpg'
  }
]);

const readArticle = (id: string) => {
  console.log('Read article:', id);
  // Navigate to article detail page
  // navigateTo(`/news/${id}`);
};

const viewAllNews = () => {
  console.log('View all news clicked');
  // Navigate to news listing page
  // navigateTo('/news');
};
</script>

<style scoped></style>