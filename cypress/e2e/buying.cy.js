import { describe, it } from "mocha";
import { SearchPage } from "./Pages/search_page";
import { BillingDetails } from "./Pages/billing_details";
import { LoginPage } from "./Pages/login_page"

const loginPage = new LoginPage()

describe("Buing Test", function() {
    var searchPage;
    var billingdetails
  
    beforeEach(function() {
      searchPage = new SearchPage();
      billingdetails = new BillingDetails();
      cy.visit("https://skleptest.pl");
    });
  
    it("As a not logged user I should add 5 items and finilize ordering", function() {
 //     this.skip()
      searchPage.enterSearchName("shirt");
      cy.get('#search-top-bar-submit > .fa').click()
      cy.get('a').contains(/shirt/i).should('exist');
      cy.get('#post-62 > .entry-header > .tyche-blog-meta > .title > .entry-title > a').click();
      cy.wait(2000);
      cy.get('input[name="quantity"]').clear();
      cy.get('input[name="quantity"]').type('5');
      cy.get('.single_add_to_cart_button').click();
      cy.get('.woocommerce-message > .button').click();
      cy.get('.checkout-button').click();
      billingdetails.enterFirstName('Robert')
      billingdetails.enterLastname('Krak')
      billingdetails.enterCountry()
      billingdetails.enterStreetadress('ul. Biała 14')
      billingdetails.enterZipcode('72-333')
      billingdetails.enterTowncity('Warszawa')
      billingdetails.enterPhone('+48 666666666')
      billingdetails.enterEmailadress('bmykcdkpqgtlydkwuc@bbitf.com')
      cy.wait(3000)
      cy.get('#place_order').click()
      cy.wait(4000)
      cy.contains(/order received/i).should('exist');
    })
    it("As a logged user I should add 5 items and finilize ordering", function() {
        // this.skip(); // Pomija wykonanie tego testu
        cy.visit('https://skleptest.pl/my-account/')
        loginPage.enterUsername('bmykcdkpqgtlydkwuc@bbitf.com')
        loginPage.enterPassword('Katana1234!')
        loginPage.clickLogin()
        cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a').click()
        searchPage.enterSearchName("shirt");
         cy.get('#search-top-bar-submit > .fa').click()
         cy.get('a').contains(/shirt/i).should('exist');
         cy.get('#post-62 > .entry-header > .tyche-blog-meta > .title > .entry-title > a').click();
         cy.wait(2000);
         cy.get('input[name="quantity"]').clear();
         cy.get('input[name="quantity"]').type('5');
         cy.get('.single_add_to_cart_button').click();
         cy.get('.woocommerce-message > .button').click();
         cy.get('.checkout-button').click();
         cy.get('#place_order').click()
         cy.wait(2000)
         cy.contains(/order received/i).should('exist');
 /*        billingdetails.enterFirstName('Robert')
         billingdetails.enterLastname('Krak')
         billingdetails.enterCountry()
         billingdetails.enterStreetadress('ul. Biała 14')
         billingdetails.enterZipcode('72-333')
         billingdetails.enterTowncity('Warszawa')
         billingdetails.enterPhone('+48 666666666')
         billingdetails.enterEmailadress('bmykcdkpqgtlydkwuc@bbitf.com')
         cy.wait(3000)
         cy.get('#place_order').click()
         cy.wait(4000)
         cy.contains(/order received/i).should('exist');
    */    })

})