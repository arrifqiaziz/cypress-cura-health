describe('Login to application', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Login with valid username and valid password', () => {
    cy.login('John Doe', 'ThisIsNotAPassword')
  })

  it('Login with invalid username and password', () => {
    cy.fixture('dataSetAccount.json').then((dataAccount) => {
      dataAccount.invalidAccount.forEach((data) => {
        cy.login(data.userName, data.password)
        cy.contains('Login failed! Please ensure the username and password are valid.')
          .should('be.visible')
          .wait(1000)
      })
    })
  })
})
