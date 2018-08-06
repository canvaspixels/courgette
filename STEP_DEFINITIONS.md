## Step Definitions

Note that the words in italics are optional.

### Given...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I go to the 'PAGE_NAME' page | givengoToPage | PAGE_NAME should match the name of the page object file in your pages directory and the first argument to createPage in that same file. This step definition sets the current page object |
| the page url is 'URL' | givencheckUrl |  |
| the page url is not 'URL' | givencheckUrl |  |
| animations are disabled | givendisableAnimations |  |
| _the_ 'LOCATOR' is visible | givencheckVisibility |  |
| _the_ 'LOCATOR' is hidden | givencheckVisibility |  |
| _the_ 'LOCATOR' is enabled | givencheckIsEnabled |  |
| _the_ 'LOCATOR' is disabled | givencheckIsEnabled |  |
| _the_ 'LOCATOR' is selected | givencheckIsSelected |  |
| _the_ 'LOCATOR' is not selected | givencheckIsSelected |  |
| _the_ 'LOCATOR' is checked | givencheckIsSelected |  |
| _the_ 'LOCATOR' is not checked | givencheckIsSelected |  |
| _the_ 'LOCATOR' is on the page | givencheckElementExists |  |
| _the_ 'LOCATOR' is not on the page | givencheckElementExists |  |
| the title is 'LOCATOR' | givencheckTitle |  |
| the title is not 'LOCATOR' | givencheckTitle |  |
| _the_ 'LOCATOR' contains the text 'LOCATOR' | givencheckContainsText |  |
| _the_ 'LOCATOR' does not contain the text 'LOCATOR' | givencheckContainsText |  |
| _the_ 'LOCATOR' contains any text | givencheckContainsAnyText |  |
| _the_ 'LOCATOR' does not contain any text | givencheckContainsAnyText |  |
| _the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE' | givencheckAttribute |  |
| _the_ 'LOCATOR' is empty | givencheckInputIsEmpty |  |
| _the_ 'LOCATOR' is not empty | givencheckInputIsEmpty |  |
| the value of _the_ 'LOCATOR' is 'VALUE' | givencheckInputValue |  |
| the value of _the_ 'LOCATOR' is not 'VALUE' | givencheckInputValue |  |
| I set the cookie 'COOKIE_NAME' with value 'VALUE' | givensetCookie |  |
| the cookie 'COOKIE_NAME' is set to 'VALUE' | givencheckCookieContent |  |
| the cookie 'COOKIE_NAME' is not set to 'VALUE' | givencheckCookieContent |  |
| the cookie 'COOKIE_NAME' is set | givencheckCookieExists |  |
| the cookie 'COOKIE_NAME' is not set | givencheckCookieExists |  |

### When...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I click _the_ 'LOCATOR' | whenclickElement |  |
| I append 'LOCATOR' to 'LOCATOR' | whenappendInputFieldValue |  |
| I set 'LOCATOR' to 'LOCATOR' | whensetInputFieldValue |  |
| I append 'LOCATOR' to react field 'LOCATOR' | whenappendReactInputFieldValue |  |
| I set react field 'LOCATOR' to 'LOCATOR' | whensetReactInputFieldValue |  |
| I submit the _form_ 'LOCATOR' | whensubmitForm |  |
| I press 'KEY' | whenpressKey |  |
| I clear _the_ 'LOCATOR' | whenclearInputFieldValue |  |
| I&nbsp;select&nbsp;the&nbsp;option&nbsp;for&nbsp;select&nbsp;element&nbsp;'LOCATOR'&nbsp;with&nbsp;the&nbsp;text&nbsp;'VALUE' | whensetSelectValueByOptionText |  |

### Then...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I expect to eventually be on the 'PAGE_NAME' page | thencheckEventualUrlFromPOM | Using this changes the page object to the PAGE_NAME so any subsequent steps in that scenario will be pointing to that page |
| I expect the url 'URL' is opened in a new tab | thencheckIsOpenedInNewWindow |  |
| I expect the url 'URL' is opened in a new window | thencheckIsOpenedInNewWindow |  |
| I expect the url to contain 'STRING' | thencheckUrlContainsString |  |
| I expect the url to be 'STRING' | thencheckUrl |  |
| I expect the url to not be 'STRING' | thencheckUrl |  |
| I expect _the_ 'LOCATOR' to be visible | thencheckVisibility |  |
| I expect _the_ 'LOCATOR' to be hidden | thencheckVisibility |  |
| I expect the border colour of the 'LOCATOR' to be 'STRING' | thencheckElementBorderColour |  |
| I expect the colour of the 'LOCATOR' to be 'STRING' | thencheckElementColour |  |
| I expect the background colour of the 'LOCATOR' to be 'STRING' | thencheckElementBackgroundColour |  |
| I expect the title to be 'STRING' | thencheckTitle |  |
| I expect the title to not be 'STRING' | thencheckTitle |  |
| I expect _the_ 'LOCATOR' to contain the text 'STRING' | thencheckContainsText |  |
| I expect _the_ 'LOCATOR' to not contain the text 'STRING' | thencheckContainsText |  |
| I expect _the_ 'LOCATOR' to contain any text | thencheckContainsAnyText |  |
| I expect _the_ 'LOCATOR' to not contain any text | thencheckContainsAnyText |  |
| I expect _the_ 'LOCATOR' to appear exactly 'NUMBER' times | thencheckElementExistsNTimes |  |
| I expect _the_ 'LOCATOR' to not appear exactly 'NUMBER' times | thencheckElementExistsNTimes |  |
| I expect _the_ 'LOCATOR' to exist | thencheckElementExists |  |
| I expect _the_ 'LOCATOR' to not exist | thencheckElementExists |  |
| I expect _the_ 'LOCATOR' to be checked | thencheckIsSelected |  |
| I expect _the_ 'LOCATOR' to not be checked | thencheckIsSelected |  |
| I expect _the_ 'LOCATOR' to be selected | thencheckIsSelected |  |
| I expect _the_ 'LOCATOR' to not be selected | thencheckIsSelected |  |
| I expect _the_ 'LOCATOR' to be enabled | thencheckIsEnabled |  |
| I expect _the_ 'LOCATOR' to be disabled | thencheckIsEnabled |  |
| I expect cookie 'COOKIE_NAME' to contain 'STRING' | thencheckCookieContains |  |
| I expect cookie 'COOKIE_NAME' to not contain 'STRING' | thencheckCookieContains |  |
| I expect cookie 'COOKIE_NAME' to exist | thencheckCookieExists |  |
| I expect cookie 'COOKIE_NAME' to not exist | thencheckCookieExists |  |
| I expect _the_ 'LOCATOR' to have the class 'CLASS_NAME' | thencheckClass |  |
| I expect _the_ 'LOCATOR' to not have the class 'CLASS_NAME' | thencheckClass |  |
| I expect _the_ 'LOCATOR' to be focused | thencheckFocus |  |
| I expect _the_ 'LOCATOR' to be empty | thencheckInputIsEmpty |  |
| I expect _the_ 'LOCATOR' to not be empty | thencheckInputIsEmpty |  |
| I expect the value of _the_ 'LOCATOR' to be 'STRING'  | thencheckInputValue |  |
| I expect the value of _the_ 'LOCATOR' to not be 'STRING'  | thencheckInputValue |  |
| I&nbsp;expect&nbsp;_the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE' | thencheckAttribute |  |
| fail step and take screenshot | thendie |  |