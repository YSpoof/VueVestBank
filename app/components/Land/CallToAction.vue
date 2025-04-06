<template>
  <section class="py-20 bg-base-200">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold text-base-content mb-4">
        Pronto para Começar?
      </h2>
      <p class="text-lg text-base-content/70 mb-8 max-w-2xl mx-auto">
        Torne-se mais um cliente satisfeito que fez do VueVestBank sua principal
        solução bancária
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink
          to="/register"
          class="btn btn-primary btn-lg px-8">
          <Icon
            name="mdi:account-plus"
            size="20" />
          Abrir Conta Agora
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="btn btn-ghost btn-lg px-8">
          <Icon
            name="mdi:login"
            size="20" />
          Já tem uma conta?
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
