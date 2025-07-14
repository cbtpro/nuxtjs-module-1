export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 7750,
  },
  modules: ['../src/module'],
  myModule1: {},
  devtools: { enabled: true },
});
