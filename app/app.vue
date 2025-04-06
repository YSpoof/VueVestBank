<script setup lang="ts">
  useHead({
    titleTemplate: (title) =>
      title ? `${title} | VueVestBank` : "VueVestBank",
  });
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.25s;
  }
  .page-enter-from {
    scale: 0.9;
    opacity: 0;
  }
  .page-leave-to {
    scale: 0.9;
    opacity: 0;
  }

  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.15s;
  }
  .layout-enter-from,
  .layout-leave-to {
    opacity: 0;
  }
</style>
