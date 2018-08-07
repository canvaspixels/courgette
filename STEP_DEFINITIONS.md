## Step Definitions

Note that the words in italics are optional.

### Given...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I go to the 'PAGE_NAME' page | givengoto | PAGE_NAME should match the name of the page object file in your pages directory and the first argument to createPage in that same file. This step definition sets the current page object |
| the page url is 'URL' | givenpageurl |  |
| the page url is not 'URL' | givennotpageurl |  |
| animations are disabled | givendisableAnimations |  |
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
| _the_ 'LOCATOR' does not contain the text 'STRING' | givennotcontainstext |  |
| _the_ 'LOCATOR' contains any text | givencontainsanytext |  |
| _the_ 'LOCATOR' does not contain any text | givennotcontainsanytext |  |
| _the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE' | givenattribute |  |
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
| I append 'STRING' to react field 'LOCATOR' | whenappendreact |  |
| I set react field 'LOCATOR' to 'STRING' | whensetreact |  |
| I submit the _form_ 'LOCATOR' | whensubmit |  |
| I press 'KEY' | whenkey |  |
| I clear _the_ 'LOCATOR' | whenclear |  |
| I&nbsp;select&nbsp;the&nbsp;option&nbsp;for&nbsp;select&nbsp;element&nbsp;'LOCATOR'&nbsp;with&nbsp;the&nbsp;text&nbsp;'VALUE' | whenoption |  |

### Then...

| Step definition | Snippet Code | Notes |
| --- | --- | --- |
| I expect to eventually be on the 'PAGE_NAME' page | theneventuallyonpage | Using this changes the page object to the PAGE_NAME so any subsequent steps in that scenario will be pointing to that page |
| I expect the url 'URL' is opened in a new tab | thenurlnewtab |  |
| I expect the url 'URL' is opened in a new window | thenurlnewwindow |  |
| I expect the url to contain 'STRING' | thenurlcontains |  |
| I expect the url to be 'STRING' | thenurl |  |
| I expect the url to not be 'STRING' | thennoturl |  |
| I expect _the_ 'LOCATOR' to be visible | thenvisible |  |
| I expect _the_ 'LOCATOR' to be hidden | thenhidden |  |
| I expect the border colour of the 'LOCATOR' to be 'STRING' | thenbordercolour |  |
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
| I expect _the_ 'LOCATOR' to not have the class 'CLASS_NAME' | thennotclassname |  |
| I expect _the_ 'LOCATOR' to be focused | thenfocused |  |
| I expect _the_ 'LOCATOR' to be empty | thenempty |  |
| I expect _the_ 'LOCATOR' to not be empty | thennotempty |  |
| I expect the value of _the_ 'LOCATOR' to be 'STRING' | thenvalue |  |
| I expect the value of _the_ 'LOCATOR' to not be 'STRING' | thennotvalue |  |
| I&nbsp;expect&nbsp;_the_&nbsp;'LOCATOR'&nbsp;has&nbsp;an&nbsp;attribute&nbsp;'ATTRIBUTE_NAME'&nbsp;with&nbsp;a&nbsp;value&nbsp;of&nbsp;'VALUE' | thenattribute |  |
| fail step and take screenshot | thendie |  |