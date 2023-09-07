// This is object that got from Menu Bar
// I decide use own menubar POM because of it quite often called in test
// So to reduce duplicate code I use POM for Menu

class menuBar {
  menuBar = '#menu-toggle'
  home = 'Home'
  history = 'History'
  profile = 'Profile'
  login = 'Login'
  logout = 'Logout'

  clickMenuBar() {
    cy.get(this.menuBar).should('be.visible').click()
  }

  clickHomePage() {
    this.clickMenuBar()
    cy.contains(this.home).should('be.visible').click()
  }

  clickHistoryPage() {
    this.clickMenuBar()
    cy.contains(this.history).should('be.visible').click()
  }

  clickProfilePage() {
    this.clickMenuBar()
    cy.contains(this.profile).should('be.visible').click()
  }

  clickLoginPage() {
    this.clickMenuBar()
    cy.contains(this.login).should('be.visible').click()
  }

  clickLogout() {
    this.clickMenuBar()
    cy.contains(this.logout).should('be.visible').click()
  }
}

export default new menuBar()
