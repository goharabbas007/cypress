/// <reference types="Cypress" />
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'],
    chromeWebSecurity: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 6000,
    exprimentalSessionSupport: true,
    testIsolation: false,
    compilerOptions: {
      types: ["Cypress"]
    },
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/reports"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}); 
