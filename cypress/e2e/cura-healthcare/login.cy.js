describe('Login to application', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it.only('Login with valid username and valid password', () => {
    cy.login('John Doe', 'ThisIsNotAPassword')
  })

  it('Login with invalid username and password', () => {})

  it('Login with invalid username and invalid password', () => {})
})
