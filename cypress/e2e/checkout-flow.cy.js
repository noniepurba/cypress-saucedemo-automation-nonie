describe('SauceDemo Checkout Flow', () => {

  it('User completes checkout and returns to product page', () => {

    // Visit website
    cy.visit('https://www.saucedemo.com')

    // Login
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Verify products page
    cy.get('.title').should('contain', 'Products')

    // Add product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Open cart
    cy.get('.shopping_cart_link').click()

    // Click checkout
    cy.get('[data-test="checkout"]').click()

    // Fill checkout information
    cy.get('[data-test="firstName"]').type('voldemort')
    cy.get('[data-test="lastName"]').type('riddle')
    cy.get('[data-test="postalCode"]').type('66666')

    // Continue
    cy.get('[data-test="continue"]').click()

    // Verify checkout overview page
    cy.get('.title').should('contain', 'Checkout: Overview')

    // Finish order
    cy.get('[data-test="finish"]').click()

    // Verify order confirmation
    cy.get('.complete-header')
      .should('contain', 'Thank you for your order!')

    // Back to products page
    cy.get('[data-test="back-to-products"]').click()

    // Verify user returned to products page
    cy.get('.title').should('contain', 'Products')

  })

})