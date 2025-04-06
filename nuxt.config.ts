// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/fonts"],
  css: ["@/main.css"],
  experimental: {
    viewTransition: false,
    crossOriginPrefetch: true,
    defaults: {
      nuxtLink: {
        prefetchOn: {
          interaction: true,
          visibility: false,
        },
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
