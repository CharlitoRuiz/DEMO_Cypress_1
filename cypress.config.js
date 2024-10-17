const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure:true,
  video:true,
  e2e: {
    baseUrl:'https://reqres.in/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      reportFilename: '[status]_[name]-report.html',
      overwrite: true,
      html: true,
      json: false,
    },
  },
});
