<template>
  <header id="header" class="navbar-header shadow-sm border-b sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img src="@/assets/images/fmn-black.png" alt="FMN Logo" class="h-10 w-auto logo-img light-mode-img" />
          <img src="@/assets/images/fmn-white.png" alt="FMN Logo" class="h-10 w-auto logo-img dark-mode-img" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="!hidden lg:!flex items-center space-x-1">
          <NuxtLink
            v-for="item in mainNavItems"
            :key="item.label"
            :to="item.href"
            class="nav-link px-4 py-2 text-[12px] font-medium transition-colors"
            @mouseenter="item.hasDropdown ? showDropdown(item.label) : null"
            @mouseleave="item.hasDropdown ? hideDropdown() : null"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Desktop Actions -->
        <div class="!hidden lg:!flex items-center space-x-4">
          <Button
            icon="pi pi-search"
            text
            rounded
            severity="secondary"
            @click="toggleSearch"
            aria-label="Search"
          />
          <Button
            :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'"
            text
            rounded
            severity="secondary"
            @click="toggleDarkMode"
            aria-label="Toggle theme"
          />
        </div>

        <!-- Mobile Menu Button -->
        <Button
          icon="pi pi-bars"
          text
          rounded
          severity="secondary"
          class="lg:!hidden"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        />
      </div>
    </div>

    <!-- FMN Verticals Mega Menu (Desktop) -->
    <Transition name="dropdown">
      <div
        v-if="activeDropdown === 'FMN Verticals'"
        @mouseenter="showDropdown('FMN Verticals')"
        @mouseleave="hideDropdown()"
        class="dropdown-menu absolute left-0 right-0 shadow-lg border-t"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 class="dropdown-title text-green-700 font-semibold text-lg mb-6">Business Verticals</h3>
          <div class="grid grid-cols-2 gap-6">
            <NuxtLink
              v-for="vertical in verticals"
              :key="vertical.name"
              :to="vertical.href"
              class="vertical-card flex items-start space-x-4 p-4 rounded-lg transition-colors group"
            >
              <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
                <i :class="vertical.icon" class="text-2xl text-green-700 group-hover:text-white"></i>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center space-x-2">
                  <h4 class="vertical-name font-semibold group-hover:text-green-700">
                    {{ vertical.name }}
                  </h4>
                  <i class="pi pi-arrow-right text-sm text-gray-400 group-hover:text-green-700"></i>
                </div>
                <p class="vertical-description text-sm mt-1">{{ vertical.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Sustainability Dropdown Menu (Desktop) -->
    <Transition name="dropdown">
      <div
        v-if="activeDropdown === 'Sustainability'"
        @mouseenter="showDropdown('Sustainability')"
        @mouseleave="hideDropdown()"
        class="dropdown-menu absolute left-0 right-0 shadow-lg border-t"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="grid grid-cols-1 gap-3 max-w-xs">
            <NuxtLink
              v-for="item in sustainabilityLinks"
              :key="item.label"
              :to="item.href"
              class="sustainability-link px-4 py-3 rounded-lg transition-colors font-medium"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Mobile Sidebar -->
    <Sidebar v-model:visible="mobileMenuOpen" position="right" class="mobile-sidebar w-80">
      <template #header>
        <NuxtLink to="/" class="flex items-center justify-between w-full">
          <img src="@/assets/images/fmn-black.png" alt="FMN Logo" class="h-8 w-auto logo-img light-mode-img" />
          <img src="@/assets/images/fmn-black.png" alt="FMN Logo" class="h-8 w-auto logo-img dark-mode-img" />
        </NuxtLink>
      </template>

      <!-- Search & Theme Toggle -->
      <div class="flex items-center space-x-2 p-4 border-b sidebar-border">
        <Button
          :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'"
          rounded
          severity="secondary"
          @click="toggleDarkMode"
        />
        <div class="flex-1 relative">
          <InputText
            type="text"
            placeholder="Search"
            class="w-full"
          />
        </div>
      </div>

      <!-- Navigation -->
      <nav class="p-4">
        <div v-for="item in mainNavItems" :key="item.label" class="mb-2">
          <Button
            v-if="item.hasDropdown"
            :label="item.label"
            :icon="mobileDropdownOpen === item.label ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"
            text
            class="w-full justify-between mobile-nav-button"
            @click="toggleMobileDropdown(item.label)"
          />
          <NuxtLink
            v-else
            :to="item.href"
            class="mobile-nav-link block px-4 py-3 font-medium rounded-lg"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Mobile Submenu for FMN Verticals -->
          <Transition name="expand">
            <div v-if="item.label === 'FMN Verticals' && item.hasDropdown && mobileDropdownOpen === item.label" class="mt-2 ml-4 space-y-2">
              <NuxtLink
                v-for="vertical in verticals"
                :key="vertical.name"
                :to="vertical.href"
                class="mobile-submenu-link flex items-center space-x-3 px-4 py-3 text-sm rounded-lg"
              >
                <i :class="vertical.icon" class="text-lg text-green-700"></i>
                <span>{{ vertical.name }}</span>
              </NuxtLink>
            </div>
          </Transition>

          <!-- Mobile Submenu for Sustainability -->
          <Transition name="expand">
            <div v-if="item.label === 'Sustainability' && item.hasDropdown && mobileDropdownOpen === item.label" class="mt-2 ml-4 space-y-2">
              <NuxtLink
                v-for="sustItem in sustainabilityLinks"
                :key="sustItem.label"
                :to="sustItem.href"
                class="mobile-submenu-link block px-4 py-3 text-sm rounded-lg"
              >
                {{ sustItem.label }}
              </NuxtLink>
            </div>
          </Transition>
        </div>
      </nav>

      <!-- Contact Section -->
      <div class="border-t sidebar-border p-4">
        <h3 class="contact-title font-semibold mb-3">Contact Us</h3>
        <div class="space-y-2">
          <a href="tel:+2347056891000" class="contact-link flex items-center space-x-3 text-sm">
            <i class="pi pi-phone pry-color"></i>
            <span>+234 (705) 689-1000</span>
          </a>
          <a href="tel:+2347056892000" class="contact-link flex items-center space-x-3 text-sm">
            <i class="pi pi-phone pry-color"></i>
            <span>+234 (705) 689-2000</span>
          </a>
          <a href="mailto:info@fmnplc.com" class="contact-link flex items-center space-x-3 text-sm">
            <i class="pi pi-envelope pry-color"></i>
            <span>info@fmnplc.com</span>
          </a>
        </div>

        <!-- Social Links -->
        <div class="mt-4">
          <h4 class="social-title font-semibold mb-3 text-sm">Follow Us</h4>
          <div class="flex space-x-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              class="w-10 h-10 flex items-center justify-center rounded-lg pry-bg text-white hover:bg-green-800 transition-colors"
              :aria-label="social.name"
            >
              <i :class="social.icon" class="text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </Sidebar>
  </header>
</template>

<script lang="ts" setup>
const mobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);
const mobileDropdownOpen = ref<string | null>(null);
const isDarkMode = ref(false);

// Initialize dark mode from localStorage or system preference
onMounted(() => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode !== null) {
    isDarkMode.value = savedMode === 'true';
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  applyDarkMode();
});

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('darkMode', isDarkMode.value.toString());
  applyDarkMode();
};

