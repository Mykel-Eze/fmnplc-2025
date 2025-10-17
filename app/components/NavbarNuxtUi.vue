<template>
  <UContainer>
    <div class="border-b border-gray-200 dark:border-gray-800">
      <div class="flex items-center justify-between h-16 px-4">
        <!-- Logo/Brand -->
        <div class="flex items-center gap-4">
          <NuxtLink to="/" class="flex items-center gap-2">
            <img src="/fmn-icon.png" alt="Logo" class="h-8 w-8" />
            <span class="text-xl font-bold text-gray-900 dark:text-white">FMNPLC</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6">
          <UButton
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            variant="ghost"
            color="primary"
            size="lg"
          >
            {{ item.label }}
          </UButton>
        </nav>

        <!-- Right Section: Dark Mode + Actions -->
        <div class="flex items-center gap-3">
          <!-- Dark Mode Toggle -->
          <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="primary"
            variant="ghost"
            aria-label="Toggle Dark Mode"
            @click="toggleDarkMode"
          />

          <!-- User Dropdown (Desktop) -->
          <UDropdown 
            :items="userMenuItems" 
            :popper="{ placement: 'bottom-end' }"
            class="hidden md:block"
          >
            <UButton
              icon="i-heroicons-user-circle-20-solid"
              color="primary"
              label="Account"
            />
          </UDropdown>

          <!-- Mobile Menu Button -->
          <UButton
            icon="i-heroicons-bars-3-20-solid"
            color="primary"
            variant="ghost"
            class="md:hidden"
            @click="isMobileMenuOpen = true"
          />
        </div>
      </div>
    </div>

    <!-- Mobile Slideover Menu -->
    <USlideover v-model="isMobileMenuOpen" side="right">
      <div class="p-4 flex flex-col gap-4">
        <!-- Close Button -->
        <div class="flex justify-between items-center mb-4">
          <span class="text-xl font-bold">Menu</span>
          <UButton
            icon="i-heroicons-x-mark-20-solid"
            color="primary"
            variant="ghost"
            @click="isMobileMenuOpen = false"
          />
        </div>

        <!-- Mobile Navigation Links -->
        <div class="flex flex-col gap-2">
          <UButton
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            variant="ghost"
            color="primary"
            size="xl"
            block
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </UButton>
        </div>

        <UDivider />

        <!-- User Menu Items (Mobile) -->
        <div class="flex flex-col gap-2">
          <UButton
            v-for="item in userMenuItems"
            :key="item.label"
            :icon="item.icon"
            :label="item.label"
            variant="ghost"
            color="primary"
            size="xl"
            block
            @click="handleUserMenuClick(item)"
          />
        </div>
      </div>
    </USlideover>
  </UContainer>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isMobileMenuOpen = ref(false)

// Check if dark mode is enabled
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

// Toggle dark mode
const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// Navigation items
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

// User dropdown menu items
const userMenuItems = [
  [
    {
      label: 'Profile',
      icon: 'i-heroicons-user-20-solid',
      click: () => navigateTo('/profile')
    },
    {
      label: 'Settings',
      icon: 'i-heroicons-cog-6-tooth-20-solid',
      click: () => navigateTo('/settings')
    }
  ],
  [
    {
      label: 'Documentation',
      icon: 'i-heroicons-book-open-20-solid',
      click: () => navigateTo('/docs')
    }
  ],
  [
    {
      label: 'Sign Out',
      icon: 'i-heroicons-arrow-right-on-rectangle-20-solid',
      click: () => console.log('Sign out')
    }
  ]
]

// Handle user menu clicks for mobile
const handleUserMenuClick = (item: any) => {
  isMobileMenuOpen.value = false
  if (item.click) {
    item.click()
  }
}
</script>