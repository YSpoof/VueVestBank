<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="border h-full">
    <div class="p-4 bg-vb-black-secondary/90 h-full">
      <h2 class="mb-2 font-bold text-xl text-vb-primary text-center">
        {{ title }}
      </h2>
      <hr />
      <p class="text-vb-secondary mt-2">
        <slot />
      </p>
    </div>
  </div>
</template>
