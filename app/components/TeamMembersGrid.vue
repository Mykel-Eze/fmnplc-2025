<template>
  <section class="team-section py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="member in teamMembers"
          :key="member.id"
          class="team-card group"
          @click="viewProfile(member.id)"
        >
          <!-- Image -->
          <div class="team-image-wrapper relative overflow-hidden rounded-t-2xl bg-gray-200">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-72 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Info -->
          <div class="team-info mt-[-8px] min-h-[72px] px-5 border-b-4 border-green-700">
            <h3 class="team-name text-gray-900 mb-1">
              {{ member.name }}
            </h3>
            <p class="team-position text-gray-600">
              {{ member.position }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

interface Props {
  teamMembers: TeamMember[];
}

defineProps<Props>();

const viewProfile = (id: string) => {
  console.log('View profile:', id);
  // Navigate to profile or open modal
};
</script>

<style>

</style>