// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/fonts", "nuxt-vuefire"],
  css: ["@/main.css"],
  experimental: {
    viewTransition: true,
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
  vuefire: {
    emulators: {
      // uncomment this line to run the application in production mode without emulators during dev
      // enabled: false,
      auth: {
        options: {
          disableWarnings: true,
        },
      },
    },

    auth: {
      enabled: true,
      sessionCookie: false,
    },

    config: {
      apiKey: "AIzaSyBKBqCHUpxMNjRJ8uhgOTK0wMGr9LkkFOA",
      authDomain: "nuxt-vuefire-example-spark.firebaseapp.com",
      databaseURL:
        "https://nuxt-vuefire-example-spark-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "nuxt-vuefire-example-spark",
      storageBucket: "nuxt-vuefire-example-spark.appspot.com",
      messagingSenderId: "639475067598",
      appId: "1:639475067598:web:13fc8572370163aa913e9f",
    },
  },
  app: {
    baseURL: "/VueVestBank/",
  },
});
