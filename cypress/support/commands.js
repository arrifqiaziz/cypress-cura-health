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
Cypress.Commands.add('login', (username, password) => {
  cy.get('#menu-toggle').should('be.visible').click()
  cy.contains('Login').should('be.visible').click()
  cy.get('#txt-username')
    .clear()
    .should('be.visible')
    .scrollIntoView()
    .type(username)
  cy.get('#txt-password')
    .clear()
    .should('be.visible')
    .scrollIntoView()
    .type(password)
  cy.screenshot()
  cy.get('#btn-login').should('be.visible').click()
  cy.url().should('contain', '#appointment')
  cy.screenshot()
})
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
