export default defineNuxtConfig({
  modules: ['../src/module'],
  myModule: {},
  components: {
    dirs: [
      '~/components',
      {
        path: '../src/components',
        prefix: 'PREFIX-',
      },
    ],
  },
})
