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
