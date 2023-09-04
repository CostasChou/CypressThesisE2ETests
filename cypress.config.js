const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter', //for HTML reports
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on); //for HTML reports
    },
  },
  "chromeWebSecurity": false
});
