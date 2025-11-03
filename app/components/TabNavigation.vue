<template>
  <div class="tab-navigation-wrapper pt-14 pb-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="tab-container flex flex-wrap gap-3 justify-center">
        <Button
          v-for="tab in tabs"
          :key="tab.id"
          :label="tab.label"
          :class="[
            'tab-button',
            activeTab === tab.id ? 'tab-active' : 'tab-inactive'
          ]"
          :severity="activeTab === tab.id ? 'success' : 'secondary'"
          :outlined="activeTab !== tab.id"
          @click="selectTab(tab.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Tab {
  id: string;
  label: string;
  route?: string;
}

interface Props {
  tabs: Tab[];
  defaultActive?: string;
}

const props = withDefaults(defineProps<Props>(), {
  defaultActive: ''
});

const emit = defineEmits<{
  (e: 'tabChange', tabId: string): void
}>();

const activeTab = ref(props.defaultActive || props.tabs[0]?.id);

const selectTab = (tabId: string) => {
  activeTab.value = tabId;
  emit('tabChange', tabId);
  
  // Find tab with route
  const tab = props.tabs.find(t => t.id === tabId);
  if (tab?.route) {
    // Navigate to route (use Nuxt's navigateTo or Vue Router)
    navigateTo(tab.route);
    // console.log('Navigate to:', tab.route);
  }
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