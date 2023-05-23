import { BillingDetails } from "./Pages/billing_details"
import { LoginPage } from "./Pages/login_page"

const loginPage = new LoginPage()
const billingdetails = new BillingDetails();


describe('All Login Tests', function () {
    it('Login with valid credentials', function () {
        // Logowanie
        cy.visit('https://skleptest.pl/my-account/')
        loginPage.enterUsername('bmykcdkpqgtlydkwuc@bbitf.com')
        loginPage.enterPassword('Katana1234!')
        loginPage.clickLogin()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get('.u-column1 > .woocommerce-Address-title > .edit').click()
        billingdetails.enterFirstName('Kamil')
        billingdetails.enterLastname('Krak')
        billingdetails.enterCountry()
        billingdetails.enterStreetadress('ul. Biała 13')
        billingdetails.enterZipcode('72-335')
        billingdetails.enterTowncity('Warszawa')
        billingdetails.enterPhone('+48666666666')
        cy.get('.button').click()
        cy.contains('Address changed successfully.').should('exist');

        //Address changed successfully.

        
    })

})