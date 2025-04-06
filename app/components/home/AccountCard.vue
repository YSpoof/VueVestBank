<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="bg-vb-black p-4">
    <slot name="image" />
    <h2 class="text-4xl md:text-6xl text-vb-primary font-bold text-center">
      {{ title }}
    </h2>
    <p class="text-lg md:text-2xl text-vb-secondary mt-4">
      <slot />
    </p>
  </div>
</template>
