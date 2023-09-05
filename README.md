# CypressThesisE2ETests  
Cypress project for End to end and UI tests for (https://uniportal.ihu.gr)  
Node.js is required to run this project. Download node.js here from the official webpage --> (https://nodejs.org/en)
## Note:  
⚠️🚩<u><strong>Tests that require login will not be executed after log in, since the password of my credentials is not pushed for security reasons.</strong></u>  
🚦🚫<u><strong>Test "TC08_Exams_ExamsCalendarΟΚ.cy.js" and "TC9_HamburgerMenuItemsWhenCollapsedΟΚ.cy.js" are failing because of bugs.</strong></u>  

## Project structure:  
- **cypress/e2e**  --> All Test Suites and Test Scripts belong in this folder.
- **cypress/fixtures/uniportal.json**  --> Parameters that are used for tests belong in this file.
- **cypress/reports/index.html**  --> Test execution reports (from mochawesome library) are produced in this file.
- **cypress/support/commands.js**  --> Custom JavaScript commands that may be used from Test Scripts belong in this file.
- **cypress/support/e2e.js**  --> Imports are mentioned in this file.
- **cypress/Webpages**  --> The folder contains all the Webpages that have been used by tests. Each file represents a webpage and contains its corresponding Web - Element Locators, methods to retrieve Web Elements references, methods to perform actions on the Web Elements, and Assertions on the Web Elements.
- **nodemodules/cypress.config**  --> This file changes the configuration for the remaining execution of the current spec file. The values will reset to the previous default values after the spec has been completed.  


## Test execution :rocket:
In the example below tests of "TC01_LogInCorrectUsernameCorrectPasswordOK.cy.js" will be executed in headed more and Chrome browser.
```bash
npx cypress run --headed --browser chrome --spec cypress\e2e\TC01_LogInCorrectUsernameCorrectPasswordOK.cy.js
```
▶︎ More info about execution:  :computer:
- You can choose the browser of the test execution by setting the flag --browser 'to_the_correspodning_browser_name(e.g. Chrome, Edge, FireFox, Electron').
- Cypress runs tests on headless mode by default. If you want to run tests on headed more you can add this flag too your CLI execution command. E.g. --headed
  
▶︎ Other execution options: :bulb:
```bash
npx cypress open
```
The above will open Cypress app. You can select which Test Suite you want to execute from Cypress app just by clicking on it (after launching Cypress app). Last but not least, there are other options available too (e.g. select browser to execute the tests, debug tests, settings, documentation, etc.). Check screenshot below: 
![image](https://github.com/CostasChou/CypressThesisE2ETests/assets/97087053/376ccf26-7c1b-4c46-81d0-8d7aebb97f67)

