import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { CommonPage} from "../pages/commonPage"

//Instancias de clase
let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
  commonPage.visitLink(url);
 });

 Given("I check that the url doesn't include the endpoint {string}", (endpoint) => {
  commonPage.checkUrlnotInclude(endpoint);
 });

 Given("I check that the url include the endpoint {string}", (endpoint) => {
  commonPage.checkUrlInclude(endpoint);
 });
 
 Given("I click on the button with data-test {string}", (buttonByDataTest) => {
  commonPage.clickButtonByDataTest(buttonByDataTest);
 });

 Given("I type in the text box with data test {string} the text {string}", (texBoxByDataText, text) => {
  commonPage.typeInTextBoxByDataTest(texBoxByDataText, text);
 });

 Given("I verify that the data test {string} contains the text {string}", (elementByDataTest, text) => {
  commonPage.checkElementContains(elementByDataTest, text);
 });
 
 Given("I verify that the body contains the text {string}", (text) => {
  commonPage.checkBodyContainsText(text);
});

 Given("I verify that the body does not contain the text {string}", (text) => {
  commonPage.checkBodyNotContainsText(text);
});

 Given("I get the element with class {string}", (className) => {
  commonPage.getElementByClass(className);
});

