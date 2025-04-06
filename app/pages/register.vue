<script setup lang="ts">
  import { consola } from "consola";
  import { registerValidator } from "~~/shared/validators";
  const { fetch: fetchUser, loggedIn } = useUserSession();

  const registerForm = reactive({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    const validationResult = registerValidator.safeParse(registerForm);
    if (!validationResult.success) {
      alert(validationResult.error.errors.map((error) => error.message));
      return;
    }
    try {
      const res = await $fetch("/api/v1/auth/register", {
        method: "POST",
        body: validationResult.data,
      });
      registerForm.name = "";
      registerForm.email = "";
      registerForm.password = "";
      if (res.success) {
        consola.log("Registration successful:", res);
        await fetchUser();
      }
    } catch (error: any) {
      consola.error(error.data.data);
      alert(error.data.data || "Ocorreu um erro.");
      return;
    }
  };

  watchEffect(() => {
    if (loggedIn.value) {
      navigateTo("/dashboard");
    }
  });
</script>
<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
    <div class="card w-full max-w-md bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="text-center mb-6">
          <h1 class="text-3xl font-bold text-primary">Bem-vindo(a)!</h1>
          <p class="text-base-content/70 mt-2">Crie sua conta</p>
        </div>

        <form
          @submit.prevent="handleRegister"
          class="space-y-4">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Nome</span>
            </label>
            <input
              v-model="registerForm.name"
              type="text"
              placeholder="Digite seu nome"
              class="input input-bordered w-full"
              required />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              v-model="registerForm.email"
              type="email"
              placeholder="Digite seu email"
              class="input input-bordered w-full"
              required />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Senha</span>
            </label>
            <input
              v-model="registerForm.password"
              type="password"
              placeholder="Digite sua senha"
              class="input input-bordered w-full"
              required />
          </div>

          <div class="form-control mt-6">
            <button
              type="submit"
              class="btn btn-primary w-full">
              Cadastrar
            </button>
          </div>
        </form>

        <div class="divider">OU</div>

        <div class="text-center">
          <p class="text-base-content/70">
            Já tem uma conta?
            <NuxtLink
              to="/login"
              class="link link-primary">
              Faça login
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
