describe('SauceDemo Add Product to Cart', () => {

  it('User can add a product to the cart', () => {

    // Open website
    cy.visit('https://www.saucedemo.com')

    // Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Verify inventory page
    cy.url().should('include', 'inventory')

    // Add product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Verify cart badge shows 1 item
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1')

  })

})