<template>
    <section class="my-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="contact-container pry-bg">
                <!-- Left Side - Green Background -->
                <div class="contact-left">
                    <div class="contact-text">
                        <h2 class="section-title-2 max-w-[535px] lg:max-w-[435px]">
                            Have an inquiry? <br /> <br />
                            Reach out to us and discover more about what we do.
                        </h2>
                    </div>
                </div>

                <!-- Right Side - Contact Form -->
                <div class="contact-right">
                    <div class="contact-form-wrapper">
                        <h2 class="form-title">Leave us a message</h2>

                        <form @submit.prevent="handleSubmit" class="contact-form">
                            <!-- First Name and Last Name -->
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="firstName" class="form-label">First Name</label>
                                    <InputText
                                        id="firstName"
                                        v-model="formData.firstName"
                                        placeholder="What is your first name?"
                                        :class="{ 'p-invalid': submitted && !formData.firstName }"
                                        class="form-input"
                                    />
                                    <small v-if="submitted && !formData.firstName" class="p-error">
                                        First name is required.
                                    </small>
                                </div>

                            <div class="form-group">
                                <label for="lastName" class="form-label">Last Name</label>
                                <InputText
                                    id="lastName"
                                    v-model="formData.lastName"
                                    placeholder="What is your last name?"
                                    :class="{ 'p-invalid': submitted && !formData.lastName }"
                                    class="form-input"
                                />
                                <small v-if="submitted && !formData.lastName" class="p-error">
                                    Last name is required.
                                </small>
                            </div>
                            </div>

                            <!-- Email Address -->
                            <div class="form-group">
                                <label for="email" class="form-label">Email Address</label>
                                <InputText
                                    id="email"
                                    v-model="formData.email"
                                    type="email"
                                    placeholder="Enter your email address so we can contact you"
                                    :class="{ 'p-invalid': submitted && !isValidEmail }"
                                    class="form-input"
                                />
                                <small v-if="submitted && !formData.email" class="p-error">
                                    Email address is required.
                                </small>
                                <small v-else-if="submitted && formData.email && !isValidEmail" class="p-error">
                                    Please enter a valid email address.
                                </small>
                            </div>

                            <!-- Inquiry Type -->
                            <div class="form-group">
                                <label for="inquiryType" class="form-label">Inquiry Type</label>
                                <Select
                                    id="inquiryType"
                                    v-model="formData.inquiryType"
                                    :options="inquiryTypes"
                                    placeholder="What is your inquiry about?"
                                    :class="{ 'p-invalid': submitted && !formData.inquiryType }"
                                    class="form-input w-full"
                                />
                                <small v-if="submitted && !formData.inquiryType" class="p-error">
                                    Please select an inquiry type.
                                </small>
                            </div>

                            <!-- Inquiry Description -->
                            <div class="form-group">
                                <label for="description" class="form-label">Inquiry Description (Message)</label>
                                <Textarea
                                    id="description"
                                    v-model="formData.description"
                                    rows="5"
                                    placeholder="Describe inquiry"
                                    :class="{ 'p-invalid': submitted && !formData.description }"
                                    class="form-input"
                                />
                                <small v-if="submitted && !formData.description" class="p-error">
                                    Message is required.
                                </small>
                            </div>

                            <!-- Consent Checkbox -->
                            <div class="consent-group">
                                <Checkbox
                                    v-model="formData.consent"
                                    :binary="true"
                                    inputId="consent"
                                    :class="{ 'p-invalid': submitted && !formData.consent }"
                                />
                                <label for="consent" class="consent-label">
                                    I hereby consent to the processing of my data in accordance with the company's
                                    <a href="/privacy-policy" target="_blank" class="consent-link">
                                        data processing policies
                                    </a>
                                </label>
                            </div>
                            <small v-if="submitted && !formData.consent" class="p-error consent-error">
                                You must consent to the data processing policies.
                            </small>

                            <!-- Submit Button -->
                            <Button
                                type="submit"
                                label="Leave a Message"
                                class="submit-btn"
                                :loading="isSubmitting"
                            />
                        </form>

                        <!-- Success Message -->
                        <div v-if="showSuccess" class="success-message">
                            <i class="pi pi-check-circle"></i>
                            <p>Thank you for your message! We'll get back to you soon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// Form data
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  inquiryType: null,
  description: '',
  consent: false
});

// Form state
const submitted = ref(false);
const isSubmitting = ref(false);
const showSuccess = ref(false);

// Inquiry types
const inquiryTypes = ref([
  'General Inquiry',
  'Product Enquiries for Business',
  'Product Enquiries for Consumer',
  'Sponsorships',
  'Career',
  'Investor Relations',
  'Media Inquiry',
  'Customer Support',
  'Feedback',
  'Procurement & Supply',
  'Agro-Allied',
  'Other'
]);

// Email validation
const isValidEmail = computed(() => {
  if (!formData.value.email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(formData.value.email);
});

// Form validation
const isFormValid = computed(() => {
  return (
    formData.value.firstName &&
    formData.value.lastName &&
    formData.value.email &&
    isValidEmail.value &&
    formData.value.inquiryType &&
    formData.value.description &&
    formData.value.consent
  );
});

// Handle form submission
const handleSubmit = async () => {
  submitted.value = true;

  if (!isFormValid.value) {
    return;
  }

  isSubmitting.value = true;

  try {
    // Simulate API call
    // In real implementation, replace with actual API call:
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData.value)
    // });

    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success message
    showSuccess.value = true;

    // Reset form
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      inquiryType: null,
      description: '',
      consent: false
    };
    submitted.value = false;

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);

  } catch (error) {
    console.error('Error submitting form:', error);
    // Handle error - show error message to user
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style>

</style>