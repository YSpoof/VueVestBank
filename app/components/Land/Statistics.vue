<template>
  <section class="py-24 bg-gradient-to-br from-base-200 to-base-300">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-base-content mb-4">
          Números que Impressionam
        </h2>
        <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
          Nossa jornada em números: confira as estatísticas que demonstram nossa
          confiabilidade e crescimento contínuo
        </p>
      </div>

      <!-- Statistics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Active Users Stat -->
        <div
          class="stats stats-vertical lg:stats-horizontal shadow-lg bg-base-100 hover:shadow-xl transition-all duration-300">
          <div class="stat">
            <div class="stat-figure text-primary">
              <Icon
                name="mdi:account-group"
                size="40" />
            </div>
            <div class="stat-title text-base-content/60">Usuários Ativos</div>
            <div class="stat-value text-primary text-3xl">2+</div>
            <div class="stat-desc text-success">
              <Icon
                name="mdi:trending-up"
                size="16"
                class="inline mr-1" />
              +50% este mês
            </div>
          </div>
        </div>

        <!-- Transactions Stat -->
        <div
          class="stats stats-vertical lg:stats-horizontal shadow-lg bg-base-100 hover:shadow-xl transition-all duration-300">
          <div class="stat">
            <div class="stat-figure text-secondary">
              <Icon
                name="mdi:cash-multiple"
                size="40" />
            </div>
            <div class="stat-title text-base-content/60">
              Volume Transacionado
            </div>
            <div class="stat-value text-secondary text-3xl">F$ 1,00</div>
            <div class="stat-desc text-success">
              <Icon
                name="mdi:trending-up"
                size="16"
                class="inline mr-1" />
              +100% desde o lançamento
            </div>
          </div>
        </div>

        <!-- Uptime Stat -->
        <div
          class="stats stats-vertical lg:stats-horizontal shadow-lg bg-base-100 hover:shadow-xl transition-all duration-300">
          <div class="stat">
            <div class="stat-figure text-accent">
              <Icon
                name="mdi:shield-check"
                size="40" />
            </div>
            <div class="stat-title text-base-content/60">Disponibilidade</div>
            <div class="stat-value text-accent text-3xl">100%</div>
            <div class="stat-desc text-info">
              <Icon
                name="mdi:clock-check"
                size="16"
                class="inline mr-1" />
              24/7 operacional
            </div>
          </div>
        </div>

        <!-- Security Stat -->
        <div
          class="stats stats-vertical lg:stats-horizontal shadow-lg bg-base-100 hover:shadow-xl transition-all duration-300">
          <div class="stat">
            <div class="stat-figure text-success">
              <Icon
                name="mdi:security"
                size="40" />
            </div>
            <div class="stat-title text-base-content/60">
              Transações Seguras
            </div>
            <div class="stat-value text-success text-3xl">100%</div>
            <div class="stat-desc text-success">
              <Icon
                name="mdi:lock-check"
                size="16"
                class="inline mr-1" />
              Zero incidentes
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
