## Methods for combining actions and assertions

Methods that don't require page objects

| Method name | Args |
| --- | --- |
| setCookie | (name, value) |
| goToURL | (url) |
| pressKey | (key) |
| disableAnimations | none |
| clickElementWithText | (text) |
| clickElementThatContainsText | (text) |
| checkTitle | (expectedTitle) |
| checkTitleIsNot | (expectedTitle) |
| checkUrlIs | (url) |
| checkUrlIsNot | (url) |
| checkUrlContainsString | (expectedUrlPart) |
| checkCookieContains | (cookieName, expectedValue) |
| checkCookieDoesNotContain | (cookieName, expectedValue) |
| checkCookieContent | (cookieName, expectedValue) |
| checkCookieValueIsNot | (cookieName, expectedValue) |
| checkCookieExists | (cookieName) |
| checkCookieDoesNotExist | (cookieName) |

Methods that require page objects

| Method name | Args |
| --- | --- |
| goToPage | (pageName) |
| appendInputFieldValue | (value, locatorKey) |
| appendReactInputFieldValue | (text, locatorKey) |
| clearInputFieldValue | (locatorKey) |
| clickElement | (locatorKey) |
| clickElementInsideElement | (locatorKey) |
| setInputFieldValue | (locatorKey, value) |
| setReactInputFieldValue | (locatorKey, text) |
| setSelectValueByOptionText | (locatorKey, itemText) |
| submitForm | (locatorKey) |
| checkAttribute | (locatorKey, expectedAttribute, expectedValue) |
| hasClass | (locatorKey, className) |
| doesNotHaveClass | (locatorKey, className) |
| checkColour | (locatorKey, expectedColour, property) |
| checkContainsAnyText | (locatorKey) |
| checkDoesNotContainAnyText | (locatorKey) |
| checkContainsText | (locatorKey, expectedText) |
| checkDoesNotContainText | (locatorKey, expectedText) |
| checkElementBackgroundColour | (locatorKey, expectedColour) |
| checkElementBorderColour | (position, locatorKey, expectedColour) |
| checkElementColour | (locatorKey, expectedColour) |
| checkElementExists | (locatorKey) |
| checkElementDoesNotExist | (locatorKey) |
| checkElementExistsNTimes | (locatorKey, count) |
| checkElementDoesNotExistNTimes | (locatorKey, count) |
| checkInputIsEmpty | (locatorKey) |
| checkInputIsNotEmpty | (locatorKey) |
| checkInputValue | (locatorKey, expectedValue) |
| checkInputValueIsNot | (locatorKey, expectedValue) |
| checkIsEnabled | (locatorKey) |
| checkIsDisabled | (locatorKey) |
| checkIsOpenedInNewWindow | (href) |
| checkIsSelected | (locatorKey) |
| checkIsDeselected | (locatorKey) |
| setPageObjectThenCheckUrl | (pageName) |
| checkVisible | (locatorKey) |
| checkHidden | (locatorKey) |
