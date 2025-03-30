import { CommonPage } from "./commonPage";


const inventoryItem = "inventory-item"
const productListDataTest = "inventory-list";

export class ShoppingCartPage extends CommonPage{
      
  checkNoInventoryItemExists() {
    this.getElementByClass("inventory-item").should('not.exist');
  }

  checkInventoryItemIsVisible() {
    //Usamos el valor declarado en la constante y en caso de que cambie el selector solo es necesario cambiarlo en un lugar
    this.getElementByClass(inventoryItem).should('be.visible');
  }

  checkInventoryItemStatus(assertion) {
    // Esta función tiene la versatilidad de poder hacer cualquier aserción como parámetro
    this.getElementByClass(inventoryItem).should(assertion);
  }

  addProductBYName(name) {
    this.getElementByDataTest(productListDataTest).contains('.inventory_item_description', name)
    .find('.btn_inventory ').click()
    
  }

  clickOnCartPage() {
    this.clickButtonByDataTest("shopping-cart-link")
  }

  checkProductInCartList(name) {
    this.getElementByDataTest("cart-list").should('contain', name)
  }

  fillCheckoutForm() {
    this.typeElementByDataTest("firstName", "Paco")
    this.typeElementByDataTest("lastName", "Parra")
    this.typeElementByDataTest("postalCode", "29006")
  }

  checkProductsAndPriceOnCheckout(element, price) {
    this.getElementByDataTest("cart-list").contains(element)
    .parent().find('[data-test="inventory-item-price"]').should('have.text', price)
  }

  

}