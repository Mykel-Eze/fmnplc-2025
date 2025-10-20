<template>
  <section id="subscribe-to-newsletter" class="newsletter-section py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="newsletter-card rounded-3xl p-8 md:p-12 shadow-2xl">
        <!-- Content -->
        <div class="text-center mb-8">
          <h2 class="section-main-title newsletter-title text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p class="section-description newsletter-description text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter for the latest updates on FMN's business activities, 
            sustainability initiatives, and investment opportunities.
          </p>
        </div>

        <!-- Subscription Form -->
        <div class="max-w-xl mx-auto">
          <div v-if="!isSubmitted" class="space-y-4">
            <div class="relative">
              <InputText
                v-model="email"
                type="email"
                placeholder="Email Address"
                :class="['w-full', emailError ? 'p-invalid' : '']"
                @input="emailError = ''"
                @keyup.enter="subscribe"
              />
              <Transition name="fade">
                <InlineMessage v-if="emailError" severity="error" class="mt-2 w-full">
                  {{ emailError }}
                </InlineMessage>
              </Transition>
            </div>

            <Button
              label="Subscribe"
              :loading="isLoading"
              loadingIcon="pi pi-spin pi-spinner"
              :disabled="isLoading"
              size="large"
              class="w-full subscribe-button"
              @click="subscribe"
            />

            <!-- Privacy Notice -->
            <p class="privacy-notice text-xs text-center mt-4 pb-2">
              By subscribing, you agree to our 
              <a href="#privacy" class="privacy-link underline">
                Privacy Policy
              </a>
              and consent to receive updates from FMN.
            </p>
          </div>

          <!-- Success Message -->
          <Transition name="scale">
            <div v-if="isSubmitted" class="text-center py-8">
              <div class="success-icon-wrapper w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="pi pi-check text-3xl text-white"></i>
              </div>
              <h3 class="success-title text-2xl font-bold mb-2">
                Thank You for Subscribing!
              </h3>
              <p class="success-message mb-6">
                You've successfully subscribed to our newsletter. Check your email for confirmation.
              </p>
              <Button
                label="Subscribe another email"
                link
                severity="success"
                @click="resetForm"
              />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InlineMessage from 'primevue/inlinemessage';

const email = ref('');
const emailError = ref('');
const isLoading = ref(false);
const isSubmitted = ref(false);

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const subscribe = async () => {
  // Reset error
  emailError.value = '';

  // Validate email
  if (!email.value) {
    emailError.value = 'Please enter your email address';
    return;
  }

  if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address';
    return;
  }

  // Simulate API call
  isLoading.value = true;

  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would typically make an API call to your backend
    console.log(`Subscribing ${email.value}`);

    // Show success state
    isSubmitted.value = true;
  } catch (error) {
    emailError.value = 'Something went wrong. Please try again.';
    console.error('Subscription error:', error);
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  email.value = '';
  emailError.value = '';
  isSubmitted.value = false;
};
</script>

<style src="@/assets/css/newsletter.css" scoped></style>