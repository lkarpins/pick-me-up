describe('Home view page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });

  it("should display a title", () => {
    cy.get('[data-cy="logo"]').contains("PickMeUp")
  });

  it("should contain a SEE FAVORITES button in navigation bar", () => {
    cy.get('[data-cy="app-button"]').contains("See Favorites").click()
    .url().should("include", "/favorites")
  });

  it("should contain a compliment section", () => {
    cy.get('[data-cy="selection-heading"]')
      .get('[data-cy="selection-heading"]').contains("Are you looking for a confidence boost?")
      .get('[data-cy="app-button"]').contains("Get Compliment").click()
      .url().should("include", "/compliment")
  });

  it("should contain an advice section", () => {
    cy.get('[data-cy="selection-heading"]')
      .get('[data-cy="selection-heading"]').contains("Are you looking for sage wisdom?")
      .get('[data-cy="app-button"]').contains("Get Advice").click()
      .url().should("include", "/advice")
  });
});
