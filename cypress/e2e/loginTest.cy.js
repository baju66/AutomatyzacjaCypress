import { LoginPage } from "./Pages/login_page"

const loginPage = new LoginPage()

beforeEach(function(){
    cy.visit('https://skleptest.pl/my-account/')
})

describe('All Login Tests', function () {
    it('Login with valid credentials', function () {
        // Logowanie
        loginPage.enterUsername('bmykcdkpqgtlydkwuc@bbitf.com')
        loginPage.enterPassword('Katana1234!')
        loginPage.clickLogin()
        cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a').click()
    })

    it('Login with invalid username', function () {
        // Logowanie
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('Katana1234!')
        loginPage.clickLogin()
        cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a').click()
    })

    it('Login with invalid password', function () {
        // Logowanie
        loginPage.enterUsername('bmykcdkpqgtlydkwuc@bbitf.com')
        loginPage.enterPassword('admin12345')
        loginPage.clickLogin()
        cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a').click()
    })
})

describe('Login and Logout Test', function () {
    it('Login and Logout', function () {
        // Logowanie
        loginPage.enterUsername('bmykcdkpqgtlydkwuc@bbitf.com')
        loginPage.enterPassword('Katana1234!')
        loginPage.clickLogin()

        // Wylogowanie
        cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a').click()
    })
})