// Apply dark mode to document
const applyDarkMode = () => {
  const element = document.documentElement;
  if (isDarkMode.value) {
    element.classList.add('dark-mode');
  } else {
    element.classList.remove('dark-mode');
  }
};

const mainNavItems = [
  { label: 'Home', href: '/', hasDropdown: false },
  { label: 'About', href: '/about', hasDropdown: false },
  { label: 'FMN Verticals', href: '#verticals', hasDropdown: true },
  { label: 'Sustainability', href: '#sustainability', hasDropdown: true },
  { label: 'CSR', href: '/csr', hasDropdown: false },
  { label: 'Investors', href: '/investor-relations', hasDropdown: false },
  { label: 'Latest News', href: '#news', hasDropdown: false },
  { label: 'Careers', href: '#careers', hasDropdown: false },
];

const verticals = [
  {
    name: 'Golden Penny Foods',
    description: 'Manufacturer of flour, pasta, noodles, and other consumer food products',
    icon: 'pi pi-building',
    href: 'https://www.fmnfoods.com/'
  },
  {
    name: 'FMN Agro',
    description: 'Supporting local farmers with agricultural inputs, technical assistance',
    icon: 'pi pi-chart-line',
    href: 'https://www.fmnagro.com/'
  },
  {
    name: 'Golden Sugar Company',
    description: 'Producing high-quality refined sugar while promoting sustainable sugar cultivation',
    icon: 'pi pi-building',
    href: 'https://goldensugarng.com/'
  },
  {
    name: 'BAGCO Packing Solutions',
    description: 'Manufacturing innovative packaging solutions for products',
    icon: 'pi pi-box',
    href: 'https://bagco-ng.com/'
  },
  {
    name: 'FMN Infrastructure',
    description: 'Apapa Bulk Terminal: Operating state-of-the-art port facilities',
    icon: 'pi pi-building',
    href: 'https://apapabulk.com/'
  },
  {
    name: 'FMN Holdings',
    description: 'FMN HoldCo: Parent company overseeing all FMN business verticals',
    icon: 'pi pi-chart-bar',
    href: '#holdings'
  },
];

const sustainabilityLinks = [
  { label: 'Purpose', href: '/sustainability/purpose' },
  { label: 'Our Approach', href: '/sustainability/approach' },
  { label: 'Priority Areas', href: '/sustainability/priority-areas' },
  { label: 'Reporting', href: '/sustainability/reporting' },
  { label: 'Events', href: '/sustainability/events' }
];

const socialLinks = [
  { name: 'LinkedIn', icon: 'pi pi-linkedin', href: '#' },
  { name: 'Instagram', icon: 'pi pi-instagram', href: '#' },
  { name: 'Twitter', icon: 'pi pi-twitter', href: '#' },
  { name: 'Facebook', icon: 'pi pi-facebook', href: '#' },
];

let dropdownTimeout: ReturnType<typeof setTimeout>;

const showDropdown = (label: string) => {
  clearTimeout(dropdownTimeout);
  activeDropdown.value = label;
};

const hideDropdown = () => {
  dropdownTimeout = setTimeout(() => {
    activeDropdown.value = null;
  }, 100);
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const toggleMobileDropdown = (label: string) => {
  mobileDropdownOpen.value = mobileDropdownOpen.value === label ? null : label;
};

const toggleSearch = () => {
  // Implement search functionality
  console.log('Toggle search');
};
</script>

<style src="@/assets/css/navbar.css" scoped></style>