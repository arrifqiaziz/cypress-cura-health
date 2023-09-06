Cypress.Commands.add('login', (username, password) => {
  cy.get('#menu-toggle').should('be.visible').click()
  cy.contains('Login').should('be.visible').click()
  cy.url().should('include', '#login')
  cy.get('#txt-username')
    .clear()
    .should('be.visible')
    .type(username)
  cy.get('#txt-password').clear().should('be.visible').type(password)
  cy.get('#btn-login').should('be.visible').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('#menu-toggle').should('be.visible').click()
  cy.contains('Logout').should('be.visible').click()
})

Cypress.Commands.add('logoutFromProfile', () => {
  cy.get('#menu-toggle').should('be.visible').click()
  cy.contains('Profile').should('be.visible').click().wait(5000)
  cy.url().should('include', '#profile')
  cy.get('[class="btn btn-default"]').should('be.visible').click()
})
