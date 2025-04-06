<script setup lang="ts">
  useSeoMeta({
    title: "Dashboard",
    description: "Gerencie tudo com facilidade.",
  });
  definePageMeta({
    layout: "dashboard",
  });
</script>
<template>
  <div>
    <!-- Balance Section -->
    <div class="card bg-base-200 shadow-xl mx-4 mt-4">
      <div class="card-body flex-row justify-between items-center p-6">
        <div>
          <h2 class="card-title">Saldo Disponível</h2>
          <p class="text-3xl font-bold">{{ formatAsMoney(1000) }}</p>
        </div>
        <button class="btn btn-primary">
          <span>Ver Extrato</span>
          <Icon
            name="mdi:chevron-right"
            size="24" />
        </button>
      </div>
    </div>

    <!-- Quick Access Section -->
    <div class="card bg-base-200 shadow-xl mx-4 mt-4">
      <div class="card-body p-6">
        <div class="flex justify-center items-center gap-4">
          <div class="flex flex-col items-center w-16">
            <button class="btn btn-circle btn-primary mb-2 w-12 h-12 min-h-12">
              <Icon
                name="mdi:qrcode"
                size="24" />
            </button>
            <span class="text-xs text-center">PiXi</span>
          </div>
          <div class="flex flex-col items-center w-16">
            <button
              class="btn btn-circle btn-secondary mb-2 w-12 h-12 min-h-12">
              <Icon
                name="mdi:cash-sync"
                size="24" />
            </button>
            <span class="text-xs text-center">Transferir</span>
          </div>
          <div class="flex flex-col items-center w-16">
            <button class="btn btn-circle btn-accent mb-2 w-12 h-12 min-h-12">
              <Icon
                name="mdi:cash-plus"
                size="24" />
            </button>
            <span class="text-xs text-center">Depositar</span>
          </div>
          <div class="flex flex-col items-center w-16">
            <button class="btn btn-circle btn-success mb-2 w-12 h-12 min-h-12">
              <Icon
                name="mdi:cash-minus"
                size="24" />
            </button>
            <span class="text-xs text-center">Sacar</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Credit Card Section -->
    <div class="card bg-base-200 shadow-xl mx-4 mt-4">
      <div class="card-body">
        <h2 class="card-title">Cartão de Crédito</h2>
        <p class="card-text">Limite disponível: {{ formatAsMoney(1) }}</p>
        <div class="flex justify-end">
          <button class="btn btn-primary uppercase">Próximas Faturas</button>
        </div>
      </div>
    </div>

    <!-- Loan Section -->
    <div class="card bg-base-200 shadow-xl mx-4 mt-4">
      <div class="card-body">
        <h2 class="card-title">Empréstimos</h2>
        <p class="card-text">Valor total: {{ formatAsMoney(10000) }}</p>
        <div class="flex justify-end">
          <button class="btn btn-secondary uppercase">Ver Detalhes</button>
        </div>
      </div>
    </div>

    <!-- Next Payment Section -->
    <div class="card bg-base-200 shadow-xl mx-4 mt-4">
      <div class="card-body">
        <h2 class="card-title">Próximo Pagamento</h2>
        <p class="card-text">Data: {{ formatDate(new Date()) }}</p>
        <p class="card-text">Valor: {{ formatAsMoney(500) }}</p>
        <div class="flex justify-end">
          <button class="btn btn-warning uppercase">Pagar Agora</button>
        </div>
      </div>
    </div>
  </div>
</template>
