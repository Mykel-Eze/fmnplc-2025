<template>
  <div>
    <h2>Subscribe to our Newsletter</h2>
    <form @submit.prevent="subscribe">
      <input type="email" v-model="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const email = ref('');

const subscribe = () => {
  // Handle subscription logic here
  console.log(`Subscribing ${email.value}`);
};
</script>

<style>

</style>