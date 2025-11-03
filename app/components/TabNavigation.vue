<template>
  <div class="tab-navigation-wrapper py-8 px-4 sm:px-6 lg:px-8">
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
.tab-navigation-wrapper {
  background-color: #f9fafb;
}
.tab-button {
  font-weight: 600;
  transition: all 0.3s ease;
}
.tab-active {
  background-color: #16a34a !important;
  border-color: #16a34a !important;
  color: #ffffff !important;
}
.tab-inactive {
  background-color: transparent !important;
  border-color: #d1d5db !important;
  color: #6b7280 !important;
}
.tab-inactive:hover {
  background-color: #f3f4f6 !important;
  border-color: #16a34a !important;
  color: #16a34a !important;
}

/* Dark Mode */
.dark-mode .tab-navigation-wrapper {
  background-color: #1f2937;
}
.dark-mode .tab-inactive {
  border-color: #4b5563 !important;
  color: #d1d5db !important;
}
.dark-mode .tab-inactive:hover {
  background-color: #374151 !important;
  border-color: #10b981 !important;
  color: #10b981 !important;
}
</style>