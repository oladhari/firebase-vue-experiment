export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "coding-test",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["view-design/dist/styles/iview.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/view-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/axios",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyDhCwy0yq1aNEkE0LQXFqSsmLvasrc6l1o",
          authDomain: "testing-code-c4b64.firebaseapp.com",
          projectId: "testing-code-c4b64",
          storageBucket: "testing-code-c4b64.appspot.com",
          messagingSenderId: "109732693231",
          appId: "1:109732693231:web:e4d36ba36ebb2f01dbc71a",
          measurementId: "G-8Q5EYK9Q7C",
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
