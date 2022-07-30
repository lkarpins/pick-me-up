describe("PickMeUp FavoriesView", () => {
  describe("Initial View", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/favorites");
    });

    it("should load with no saved favorites", () => {
      cy.window()
        .its("localStorage")
        .invoke("getItem", "complimentFavorites")
        .should("not.exist");
      cy.window()
        .its("localStorage")
        .invoke("getItem", "adviceFavorites")
        .should("not.exist");
    });

    it("should display a message of no favorites saved in each favoritesContainer", () => {
      cy.dataCy("compliment-section").contains("No Favorites Saved");
      cy.dataCy("advice-section").contains("No Favorites Saved");
    });
  });
});
