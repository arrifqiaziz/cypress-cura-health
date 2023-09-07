// This is object that got from Profile Page

class profilePage {
  profileInfo = 'Under construction.'
  logoutButton = ':nth-child(3) > .btn'

  checkProfileInfo() {
    cy.contains(this.profileInfo).should('be.visible').wait(500)
  }

  clickLogoutButton() {
    cy.get(this.logoutButton).click()
  }

  verifyURL() {
    cy.url().should('include', '#profile')
  }
}

export default new profilePage()
