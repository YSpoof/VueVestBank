<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
<template>
  <footer class="flex justify-between p-4 bg-vb-black text-vb-secondary">
    <div class="text-sm">
      © {{ currentYear }} VestBank. Todos os direitos reservados.
    </div>
    <nav class="flex gap-4 text-sm">
      <NuxtLink to="/terms" routerLinkActive="text-vb-primary"
        >Termos de Uso</NuxtLink
      >
      <NuxtLink to="/privacy" routerLinkActive="text-vb-primary"
        >Privacidade</NuxtLink
      >
      <NuxtLink to="/help" routerLinkActive="text-vb-primary">Ajuda</NuxtLink>
    </nav>
  </footer>
</template>
