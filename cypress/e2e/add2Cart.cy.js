
it('Add a product to cart from Main Page and click view cart btn to see cart', () => {
    cy.visit("https://skleptest.pl");
    cy.get('#tyche_products-1 > .row > .col-sm-9 > .owl-carousel > .owl-stage-outer > .owl-stage > :nth-child(1) > .item > .tyche-product > .tyche-product-body > .ajax_add_to_cart').click();
    cy.contains(/view cart/i).should('be.visible');
    cy.get('.added_to_cart').click();
    cy.url({ timeout: 5000, failOnTimeout: false }).should('include', '/cart');
    cy.contains('Product', { timeout: 5000 }).should('exist');
})

it("Add a product to cart from Main Page and click Top Cart btn to see cart", () => {
    cy.visit("https://skleptest.pl");
    cy.get('#tyche_products-1 > .row > .col-sm-9 > .owl-carousel > .owl-stage-outer > .owl-stage > :nth-child(1) > .item > .tyche-product > .tyche-product-body > .ajax_add_to_cart').click();
    cy.wait(4000)
    cy.get('.top-cart').click();
    cy.url({ timeout: 5000, failOnTimeout: false }).should('include', '/cart');
    cy.contains('Product', { timeout: 5000 }).should('exist');
})