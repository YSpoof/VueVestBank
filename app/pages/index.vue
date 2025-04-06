<script setup lang="ts"></script>
<template>
  <div id="sectionBanner" class="bg-[url('/images/home/hero.avif')] bg-cover">
    <section
      id="introSection"
      class="container mx-auto h-screen grid place-items-center text-white">
      <div class="w-full flex flex-col gap-4 md:flex-row justify-between">
        <h1
          class="font-bold text-lg md:text-4xl bg-vb-black/80 backdrop-blur-sm self-center p-4">
          O banco que não te deixa pelado!
        </h1>
        <HomeIntroModal id="introModal" />
      </div>
    </section>
  </div>
  <section id="cardsSection" class="py-16 bg-stone-200">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <HomeCard title="Diminuição de impostos">
        Diminuição de impostos para os mais ricos e principalmente para os mais
        pobres.
      </HomeCard>
      <HomeCard title="Mais investimentos">
        Investimentos em educação, saúde e segurança são as nossas prioridades.
      </HomeCard>
      <HomeCard title="Combate à corrupção">
        Aumento no combate à corrupção e fiscalização efetiva.
      </HomeCard>
    </div>
  </section>
  <section id="creditCardSection" class="py-32 bg-stone-100">
    <div
      class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
      <div class="p-4">
        <h2 class="text-4xl md:text-6xl text-vbdarkgreen font-bold">
          Cartão de crédito
        </h2>
        <p class="text-lg md:text-2xl text-vbmediumgreen mt-4">
          Feito com muito carinho. Por conta disso ele não é moderno custa caro
          e não tem vantagens.
        </p>
      </div>
      <div class="grow-2 w-full">
        <img
          src="/images/home/card.avif"
          alt="Cartão de Crédito"
          class="mx-auto rounded-xl"
          width="512"
          height="512" />
      </div>
    </div>
  </section>
  <section id="experienceSection" class="py-32 bg-stone-200">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="grow-2 w-full">
        <img
          src="/images/home/advantages.avif"
          alt="Vantagi"
          class="mx-auto rounded-xl"
          width="512"
          height="512" />
      </div>
      <div class="p-4">
        <h2 class="text-4xl md:text-6xl text-vbdarkgreen font-bold">
          Combo de vantagens
        </h2>
        <p class="text-lg md:text-2xl text-vbmediumgreen mt-4">
          Cliente VB quando usa o cartão de crédito, ganha pontos que podem ser
          trocados por descontos em produtos e serviços.
        </p>
      </div>
    </div>
  </section>
  <section id="accountsSection" class="py-32 bg-stone-100">
    <div
      class="container mx-auto flex flex-col md:flex-row gap-4 justify-between">
      <HomeAccountCard title="Conta PF">
        <template #image>
          <img
            src="/images/home/pf.avif"
            alt="Conta PF"
            class="mx-auto rounded-xl"
            width="512"
            height="512" />
        </template>
        Conta para pessoa física. Com ela você pode fazer transferências,
        pagamentos e muito mais.
      </HomeAccountCard>
      <HomeAccountCard title="Conta PJ">
        <template #image>
          <img
            src="/images/home/pj.avif"
            alt="Conta PJ"
            class="mx-auto rounded-xl"
            width="512"
            height="512" />
        </template>
        Conta para empresários. Com ela você obtem crédito exclusivo e muito
        mais.
      </HomeAccountCard>
    </div>
  </section>
</template>
