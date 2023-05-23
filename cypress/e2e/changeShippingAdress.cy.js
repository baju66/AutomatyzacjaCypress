import { ShippingAdress } from "./Pages/shipping_adress"
import { LoginPage } from "./Pages/login_page"

const shippingAdress = new ShippingAdress()
const loginPage = new LoginPage()



describe('All Login Tests', function () {
    it('Login with valid credentials', function () {
        // Logowanie
        cy.visit('https://skleptest.pl/my-account/')
        loginPage.enterUsername('bmykcdkpqgtlydkwuc@bbitf.com')
        loginPage.enterPassword('Katana1234!')
        loginPage.clickLogin()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get('.u-column2 > .woocommerce-Address-title > .edit').click()
        shippingAdress.enterFirstName('Kamil')
        shippingAdress.enterLastname('Krak')
        shippingAdress.enterCountry()
        shippingAdress.enterStreetadress('ul. Biała 13')
        shippingAdress.enterZipcode('72-335')
        shippingAdress.enterTowncity('Warszawa')
        cy.get('.button').click()
        cy.contains('Address changed successfully.').should('exist');

        //Address changed successfully.

        
    })

})