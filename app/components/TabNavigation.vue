<template>
  <div class="tab-navigation-wrapper pt-14 pb-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="tab-container flex flex-wrap gap-3 justify-center">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.id"
          :to="tab.route"
          :class="[
            'tab-button',
            isActiveTab(tab.route) ? 'tab-active' : 'tab-inactive'
          ]"
        >
          {{ tab.label }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Tab {
  id: string;
  label: string;
  route: string;
}

interface Props {
  tabs: Tab[];
}

const props = defineProps<Props>();

const route = useRoute();

const isActiveTab = (tabRoute: string) => {
  return route.path === tabRoute;
};
</script>

<style scoped>
.tab-container {
  background-color: rgba(235, 235, 235, 1);
  max-width: fit-content;
  margin: 0 auto;
  padding: 8px;
}
.tab-button {
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 14px;
  padding: 10px 18px;
  height: 48px;
  border-radius: 4px;
  color: black !important;
  line-height: 2;
}
.tab-active {
  background-color: var(--pry-color) !important;
  border-color: var(--pry-color) !important;
  color: #ffffff !important;
}
.tab-inactive {
  background-color: transparent !important;
  border-color: #d1d5db !important;
  color: #000 !important;
}
.tab-inactive:hover {
  background-color: #f3f4f6 !important;
  color: var(--pry-color) !important;
}

/* Dark Mode */
.dark-mode .tab-container {
  background-color: #1f2937;
}
.dark-mode .tab-inactive {
  border-color: #4b5563 !important;
  color: #d1d5db !important;
}
.dark-mode .tab-inactive:hover {
  background-color: #374151 !important;
  border-color: var(--pry-color) !important;
  color: whitesmoke !important;
}

@media (min-width: 993px) {
  .tab-button {
    border: none !important;
  }
}

@media (max-width: 992px) {
  .tab-container {
    background-color: transparent !important;
  }
}
</style>