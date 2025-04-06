<template>
  <section
    class="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
    <div class="hero-content text-center max-w-6xl">
      <div>
        <div class="mb-8">
          <Icon
            name="mdi:bank"
            size="80"
            class="text-primary mx-auto mb-4" />
          <h1 class="text-5xl md:text-6xl font-bold text-base-content">
            <span class="text-primary">Vue</span>VestBank
          </h1>
        </div>
        <p
          class="text-xl md:text-2xl mb-8 text-base-content/80 max-w-3xl mx-auto">
          Descubra soluções bancárias inteligentes, seguras e sem complicações.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink
            to="/register"
            class="btn btn-primary btn-lg px-8">
            <Icon
              name="mdi:account-plus"
              size="20" />
            Abra sua conta
          </NuxtLink>
          <NuxtLink
            to="/dashboard"
            class="btn btn-outline btn-lg px-8">
            <Icon
              name="mdi:view-dashboard"
              size="20" />
            Acessar o Painel
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
