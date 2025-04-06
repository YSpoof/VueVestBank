<script setup lang="ts">
useHead({
  titleTemplate: (title) => (title ? `${title} | VestBank` : "VestBank"),
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
