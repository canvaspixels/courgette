## Step Definitions

Note that the words in italics are optional.

### Given...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I am on the 'PAGE_NAME' page | givenonpage | PAGE_NAME should match the name of the page object file in your pages directory but use spaces instead of dashes and use lowercase for your page object file names with dash separating (kebab-case). This step definition sets the current page object |
| the page url is 'URL' | givenpageurl |  |
| the page url is not 'URL' | givennotpageurl |  |
| animations are disabled | givendisableAnimations | Disables CSS animations |
| _the_ 'LOCATOR' is visible | givenvisible |  |
| _the_ 'LOCATOR' is hidden | givenhidden |  |
| _the_ 'LOCATOR' is enabled | givenenabled |  |
| _the_ 'LOCATOR' is disabled | givendisabled |  |
| _the_ 'LOCATOR' is selected | givenselected |  |
| _the_ 'LOCATOR' is not selected | givennotselected |  |
| _the_ 'LOCATOR' is checked | givenchecked |  |
| _the_ 'LOCATOR' is not checked | givennotchecked |  |
| _the_ 'LOCATOR' is on the page | givenexists |  |
| _the_ 'LOCATOR' is not on the page | givennotexists |  |
| the title is 'STRING' | giventitle |  |
| the title is not 'STRING' | givennottitle |  |
| _the_ 'LOCATOR' contains the text 'STRING' | givencontainstext |  |
| _the_&nbsp;'LOCATOR'&nbsp;does&nbsp;not&nbsp;contain&nbsp;the&nbsp;text&nbsp;'STRING' | givennotcontainstext |  |
| _the_ 'LOCATOR' contains any text | givencontainsanytext |  |
| _the_ 'LOCATOR' does not contain any text | givennotcontainsanytext |  |
| _the_ 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE' | givenattribute |  |
| _the_ 'LOCATOR' is empty | givenempty |  |
| _the_ 'LOCATOR' is not empty | givennotempty |  |
| the value of _the_ 'LOCATOR' is 'VALUE' | givenvalue |  |
| the value of _the_ 'LOCATOR' is not 'VALUE' | givennotvalue |  |
| I set the cookie 'COOKIE_NAME' with value 'VALUE' | givensetcookie |  |
| the cookie 'COOKIE_NAME' is set to 'VALUE' | givencookie |  |
| the cookie 'COOKIE_NAME' is not set to 'VALUE' | givennotcookie |  |
| the cookie 'COOKIE_NAME' is set | givencookieset |  |
| the cookie 'COOKIE_NAME' is not set | givennotcookieset |  |

