describe("PickMeUp SelectionsView", () => {
  describe("Compliment View", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://complimentr.com/api", {
        fixture: "compliment1",
      });
      cy.visit("http://localhost:3000/compliment");
    });

    afterEach(() => {
      cy.clearLocalStorage();
    });

    it("should display a compliment", () => {
      cy.dataCy("selection-view-text").contains(
        "they say you are extremely phenomenal"
      );
    });

    it("should be able to favorite a compliment when heart icon clicked", () => {
      cy.dataCy("selection-view-text").contains(
        "they say you are extremely phenomenal"
      );
      cy.dataCy("favorite-icon").click();
      cy.window()
        .its("localStorage")
        .invoke("getItem", "complimentFavorite")
        .should("contain", "they say you are extremely phenomenal");
    });

    it("should be able to un-favorite a compliment when heart icon clicked", () => {
      cy.dataCy("selection-view-text").contains(
        "they say you are extremely phenomenal"
      );
      cy.dataCy("favorite-icon").click();
      cy.window()
        .its("localStorage")
        .invoke("getItem", "complimentFavorite")
        .should("contain", "they say you are extremely phenomenal");
      cy.dataCy("unfavorite-icon").click();
      cy.window()
        .its("localStorage")
        .invoke("getItem", "complimentFavorite")
        .should("not.contain", "they say you are extremely phenomenal");
    });

    it("should display a new compliment when 'Get New Compliment' button clicked", () => {
      cy.dataCy("app-button").contains("Get New compliment").click();
      cy.intercept("GET", "https://complimentr.com/api", {
        fixture: "compliment2",
      });
      cy.visit("http://localhost:3000/compliment");
      cy.dataCy("selection-view-text").contains(
        "i must say: you have a totally hot demeanour"
      );
    });

    it("should route you home when you click on the logo", () => {
      cy.dataCy("logo").click().url().should("include", "/");
    });
  });

  describe("Advice View", () => {
    beforeEach(() => {
      cy.intercept("GET", "https://api.adviceslip.com/advice", {
        fixture: "advice1",
      });
      cy.visit("http://localhost:3000/advice");
    });

    afterEach(() => {
      cy.visit("http://localhost:3000/advice");
    });

    it("should display advice", () => {
      cy.dataCy("selection-view-text").contains(
        "Make choices and dont look back."
      );
    });
  });
});
