// This is object that got from Home Page and Appointment Page
// Because after login the appointment is use home page also

class homePage {
  homeInfo = 'CURA Healthcare Service'
  homeInfo2 = 'We Care About Your Health'
  makeAppointmentButton = '#btn-make-appointment'
  hospitalReadmission = '#chk_hospotal_readmission'
  selectFacility = '#combo_facility'
  date = '#txt_visit_date'
  comment = '#txt_comment'
  submitAppointment = '#btn-book-appointment'
  appointmentConfirm = 'Appointment Confirmation'

  verifyURL() {
    cy.url().should('include', '#appointment')
  }

  verifyHomeInfo() {
    cy.get(this.homeInfo).should('be.visible')
    cy.get(this.homeInfo2).should('be.visible')
  }

  // This is code from make an appointment
  makeAppoinment(facility, readmission, program, date, comment) {
    cy.get(this.selectFacility).should('be.visible').select(facility)
    if (readmission == 'Yes') {                                             // This is a decision for readmission, if the value is Yes/true it clicked the checkbox  
      cy.get(this.hospitalReadmission).should('be.visible').check('Yes')    // And else it just validate the visibility, before it I use .check function but it throw error so it changed to now
    } else {
      cy.get(this.hospitalReadmission).should('be.visible')
    }
    cy.contains(program).should('be.visible').click()
    cy.get(this.date)
      .should('be.visible')
      .type(date + '{esc}')                                                 // I add {esc} for close the date picker
    cy.get(this.comment).should('be.visible').click().type(comment)
    cy.get(this.submitAppointment).should('be.visible').click()
    cy.contains(this.appointmentConfirm).should('be.visible')
    cy.url().should('include', '#summary')
  }
}

export default new homePage()
