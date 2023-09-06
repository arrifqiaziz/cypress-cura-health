class LoginPage {
  usernameField = 'input[name="username"]'
  passwordField = 'input[name="password"]'
  submitButton = 'button[type="submit"]'
  errorLogin =
    'Login failed! Please ensure the username and password are valid.'

  fillUsername(username) {
    cy.get(this.usernameField).clear().should('be.visible').type(username)
  }

  fillPassword(password) {
    cy.get(this.passwordField).clear().should('be.visible').type(password)
  }

  clickLoginButton() {
    cy.get(this.submitButton).should('be.visible').click()
  }

  verifyURL() {
    cy.url().should('include', '#login')
  }
}

export default new LoginPage()
