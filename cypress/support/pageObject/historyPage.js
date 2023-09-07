class historyPage {
  noHistory = 'No appointment'
  date = '.panel-heading'
  facility = '#facility'
  readmission = '#hospital_readmission'
  program = '#program'
  comment = '#comment'

  verifyNoHistory() {
    cy.contains(this.noHistory).should('be.visible').wait(1000)
  }

  verifyOneHistory(facility, readmission, program, date, comment) {
    cy.get(this.date).contains(date).should('be.visible')
    cy.get(this.facility).contains(facility).should('be.visible')
    cy.get(this.readmission).contains(readmission).should('be.visible')
    cy.get(this.program).contains(program).should('be.visible')
    cy.get(this.comment).contains(comment).should('be.visible')
  }

  verifyMultipleHistory(facility, readmission, program, date, comment, no) {
    cy.get(':nth-child(' + no + ') > .panel > .panel-heading').contains(date).should('be.visible')
    cy.get(':nth-child(' + no + ') > .panel > .panel-body > :nth-child(2) > #facility').contains(facility).should('be.visible')
    cy.get(':nth-child(' + no + ') > .panel > .panel-body > :nth-child(5) > #hospital_readmission').contains(readmission).should('be.visible')
    cy.get(':nth-child(' + no + ') > .panel > .panel-body > :nth-child(8) > #program').contains(program).should('be.visible')
    cy.get(':nth-child(' + no + ') > .panel > .panel-body > :nth-child(11) > #comment').contains(comment).should('be.visible')
  }
}

export default new historyPage()
