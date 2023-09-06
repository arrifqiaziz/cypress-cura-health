describe('Login to application', () => {
  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
  })

  it.only('Login with valid username and valid password', () => {
    cy.get('#menu-toggle').click().should('be.visible')
    cy.contains('Login').click().should('be.visible')
    cy.get('#txt-username').clear().type('John Doe')
    cy.get('#txt-password').clear().type('ThisIsNotAPassword')
    cy.get('#btn-login').click()
    cy.url().should('contain', '#appointment')
  })

  it('Login with valid username and invalid password', () => {})

  it('Login with invalid username and valid password', () => {})

  it('Login with invalid username and invalid password', () => {})
})
