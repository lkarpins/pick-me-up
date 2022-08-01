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
});

//   it("Should display error page for 404 status code", () => {
//     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//       statusCode: 404
//     })
//     cy.visit('http://localhost:3000')
//       .get('.error-header')
//       .contains('Oops!')
//   })
//   it("Should display error page for 400 status code", () => {
//     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//       statusCode: 400
//     })
//     cy.visit('http://localhost:3000')
//       .get('.error-header')
//       .contains('Oops!')
//   })
// });












