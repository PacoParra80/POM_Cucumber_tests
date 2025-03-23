#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"
 
# Los Scenarios son los tests (lo que antes era "it")
#  Scenario: login happy path
#   Given I type standar user in login page
#   And I type the correct password in login page
#   And I check that url doesn't contain the endpoint inventory.html
#   When I click on the login button
#   Then I check url include the endpoint inventory.html

# Scenario: simple login
#   Given I login with valid user and password

#  Scenario: Better login
#   Given I type the user name "standard_user"
#   And I type the password "secret_sauce"
#   And I check that the url doesn't include the endpoint "inventory.html"
#   When I click on the button with data-test "login-button"
#   Then I check that the url include the endpoint "inventory.html"

#  Scenario: The very best login test
#   Given I type in the text box with data test "username" the text "standard_user"
#   And I type in the text box with data test "password" the text "secret_sauce"
#   And I check that the url doesn't include the endpoint "inventory.html"
#   When I click on the button with data-test "login-button"
#   Then I check that the url include the endpoint "inventory.html"



 Scenario: Accepted usernames assertion
  Given I verify that the data test "login-credentials" contains the text "standard_user"
  And I verify that the data test "login-credentials" contains the text "locked_out_user"
  And I verify that the data test "login-credentials" contains the text "problem_user"
  And I verify that the data test "login-credentials" contains the text "performance_glitch_user"
  And I verify that the data test "login-credentials" contains the text "error_user"
  And I verify that the data test "login-credentials" contains the text "visual_user"




 Scenario: Username is required
    Given I type the correct password in login page
    And I click on the login button
    Then I verify that the error message is "Epic sadface: Username is required"

  Scenario: Password is required
    Given I type the user name "standard_user"
    And I click on the login button
    Then I verify that the error message is "Epic sadface: Password is required"

  Scenario: Username and password do not match
    Given I type the user name "wrong_user"
    And I type the password "wrong_password"
    And I click on the login button
    Then I verify that the error message is "Epic sadface: Username and password do not match any user in this service"

  Scenario: User is locked out
    Given I type the user name "locked_out_user"
    And I type the correct password in login page
    And I click on the login button
    Then I verify that the error message is "Epic sadface: Sorry, this user has been locked out."




  Scenario: Three functions
    Given I verify that the body contains the text "Swag Labs"
    And I verify that the body does not contain the text "Paco"
    Then I get the element with class "login_logo"



    
  
