describe('Make Appointment', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login('John Doe', 'ThisIsNotAPassword')
  })

  it('Make one appointment', () => {
    cy.makeAppointment(
      'Hongkong CURA Healthcare Center',
      'Yes',
      'Medicaid',
      '27/09/2023',
      'Help! I am sick'
    )
  })

  it.only('Make appointment more than one', () => {
    cy.fixture('dataSetAppointment.json').then((dataAppointment) => {
      dataAppointment.forEach((data) => {
        cy.makeAppointment(
          data.facility,
          data.hospitalReadmission,
          data.healtcareProgram,
          data.visitDate,
          data.comment
        )
        cy.get('.text-center > .btn').should('be.visible').click()
      })
    })
  })
})
