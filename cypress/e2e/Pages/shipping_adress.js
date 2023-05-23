export class ShippingAdress{
    
    firstname_textbox = '#shipping_first_name'
    lastname_textbox = '#shipping_last_name'
    country_droplist = '#select2-shipping_country-container'
    streetadress_textbox = '#shipping_address_1'
    zipcode_textbox = '#shipping_postcode'
    towncity_textbox = '#shipping_city'
    
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
}
