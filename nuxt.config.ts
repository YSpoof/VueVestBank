// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-05-15",
  telemetry: false,
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/fonts", "nuxt-auth-utils", "@vueuse/nuxt"],
  css: ["@/styles.css"],
  experimental: {
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
  nitro: {
    experimental: {
      websocket: true,
    },
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
});
