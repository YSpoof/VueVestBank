<template>
  <section class="py-20 bg-base-100">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-base-content mb-4">
          Porque escolher o VueVestBank?
        </h2>
        <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
          Experimente um banco reimaginado com tecnologia de ponta e atendimento
          personalizado
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body text-center">
            <div class="mx-auto mb-4">
              <Icon
                name="mdi:shield-check"
                size="48"
                class="text-success" />
            </div>
            <h3 class="card-title justify-center mb-2">
              Segurança de Nível Militar
            </h3>
            <p class="text-base-content/70">
              Seu dinheiro e dados estão protegidos com criptografia de nível
              militar.
            </p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body text-center">
            <div class="mx-auto mb-4">
              <Icon
                name="mdi:lightning-bolt"
                size="48"
                class="text-warning" />
            </div>
            <h3 class="card-title justify-center mb-2">
              Transferências Instantâneas
            </h3>
            <p class="text-base-content/70">
              Envie e receba dinheiro instantaneamente com nosso sistema de
              processamento de pagamentos em tempo real denominado PiXi.
            </p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body text-center">
            <div class="mx-auto mb-4">
              <Icon
                name="mdi:cash-multiple"
                size="48"
                class="text-accent" />
            </div>
            <h3 class="card-title justify-center mb-2">Sem Taxas Ocultas</h3>
            <p class="text-base-content/70">
              Preços transparentes, sem cobranças surpresa. O que você vê é o
              que você paga.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
