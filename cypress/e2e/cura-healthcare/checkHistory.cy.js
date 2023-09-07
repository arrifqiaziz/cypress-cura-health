describe('Check History Page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login('John Doe', 'ThisIsNotAPassword')
  })

  it('Check history - not yet make appoinment', () => {
    cy.noHistory()
  })

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

  it.only('Check history - multiple appoinment', () => {
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
