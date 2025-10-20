<template>
  <footer id="footer" class="footer-main mt-auto">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Column -->
        <div>
          <h3 class="footer-heading font-semibold text-lg mb-4">Company</h3>
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
          <h3 class="footer-heading font-semibold text-lg mb-4">Investors</h3>
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
          <h3 class="footer-heading font-semibold text-lg mb-4">Media</h3>
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
          <h3 class="footer-heading font-semibold text-lg mb-4">Contact</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="mailto:info@fmnplc.com"
                class="footer-link text-sm flex items-center space-x-2 transition-colors"
              >
                <i class="pi pi-envelope"></i>
                <span>info@fmnplc.com</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+2347056891000"
                class="footer-link text-sm flex items-center space-x-2 transition-colors"
              >
                <i class="pi pi-phone"></i>
                <span>+234 (705) 689-1000</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+2347056892000"
                class="footer-link text-sm flex items-center space-x-2 transition-colors"
              >
                <i class="pi pi-phone"></i>
                <span>+234 (705) 689-2000</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <Divider />

      <!-- Bottom Section -->
      <div class="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
        <!-- Logo and Address -->
        <div class="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8">
          <div class="flex-shrink-0">
            <img src="@/assets/images/fmn-black.png" alt="FMN Logo" class="footer-logo h-16 w-auto light-mode-img" />
            <img src="@/assets/images/fmn-white.png" alt="FMN Logo" class="footer-logo h-16 w-auto dark-mode-img" />
          </div>
          <div class="text-center lg:text-left">
            <h4 class="footer-heading font-semibold mb-2">Corporate HQ</h4>
            <p class="footer-text text-sm">
              1 Golden Penny Place Wharf Road<br />
              Apapa, Lagos State
            </p>
          </div>
        </div>

        <!-- Social Links -->
        <div class="flex items-center space-x-4">
          <Button
            v-for="social in socialLinks"
            :key="social.name"
            :icon="social.icon"
            :aria-label="social.name"
            :href="social.href"
            as="a"
            rounded
            class="social-button"
            severity="success"
          />
        </div>
      </div>

      <!-- Final Bottom Bar -->
      <Divider class="mt-8" />
      
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
          © Flour Mill of Nigeria 2025. All rights reserved
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
import { ref } from 'vue';
import Divider from 'primevue/divider';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';

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

const socialLinks = [
  { name: 'LinkedIn', icon: 'pi pi-linkedin', href: '#linkedin' },
  { name: 'Instagram', icon: 'pi pi-instagram', href: '#instagram' },
  { name: 'Twitter', icon: 'pi pi-twitter', href: '#twitter' },
  { name: 'Facebook', icon: 'pi pi-facebook', href: '#facebook' }
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
