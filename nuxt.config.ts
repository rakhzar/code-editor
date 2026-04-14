import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    server: {
      hmr: {
        protocol: "ws",
        host: "localhost",
        port: 24678,
      },
      watch: { usePolling: true },
    },
  },
  app: {
    head: {
      title: "Code Editor",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      "Open Sans": {
        wght: "300..800",
        ital: "300..800",
      },
    },
  },
  modules: ["@nuxtjs/google-fonts"],
});
