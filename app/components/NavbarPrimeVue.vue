<template>
  <div>
    <!-- Desktop Navbar -->
    <Menubar :model="menuItems" class="border-round-none">
      <template #start>
        <NuxtLink to="/" class="flex items-center gap-2 mr-6">
          <img src="/fmn-icon.png" alt="Logo" class="h-8" />
          <span class="text-xl font-bold">FMNPLC</span>
        </NuxtLink>
      </template>

      <template #item="{ item, props }">
        <NuxtLink v-if="item.route" :to="item.route" class="flex items-center gap-2 px-3 py-2" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
        </NuxtLink>
        <a v-else :href="item.url" :target="item.target" class="flex items-center gap-2 px-3 py-2" v-bind="props.action">
          <span :class="item.icon" />
          <span>{{ item.label }}</span>
          <span v-if="item.items" class="pi pi-angle-down ml-auto" />
        </a>
      </template>

      <template #end>
        <div class="flex items-center gap-2">
          <!-- Dark Mode Toggle -->
          <Button
            :icon="isDarkMode ? 'pi pi-moon' : 'pi pi-sun'"
            @click="toggleDarkMode"
            severity="secondary"
            text
            rounded
            aria-label="Toggle Dark Mode"
          />

          <!-- User Menu -->
          <Button
            type="button"
            icon="pi pi-user"
            label="Account"
            @click="toggleUserMenu"
            aria-haspopup="true"
            aria-controls="user-menu"
          />
          <Menu id="user-menu" ref="userMenu" :model="userMenuItems" :popup="true" />
        </div>
      </template>
    </Menubar>

    <!-- Mobile Sidebar -->
    <Sidebar v-model:visible="isMobileSidebarVisible" position="right">
      <template #header>
        <div class="flex items-center gap-2">
          <img src="/fmn-icon.png" alt="Logo" class="h-8" />
          <span class="text-xl font-bold">Menu</span>
        </div>
      </template>

      <div class="flex flex-col gap-3">
        <Button
          v-for="item in flatMenuItems"
          :key="item.label"
          :label="item.label"
          :icon="item.icon"
          @click="navigateAndClose(item.route)"
          text
          class="justify-start"
        />

        <Divider />

        <!-- User Menu in Mobile -->
        <div class="flex flex-col gap-2">
          <Button
            v-for="group in userMenuItems"
            :key="group.label"
            :label="group.label"
            :icon="group.icon"
            @click="handleMobileUserMenu(group)"
            text
            class="justify-start"
          />
        </div>
      </div>
    </Sidebar>

    <!-- Mobile Bottom Bar (optional) -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-surface-0 dark:bg-surface-900 border-t border-surface-200 dark:border-surface-700 z-50">
      <div class="flex justify-around items-center h-16">
        <Button icon="pi pi-home" @click="navigateTo('/')" text />
        <Button icon="pi pi-search" text />
        <Button icon="pi pi-bars" @click="isMobileSidebarVisible = true" text />
        <Button :icon="isDarkMode ? 'pi pi-moon' : 'pi pi-sun'" @click="toggleDarkMode" text color="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const userMenu = ref()
const isMobileSidebarVisible = ref(false)
const isDarkMode = ref(false)

// Initialize dark mode from localStorage or system preference
onMounted(() => {
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode !== null) {
    isDarkMode.value = savedMode === 'true'
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyDarkMode()
})

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', isDarkMode.value.toString())
  applyDarkMode()
}

// Apply dark mode to document
const applyDarkMode = () => {
  const element = document.documentElement
  if (isDarkMode.value) {
    element.classList.add('dark-mode')
  } else {
    element.classList.remove('dark-mode')
  }
}

// Toggle user menu
const toggleUserMenu = (event: Event) => {
  userMenu.value.toggle(event)
}

// Menu items
const menuItems = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Features',
    icon: 'pi pi-star',
    items: [
      {
        label: 'Feature 1',
        icon: 'pi pi-bolt',
        route: '/features/1'
      },
      {
        label: 'Feature 2',
        icon: 'pi pi-server',
        route: '/features/2'
      },
      {
        label: 'Feature 3',
        icon: 'pi pi-cloud',
        route: '/features/3'
      }
    ]
  },
  {
    label: 'Pricing',
    icon: 'pi pi-dollar',
    route: '/pricing'
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle',
    route: '/about'
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    route: '/contact'
  }
])

// User menu items
const userMenuItems = ref([
  [
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => navigateTo('/profile')
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      command: () => navigateTo('/settings')
    }
  ],
  [
    {
      label: 'Documentation',
      icon: 'pi pi-book',
      command: () => navigateTo('/docs')
    },
    {
      label: 'Help',
      icon: 'pi pi-question-circle',
      command: () => navigateTo('/help')
    }
  ],
  [
    {
      label: 'Sign Out',
      icon: 'pi pi-sign-out',
      command: () => console.log('Sign out clicked')
    }
  ]
])

// Flatten menu items for mobile (remove nested items)
const flatMenuItems = computed(() => {
  const items: any[] = []
  menuItems.value.forEach(item => {
    if (item.items) {
      items.push(...item.items)
    } else {
      items.push(item)
    }
  })
  return items
})

// Navigate and close mobile sidebar
const navigateAndClose = (route?: string) => {
  if (route) {
    navigateTo(route)
  }
  isMobileSidebarVisible.value = false
}

// Handle mobile user menu clicks
const handleMobileUserMenu = (item: any) => {
  if (item.command) {
    item.command()
  }
  isMobileSidebarVisible.value = false
}
</script>

<style scoped>
/* Ensure mobile bottom bar doesn't cover content */
@media (max-width: 768px) {
  body {
    padding-bottom: 4rem;
  }
}
</style>