// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
        },
      ],
    },
  },
  extends: [
    "@nuxt-themes/docus", // Extend from a npm package
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image-edge",
    "@nuxt/content",
    [
      "@nuxtjs/color-mode",
      {
        classSuffix: "",
      },
    ],
    [
      "@nuxtjs/i18n",
      {
        lazy: true,
        defaultLocale: "en",
        langDir: "./locales/",
        locales: [
          {
            code: "en",
            iso: "en-US",
            file: "en.json",
            dir: "ltr",
          },
          {
            code: "tr",
            iso: "tr-IS",
            file: "tr.json",
            dir: "ltr",
          },
          {
            code: "ar",
            iso: "ar-UAE",
            file: "ar.json",
            dir: "rtl",
          },
          {
            code: "fa",
            iso: "fa-IR",
            file: "fa.json",
            dir: "rtl",
          },
        ],
      },
    ],
  ],
  content: {
    documentDriven: false,
    highlight: {
      // OR
      theme: {
        // Default theme (same as single string)
        default: "github-light",
        // Theme used if `html.dark`
        dark: "github-dark",
        // Theme used if `html.sepia`
        sepia: "monokai",
      },
    },
  },
});
