Feature: Shopping process suite

Background:
  Given I login and keep the sesion for the standar_user

Scenario: "Complete checkout process with two products in the cart"
  Given I Add to the cart the product "Sauce Labs Backpack"
  And I Add to the cart the product "Sauce Labs Onesie"
  And I go to the cart page
  And I check "Sauce Labs Backpack" appears in the cart page
  And I check "Sauce Labs Onesie" appears in the cart page
  And I check that the element with data-test "shopping-cart-badge" contain the text "2"
  When I click on the button with data-test "checkout"
  And I check that the url include the endpoint "checkout-step-one"
  And I fill  correctly the formulary
  And I click on the button with data-test "continue"
  And I check that the url include the endpoint "checkout-step-two"
  And I check that the product "Sauce Labs Backpack" appears with the price "$29.99"
  And I check that the product "Sauce Labs Onesie" appears with the price "$7.99"
  And I click on the button with data-test "finish"
  Then I check that the url include the endpoint "checkout-complete"
  And In the screen appears the message "Thank you for your order!"
  And I click on the button with data-test "back-to-products"
  And I check that the element with data-test "shopping-cart-badge" should "not.exist"