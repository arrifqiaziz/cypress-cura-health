// This is all Test Case for Logout

describe('Logout from application', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Logout from profile page', () => {
    cy.login('John Doe', 'ThisIsNotAPassword')
    cy.logoutFromProfile()
  })

  it('Logout from menubar', () => {
    cy.login('John Doe', 'ThisIsNotAPassword')
    cy.logout()
  })
})
