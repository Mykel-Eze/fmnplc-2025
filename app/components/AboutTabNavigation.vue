<template>
  <TabNavigation
    :tabs="tabs"
    :default-active="defaultActive"
    @tab-change="handleTabChange"
  />
</template>

<script lang="ts" setup>

const tabs = [
  { id: 'about', label: 'About FMN', route: '/about' },
  { id: 'history', label: 'History & Heritage', route: '/about/history' },
  { id: 'vision', label: 'Vision, Mission & Founder', route: '/about/vision' },
  { id: 'board', label: 'Board of Directors', route: '/about/board' },
  { id: 'management', label: 'Management Team', route: '/about/management' }
];

interface Props {
  defaultActive?: string;
}

// destructure the prop so `defaultActive` is available in the template
const { defaultActive } = withDefaults(defineProps<Props>(), {
  defaultActive: ''
});

// Re-emit the child's tab change to the parent page so the page can react
const emit = defineEmits<{
  (e: 'tab-change', tabId: string): void
}>();

const handleTabChange = (tabId: string) => {
  emit('tab-change', tabId);
};

</script>