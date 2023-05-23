export class SearchPage {
    search_textbox = '#search-field-top-bar'
  
    enterSearchName(searchName) {
      cy.get(this.search_textbox).type(searchName)
    }
  }
  