<template>
  <div id="press-page">
    <!-- Hero Banner -->
    <PageHeroBanner
      title="Press Release"
      background-image="/other-banners/press.png"
    />

    <section class="my-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Search Bar -->
            <div class="search-bar-wrapper mb-12">
                <div class="search-bar flex gap-0">
                    <InputText
                        v-model="searchQuery"
                        placeholder="Search"
                        class="search-input"
                        @keyup.enter="handleSearch"
                    />
                    <Button
                        label="Search"
                        class="search-btn"
                        @click="handleSearch"
                    />
                </div>
            </div>

            <!-- Press Releases List -->
            <div class="press-releases-list space-y-6">
                <div
                    v-for="press in filteredPressReleases"
                    :key="press.id"
                    class="press-item"
                    @click="goToDetails(press.id)"
                >
                    <div class="press-border"></div>
                    <div class="press-content">
                        <h2 class="press-title text-gray-900">
                            {{ press.title }}
                        </h2>
                        <p class="press-date text-gray-600">
                            {{ formatDate(press.date) }}
                        </p>
                    </div>
                </div>

                <!-- No Results -->
                <div v-if="filteredPressReleases.length === 0" class="no-results text-center py-12">
                    <i class="pi pi-search text-gray-400 text-5xl mb-4"></i>
                    <p class="text-gray-600 text-lg">
                        No press releases found matching your search.
                    </p>
                </div>
            </div>

            <!-- Load More Button -->
            <div v-if="hasMoreToShow" class="flex justify-center mt-12">
                <Button
                    label="Load More"
                    class="load-more-btn"
                    @click="loadMore"
                />
            </div>
        </div>
    </section>
  </div>
</template>

<script setup>
const router = useRouter();

// Search query
const searchQuery = ref('');
const activeSearchQuery = ref('');

// Pagination
const itemsPerPage = 10;
const currentPage = ref(1);

// Sample press releases data
const allPressReleases = ref([
  {
    id: 1,
    title: 'FMN Wins Prestigious Global Brand Award 2024',
    date: new Date('2024-06-21'),
    category: 'Awards',
  },
  {
    id: 2,
    title: 'Flour Mills of Nigeria Plc (FMN) Continues to Take the Lead in Driving Food-Self Sufficiency in Nigeria with the Release of its 2021/2022 Sustainability Report.',
    date: new Date('2023-10-03'),
    category: 'Sustainability',
  },
  {
    id: 3,
    title: "Flour Mills of Nigeria Women Network Holds Virtual Event to Commemorate International Women's Day and Promote Gender Equity",
    date: new Date('2023-03-31'),
    category: 'CSR',
  },
  {
    id: 4,
    title: 'Honeywell Flour Mills PLC Holds a Successful Annual General Meeting and Announces a 23% Increase in Revenue',
    date: new Date('2023-03-28'),
    category: 'Financial',
  },
  {
    id: 5,
    title: 'FMN Announces Strategic Partnership to Expand Operations Across West Africa',
    date: new Date('2024-09-15'),
    category: 'Expansion',
  },
  {
    id: 6,
    title: 'Flour Mills of Nigeria Launches New Product Line Targeting Health-Conscious Consumers',
    date: new Date('2024-08-10'),
    category: 'Product Launch',
  },
  {
    id: 7,
    title: 'FMN Reports Record Revenue Growth in Q3 2024',
    date: new Date('2024-07-22'),
    category: 'Financial',
  },
  {
    id: 8,
    title: 'FMN Commits N2 Billion to Community Development Projects',
    date: new Date('2024-05-18'),
    category: 'CSR',
  },
  {
    id: 9,
    title: 'Flour Mills of Nigeria Achieves ISO Certification for Quality Management',
    date: new Date('2024-04-05'),
    category: 'Achievement',
  },
  {
    id: 10,
    title: 'FMN Partners with Local Farmers to Boost Agricultural Output',
    date: new Date('2024-03-12'),
    category: 'Partnership',
  },
  {
    id: 11,
    title: 'FMN Appoints New Chief Operating Officer',
    date: new Date('2024-02-28'),
    category: 'Leadership',
  },
  {
    id: 12,
    title: 'Flour Mills of Nigeria Receives Excellence Award for Innovation',
    date: new Date('2024-01-19'),
    category: 'Awards',
  },
]);

// Filter press releases based on search query
const searchedPressReleases = computed(() => {
  if (!activeSearchQuery.value) {
    return allPressReleases.value;
  }
  const query = activeSearchQuery.value.toLowerCase();
  return allPressReleases.value.filter(press => 
    press.title.toLowerCase().includes(query) ||
    press.category.toLowerCase().includes(query)
  );
});

// Paginated press releases
const filteredPressReleases = computed(() => {
  const start = 0;
  const end = currentPage.value * itemsPerPage;
  return searchedPressReleases.value.slice(start, end);
});

// Check if there are more items to show
const hasMoreToShow = computed(() => {
  return filteredPressReleases.value.length < searchedPressReleases.value.length;
});

// Handle search
const handleSearch = () => {
  activeSearchQuery.value = searchQuery.value;
  currentPage.value = 1; // Reset pagination when searching
};

// Load more items
const loadMore = () => {
  currentPage.value++;
};

// Format date
const formatDate = (date) => {
  const options = { month: 'long', day: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

// Navigate to press details
const goToDetails = (id) => {
  router.push(`/press/${id}`);
};
</script>

<style scoped src="@/assets/css/press.css"></style>
