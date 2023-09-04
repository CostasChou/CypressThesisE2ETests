import LogInWebpage from "../Webpages/LogInWebpage.js";

Cypress.on('uncaught:exception', () => {
  // Suppress uncaught exceptions globally
  return false;
});

describe('TC10_LogInWithoutEnteringUsernameΚΟ', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it('TC10_LogInWithoutEnteringUsernameΚΟ', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.visit('https://sso.ihu.gr/login?service=https%3A%2F%2Funiportal.ihu.gr%2Flogin%2Fcas');
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.fixture('uniportal').then((data) => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      const logInWebpageObj = new LogInWebpage();
      logInWebpageObj.setPassword(data.password);
      logInWebpageObj.clickLogInButton();
      logInWebpageObj.userIsNotLoggedIn();
      logInWebpageObj.verifyThatErrorAboutMissingUsernameIsDisplayed();
      cy.wait(4000);
    })
  })
})