### When...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I click _the_ 'LOCATOR' | whenclick |  |
| I append 'STRING' to 'LOCATOR' | whenappend |  |
| I set 'LOCATOR' to 'STRING' | whenset |  |
| I&nbsp;append&nbsp;'STRING'&nbsp;to&nbsp;react&nbsp;field&nbsp;'LOCATOR' | whenappendreact | Sets the value to the input then fires React’s version of the onChange event, so that any actions fire |
| I set react field 'LOCATOR' to 'STRING' | whensetreact | Similar to append in react above |
| I submit the _form_ 'LOCATOR' | whensubmit | [This only works in ChromeDriver](https://github.com/SeleniumHQ/selenium/issues/4359) |
| I press 'KEY' | whenkey | [See list of possible keys](https://gist.github.com/canvaspixels/a5793fe712743dda9216eef06cc96022) - [This only works in ChromeDriver](https://github.com/canvaspixels/courgette/issues/16) |
| I clear _the_ 'LOCATOR' | whenclear |  |
| I select the option for select element 'LOCATOR' with the text 'VALUE' | whenoption |  |

### Then...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I expect to be on the 'PAGE_NAME' page | thenonpage | This step does 2 things: it changes the current page object so that any subsequent steps will use locators / selectors / XPaths from the PAGE_NAME page object, and then asserts the URL from that new page object if it exists. |
| I expect the url to contain 'STRING' | thenurlcontains | Using this just checks the URL, it does not change the page object so should not be used for end to end testing unless it is the final step |
| I expect the url to be 'STRING' | thenurl | Using this just checks the URL, it does not change the page object so should not be used for end to end testing unless it is the final step |
| I expect the url to not be 'STRING' | thennoturl | Using this just checks the URL, it does not change the page object so should not be used for end to end testing unless it is the final step |
| I expect the url 'URL' is opened in a new tab | thenurlnewtab | [Currently not working in FirefoxDriver](https://github.com/canvaspixels/courgette/issues/16) |
| I expect _the_ 'LOCATOR' to be visible | thenvisible |  |
| I expect _the_ 'LOCATOR' to be hidden | thenhidden |  |
| I expect the (bottom OR top OR left OR right)* border colour of the 'LOCATOR' to be 'STRING' | thenbordercolour | Pick a side (bottom, top, left, or right) or remove the expected side. |
| I expect the colour of the 'LOCATOR' to be 'STRING' | thencolour |  |
| I expect the background colour of the 'LOCATOR' to be 'STRING' | thenbackgroundcolour |  |
| I expect the title to be 'STRING' | thentitle |  |
| I expect the title to not be 'STRING' | thennottitle |  |
| I expect _the_ 'LOCATOR' to contain the text 'STRING' | thencontainstext |  |
| I expect _the_ 'LOCATOR' to not contain the text 'STRING' | thennotcontainstext |  |
| I expect _the_ 'LOCATOR' to contain any text | thencontainsanytext |  |
| I expect _the_ 'LOCATOR' to not contain any text | thennotcontainsanytext |  |
| I expect _the_ 'LOCATOR' to appear exactly 'NUMBER' times | thenappearexactly |  |
| I expect _the_ 'LOCATOR' to not appear exactly 'NUMBER' times | thennotappearexactly |  |
| I expect _the_ 'LOCATOR' to exist | thenexists |  |
| I expect _the_ 'LOCATOR' to not exist | thennotexists |  |
| I expect _the_ 'LOCATOR' to be checked | thenchecked |  |
| I expect _the_ 'LOCATOR' to not be checked | thennotchecked |  |
| I expect _the_ 'LOCATOR' to be selected | thenselected |  |
| I expect _the_ 'LOCATOR' to not be selected | thennotselected |  |
| I expect _the_ 'LOCATOR' to be enabled | thenenabled |  |
| I expect _the_ 'LOCATOR' to be disabled | thendisabled |  |
| I expect cookie 'COOKIE_NAME' to contain 'STRING' | thencookiecontain |  |
| I expect cookie 'COOKIE_NAME' to not contain 'STRING' | thennotcookiecontain |  |
| I expect cookie 'COOKIE_NAME' to exist | thencookieexists |  |
| I expect cookie 'COOKIE_NAME' to not exist | thennotcookieexists |  |
| I expect _the_ 'LOCATOR' to have the class 'CLASS_NAME' | thenclassname |  |
| I&nbsp;expect&nbsp;_the_&nbsp;'LOCATOR'&nbsp;to&nbsp;not&nbsp;have&nbsp;the&nbsp;class&nbsp;'CLASS_NAME' | thennotclassname |  |
| I expect _the_ 'LOCATOR' to be focused | thenfocused |  |
| I expect _the_ 'LOCATOR' to be empty | thenempty |  |
| I expect _the_ 'LOCATOR' to not be empty | thennotempty |  |
| I expect the value of _the_ 'LOCATOR' to be 'STRING' | thenvalue | Used for getting the value of an input |
| I expect the value of _the_ 'LOCATOR' to not be 'STRING' | thennotvalue | Used for getting the value of an input |
| I expect _the_ 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE' | thenattribute |  |
| take a screenshot | thenscreenshot |  |
| take a screenshot called 'STRING' | thenscreenshotcalled |  |
| fail step and take screenshot | thendie |  |