export class CommonPage{

  visitLink(url) {
  cy.visit(url);
  }
  
  checkUrlnotInclude(endpoint) {
    cy.url().should('not.include', endpoint);
  }

  checkUrlInclude(endpoint) {
    cy.url().should('include', endpoint);
  }

  clickButtonByDataTest(buttonByDataTest) {
    cy.get(`[data-test="${buttonByDataTest}"]`).click();
  }

  typeInTextBoxByDataTest (texBoxByDataText, text) {
    cy.get(`[data-test="${texBoxByDataText}"]`).type(text);
   }

   getElementByDataTest (elementByDataTest) {
    return cy.get(`[data-test="${elementByDataTest}"]`)
   }

   // Better practices

   clickElementByDataTest(elementByDataTest) {
    this.getElementByDataTest(elementByDataTest).click()
   }

   typeElementByDataTest(elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).type(text)
   }

   checkElementContains (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('contain', text)
   }

   checkElementNotContains (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('not.contain', text)
   }

   clickElementByContent (elementByText) {
    cy.contains(elementByText).click()
   }

   clickButtonByText (text) {
    cy.get('inputbutton').contain(text).click()
   }

    // Verificar que en el body aparezca un texto
  checkBodyContainsText(text) {
    cy.get('body').should('contain', text);
  }

  // Verificar que en el body NO aparezca un texto
  checkBodyNotContainsText(text) {
    cy.get('body').should('not.contain', text);
  }

  // Obtener un elemento por su clase
  getElementByClass(className) {
    return cy.get(`.${className}`);
  }

   

   
 }