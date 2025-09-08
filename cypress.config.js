const { defineConfig } = require("cypress");
const LOCAL = 'http://127.0.0.1:5500/week13/JsAssignment5-weatherApp/';
const LIVE = 'https://mahmoudriad22.github.io/RouteAcademy_FrontEnd_with_Farouk_ZaaZaa/week13/JsAssignment5-weatherApp/';
module.exports = defineConfig({
  e2e: {
    baseUrl: LOCAL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
