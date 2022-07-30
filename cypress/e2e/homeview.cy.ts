describe('Home view page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("should display a title", () => {
    cy.contains("nav", "PickMeUp")
  })

  it("should contain a SEE FAVORITES button in navigation bar", () => {
    cy.contains("See Favorites").click()
    //add a redirect page to test it goes to the see favorites page
  })

  it("should contain a compliment section", () => {
    cy.contains("nav", "PickMeUp")
    //here we will test for the compliment heading 
    //the get compliment button
    //and the redirection to the compliment page
  })

  it("should contain an advice section", () => {
    cy.contains("nav", "PickMeUp")
    //here we will test for the advice heading 
    //the get advice button
    //and the redirection to the advice page
  })
})
