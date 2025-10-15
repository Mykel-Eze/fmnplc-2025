<template>
  <div class="min-h-screen bg-gray-50">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900">FMNPLC</h1>
          </div>
          <nav class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
            <a href="#" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Services</a>
            <a href="#" class="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Welcome to FMNPLC
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Your trusted partner for comprehensive solutions
        </p>
        <div class="mt-8">
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center">
          <p class="text-gray-400">&copy; 2025 FMNPLC. All rights reserved.</p>
        </div>
      </div>
    </footer>

    <SpeedInsights />
  </div>
</template>

<script>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

export default {
  setup() {
    return { SpeedInsights }
  },
}
</script>
