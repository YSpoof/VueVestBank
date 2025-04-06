<script setup lang="ts">
  // Set page title and meta
  useHead({
    title: "VueVestBank - O seu banco digital de confiança",
    meta: [
      {
        name: "description",
        content:
          "Experimente soluções bancárias inteligentes, seguras e sem complicações com o VueVestBank. Junte-se a 2 clientes satisfeitos hoje.",
      },
    ],
  });
</script>
<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <LandHero />

    <!-- Features Section -->
    <LandFeatures />

    <!-- Statistics Section -->
    <LandStatistics />

    <!-- CTA Section -->
    <LandCallToAction />

    <!-- Footer -->
    <LandFooter />
  </div>
</template>
