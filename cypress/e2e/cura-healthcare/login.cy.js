describe('Login to application', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it.only('Login with valid username and valid password', () => {
    cy.get('#menu-toggle').should('be.visible').click()
    cy.contains('Login').should('be.visible').click()
    cy.get('#txt-username')
      .clear()
      .should('be.visible')
      .scrollIntoView()
      .type('John Doe')
    cy.get('#txt-password')
      .clear()
      .should('be.visible')
      .scrollIntoView()
      .type('ThisIsNotAPassword')
    cy.screenshot()
    cy.get('#btn-login').should('be.visible').click()
    cy.url().should('contain', '#appointment')
    cy.screenshot()
  })

  it('Login with valid username and invalid password', () => {})

  it('Login with invalid username and valid password', () => {})

  it('Login with invalid username and invalid password', () => {})
})
