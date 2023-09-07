// This is all Test Case for Make Appointment

describe('Make Appointment', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login('John Doe', 'ThisIsNotAPassword')
  })

  // Make only one appointment that data direct write in code
  it('Make one appointment', () => {
    cy.makeAppointment(
      'Hongkong CURA Healthcare Center',
      'Yes',
      'Medicaid',
      '27/09/2023',
      'Help! I am sick'
    )
  })

  // Make multiple appointment that data got from JSON file in fixtures
  // No matter how many the data is, but for example the fixtures use 4 data only
  it('Make multiple appointment', () => {
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
  })
})
