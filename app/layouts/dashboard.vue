<script setup lang="ts"></script>
<template>
  <div class="container px-2 pb-4 mb-16 mx-auto">
    <DashboardTopBar />
    <main>
      <slot />
    </main>
    <DashboardBottomBar />
  </div>
</template>
