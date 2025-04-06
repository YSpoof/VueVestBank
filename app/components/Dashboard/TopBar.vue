<script setup lang="ts">
  import { valuesVisible } from "~/store/user";
  const toggleValuesVisibility = () => {
    valuesVisible.value = !valuesVisible.value;
  };
</script>
<template>
  <div class="navbar justify-between bg-base-100 shadow-sm">
    <NuxtLink
      to="/"
      class="text-xl font-bold text-base-content">
      <span class="text-primary">Vue</span>VestBank
    </NuxtLink>
    <button
      @click="toggleValuesVisibility"
      class="btn btn-square btn-ghost">
      <Icon
        :name="valuesVisible ? 'mdi:eye' : 'mdi:eye-off'"
        size="20" />
    </button>
  </div>
</template>
