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
          <div
            v-for="item in mainNavItems"
            :key="item.label"
            class="nav-item-wrapper relative"
          >
            <NuxtLink
              :to="item.href"
              :class="['nav-link px-4 py-2 text-[12px] font-medium transition-colors block', { 'active-parent': isParentActive(item.label) }]"
              @mouseenter="item.hasDropdown ? showDropdown(item.label) : null"
              @mouseleave="item.hasDropdown ? hideDropdown() : null"
            >
              {{ item.label }}
            </NuxtLink>
            <div v-if="item.hasDropdown && activeDropdown === item.label" class="triangle"></div>

            <!-- Sustainability Dropdown (positioned under link) -->
            <Transition name="dropdown">
              <div
                v-if="item.label === 'Sustainability' && activeDropdown === 'Sustainability'"
                @mouseenter="showDropdown('Sustainability')"
                @mouseleave="hideDropdown()"
                class="dropdown-menu absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[200px] border-t z-50"
              >
                <div class="dm-bg py-4 rounded-lg">
                  <div class="grid grid-cols-1">
                    <NuxtLink
                      v-for="sustItem in sustainabilityLinks"
                      :key="sustItem.label"
                      :to="sustItem.href"
                      class="sustainability-link py-3 transition-colors font-medium px-3 sm:px-4 lg:px-6"
                    >
                      {{ sustItem.label }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Transition>

            <!-- Media Dropdown (positioned under link) -->
            <Transition name="dropdown">
              <div
                v-if="item.label === 'Media' && activeDropdown === 'Media'"
                @mouseenter="showDropdown('Media')"
                @mouseleave="hideDropdown()"
                class="dropdown-menu absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[200px] border-t z-50"
              >
                <div class="dm-bg py-4 rounded-lg">
                  <div class="grid grid-cols-1">
                    <NuxtLink
                      v-for="mediaItem in mediaLinks"
                      :key="mediaItem.label"
                      :to="mediaItem.href"
                      class="media-link py-3 transition-colors font-medium px-3 sm:px-4 lg:px-6"
                    >
                      {{ mediaItem.label }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
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
        class="dropdown-menu vertical-dropdown-menu absolute left-0 right-0 border-t max-w-3xl mx-auto"
      >
        <div class="dm-bg max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 class="dropdown-title pry-color smbold-txt text-lg mb-6">Business Verticals</h3>
          <div class="grid grid-cols-2 gap-6">
            <NuxtLink
              v-for="vertical in verticals"
              :key="vertical.name"
              :to="vertical.href"
              target="_blank" rel="noopener noreferrer"
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
                <p class="vertical-description mt-1">{{ vertical.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>


    <!-- Mobile Sidebar -->
    <Sidebar v-model:visible="mobileMenuOpen" position="right" class="mobile-sidebar w-80">
      <template #header>
        <NuxtLink to="/" class="flex items-center justify-between">
          <img src="@/assets/images/fmn-black.png" alt="FMN Logo" class="h-8 w-auto logo-img light-mode-img" />
          <img src="@/assets/images/fmn-white.png" alt="FMN Logo" class="h-8 w-auto logo-img dark-mode-img" />
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
            class="w-full !justify-between mobile-nav-button"
            @click="toggleMobileDropdown(item.label)"
          />
          <NuxtLink
            v-else
            :to="item.href"
            class="mobile-nav-link block px-4 py-3 font-medium rounded-lg"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Mobile Submenu for FMN Verticals -->
          <Transition name="expand">
            <div v-if="item.label === 'FMN Verticals' && item.hasDropdown && mobileDropdownOpen === item.label" class="mt-2 ml-2 space-y-2">
              <NuxtLink
                v-for="vertical in verticals"
                :key="vertical.name"
                :to="vertical.href"
                class="mobile-submenu-link flex items-center space-x-3 px-4 py-3 text-sm rounded-lg"
                @click="mobileMenuOpen = false"
                target="_blank" rel="noopener noreferrer"
              >
                <i :class="vertical.icon" class="text-lg text-green-700"></i>
                <span>{{ vertical.name }}</span>
              </NuxtLink>
            </div>
          </Transition>

          <!-- Mobile Submenu for Sustainability -->
          <Transition name="expand">
            <div v-if="item.label === 'Sustainability' && item.hasDropdown && mobileDropdownOpen === item.label" class="mt-2 ml-2 space-y-2">
              <NuxtLink
                v-for="sustItem in sustainabilityLinks"
                :key="sustItem.label"
                :to="sustItem.href"
                class="mobile-submenu-link block px-4 py-3 text-sm rounded-lg"
                @click="mobileMenuOpen = false"
              >
                {{ sustItem.label }}
              </NuxtLink>
            </div>
          </Transition>

          <!-- Mobile Submenu for Media -->
          <Transition name="expand">
            <div v-if="item.label === 'Media' && item.hasDropdown && mobileDropdownOpen === item.label" class="mt-2 ml-2 space-y-2">
              <NuxtLink
                v-for="mediaItem in mediaLinks"
                :key="mediaItem.label"
                :to="mediaItem.href"
                class="mobile-submenu-link block px-4 py-3 text-sm rounded-lg"
                @click="mobileMenuOpen = false"
              >
                {{ mediaItem.label }}
              </NuxtLink>
            </div>
          </Transition>
        </div>
      </nav>

      <!-- Contact Section -->
      <div class="border-y sidebar-border pt-4 pb-6 px-4">
        <h3 class="contact-title font-semibold mb-3 text-base">Contact Us</h3>
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
      </div>
      <div class="p-4">
        <!-- Social Links -->
        <div class="mt-2">
          <h3 class="social-title font-semibold mb-3 text-base text-center">Follow Us</h3>
          <div class="flex space-x-3 justify-center">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              class="w-10 h-10 flex items-center justify-center rounded-lg pry-bg text-white hover:bg-green-800 transition-colors"
              :aria-label="social.name"
              target="_blank" rel="noopener noreferrer"
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
const route = useRoute();
const mobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);
const mobileDropdownOpen = ref<string | null>(null);
const isDarkMode = ref(false);

// Check if parent nav item should be active based on current route
const isParentActive = (label: string) => {
  const path = route.path.toLowerCase();

  if (label === 'Sustainability') {
    return path.startsWith('/sustainability');
  }

  if (label === 'Media') {
    return path.startsWith('/gallery') || path.startsWith('/blog') || path.startsWith('/press');
  }

  return false;
};

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
  { label: 'Careers', href: '/careers', hasDropdown: false },
  { label: 'Media', href: '#media', hasDropdown: true },
  { label: 'Contact', href: '/contact', hasDropdown: false },
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

const mediaLinks = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Press Release', href: '/press' }
];

const socialLinks = [
  { name: 'LinkedIn', icon: 'pi pi-linkedin', href: 'https://www.linkedin.com/company/the-fmn-group/' },
  { name: 'Instagram', icon: 'pi pi-instagram', href: 'https://www.instagram.com/thefmngroup/' },
  { name: 'Twitter', icon: 'pi pi-twitter', href: 'https://x.com/theFMNGroup' },
  { name: 'Facebook', icon: 'pi pi-facebook', href: 'https://web.facebook.com/FMNGroup' },
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

<style>
/* Mobile Sidebar Dark Mode */
.p-drawer.mobile-sidebar {
    background-color: white;
}
.dark-mode .p-drawer.mobile-sidebar {
    background-color: rgba(1, 15, 5, 1);
}
.p-drawer.mobile-sidebar .p-inputtext {
    background-color: rgba(1, 15, 5, 0.1);
    color: #111827;
    border-radius: 50px;
    border: none;
}
.dark-mode .p-drawer.mobile-sidebar .p-inputtext {
    background-color: rgba(243, 244, 246, 0.1);
    color: #f3f4f6;
}
.p-drawer.mobile-sidebar .p-button-secondary {
  background-color: rgba(1, 15, 5, 0.05);
  border: none;
}
.p-drawer.mobile-sidebar .p-button-secondary span {
  color: #111827;
}
.dark-mode .p-drawer.mobile-sidebar .p-button-secondary {
  background-color: rgba(243, 244, 246, 0.1);
}
.dark-mode .p-drawer.mobile-sidebar .p-button-secondary span {
  color: #f3f4f6;
}

/* PrimeVue Sidebar component internal styling */
.dark-mode .p-sidebar {
    background-color: rgba(1, 15, 5, 1) !important;
    color: #f3f4f6;
}

.dark-mode .p-sidebar-header {
    background-color: rgba(1, 15, 5, 1);
    border-bottom-color: #374151;
}

.dark-mode .p-sidebar-content {
    background-color: rgba(1, 15, 5, 1);
}

.dark-mode .p-sidebar-close {
    color: #f3f4f6;
}

.dark-mode .p-sidebar-close:hover {
    background-color: #374151;
}

.mobile-nav-button .p-button-icon {
    color: #111827;
    font-size: 14px;
}

/* Mobile nav button text color */
.dark-mode .mobile-nav-button .p-button-label {
    color: #f3f4f6;
}

.dark-mode .mobile-nav-button .p-button-icon {
    color: #f3f4f6;
}

.media-link {
    color: #111827;
}
.media-link:hover {
    background-color: #f9fafb;
    color: #15803d;
}
.dark-mode .media-link {
    color: #f3f4f6;
}
.dark-mode .media-link:hover {
    background-color: #374151;
    color: #10b981;
}
</style>