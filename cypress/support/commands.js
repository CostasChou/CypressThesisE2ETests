/// <reference types="Cypress"/>
// <reference types="cypress-xpath"/>
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Custom command
Cypress.Commands.add('validateNewTabUrl', (url) => {
    cy.window().then((win) => {
      // Get the list of window handles
      const windows = Object.keys(win.top);
  
      // Check if there is more than one window handle
      if (windows.length > 1) {
        // Switch to the newly opened tab or window
        cy.window({ log: false }).then((newWin) => {
          // Check the URL of the newly opened tab or window
          expect(newWin.location.href).to.equal(url);
        });
      } else {
        throw new Error('No new tab or window was opened.');
      }
    });
  });