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

    it("should route you to favorites when 'See favorites' button clicked", () => {
      cy.dataCy("app-button")
        .contains("See Favorites")
        .click()
        .url()
        .should("include", "/favorites");
    });

    it("should route you home when you click on the 'X-icon'", () => {
      cy.dataCy("x-icon").click().url().should("include", "/");
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
      cy.clearLocalStorage();
    });

    it("should display advice", () => {
      cy.dataCy("selection-view-text").contains(
        "Make choices and dont look back."
      );
    });

    it("should be able to favorite advice when heart icon clicked", () => {
      cy.dataCy("selection-view-text").contains(
        "Make choices and dont look back."
      );
      cy.dataCy("favorite-icon").click();
      cy.window()
        .its("localStorage")
        .invoke("getItem", "adviceFavorite")
        .should("contain", "Make choices and dont look back.");
    });

    it("should be able to un-favorite advice when heart icon clicked", () => {
      cy.dataCy("selection-view-text").contains(
        "Make choices and dont look back."
      );
      cy.dataCy("favorite-icon").click();
      cy.window()
        .its("localStorage")
        .invoke("getItem", "adviceFavorite")
        .should("contain", "Make choices and dont look back.");
      cy.dataCy("unfavorite-icon").click();
      cy.window()
        .its("localStorage")
        .invoke("getItem", "adviceFavorite")
        .should("not.contain", "Make choices and dont look back.");
    });

    it("should display different advice when 'Get New Advice' button clicked", () => {
      cy.dataCy("app-button").contains("Get New advice").click();
      cy.intercept("GET", "https://api.adviceslip.com/advice", {
        fixture: "advice2",
      });
      cy.visit("http://localhost:3000/advice");
      cy.dataCy("selection-view-text").contains(
        "Try going commando to an important meeting, NB: don't wear a skirt."
      );
    });

    it("should route you to favorites when 'See favorites' button clicked", () => {
      cy.dataCy("app-button")
        .contains("See Favorites")
        .click()
        .url()
        .should("include", "/favorites");
    });

    it("should route you home when you click on the 'X-icon'", () => {
      cy.dataCy("x-icon").click().url().should("include", "/");
    });
  });
});
