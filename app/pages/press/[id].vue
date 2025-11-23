<template>
  <div class="press-details-page py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Back Button -->
      <Button
        label="Back to Press Releases"
        icon="pi pi-arrow-left"
        class="back-btn mb-8"
        @click="goBack"
        text
      />

      <!-- Header Section -->
      <div class="press-header mb-8">
        <!-- Category Badge -->
        <div class="mb-4">
          <span class="category-badge">{{ pressRelease.category }}</span>
        </div>

        <!-- Title -->
        <h1 class="press-title text-gray-900 mb-4">
          {{ pressRelease.title }}
        </h1>

        <!-- Meta Info -->
        <div class="press-meta flex items-center gap-6 mb-6 pb-6 border-b border-gray-200">
          <div class="flex items-center gap-2">
            <i class="pi pi-calendar text-gray-600"></i>
            <span class="text-gray-600">{{ formatDate(pressRelease.date) }}</span>
          </div>
          <div class="flex items-center gap-2">
            <i class="pi pi-map-marker text-gray-600"></i>
            <span class="text-gray-600">{{ pressRelease.location }}</span>
          </div>
        </div>

        <!-- Download Button -->
        <div class="download-section mb-8">
          <Button
            label="Download Press Release"
            icon="pi pi-download"
            class="download-btn"
            @click="downloadPressRelease"
          />
        </div>
      </div>

      <!-- Press Release Content -->
      <div class="press-content text-gray-700">
        <p class="mb-6 font-semibold text-lg">
          FOR IMMEDIATE RELEASE
        </p>

        <p class="mb-6">
          <strong>Lagos, Nigeria – {{ formatDate(pressRelease.date) }}</strong> – Flour Mills of Nigeria Plc (FMN), 
          a leading food and agro-allied company in Nigeria, today announced that it has been honored with the 
          prestigious Global Brand Award 2024 in recognition of its exceptional brand excellence and market leadership 
          across Africa.
        </p>

        <p class="mb-6">
          The award, presented at the annual Global Brand Awards ceremony held in Dubai, UAE, recognizes companies 
          that have demonstrated outstanding brand performance, innovation, and consumer trust in their respective 
          markets. FMN was selected from among hundreds of nominees across various industries and geographic regions.
        </p>

        <h2 class="content-heading text-gray-900 mb-4">Leadership Excellence</h2>

        <p class="mb-6">
          "We are deeply honored to receive this prestigious recognition," said <strong>Mr. Paul Gbededo, Group 
          Managing Director/CEO of Flour Mills of Nigeria Plc</strong>. "This award is a testament to our unwavering 
          commitment to delivering quality products, driving innovation, and building strong relationships with our 
          consumers across Africa. It reflects the hard work and dedication of our entire team."
        </p>

        <h2 class="content-heading text-gray-900 mb-4">Brand Impact and Market Leadership</h2>

        <p class="mb-6">
          FMN's portfolio includes some of Nigeria's most trusted household brands, including Golden Penny Flour, 
          Golden Pasta, Goldenvita, and Golden Penny Semovita. The company has consistently invested in product 
          innovation, quality assurance, and consumer engagement to maintain its position as a market leader in 
          the food and agro-allied sector.
        </p>

        <p class="mb-6">
          Over the past year, FMN has expanded its production capacity, introduced new product lines, and 
          strengthened its distribution network across Nigeria and other African markets. The company's 
          sustainability initiatives and corporate social responsibility programs have also contributed 
          to its strong brand reputation.
        </p>

        <h2 class="content-heading text-gray-900 mb-4">Commitment to Excellence</h2>

        <p class="mb-6">
          The Global Brand Award 2024 adds to FMN's growing list of accolades and industry recognitions. 
          The company remains committed to its vision of being the leading food and agro-allied group in 
          Africa, providing nutritious, affordable, and accessible products to millions of consumers.
        </p>

        <h2 class="content-heading text-gray-900 mb-4">About Flour Mills of Nigeria Plc</h2>

        <p class="mb-6">
          Flour Mills of Nigeria Plc is a leading food and agro-allied company in Nigeria with a diversified 
          portfolio spanning flour milling, pasta manufacturing, sugar refining, and other food products. 
          With a history spanning several decades, FMN has built a strong reputation for quality, innovation, 
          and customer satisfaction. The company is listed on the Nigerian Exchange and employs thousands of 
          people across its operations.
        </p>

        <div class="contact-section mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 class="contact-heading text-gray-900 mb-4">Media Contact:</h3>
          <div class="space-y-2">
            <p class="text-gray-700">
              <strong>Corporate Communications</strong><br>
              Flour Mills of Nigeria Plc<br>
              2 Old Dock Road, Apapa, Lagos<br>
              Email: communications@fmnplc.com<br>
              Phone: +234 1 270 5400
            </p>
          </div>
        </div>

        <p class="mt-6 text-sm text-gray-600 text-center">
          ### END ###
        </p>
      </div>

      <!-- Share Section -->
      <div class="share-section mt-12 pt-8 border-t border-gray-200">
        <h3 class="share-title text-gray-900 mb-4">Share this press release</h3>
        <div class="flex gap-4">
          <Button
            icon="pi pi-facebook"
            class="share-btn facebook"
            rounded
            aria-label="Share on Facebook"
            @click="shareOn('facebook')"
          />
          <Button
            icon="pi pi-twitter"
            class="share-btn twitter"
            rounded
            aria-label="Share on Twitter"
            @click="shareOn('twitter')"
          />
          <Button
            icon="pi pi-linkedin"
            class="share-btn linkedin"
            rounded
            aria-label="Share on LinkedIn"
            @click="shareOn('linkedin')"
          />
          <Button
            icon="pi pi-envelope"
            class="share-btn email"
            rounded
            aria-label="Share via Email"
            @click="shareOn('email')"
          />
        </div>
      </div>

      <!-- Related Press Releases -->
      <div class="related-press mt-16">
        <h3 class="related-title text-gray-900 mb-8">Related Press Releases</h3>
        <div class="space-y-4">
          <div
            v-for="press in relatedPressReleases"
            :key="press.id"
            class="related-press-item"
            @click="loadPress(press.id)"
          >
            <div class="related-press-border"></div>
            <div class="related-press-content">
              <h4 class="related-press-title text-gray-900">{{ press.title }}</h4>
              <p class="related-press-date text-gray-600">{{ formatDate(press.date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Button from 'primevue/button';

const router = useRouter();
const route = useRoute();

// Press release data
const pressRelease = ref({
  id: 1,
  title: 'FMN Wins Prestigious Global Brand Award 2024',
  date: new Date('2024-06-21'),
  category: 'Awards',
  location: 'Lagos, Nigeria',
  downloadUrl: '/documents/press-releases/fmn-global-brand-award-2024.pdf'
});

// Related press releases
const relatedPressReleases = ref([
  {
    id: 2,
    title: 'Flour Mills of Nigeria Plc (FMN) Continues to Take the Lead in Driving Food-Self Sufficiency in Nigeria with the Release of its 2021/2022 Sustainability Report.',
    date: new Date('2023-10-03'),
  },
  {
    id: 3,
    title: "Flour Mills of Nigeria Women Network Holds Virtual Event to Commemorate International Women's Day and Promote Gender Equity",
    date: new Date('2023-03-31'),
  },
  {
    id: 4,
    title: 'Honeywell Flour Mills PLC Holds a Successful Annual General Meeting and Announces a 23% Increase in Revenue',
    date: new Date('2023-03-28'),
  }
]);

// Format date
const formatDate = (date) => {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

// Download press release
const downloadPressRelease = () => {
  // Create a blob with the press release content
  const content = generatePressReleaseDocument();
  const blob = new Blob([content], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  
  // Create a temporary link and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = `FMN-Press-Release-${formatDate(pressRelease.value.date).replace(/,?\s+/g, '-')}.txt`;
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);

  // In a real implementation, you would fetch the actual PDF file:
  // window.open(pressRelease.value.downloadUrl, '_blank');
};

// Generate press release document content
const generatePressReleaseDocument = () => {
  return `
FLOUR MILLS OF NIGERIA PLC
PRESS RELEASE

${pressRelease.value.title}

Date: ${formatDate(pressRelease.value.date)}
Location: ${pressRelease.value.location}

FOR IMMEDIATE RELEASE

Lagos, Nigeria – ${formatDate(pressRelease.value.date)} – Flour Mills of Nigeria Plc (FMN), a leading food and agro-allied company in Nigeria, today announced that it has been honored with the prestigious Global Brand Award 2024 in recognition of its exceptional brand excellence and market leadership across Africa.

The award, presented at the annual Global Brand Awards ceremony held in Dubai, UAE, recognizes companies that have demonstrated outstanding brand performance, innovation, and consumer trust in their respective markets. FMN was selected from among hundreds of nominees across various industries and geographic regions.

LEADERSHIP EXCELLENCE

"We are deeply honored to receive this prestigious recognition," said Mr. Paul Gbededo, Group Managing Director/CEO of Flour Mills of Nigeria Plc. "This award is a testament to our unwavering commitment to delivering quality products, driving innovation, and building strong relationships with our consumers across Africa. It reflects the hard work and dedication of our entire team."

BRAND IMPACT AND MARKET LEADERSHIP

FMN's portfolio includes some of Nigeria's most trusted household brands, including Golden Penny Flour, Golden Pasta, Goldenvita, and Golden Penny Semovita. The company has consistently invested in product innovation, quality assurance, and consumer engagement to maintain its position as a market leader in the food and agro-allied sector.

Over the past year, FMN has expanded its production capacity, introduced new product lines, and strengthened its distribution network across Nigeria and other African markets. The company's sustainability initiatives and corporate social responsibility programs have also contributed to its strong brand reputation.

COMMITMENT TO EXCELLENCE

The Global Brand Award 2024 adds to FMN's growing list of accolades and industry recognitions. The company remains committed to its vision of being the leading food and agro-allied group in Africa, providing nutritious, affordable, and accessible products to millions of consumers.

ABOUT FLOUR MILLS OF NIGERIA PLC

Flour Mills of Nigeria Plc is a leading food and agro-allied company in Nigeria with a diversified portfolio spanning flour milling, pasta manufacturing, sugar refining, and other food products. With a history spanning several decades, FMN has built a strong reputation for quality, innovation, and customer satisfaction. The company is listed on the Nigerian Exchange and employs thousands of people across its operations.

MEDIA CONTACT:
Corporate Communications
Flour Mills of Nigeria Plc
2 Old Dock Road, Apapa, Lagos
Email: communications@fmnplc.com
Phone: +234 1 270 5400

### END ###
`;
};

// Share on social media
const shareOn = (platform) => {
  const url = window.location.href;
  const title = pressRelease.value.title;
  
  let shareUrl = '';
  
  switch (platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
    case 'email':
      shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
      break;
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
};

// Go back to press releases list
const goBack = () => {
  router.push('/press');
};

// Load a different press release
const loadPress = (pressId) => {
  router.push(`/press/${pressId}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped src="@/assets/css/press-details.css"></style>