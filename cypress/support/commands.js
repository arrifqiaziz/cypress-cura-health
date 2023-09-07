import menuBar from './pageObject/menuBar'
import loginPage from './pageObject/loginPage'
import profilePage from './pageObject/profilePage'
import homePage from './pageObject/homePage'
import historyPage from './pageObject/historyPage'

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
  profilePage.clickLogoutButton()
})

Cypress.Commands.add('checkProfile', () => {
  menuBar.clickProfilePage()
  profilePage.verifyURL()
  profilePage.checkProfileInfo()
  profilePage.clickLogoutButton()
})

Cypress.Commands.add(
  'makeAppointment',
  (facility, readmission, program, date, comment) => {
    homePage.makeAppoinment(facility, readmission, program, date, comment)
  }
)

Cypress.Commands.add('noHistory', () => {
  menuBar.clickHistoryPage()
  historyPage.verifyNoHistory()
})

Cypress.Commands.add('openHome', () => {
  menuBar.clickHomePage()
})

Cypress.Commands.add('CheckOneHistory', (facility, readmission, program, date, comment) => {
  menuBar.clickHistoryPage()
  historyPage.verifyOneHistory(facility, readmission, program, date, comment)
})

Cypress.Commands.add('CheckMultipleHistory', (facility, readmission, program, date, comment, no) => {
  menuBar.clickHistoryPage()
  historyPage.verifyMultipleHistory(facility, readmission, program, date, comment, no)
})
