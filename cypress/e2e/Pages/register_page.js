export class RegisterPage{

    registerEmail_textbox = '#reg_email'
    registerPassword_textbox = '#reg_password'
    register_button = '.woocommerce-FormRow > .woocommerce-Button'


    enterEmailadress(email){
        cy.get(this.registerEmail_textbox).type(email)
    }

    enterPassword(password){
        cy.get(this.registerPassword_textbox).type(password)
    }

    clickRegister(){
        cy.get(this.register_button).click()
    }
}