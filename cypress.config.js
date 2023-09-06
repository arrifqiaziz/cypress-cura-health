const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://katalon-demo-cura.herokuapp.com',
    defaultCommandTimeout: 5000,
    video: true,
    screenshotOnRunFailure: true
  }
})
