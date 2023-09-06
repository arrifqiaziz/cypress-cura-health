Cypress.Commands.add('login', (username, password) => {
  cy.get('#menu-toggle').should('be.visible').click()
  cy.contains('Login').should('be.visible').click()
  cy.get('#txt-username')
    .clear()
    .should('be.visible')
    .scrollTo('center')

    .type(username)
  cy.get('#txt-password').clear().should('be.visible').type(password)
  cy.screenshot()
  cy.get('#btn-login').should('be.visible').click()
  cy.url().should('include', '#login')
  cy.screenshot()
})

Cypress.Commands.add('logout', () => {
  cy.get('#menu-toggle').should('be.visible').click()
  cy.contains('Logout').should('be.visible').click()
})

Cypress.Commands.add('logoutFromProfile', () => {
  cy.get('#menu-toggle').should('be.visible').click()
  cy.contains('Profile').should('be.visible').click().wait(500)
  cy.url().should('include', '#profile')
  cy.contains('Logout').should('be.visible').click()
})
