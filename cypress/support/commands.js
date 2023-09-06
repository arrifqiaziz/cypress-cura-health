import menuBar from './pageObject/menuBar'
import loginPage from './pageObject/loginPage'
import profilePage from './pageObject/profilePage'

Cypress.Commands.add('login', (username, password) => {
  menuBar.clickLoginPage()
  loginPage.verifyURL()
  loginPage.fillUsername(username)
  loginPage.fillPassword(password)
  loginPage.clickLoginButton()
})

Cypress.Commands.add('logout', () => {
  menuBar.clickLogout()
})

Cypress.Commands.add('logoutFromProfile', () => {
  menuBar.clickProfilePage()
  profilePage.verifyURL()
  profilePage.checkProfileInfo()
  profilePage.clickLogoutButton()
})
