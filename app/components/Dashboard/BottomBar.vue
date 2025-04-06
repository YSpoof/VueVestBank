<template>
  <div class="dock">
    <NuxtLink
      to="/dashboard"
      exact-active-class="dock-active">
      <Icon
        name="mdi:view-grid"
        size="20" />
      <span class="dock-label">Dashboard</span>
    </NuxtLink>

    <NuxtLink
      to="/dashboard/transfers"
      exact-active-class="dock-active">
      <Icon
        name="mdi:transfer"
        size="20" />
      <span class="dock-label">Transferências</span>
    </NuxtLink>

    <NuxtLink
      to="/dashboard/settings"
      exact-active-class="dock-active">
      <Icon
        name="mdi:cog"
        size="20" />
      <span class="dock-label">Configurações</span>
    </NuxtLink>
  </div>
</template>
