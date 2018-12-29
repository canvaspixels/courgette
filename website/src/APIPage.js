
import React from 'react';
// import { Link } from 'react-router-dom';
import './HomePage.css';
import CommonTemplate from './CommonTemplate';
import Table from './Table';

const APIPage = () => (
  <CommonTemplate className="">
    <h1>Methods for combining actions and assertions</h1>
    <h2>Methods that don’t require page objects</h2>

    <Table>
    <tbody>
    <tr>
<td>setCookie</td><td>(name, value)</td></tr><tr><td>goToURL</td><td>(url)</td></tr><tr><td>pressKey</td><td>(key)</td></tr><tr><td>disableAnimations</td><td>()</td></tr><tr><td>clickElementWithText</td><td>(text)</td></tr><tr><td>clickElementThatContainsText</td><td>(text)</td></tr><tr><td>checkTitle</td><td>(expectedTitle)</td></tr><tr><td>checkTitleIsNot</td><td>(expectedTitle)</td></tr><tr><td>checkUrlIs</td><td>(url)</td></tr><tr><td>checkUrlIsNot</td><td>(url)</td></tr><tr><td>checkUrlContainsString</td><td>(expectedUrlPart)</td></tr><tr><td>checkCookieContains</td><td>(cookieName, expectedValue)</td></tr><tr><td>checkCookieDoesNotContain</td><td>(cookieName, expectedValue)</td></tr><tr><td>checkCookieContent</td><td>(cookieName, expectedValue)</td></tr><tr><td>checkCookieValueIsNot</td><td>(cookieName, expectedValue)</td></tr><tr><td>checkCookieExists</td><td>(cookieName)</td></tr><tr><td>checkCookieDoesNotExist</td><td>(cookieName)</td></tr><tr><td>checkIsOpenedInNewWindow</td><td>(href)</td>
    </tr>
    </tbody>
    </Table>

    <h2>Methods that require page objects</h2>

    <Table>
    <tbody>
    <tr>
<td>goToPage</td><td>(pageName)</td></tr><tr><td>appendInputFieldValue</td><td>(value, locatorKey)</td></tr><tr><td>appendReactInputFieldValue</td><td>(text, locatorKey)</td></tr><tr><td>clearInputFieldValue</td><td>(locatorKey)</td></tr><tr><td>clickElement</td><td>(locatorKey)</td></tr><tr><td>clickElementInsideElement</td><td>(locatorKey)</td></tr><tr><td>setInputFieldValue</td><td>(locatorKey, value)</td></tr><tr><td>setReactInputFieldValue</td><td>(locatorKey, text)</td></tr><tr><td>setSelectValueByOptionText</td><td>(locatorKey, itemText)</td></tr><tr><td>submitForm</td><td>(locatorKey)</td></tr><tr><td>checkAttribute</td><td>(locatorKey, expectedAttribute, expectedValue)</td></tr><tr><td>hasClass</td><td>(locatorKey, className)</td></tr><tr><td>doesNotHaveClass</td><td>(locatorKey, className)</td></tr><tr><td>checkColour</td><td>(locatorKey, expectedColour, property)</td></tr><tr><td>checkContainsAnyText</td><td>(locatorKey)</td></tr><tr><td>checkDoesNotContainAnyText</td><td>(locatorKey)</td></tr><tr><td>checkContainsText</td><td>(locatorKey, expectedText)</td></tr><tr><td>checkDoesNotContainText</td><td>(locatorKey, expectedText)</td></tr><tr><td>checkElementBackgroundColour</td><td>(locatorKey, expectedColour)</td></tr><tr><td>checkElementBorderColour</td><td>(position, locatorKey, expectedColour)</td></tr><tr><td>checkElementColour</td><td>(locatorKey, expectedColour)</td></tr><tr><td>checkElementExists</td><td>(locatorKey)</td></tr><tr><td>checkElementDoesNotExist</td><td>(locatorKey)</td></tr><tr><td>checkElementExistsNTimes</td><td>(locatorKey, count)</td></tr><tr><td>checkElementDoesNotExistNTimes</td><td>(locatorKey, count)</td></tr><tr><td>checkInputIsEmpty</td><td>(locatorKey)</td></tr><tr><td>checkInputIsNotEmpty</td><td>(locatorKey)</td></tr><tr><td>checkInputValue</td><td>(locatorKey, expectedValue)</td></tr><tr><td>checkInputValueIsNot</td><td>(locatorKey, expectedValue)</td></tr><tr><td>checkIsEnabled</td><td>(locatorKey)</td></tr><tr><td>checkIsDisabled</td><td>(locatorKey)</td></tr><tr><td>checkIsSelected</td><td>(locatorKey)</td></tr><tr><td>checkIsDeselected</td><td>(locatorKey)</td></tr><tr><td>setPageObjectThenCheckUrl</td><td>(pageName)</td></tr><tr><td>checkVisible</td><td>(locatorKey)</td></tr><tr><td>checkHidden</td><td>(locatorKey)</td></tr><tr><td>checkFocus</td><td>(locatorKey)</td>
    </tr>
    </tbody>
    </Table>


  </CommonTemplate>
);

export default APIPage;
