import { resolve } from 'node:path';
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

// Module options TypeScript interface definition
export interface ModuleOptions { }

const routes = [
  {
    name: 'module-1-home',
    path: '/module-1-home',
    file: resolve(__dirname, './runtime/pages/index.vue')
  },
];
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module-1',
    configKey: 'myModule1',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'));
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push(...routes);
    }
  }
});
