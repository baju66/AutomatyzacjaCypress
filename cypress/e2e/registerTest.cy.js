import { RegisterPage } from "./Pages/register_page"

const registerPage = new RegisterPage()

beforeEach(function(){
    cy.visit('https://skleptest.pl/my-account/')
})

describe('All Register Tests', function () {
    it('register with valid credentials', function () {
        registerPage.enterEmailadress('bmykcdkpqgtlydkwuc@bbitf.com')
        registerPage.enterPassword('Katana1234!')
        registerPage.clickRegister({force: true})
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
    })

    it('register with invalid email adress', function () {
        // Logowanie
        registerPage.enterEmailadress('nyxofotbfqgxlmzgrlbbitj.com');
        registerPage.enterPassword('Katana1234!');
        cy.get('.woocommerce-FormRow > .woocommerce-Button').click();
        cy.wait(2000);
        // Sprawdzenie czy alert poprawnie wyświetla komunikat o braku @
        cy.get('[type="email"]').then(($input) => {
            expect($input[0].validationMessage).to.contains('Uwzględnij znak „@” w adresie e-mail')
        })
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
});
    it('register with no password', function () {
        registerPage.enterEmailadress('nyxofotbfqgxlmzgrl@bbitj.com')
        registerPage.clickRegister()
        cy.contains('Error: Please enter an account password.').should('exist');
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
    })
    it('register with no email and password', function () {
        registerPage.clickRegister()
        cy.contains('Error: Please provide a valid email address.').should('exist');
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
    })
})



