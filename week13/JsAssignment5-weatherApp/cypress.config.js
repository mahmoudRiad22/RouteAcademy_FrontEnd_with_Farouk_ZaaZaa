const { defineConfig } = require("cypress");
const LOCAL = '';
const LIVE = '';
module.exports = defineConfig({
  e2e: {
    baseUrl: LOCAL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
