export class BillingDetails{
    
    firstname_textbox = '#billing_first_name'
    lastname_textbox = '#billing_last_name'
    country_droplist = '#select2-billing_country-container'
    streetadress_textbox = '#billing_address_1'
    zipcode_textbox = '#billing_postcode'
    towncity_textbox = '#billing_city'
    phone_textbox = '#billing_phone'
    emailadress_textbox = '#billing_email'

    enterFirstName(firstname){
        cy.get(this.firstname_textbox).clear().type(firstname)
    }
    enterLastname(lastname){
        cy.get(this.lastname_textbox).clear().type(lastname)
    }
    enterCountry(country){
        cy.get(this.country_droplist).click()
        cy.contains('Poland').click({ force: true })
    }
    enterStreetadress(streetadress){
        cy.get(this.streetadress_textbox).clear().type(streetadress)
    }
    enterZipcode(zipcode){
        cy.get(this.zipcode_textbox).clear().type(zipcode)
    }
    enterTowncity(towncity){
        cy.get(this.towncity_textbox).clear().type(towncity)
    }
    enterPhone(phone){
        cy.get(this.phone_textbox).clear().type(phone)
    }
    enterEmailadress(email){
        cy.get(this.emailadress_textbox).clear().type(email)
    }

}
