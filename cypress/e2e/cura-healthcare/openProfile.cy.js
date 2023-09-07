// This is all Test Case for Check Profile

describe('Check profile', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Open profile', () => {
    cy.login('John Doe', 'ThisIsNotAPassword')
    cy.checkProfile()
  })
})
