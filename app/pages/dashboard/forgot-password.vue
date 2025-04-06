<script setup lang="ts">
  import { consola } from "consola";
  import { loginValidator } from "~~/shared/validators";

  const handleLogin = async () => {
    const validationResult = loginValidator.safeParse(loginForm);
    if (!validationResult.success) {
      alert(validationResult.error.errors.map((error) => error.message));
      return;
    }
    try {
      const res = await $fetch("/api/v1/auth/login", {
        method: "POST",
        body: validationResult.data,
      });
      loginForm.email = "";
      loginForm.password = "";
      if (res.success) {
        consola.log("Login successful:", res);
        await navigateTo("/dashboard");
      }
    } catch (error: any) {
      consola.error(error.data.data);
      alert(error.data.data || "Ocorreu um erro.");
      return;
    }
  };

  const loginForm = reactive({
    email: "",
    password: "",
  });

  definePageMeta({
    layout: "dashboard",
  });
</script>
<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
    <div class="card w-full max-w-md bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-primary">
            Bem-vindo(a) de volta!
          </h1>
          <p class="text-base-content/70 mt-2">Faça login na sua conta</p>
        </div>

        <form
          @submit.prevent="handleLogin"
          class="space-y-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              v-model="loginForm.email"
              type="email"
              placeholder="Enter your email"
              class="input input-bordered w-full"
              required />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Senha</span>
            </label>
            <input
              v-model="loginForm.password"
              type="password"
              placeholder="Digite sua senha"
              class="input input-bordered w-full"
              required />
            <label class="label">
              <a
                href="#"
                class="label-text-alt link link-hover"
                >Esqueceu a senha?</a
              >
            </label>
          </div>

          <div class="form-control mt-6">
            <button
              type="submit"
              class="btn btn-primary w-full">
              Fazer Login
            </button>
          </div>
        </form>

        <div class="divider">OU</div>

        <div class="text-center">
          <p class="text-base-content/70">
            Não tem uma conta?
            <NuxtLink
              to="/register"
              class="link link-primary">
              Cadastre-se
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
