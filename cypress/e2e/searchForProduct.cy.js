import { describe, it } from "mocha";
import { SearchPage } from "./Pages/search_page";

describe("Search Test", function() {
  var searchPage;

  beforeEach(function() {
    searchPage = new SearchPage();
    cy.visit("https://skleptest.pl");
  });

  it("should perform search shirt", function() {
   // this.skip(); // Pomija wykonanie tego testu
    searchPage.enterSearchName("shirt");
    cy.get('#search-top-bar-submit > .fa').click()
    cy.wait(5000);
    cy.get('a').contains(/shirt/i).should('exist');
    
  });
  it("should perform search with no result", function() {
  //  this.skip(); // Pomija wykonanie tego testu
    searchPage.enterSearchName("splikiklik");
    cy.get('#search-top-bar-submit > .fa').click()
    cy.contains(/nothing found/i, { timeout: 5000 }).should('be.visible');
    
  });
});

