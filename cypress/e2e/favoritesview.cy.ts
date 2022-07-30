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
  });
});
