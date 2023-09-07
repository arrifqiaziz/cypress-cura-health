describe('Make Appointment', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it.only('Make appointment', () => {
    cy.login('John Doe', 'ThisIsNotAPassword')
    cy.makeAppointment(
      'Hongkong CURA Healthcare Center',
      false,
      'Medicaid',
      '27/09/2023',
      'Aku'
    )
  })

  it('Make appointment more than one', () => {})

  it('Make appointment - not yet login', () => {})
})
