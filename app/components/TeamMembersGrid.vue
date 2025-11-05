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
.team-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
}
.team-image-wrapper {
  background-color: #e5e7eb;
}
.team-info {
  transition: border-color 0.3s ease;
  background-color: rgba(244, 244, 245, 1);
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.team-card:hover .team-info {
  border-bottom-color: #15803d;
}
.team-name {
  line-height: 1.3;
  font-size: 18px;
  font-family: var(--font-bold);
}
.team-position {
    font-size: 12px;
    line-height: 12.44px;
}

/* Dark Mode */
.dark-mode .team-image-wrapper {
  background-color: #374151;
}
.dark-mode .team-info {
  background-color: #1f2937;
  border-bottom-color: var(--pry-color);
}
.dark-mode .team-card:hover .team-info {
  border-bottom-color: #34d399;
}
.dark-mode .team-name {
  color: #f3f4f6;
}
.dark-mode .team-position {
  color: #d1d5db;
}
</style>