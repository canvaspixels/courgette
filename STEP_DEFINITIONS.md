# Available Step Definitions

Note that the words in italics are optional.

## Step definitions that _don’t_ require page objects to work

### Given...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| Given I am on the page with url 'URL' | givengotourl | Goes to a page by URL |
| Given the page url is 'URL' | givenpageurl | Checks the page url |
| Given the page url is not 'URL' | givennotpageurl |  |
| Given the page url contains 'URL' | givenurlcontains | Checks the page url contains |
| Given animations are disabled | givendisableAnimations | Disables CSS animations |
| Given the title is 'STRING' | giventitle |  |
| Given the title is not 'STRING' | givennottitle |  |
| Given&nbsp;I&nbsp;set&nbsp;the&nbsp;cookie&nbsp;'COOKIE_NAME'&nbsp;with&nbsp;value&nbsp;'VALUE' | givensetcookie |  |
| Given the cookie 'COOKIE_NAME' is set to 'VALUE' | givencookie |  |
| Given the cookie 'COOKIE_NAME' is not set to 'VALUE' | givennotcookie |  |
| Given the cookie 'COOKIE_NAME' is set | givencookieset |  |
| Given the cookie 'COOKIE_NAME' is not set | givennotcookieset |  |

### When...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| When I wait 'VALUE' seconds? | whenwait |  |
| When I set the file upload 'VALUE' to _the_ element with selector 'SELECTOR' | whenuploadfileselector |  |
| When&nbsp;I&nbsp;click&nbsp;_the_&nbsp;_'NTH'_&nbsp;element&nbsp;with&nbsp;the&nbsp;text&nbsp;'VALUE' | whenclickelwithtext |  |
| When I click _the_ _'NTH'_ element that contains the text 'VALUE' | whenclickelcontainstext |  |
| When I press 'KEY' | whenkey | [See list of possible keys](https://gist.github.com/canvaspixels/a5793fe712743dda9216eef06cc96022) - [This only works in ChromeDriver](https://github.com/canvaspixels/courgette/issues/16) |

### Then...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| Then I expect page to contain 'STRING' | thenpagecontainstext | This looks in the whole document for STRING |
| Then I expect the url to be 'STRING' | thenurl | Using this just checks the URL, it does not change the page object so should not be used for end to end testing unless it is the final step |
| Then I expect the url to not be 'STRING' | thennoturl |  |
| Then I expect the url to contain 'STRING' | thenurlcontains | Using this just checks the URL, it does not change the page object. |
| Then I expect the url 'URL' is opened in a new tab | thenurlnewtab | [Currently not working in FirefoxDriver](https://github.com/canvaspixels/courgette/issues/16) |
| Then I expect cookie 'COOKIE_NAME' to contain 'STRING' | thencookiecontain |  |
| Then&nbsp;I&nbsp;expect&nbsp;cookie&nbsp;'COOKIE_NAME'&nbsp;to&nbsp;not&nbsp;contain&nbsp;'STRING' | thennotcookiecontain |  |
| Then I expect cookie 'COOKIE_NAME' to exist | thencookieexists |  |
| Then I expect cookie 'COOKIE_NAME' to not exist | thennotcookieexists |  |
| Then take a screenshot | thenscreenshot |  |
| Then take a screenshot called 'STRING' | thenscreenshotcalled |  |


## Step definitions that require page objects to work

### Given...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| Given I am on the 'PAGE_NAME' page | givenonpage | PAGE_NAME should match the name of the page object file in your pages directory but use spaces instead of dashes and use lowercase for your page object file names with dash separating (kebab-case). This step definition sets the current page object |
| Given _the_ 'LOCATOR' is visible | givenvisible |  |
| Given _the_ 'LOCATOR' is hidden | givenhidden |  |
| Given _the_ 'LOCATOR' is enabled | givenenabled |  |
| Given _the_ 'LOCATOR' is disabled | givendisabled |  |
| Given _the_ 'LOCATOR' is selected | givenselected |  |
| Given _the_ 'LOCATOR' is not selected | givennotselected |  |
| Given _the_ 'LOCATOR' is checked | givenchecked |  |
| Given _the_ 'LOCATOR' is not checked | givennotchecked |  |
| Given _the_ 'LOCATOR' is on the page | givenexists |  |
| Given _the_ 'LOCATOR' is not on the page | givennotexists |  |
| Given _the_ 'LOCATOR' contains the text 'STRING' | givencontainstext |  |
| Given&nbsp;_the_&nbsp;'LOCATOR'&nbsp;does&nbsp;not&nbsp;contain&nbsp;the&nbsp;text&nbsp;'STRING' | givennotcontainstext |  |
| Given _the_ 'LOCATOR' contains any text | givencontainsanytext |  |
| Given _the_ 'LOCATOR' does not contain any text | givennotcontainsanytext |  |
| Given _the_ 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE' | givenattribute |  |
| Given _the_ 'LOCATOR' is empty | givenempty |  |
| Given _the_ 'LOCATOR' is not empty | givennotempty |  |
| Given the value of _the_ 'LOCATOR' is 'VALUE' | givenvalue |  |
| Given the value of _the_ 'LOCATOR' is not 'VALUE' | givennotvalue |  |

### When...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| When I wait for _the_ 'LOCATOR' to exist | whenwaitforelement |  |
| When I wait for _the_ 'LOCATOR' to not exist | whennotwaitforelement |  |
| When&nbsp;I&nbsp;set&nbsp;the&nbsp;file&nbsp;upload&nbsp;'VALUE'&nbsp;to&nbsp;_the_&nbsp;'LOCATOR' | whenuploadfile |  |
| When I click _the_ 'LOCATOR' | whenclick |  |
| When I click _the_ 'LOCATOR' inside _the_ 'LOCATOR' | whenclickelinsideel | This currently only works with XPaths |
| When I append 'STRING' to 'LOCATOR' | whenappend |  |
| When I set 'LOCATOR' to 'STRING' | whenset |  |
| When I set _the_ 'LOCATOR' inside _the_ 'LOCATOR' to 'STRING' | whensetelinsideel | This currently only works with XPaths |
| When I append 'STRING' to react field 'LOCATOR' | whenappendreact | Sets the value to the input then fires React’s version of the onChange event, so that any actions fire |
| When I set react field 'LOCATOR' to 'STRING' | whensetreact | Similar to append in react above |
| When I submit the _form_ 'LOCATOR' | whensubmit | [This only works in ChromeDriver](https://github.com/SeleniumHQ/selenium/issues/4359) |
| When I clear _the_ 'LOCATOR' | whenclear |  |
| When I select the option for select element 'LOCATOR' with the text 'VALUE' | whenoption |  |

### Then...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| Then I expect to be on the 'PAGE_NAME' page | thenonpage | This step does 2 things: it changes the current page object so that any subsequent steps will use locators / selectors / XPaths from the PAGE_NAME page object, and then asserts the URL from that new page object if it exists. |
| Then I set the page object to 'PAGE_NAME' page | thensetpageobj | This changes the current page object so that any subsequent steps will use locators / selectors / XPaths from the PAGE_NAME page object |
| Then I expect _the_ 'LOCATOR' to be visible | thenvisible |  |
| Then I expect _the_ 'LOCATOR' inside _the_ 'LOCATOR' to be visible | thenelinsideelvisible | This currently only works with XPaths |
| Then I expect _the_ 'LOCATOR' to be hidden | thenhidden |  |
| Then I expect the (bottom OR top OR left OR right)* border colour of the 'LOCATOR' to be 'STRING' | thenbordercolour | Pick a side (bottom, top, left, or right) or remove the expected side. |
| Then I expect the colour of the 'LOCATOR' to be 'STRING' | thencolour |  |
| Then I expect the background colour of the 'LOCATOR' to be 'STRING' | thenbackgroundcolour |  |
| Then I expect the title to be 'STRING' | thentitle |  |
| Then I expect the title to not be 'STRING' | thennottitle |  |
| Then&nbsp;I&nbsp;expect&nbsp;_the_&nbsp;'LOCATOR'&nbsp;to&nbsp;contain&nbsp;the&nbsp;text&nbsp;'STRING' | thencontainstext |  |
| Then I expect _the_ 'LOCATOR' to not contain the text 'STRING' | thennotcontainstext |  |
| Then I expect _the_ 'LOCATOR' inside _the_ 'LOCATOR' to contain the text 'STRING' | thenelinsideelcontainstext |  |
| Then I expect _the_ 'LOCATOR' to contain any text | thencontainsanytext |  |
| Then I expect _the_ 'LOCATOR' to not contain any text | thennotcontainsanytext |  |
| Then I expect _the_ 'LOCATOR' to appear exactly 'NUMBER' times | thenappearexactly |  |
| Then I expect _the_ 'LOCATOR' to not appear exactly 'NUMBER' times | thennotappearexactly |  |
| Then I expect _the_ 'LOCATOR' to exist | thenexists |  |
| Then I expect _the_ 'LOCATOR' to not exist | thennotexists |  |
| Then I expect _the_ 'LOCATOR' to be checked | thenchecked |  |
| Then I expect _the_ 'LOCATOR' to not be checked | thennotchecked |  |
| Then I expect _the_ 'LOCATOR' to be selected | thenselected |  |
| Then I expect _the_ 'LOCATOR' to not be selected | thennotselected |  |
| Then I expect _the_ 'LOCATOR' to be enabled | thenenabled |  |
| Then I expect _the_ 'LOCATOR' to be disabled | thendisabled |  |
| Then I expect _the_ 'LOCATOR' to have the class 'CLASS_NAME' | thenclassname |  |
| Then I expect _the_ 'LOCATOR' to not have the class 'CLASS_NAME' | thennotclassname |  |
| Then I expect _the_ 'LOCATOR' to be focused | thenfocused |  |
| Then I expect _the_ 'LOCATOR' to be empty | thenempty |  |
| Then I expect _the_ 'LOCATOR' to not be empty | thennotempty |  |
| Then I expect the value of _the_ 'LOCATOR' to be 'STRING' | thenvalue | Used for getting the value of an input |
| Then I expect the value of _the_ 'LOCATOR' to not be 'STRING' | thennotvalue |  |
| Then I expect the value of _the_ 'LOCATOR' inside _the_ 'LOCATOR' to be 'STRING' | thenelinsideelvalue | This currently only works with XPaths |
| Then I expect _the_ 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE' | thenattribute |  |
| Then fail step and take screenshot | thendie |  |