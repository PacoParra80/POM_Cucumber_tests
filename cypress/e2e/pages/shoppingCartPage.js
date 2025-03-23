export class ShoppingCartPage {
  
    
    checkNoInventoryItemExists() {
      cy.get('.inventory-item').should('not.exist');
    }
  
    checkInventoryItemIsVisible() {
      cy.get('.inventory-item').should('be.visible');
    }
  
  }
  