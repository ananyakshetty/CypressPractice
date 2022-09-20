const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ttpvkk',
  chromeWebSecurity: false,
  uncaught: 'exception',
  defaultCommandTimeout: 30000,
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
    specPattern:'cypress/e2e/**/*.js'
  },
})
