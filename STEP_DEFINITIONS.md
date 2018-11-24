# Available Step Definitions

Note that the words in italics are optional.

## Step definitions that _don’t_ require page objects to work

### Given...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I am on the page with url 'URL' | givenonpage | Goes to a page by URL |
| the page url is 'URL' | givengotourl | Checks the page url |
| the page url is not 'URL' | givenpageurl | Checks the page url |
| the page url contains 'URL' | givennotpageurl | Checks the page url contains |
| animations are disabled | givenurlcontains | Disables CSS animations |
| the title is 'STRING' | givendisableAnimations |  |
| the title is not 'STRING' | givenvisible |  |
| I&nbsp;set&nbsp;the&nbsp;cookie&nbsp;'COOKIE_NAME'&nbsp;with&nbsp;value&nbsp;'VALUE' | givenhidden |  |
| the cookie 'COOKIE_NAME' is set to 'VALUE' | givenenabled |  |
| the cookie 'COOKIE_NAME' is not set to 'VALUE' | givendisabled |  |
| the cookie 'COOKIE_NAME' is set | givenselected |  |
| the cookie 'COOKIE_NAME' is not set | givennotselected |  |

### When...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I&nbsp;click&nbsp;_the_&nbsp;_'NTH'_&nbsp;element&nbsp;with&nbsp;the&nbsp;text&nbsp;'VALUE' | whenclickelwithtext |  |
| I click _the_ _'NTH'_ element that contains the text 'VALUE' | whenclickelcontainstext |  |
| I press 'KEY' | whenkey | [See list of possible keys](https://gist.github.com/canvaspixels/a5793fe712743dda9216eef06cc96022) - [This only works in ChromeDriver](https://github.com/canvaspixels/courgette/issues/16) |

### Then...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I expect page to contain 'STRING' | thenpagecontainstext | This looks in the whole document for STRING |
| I expect the url to be 'STRING' | thenurl | Using this just checks the URL, it does not change the page object so should not be used for end to end testing unless it is the final step |
| I expect the url to not be 'STRING' | thennoturl | Using this just checks the URL, it does not change the page object so should not be used for end to end testing unless it is the final step |
| I expect the url to contain 'STRING' | thenurlcontains | Using this just checks the URL, it does not change the page object. |
| I expect the url 'URL' is opened in a new tab | thenurlnewtab | [Currently not working in FirefoxDriver](https://github.com/canvaspixels/courgette/issues/16) |
| I expect cookie 'COOKIE_NAME' to contain 'STRING' | thenonpage |  |
| I&nbsp;expect&nbsp;cookie&nbsp;'COOKIE_NAME'&nbsp;to&nbsp;not&nbsp;contain&nbsp;'STRING' | thenvisible |  |
| I expect cookie 'COOKIE_NAME' to exist | thenelinsideelvisible |  |
| I expect cookie 'COOKIE_NAME' to not exist | thenhidden |  |
| take a screenshot | thenbordercolour |  |
| take a screenshot called 'STRING' | thencolour |  |


## Step definitions that require page objects to work

### Given...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I am on the 'PAGE_NAME' page | givenonpage | PAGE_NAME should match the name of the page object file in your pages directory but use spaces instead of dashes and use lowercase for your page object file names with dash separating (kebab-case). This step definition sets the current page object |
| _the_ 'LOCATOR' is visible | givengotourl |  |
| _the_ 'LOCATOR' is hidden | givenpageurl |  |
| _the_ 'LOCATOR' is enabled | givennotpageurl |  |
| _the_ 'LOCATOR' is disabled | givenurlcontains |  |
| _the_ 'LOCATOR' is selected | givendisableAnimations |  |
| _the_ 'LOCATOR' is not selected | givenvisible |  |
| _the_ 'LOCATOR' is checked | givenhidden |  |
| _the_ 'LOCATOR' is not checked | givenenabled |  |
| _the_ 'LOCATOR' is on the page | givendisabled |  |
| _the_ 'LOCATOR' is not on the page | givenselected |  |
| _the_ 'LOCATOR' contains the text 'STRING' | givennotselected |  |
| _the_&nbsp;'LOCATOR'&nbsp;does&nbsp;not&nbsp;contain&nbsp;the&nbsp;text&nbsp;'STRING' | givenchecked |  |
| _the_ 'LOCATOR' contains any text | givennotchecked |  |
| _the_ 'LOCATOR' does not contain any text | givenexists |  |
| _the_ 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE' | givennotexists |  |
| _the_ 'LOCATOR' is empty | giventitle |  |
| _the_ 'LOCATOR' is not empty | givennottitle |  |
| the value of _the_ 'LOCATOR' is 'VALUE' | givencontainstext |  |
| the value of _the_ 'LOCATOR' is not 'VALUE' | givennotcontainstext |  |

### When...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I click _the_ 'LOCATOR' | whenclickelwithtext |  |
| I click _the_ 'LOCATOR' inside _the_ 'LOCATOR' | whenclickelcontainstext | This currently only works with XPaths |
| I append 'STRING' to 'LOCATOR' | whenkey |  |
| I set 'LOCATOR' to 'STRING' | whenclick |  |
| I&nbsp;set&nbsp;_the_&nbsp;'LOCATOR'&nbsp;inside&nbsp;_the_&nbsp;'LOCATOR'&nbsp;to&nbsp;'STRING' | whenclickelinsideel | This currently only works with XPaths |
| I append 'STRING' to react field 'LOCATOR' | whenappend | Sets the value to the input then fires React’s version of the onChange event, so that any actions fire |
| I set react field 'LOCATOR' to 'STRING' | whenset | Similar to append in react above |
| I submit the _form_ 'LOCATOR' | whensetelinsideel | [This only works in ChromeDriver](https://github.com/SeleniumHQ/selenium/issues/4359) |
| I clear _the_ 'LOCATOR' | whenappendreact |  |
| I select the option for select element 'LOCATOR' with the text 'VALUE' | whensetreact |  |

### Then...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I expect to be on the 'PAGE_NAME' page | thenpagecontainstext | This step does 2 things: it changes the current page object so that any subsequent steps will use locators / selectors / XPaths from the PAGE_NAME page object, and then asserts the URL from that new page object if it exists. |
| I expect _the_ 'LOCATOR' to be visible | thenurl |  |
| I expect _the_ 'LOCATOR' inside _the_ 'LOCATOR' to be visible | thennoturl | This currently only works with XPaths |
| I expect _the_ 'LOCATOR' to be hidden | thenurlcontains |  |
| I expect the (bottom OR top OR left OR right)* border colour of the 'LOCATOR' to be 'STRING' | thenurlnewtab | Pick a side (bottom, top, left, or right) or remove the expected side. |
| I expect the colour of the 'LOCATOR' to be 'STRING' | thenonpage |  |
| I expect the background colour of the 'LOCATOR' to be 'STRING' | thenvisible |  |
| I expect the title to be 'STRING' | thenelinsideelvisible |  |
| I expect the title to not be 'STRING' | thenhidden |  |
| I expect _the_ 'LOCATOR' to contain the text 'STRING' | thenbordercolour |  |
| I expect _the_ 'LOCATOR' to not contain the text 'STRING' | thencolour |  |
| I expect _the_ 'LOCATOR' inside _the_ 'LOCATOR' to contain the text 'STRING' | thenbackgroundcolour |  |
| I expect _the_ 'LOCATOR' to contain any text | thentitle |  |
| I expect _the_ 'LOCATOR' to not contain any text | thennottitle |  |
| I expect _the_ 'LOCATOR' to appear exactly 'NUMBER' times | thencontainstext |  |
| I expect _the_ 'LOCATOR' to not appear exactly 'NUMBER' times | thennotcontainstext |  |
| I expect _the_ 'LOCATOR' to exist | thenelinsideelcontainstext |  |
| I expect _the_ 'LOCATOR' to not exist | thencontainsanytext |  |
| I expect _the_ 'LOCATOR' to be checked | thennotcontainsanytext |  |
| I expect _the_ 'LOCATOR' to not be checked | thenappearexactly |  |
| I expect _the_ 'LOCATOR' to be selected | thennotappearexactly |  |
| I expect _the_ 'LOCATOR' to not be selected | thenexists |  |
| I expect _the_ 'LOCATOR' to be enabled | thennotexists |  |
| I expect _the_ 'LOCATOR' to be disabled | thenchecked |  |
| I expect _the_ 'LOCATOR' to have the class 'CLASS_NAME' | thennotchecked |  |
| I&nbsp;expect&nbsp;_the_&nbsp;'LOCATOR'&nbsp;to&nbsp;not&nbsp;have&nbsp;the&nbsp;class&nbsp;'CLASS_NAME' | thenselected |  |
| I expect _the_ 'LOCATOR' to be focused | thennotselected |  |
| I expect _the_ 'LOCATOR' to be empty | thenenabled |  |
| I expect _the_ 'LOCATOR' to not be empty | thendisabled |  |
| I expect the value of _the_ 'LOCATOR' to be 'STRING' | thencookiecontain | Used for getting the value of an input |
| I expect the value of _the_ 'LOCATOR' to not be 'STRING' | thennotcookiecontain | Used for getting the value of an input |
| I expect the value of _the_ 'LOCATOR' inside _the_ 'LOCATOR' to be 'STRING' | thencookieexists | This currently only works with XPaths |
| I expect the value of _the_ 'LOCATOR' inside _the_ 'LOCATOR' to not be 'STRING' | thennotcookieexists | This currently only works with XPaths |
| I expect _the_ 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE' | thenclassname |  |
| fail step and take screenshot | thennotclassname |  |