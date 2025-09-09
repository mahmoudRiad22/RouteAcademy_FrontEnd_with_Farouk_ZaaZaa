const { defineConfig } = require("cypress");
const LIVE_PATH = "https://mahmoudriad22.github.io/RouteAcademy_FrontEnd_with_Farouk_ZaaZaa/week12/JsAssigment4-loginSystemApp/";
const LOCAL_PATH = "http://127.0.0.1:5500/week12/JsAssigment4-loginSystemApp/";
module.exports = defineConfig({
  e2e: {
    baseUrl: LOCAL_PATH,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
