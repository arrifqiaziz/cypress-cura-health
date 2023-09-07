// This is all Test Case for Check History

describe('Check History Page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login('John Doe', 'ThisIsNotAPassword')
  })

  it('Check history - not yet make appoinment', () => {
    cy.noHistory()
  })

  // Before it check it should add an appointment first
  it('Check history - one appoinment', () => {
    cy.makeAppointment(
      'Hongkong CURA Healthcare Center',
      'Yes',
      'Medicaid',
      '27/09/2023',
      'Help! I am sick'
    )
    cy.CheckOneHistory(
      'Hongkong CURA Healthcare Center',
      'Yes',
      'Medicaid',
      '27/09/2023',
      'Help! I am sick'
    )
  })

  // For multiple appointment it slight tricky because I want to validate every data in create appointment and history
  // So I decide to call data JSON twice to validate every data on it
  it('Check history - multiple appoinment', () => {
    cy.fixture('dataSetAppointment.json').then((dataAppointment) => {
      dataAppointment.forEach((data) => {
        cy.makeAppointment(
          data.facility,
          data.hospitalReadmission,
          data.healtcareProgram,
          data.visitDate,
          data.comment
        )
        cy.get('.text-center > .btn').should('be.visible').wait(1000).click()
      })
    })

    cy.fixture('dataSetAppointment.json').then((dataAppointment) => {
      dataAppointment.forEach((data) => {
        cy.CheckMultipleHistory(
          data.facility,
          data.hospitalReadmission,
          data.healtcareProgram,
          data.visitDate,
          data.comment,
          data.no
        )
      })
    })
  })
})
