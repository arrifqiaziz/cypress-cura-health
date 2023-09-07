// This is all Test Case for Login

describe('Login to application', () => {
  beforeEach(() => {
    cy.visit('')
  })

  // First login it use direct name in code
  // Otherwise I can use from fixtures but let it used in other test case
  it('Login with valid username and valid password', () => {
    cy.login('John Doe', 'ThisIsNotAPassword')
  })

  // For invalid login it use data from fixtures so it can test multiple data
  it('Login with invalid username and password', () => {
    cy.fixture('dataSetAccount.json').then((dataAccount) => {
      dataAccount.invalidAccount.forEach((data) => {
        cy.login(data.userName, data.password)
        cy.verifyError()
      })
    })
  })
})
