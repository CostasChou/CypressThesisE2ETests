import LogInWebpage from "../Webpages/LogInWebpage.js";
import Homepage from "../Webpages/Homepage.js";


Cypress.on('uncaught:exception', () => {
  // Suppress uncaught exceptions globally
  return false;
});

describe('TC9_HamburgerMenuItemsWhenCollapsedΟΚ', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it('TC9_HamburgerMenuItemsWhenCollapsedΟΚ', () => {
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
      logInWebpageObj.setUsername(data.username);
      logInWebpageObj.setPassword(data.password);
      logInWebpageObj.clickLogInButton();
      logInWebpageObj.userIsLoggedIn();
      cy.wait(6000);

      const homepageObj = new Homepage();
      homepageObj.scrollDownToLogOutButtonOfCentralMenu();
      homepageObj.verifyThatLogOutButtonOfCentralMenuIsVisible();
      homepageObj.clickCentralMenuToggle();
      homepageObj.verifyThatLogOutButtonOfCentralMenuIsVisible();
    })
  })
})

