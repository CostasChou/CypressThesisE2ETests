import LogInWebpage from "../Webpages/LogInWebpage.js";
import LogOutWebpage from "../Webpages/LogOutWebpage.js";
import Homepage from "../Webpages/Homepage.js";

//Catch uncaught exception thrown by the web app
Cypress.on('uncaught:exception', () => {
  // Suppress uncaught exceptions globally
  return false;
});

//Test Suite name
describe('TC02_LogOutOK', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  //Test name
  it('TC02_LogOutOK', () => {
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

    //Execute Test using parameters defined in fixtures folder
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
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      const homepageObj = new Homepage();
      homepageObj.clickAmDropDownList(); 
      homepageObj.clickLogOutChoiceOfAmDropDownList();
      cy.wait(6000);

      const logOutWebpage = new LogOutWebpage();
      logOutWebpage.validateLogOut();
      // cy.wait(6000);
    })
  })
})

