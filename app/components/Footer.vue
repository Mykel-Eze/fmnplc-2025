<template>
  <footer id="footer" class="footer-main mt-auto">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <!-- Company Column -->
        <div>
          <h3 class="footer-heading">Company</h3>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.label">
              <a
                :href="link.href"
                class="footer-link text-sm transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Investors Column -->
        <div>
          <h3 class="footer-heading">Investors</h3>
          <ul class="space-y-3">
            <li v-for="link in investorLinks" :key="link.label">
              <a
                :href="link.href"
                class="footer-link text-sm transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Media Column -->
        <div>
          <h3 class="footer-heading">Media</h3>
          <ul class="space-y-3">
            <li v-for="link in mediaLinks" :key="link.label">
              <a
                :href="link.href"
                class="footer-link text-sm transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h3 class="footer-heading">Contact</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="mailto:info@fmnplc.com"
                class="footer-link text-sm flex items-center space-x-2 transition-colors"
              >
                <!-- <i class="pi pi-envelope"></i> -->
                <span>info@fmnplc.com</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+2347056891000"
                class="footer-link text-sm flex items-center space-x-2 transition-colors"
              >
                <!-- <i class="pi pi-phone"></i> -->
                <span>+234 (705) 689-1000</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+2347056892000"
                class="footer-link text-sm flex items-center space-x-2 transition-colors"
              >
                <!-- <i class="pi pi-phone"></i> -->
                <span>+234 (705) 689-2000</span>
              </a>
            </li>
          </ul>

          <!-- Social Links -->
          <div class="flex items-center space-x-4 mt-4">
            <a href="#linkedin" class="social-icon">
              <img src="@/assets/images/linkedin.svg" alt="linkedin">
            </a>
            <a href="#instagram" class="social-icon">
              <img src="@/assets/images/instagram.svg" alt="instagram">
            </a>
            <a href="#x" class="social-icon">
              <img src="@/assets/images/x.svg" alt="x">
            </a>
            <a href="#facebook" class="social-icon">
              <img src="@/assets/images/facebook.svg" alt="">
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <Divider class="mb-12 mt-10" />

      <!-- Bottom Section -->
      <div class="flex flex-col md:flex-row items-center justify-around space-y-6 lg:space-y-0">
        <!-- Logo and Address -->
        <div class="flex-shrink-0">
          <NuxtLink to="/">
            <img src="@/assets/images/fmn-black.png" alt="FMN Logo" class="footer-logo h-16 w-auto light-mode-img" />
            <img src="@/assets/images/fmn-white.png" alt="FMN Logo" class="footer-logo h-16 w-auto dark-mode-img" />
          </NuxtLink>
        </div>

        <div class="text-center">
          <p class="footer-text font-bold">Corporate HQ</p>
          <p class="footer-text text-sm">
            1 Golden Penny Place Wharf Road<br />
            Apapa, Lagos State
          </p>
        </div>

        <!-- CGRS Badge -->
        <div class="cgrs-badge">
          <img src="@/assets/images/CGRS-Badge.png" alt="cgrs-badge" class="max-w-[115px]">
        </div>
      </div>

      <!-- Final Bottom Bar -->
      <Divider class="mt-12" />
      
      <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pt-8">
        <!-- Language Selector -->
        <div class="language-dropdown-wrapper flex items-center space-x-0">
          <img src="@/assets/images/world.svg" alt="globe-icon" class="globe-icon">
          <Select
            v-model="selectedLanguage"
            :options="languages"
            optionLabel="name"
            optionValue="code"
            class="language-dropdown"
          />
        </div>

        <!-- Copyright -->
        <p class="footer-copyright text-sm text-center">
          © Flour Mill of Nigeria {{ new Date().getFullYear() }}. All rights reserved
        </p>

        <!-- Legal Links -->
        <div class="flex items-center space-x-4">
          <a
            href="#privacy"
            class="footer-link text-sm transition-colors"
          >
            Privacy Policy
          </a>
          <span class="footer-separator">•</span>
          <a
            href="#cookie"
            class="footer-link text-sm transition-colors"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

const selectedLanguage = ref('en');

const languages = [
  { name: 'English', code: 'en' },
  { name: 'French', code: 'fr' }
];

const companyLinks = [
  { label: 'About FMN', href: '#about' },
  { label: 'Management Team', href: '#management' },
  { label: 'Our Subsidiaries', href: '#subsidiaries' },
  { label: 'Careers', href: '#careers' }
];

const investorLinks = [
  { label: 'Annual Reports', href: '#reports' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Events', href: '#events' },
  { label: 'Policies', href: '#policies' }
];

const mediaLinks = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Press Release', href: '#press' }
];
</script>

<style src="@/assets/css/footer.css" scoped></style>

<style>
.language-dropdown .p-select-label {
  font-size: 12px;
}
.language-dropdown .p-dropdown-label {
  padding: 0.25rem 0.5rem;
  font-size: 10px;
}
.dark-mode .language-dropdown .p-dropdown-label {
  color: #9ca3af;
}
.dark-mode .p-divider {
  border-color: #374151;
}
.language-dropdown .p-select-dropdown-icon {
  width: 12px;
}
.globe-icon {
  width: 20px;
}
.p-select-option {
  font-size: 12px !important;
}
</style>
