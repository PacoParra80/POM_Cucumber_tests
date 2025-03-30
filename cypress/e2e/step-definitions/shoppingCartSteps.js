import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { ShoppingCartPage } from "../pages/shoppingCartPage";

// Instancias de la clase
let shoppingCartPage = new ShoppingCartPage();


Given("I verify that no inventory item exists", () => {
  shoppingCartPage.checkNoInventoryItemExists();
});

Given("I verify that an inventory item is visible", () => {
  shoppingCartPage.checkInventoryItemIsVisible();
});


// Ejercicios 31/03/2025

Given("I Add to the cart the product {string}", (name) => {
  shoppingCartPage.addProductBYName(name);
});

Given("I go to the cart page", () => {
  shoppingCartPage.clickOnCartPage()
})

Given("I check {string} appears in the cart page", (name) => {
  shoppingCartPage.checkProductInCartList(name)
})

Given("I fill  correctly the formulary", () => {
  shoppingCartPage.fillCheckoutForm()
})

Given("I check that the product {string} appears with the price {string}", (element, price) => {
  shoppingCartPage.checkProductsAndPriceOnCheckout(element, price)
})

Given("In the screen appears the message {string}", (text) => {
  shoppingCartPage.checkBodyContainText(text)
})




