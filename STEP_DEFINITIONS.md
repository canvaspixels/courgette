## Step Definitions

Note that the words in italics are optional.

### Given...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I go to the 'PAGE_NAME' page | goto | PAGE_NAME should match the name of the page object file in your pages directory and the first argument to createPage in that same file. This step definition sets the current page object |
| the page url is 'URL' | pageurl |  |
| the page url is not 'URL' | pageurl |  |
| animations are disabled | givendisableAnimations |  |
| _the_ 'LOCATOR' is visible | visible |  |
| _the_ 'LOCATOR' is hidden | hidden |  |
| _the_ 'LOCATOR' is enabled | enabled |  |
| _the_ 'LOCATOR' is disabled | disabled |  |
| _the_ 'LOCATOR' is selected | selected |  |
| _the_ 'LOCATOR' is not selected | selected |  |
| _the_ 'LOCATOR' is checked | checked |  |
| _the_ 'LOCATOR' is not checked | checked |  |
| _the_ 'LOCATOR' is on the page | exists |  |
| _the_ 'LOCATOR' is not on the page | exists |  |
| the title is 'LOCATOR' | title |  |
| the title is not 'LOCATOR' | title |  |
| _the_ 'LOCATOR' contains the text 'LOCATOR' | containstext |  |
| _the_ 'LOCATOR' does not contain the text 'LOCATOR' | notcontainstext |  |
| _the_ 'LOCATOR' contains any text | containsanytext |  |
| _the_ 'LOCATOR' does not contain any text | notcontainsanytext |  |
| _the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE' | attribute |  |
| _the_ 'LOCATOR' is empty | empty |  |
| _the_ 'LOCATOR' is not empty | empty |  |
| the value of _the_ 'LOCATOR' is 'VALUE' | value |  |
| the value of _the_ 'LOCATOR' is not 'VALUE' | value |  |
| I set the cookie 'COOKIE_NAME' with value 'VALUE' | setcookie |  |
| the cookie 'COOKIE_NAME' is set to 'VALUE' | cookie |  |
| the cookie 'COOKIE_NAME' is not set to 'VALUE' | cookie |  |
| the cookie 'COOKIE_NAME' is set | cookieset |  |
| the cookie 'COOKIE_NAME' is not set | cookieset |  |

### When...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I click _the_ 'LOCATOR' | click |  |
| I append 'LOCATOR' to 'LOCATOR' | append |  |
| I set 'LOCATOR' to 'LOCATOR' | set |  |
| I append 'LOCATOR' to react field 'LOCATOR' | appendreact |  |
| I set react field 'LOCATOR' to 'LOCATOR' | setreact |  |
| I submit the _form_ 'LOCATOR' | submit |  |
| I press 'KEY' | key |  |
| I clear _the_ 'LOCATOR' | clear |  |
| I&nbsp;select&nbsp;the&nbsp;option&nbsp;for&nbsp;select&nbsp;element&nbsp;'LOCATOR'&nbsp;with&nbsp;the&nbsp;text&nbsp;'VALUE' | option |  |

### Then...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I expect to eventually be on the 'PAGE_NAME' page | eventuallyonpage | Using this changes the page object to the PAGE_NAME so any subsequent steps in that scenario will be pointing to that page |
| I expect the url 'URL' is opened in a new tab | urlnewtab |  |
| I expect the url 'URL' is opened in a new window | urlnewwindow |  |
| I expect the url to contain 'STRING' | urlcontains |  |
| I expect the url to be 'STRING' | url |  |
| I expect the url to not be 'STRING' | url |  |
| I expect _the_ 'LOCATOR' to be visible | visible |  |
| I expect _the_ 'LOCATOR' to be hidden | hidden |  |
| I expect the border colour of the 'LOCATOR' to be 'STRING' | bordercolour |  |
| I expect the colour of the 'LOCATOR' to be 'STRING' | colour |  |
| I expect the background colour of the 'LOCATOR' to be 'STRING' | backgroundcolour |  |
| I expect the title to be 'STRING' | title |  |
| I expect the title to not be 'STRING' | title |  |
| I expect _the_ 'LOCATOR' to contain the text 'STRING' | containstext |  |
| I expect _the_ 'LOCATOR' to not contain the text 'STRING' | notcontainstext |  |
| I expect _the_ 'LOCATOR' to contain any text | containsanytext |  |
| I expect _the_ 'LOCATOR' to not contain any text | containsanytext |  |
| I expect _the_ 'LOCATOR' to appear exactly 'NUMBER' times | appearexactly |  |
| I expect _the_ 'LOCATOR' to not appear exactly 'NUMBER' times | appearexactly |  |
| I expect _the_ 'LOCATOR' to exist | exists |  |
| I expect _the_ 'LOCATOR' to not exist | exists |  |
| I expect _the_ 'LOCATOR' to be checked | checked |  |
| I expect _the_ 'LOCATOR' to not be checked | checked |  |
| I expect _the_ 'LOCATOR' to be selected | selected |  |
| I expect _the_ 'LOCATOR' to not be selected | selected |  |
| I expect _the_ 'LOCATOR' to be enabled | enabled |  |
| I expect _the_ 'LOCATOR' to be disabled | disabled |  |
| I expect cookie 'COOKIE_NAME' to contain 'STRING' | cookiecontain |  |
| I expect cookie 'COOKIE_NAME' to not contain 'STRING' | cookiecontain |  |
| I expect cookie 'COOKIE_NAME' to exist | cookieexists |  |
| I expect cookie 'COOKIE_NAME' to not exist | cookieexists |  |
| I expect _the_ 'LOCATOR' to have the class 'CLASS_NAME' | classname |  |
| I expect _the_ 'LOCATOR' to not have the class 'CLASS_NAME' | classname |  |
| I expect _the_ 'LOCATOR' to be focused | focused |  |
| I expect _the_ 'LOCATOR' to be empty | empty |  |
| I expect _the_ 'LOCATOR' to not be empty | empty |  |
| I expect the value of _the_ 'LOCATOR' to be 'STRING'  | value |  |
| I expect the value of _the_ 'LOCATOR' to not be 'STRING'  | value |  |
| I&nbsp;expect&nbsp;_the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE' | attribute |  |
| fail step and take screenshot | thendie |  |