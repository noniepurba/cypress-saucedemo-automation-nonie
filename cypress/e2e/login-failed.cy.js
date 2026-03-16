describe('SauceDemo Failed Login Test', () => {
    const invalidUsers = [
        {username: 'locked_out_user', password: 'secret_sauce'},
        {username: 'standard_user', password: 'wrong_password'}
    ]

    invalidUsers.forEach((user) => {

        it(`Login should fail for ${user.username}`, () => {

        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type(user.username)
        cy.get('#password').type(user.password)
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('be.visible')
    })
})
})