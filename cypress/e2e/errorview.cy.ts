describe('Error View', () => {
  it("Should display error for a broken URL", () => {
    cy.intercept("http://localhost:3000/")
      cy.visit("http://localhost:3000/compliment")
      .dataCy("app-button").contains("Get New compliment").click()
      .intercept("https://complimentr.com/api")
      .visit("http://localhost:3000/compliments")
      .dataCy("error-heading")
      .contains("Something went wrong!")
  })

  it('Should display error message when there is a server error', () => {
    cy.intercept(
      'GET', 
      "https://complimentr.com/api", 
      { forceNetworkError: true }
    ).as('getNetworkFailure')
      cy.visit('http://localhost:3000/error')
      cy.wait('@getNetworkFailure')
      .dataCy("error-heading").contains("Something went wrong!")
  })
});












