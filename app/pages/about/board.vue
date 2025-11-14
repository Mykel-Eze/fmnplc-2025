<template>
  <div id="board-page" class="pt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="executive in executiveMembers"
          :key="executive.id"
          class="team-card group"
          @click="viewProfile(executive.id)"
        >
          <!-- Image -->
          <div class="team-image-wrapper relative overflow-hidden rounded-t-2xl bg-gray-200">
            <img
              :src="executive.image"
              :alt="executive.name"
              class="w-full h-76 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Info -->
          <div class="team-info mt-[-8px] min-h-[72px] px-5 border-b-4 border-green-700">
            <h3 class="team-name text-gray-900 mb-1">
              {{ executive.name }}
            </h3>
            <p class="team-position text-gray-600">
              {{ executive.position }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Management Team Grid -->
    <TeamMembersGrid :team-members="nonExecutiveMembers" />
  </div>
</template>


<script lang="ts" setup>
const viewProfile = (id: string) => {
  console.log('View profile:', id);
  // Navigate to profile or open modal
};

const executiveMembers = [
  {
    id: '1',
    name: 'John G. Coumantaros',
    position: 'Chairman',
    image: '/bod/Chairman_John.jpeg',
  },
  {
    id: '2',
    name: 'Paul Miyonmide Gbededo',
    position: 'Vice Chairman',
    image: '/bod/Paul.jpeg',
  },
  {
    id: '3',
    name: 'Omoboyede Olusanya',
    position: 'GMD / CEO',
    image: '/bod/Boye.jpg',
  },
];

const nonExecutiveMembers = [
  {
    id: '4',
    name: 'Dr. (Mrs.) Salamatu Hussaini Suleiman',
    position: 'Non-Executive',
    image: '/bod/Salamatu.jpg',
  },
  {
    id: '5',
    name: 'Professor Jerry Gana',
    position: 'Non-Executive',
    image: '/bod/Prof_Jerry.jpeg',
  },
  {
    id: '6',
    name: 'Alfonso Garate',
    position: 'Non-Executive',
    image: '/bod/Alfonso.jpeg',
  },
  {
    id: '7',
    name: 'Yiannis Katsaounis',
    position: 'Non-Executive',
    image: '/bod/Yannis.jpeg',
  },
  {
    id: '8',
    name: 'Thanassis Mazarakis',
    position: 'Non-Executive',
    image: '/bod/Thanassis.jpeg',
  },
  {
    id: '9',
    name: 'Foluso Phillips',
    position: 'Non-Executive',
    image: '/bod/Folusho.jpeg',
  },
  {
    id: '10',
    name: 'Juliet Anammah',
    position: 'Non-Executive',
    image: '/bod/Juliet.jpeg',
  },
  {
    id: '11',
    name: 'F.R.A Williams',
    position: 'Non-Executive',
    image: '/bod/Williams.png',
  },
  {
    id: '12',
    name: 'Alhaji Rabiu Gwarzo',
    position: 'Non-Executive',
    image: '/bod/Alhaji_Rabiu.jpeg',
  },
  {
    id: '13',
    name: 'Yewande Sadiku',
    position: 'Non-Executive',
    image: '/bod/Yewande.jpeg',
  },
  {
    id: '14',
    name: 'Alhaji Yunus Olalekan Saliu',
    position: 'Non-Executive',
    image: '/bod/Alhaji_Yunus.jpeg',
  },
  {
    id: '15',
    name: 'Alhaji Muhammad K. Ahmad',
    position: 'Independent Non-Executive Director',
    image: '/bod/Alhaji_Muhammed.jpeg',
  },
];
</script>

<style scoped>
</style>