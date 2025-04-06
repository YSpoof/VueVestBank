<template>
  <header class="flex justify-between p-4 bg-vb-black text-vb-secondary">
    <NuxtLink to="/dashboard" variant="ghost" active-class="text-vb-primary"
      >Dashboard</NuxtLink
    >

    <nav class="flex gap-4">
      <NuxtLink to="/dashboard/transfer" active-class="text-vb-primary">
        Transferências
      </NuxtLink>
      <NuxtLink to="/dashboard/settings" active-class="text-vb-primary">
        Configurações
      </NuxtLink>
      <NuxtLink to="/debug" target="_blank">DebugMode</NuxtLink>
    </nav>
  </header>
</template>
