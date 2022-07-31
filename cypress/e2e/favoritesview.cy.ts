import adviceFavorite from "../fixtures/adviceFavorite.json";

describe("PickMeUp FavoriesView", () => {
  describe("Initial View", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/favorites");
    });

    afterEach(() => {
      cy.visit("http://localhost:3000/favorites");
    });

    it("should load with no saved favorites", () => {
      cy.window()
        .its("localStorage")
        .invoke("getItem", "complimentFavorite")
        .should("not.exist");
      cy.window()
        .its("localStorage")
        .invoke("getItem", "adviceFavorite")
        .should("not.exist");
    });

    it("should display a message of no favorites saved in each favoritesContainer", () => {
      cy.dataCy("compliment-section").contains("No Favorites Saved");
      cy.dataCy("advice-section").contains("No Favorites Saved");
    });

    it("should route you home when you click on the back to home button", () => {
      cy.dataCy("home-button").click().url().should("include", "/");
    });

    it("should route you home when you click on the logo", () => {
      cy.dataCy("logo").click().url().should("include", "/");
    });
  });

  describe("With favorites view", () => {
    beforeEach(() => {
      cy.readFile('./cypress/fixtures/complimentFavorite.json').then((json) => {
        localStorage.setItem("complimentFavorite", JSON.stringify(json))
      })
      cy.readFile('./cypress/fixtures/adviceFavorite.json').then((json) => {
        localStorage.setItem("adviceFavorite", JSON.stringify(json))
      })
      cy.visit("http://localhost:3000/favorites");
    });

    afterEach(() => {
      cy.clearLocalStorage()
    })

    it("should have saved favorites", () => {
      cy.window()
        .its("localStorage")
        .invoke("getItem", "complimentFavorite")
        .should("exist");
      cy.window()
        .its("localStorage")
        .invoke("getItem", "adviceFavorite")
        .should("exist");
    });
  });
});
