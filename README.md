# CypressThesisE2ETests
Cypress project for End to end and UI tests for (https://uniportal.ihu.gr)

Node.js is required to run this project. Download node.js here from the official webpage --> (https://nodejs.org/en)
##Note: 
<u><strong>Tests that require login can not be executed since the password of my credentials is not pushed for security reasons.</strong></u>

## Project structure: 
- **cypress/e2e**  --> All Test Suites and Test Scripts belong in this folder.
- **cypress/fixtures/uniportal.json**  --> Parameters that are used for tests belong in this file.
- **cypress/reports/index.html**  --> Test execution reports (from mochawesome library) are produced in this file.
- **cypress/support/commands.js**  --> Custom JavaScript commands that may be used from Test Scripts belong in this file.
- **cypress/support/e2e.js**  --> Imports are mentioned in this file.
- **cypress/Webpages**  --> The folder contains all the Webpages that have been used by tests. Each file represents a webpage and contains its corresponding Web - Element Locators, methods to retrieve Web Elements references, methods to perform actions on the Web Elements, and Assertions on the Web Elements.
- **cypress/cypress.config**  --> This file changes the configuration for the remaining execution of the current spec file. The values will reset to the previous default values after the spec has been completed.


## Test execution
In the example below tests of "TC01_LogInCorrectUsernameCorrectPasswordOK.cy.js" will be executed in headed more and Chrome browser.
```bash
npx cypress run --headed --browser chrome --spec cypress\e2e\TC01_LogInCorrectUsernameCorrectPasswordOK.cy.js
```

