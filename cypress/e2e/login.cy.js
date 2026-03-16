describe('SauceDemo Login Test', () => {
  const users = [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user'
  ]

  users.forEach((username) => { 
    it(`Login with valid credential username: ${username}`, () => {
      cy.visit('https://www.saucedemo.com')
      cy.get('#user-name').type(username)
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.url().should('include', 'inventory')
      cy.wait(2000)
      cy.get('button#react-burger-menu-btn').click()
      cy.get('[data-test="logout-sidebar-link"]').click()
      cy.url().should('eq','https://www.saucedemo.com/')
    })
  })
})