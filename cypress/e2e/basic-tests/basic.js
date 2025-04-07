describe("basic test", () => {

  beforeEach("visit saucedemo", () => {
    cy.visit("https://www.saucedemo.com/");

  })

  it("login happy path", () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.url().should('not.include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('not.exist');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', 'inventory.html');
    cy.get('[data-test="primary-header"]').should('contain', 'Swag Labs');
    });



  it("Login Accepted usernames", () => {
    cy.get('[data-test="login-credentials"]').should("contain", "standard_user")
    cy.get('[data-test="login-credentials"]').should("contain", "locked_out_user")
    cy.get('[data-test="login-credentials"]').should("contain", "problem_user")
    cy.get('[data-test="login-credentials"]').should("contain", "performance_glitch_user")
    cy.get('[data-test="login-credentials"]').should("contain", "error_user")
    cy.get('[data-test="login-credentials"]').should("contain", "visual_user")

  })

  it("Login Errors", () => {
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    .and('have.text', 'Epic sadface: Username is required')
    
  })


})
