@then-steps
Feature: Testing Then steps

  @then-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    And the 'age field' is visible

  @then-steps-eventually-be-on-page
  Scenario: Given I go to the home page
    Given I go to the 'Home' page
    Then I expect to eventually be on the 'Home' page

  @then-steps-url-opens-in-new-tab
  Scenario: Given the url is opened in a new tab
    Given I go to the 'Home' page
    Then I expect the url 'http://localhost:3000/' is opened in a new tab

  @then-steps-open-new-window
  Scenario: Given the url is opened in a new window
    Given I go to the 'Home' page
    Then I expect the url '/other-page' is opened in a new window

  @then-steps-url-to-contain
  Scenario: Given the url is to contain
    Given I go to the 'Home' page
    Then I expect the url to contain 'http://localhost:3000/'

  @then-steps-url-to-be
  Scenario: Given url to be
    Given I go to the 'Home' page
    Then I expect the url to be 'http://localhost:3000/'

  @then-steps-url-to-not-be
  Scenario: Given the element is not to
    Given I go to the 'Home' page
    Then I expect the url to not be 'http://localhost:3001/'

  @then-steps-is-visible
  Scenario: Given the element is to be visible
    Given I go to the 'Home' page
    Then I expect the 'email' to be visible

  @then-steps-is-hidden
  Scenario: Given the element is hidden
    Given I go to the 'Home' page
    Then I expect the 'hidden field' to be hidden

  # @then-steps-border-colour
  # Scenario: Given the border colour is
  #   Given I go to the 'Home' page
  #   Then I expect the border colour of the 'LOCATOR' to be 'STRING'

  # @then-steps-colour
  # Scenario: Given the colour
  #   Given I go to the 'Home' page
  #   Then I expect the colour of the 'LOCATOR' to be 'STRING'

  # @then-steps-is-hidden
  # Scenario: Given the background colour is x
  #   Given I go to the 'Home' page
  #   Then I expect the background colour of the 'LOCATOR' to be 'STRING'

  @then-steps-title
  Scenario: Given the title is React App
    Given I go to the 'Home' page
    Then I expect the title to be 'React App'

  @then-steps-title-is-not
  Scenario: Given the title is not React App
    Given I go to the 'Home' page
    Then I expect the title to not be 'Foo'

  @then-steps-contain-text
  Scenario: Given the element to contain text
    Given I go to the 'Home' page
    Then I expect the 'main heading' to contain the text 'Home page'

  @then-steps-not-contain-text
  Scenario: Given the element to not contain text
    Given I go to the 'Home' page
    Then I expect the 'email' to not contain the text 'hi@hello.com'

  @then-steps-any-text
  Scenario: Given the element contains any text
    Given I go to the 'Home' page
    Then I expect the 'main heading' to contain any text

  @then-steps-not-any-text
  Scenario: Given the element does not contain any text
    Given I go to the 'Home' page
    Then I expect the 'fullname' to not contain any text

  # @then-steps-appear-exactly
  # Scenario: Given the element appears exactly x times
  #   Given I go to the 'Home' page
  #   Then I expect the 'LOCATOR' to appear exactly 'NUMBER' times

  # @then-steps-not-appear-exactly
  # Scenario: Given the element is hidden
  #   Given I go to the 'Home' page
  #   Then I expect the 'LOCATOR' to not appear exactly 'NUMBER' times

  @then-steps-to-exist
  Scenario: Given the element exists
    Given I go to the 'Home' page
    Then I expect the 'age field' to exist

  @then-steps-to-not-exist
  Scenario: Given the element to not exists
    Given I go to the 'Home' page
    Then I expect the 'fullname' to not exist

  @then-steps-checked
  Scenario: Given the element is checked
    Given I go to the 'Home' page
    Then I expect the 'newsletter checkbox' to be checked

  @then-steps-to-not-be-checked
  Scenario: Given the element is not checked
    Given I go to the 'Home' page
    Then I expect the 'you ok checkbox' to not be checked

  @then-steps-to-be-selected
  Scenario: Given the element selected
    Given I go to the 'Home' page
    Then I expect the 'newsletter checkbox' to be selected

  @then-steps-to-not-be-selected
  Scenario: Given the element is not selected
    Given I go to the 'Home' page
    Then I expect the 'you ok checkbox' to not be selected

  @then-steps-to-be-enabled
  # Scenario: Given the element is enabled
  #   Given I go to the 'Home' page
  #   Then I expect the 'LOCATOR' to be enabled

  # @then-steps-to-be-disabled
  # Scenario: Given the element is disabled
  #   Given I go to the 'Home' page
  #   Then I expect the 'LOCATOR' to be disabled

  # @then-steps-cookie-to-contain
  # Scenario: Given the cookie contains x
  #   Given I go to the 'Home' page
  #   Then I expect cookie 'COOKIE_NAME' to contain 'STRING'

  # @then-steps-cookie-not-to-contain
  # Scenario: Given the cookie does not contain x
  #   Given I go to the 'Home' page
  #   Then I expect cookie 'COOKIE_NAME' to not contain 'STRING'

  # @then-steps-cookie-exists
  # Scenario: Given the cookie exists
  #   Given I go to the 'Home' page
  #   Then I expect cookie 'COOKIE_NAME' to exist

  # @then-steps-cookie-to-not-exist
  # Scenario: Given the cookie does not exist
  #   Given I go to the 'Home' page
  #   Then I expect cookie 'COOKIE_NAME' to not exist

  # @then-steps-class-name
  # Scenario: Given the class name
  #   Given I go to the 'Home' page
  #   Then I expect the 'LOCATOR' to have the class 'CLASS_NAME'

  # @then-steps-focused
  # Scenario: Given the element is focused
  #   Given I go to the 'Home' page
  #   Then I expect the 'LOCATOR' to be focused

  @then-steps-empty
  Scenario: Given the element is empty
    Given I go to the 'Home' page
    Then I expect the 'fullname' to be empty

  @then-steps-not-empty
  Scenario: Given the element is not empty
    Given I go to the 'Home' page
    Then I expect the 'email' to not be empty

  @then-steps-value
  Scenario: Given the value is x
    Given I go to the 'Home' page
    Then I expect the value of the 'email' to be 'hi@hello.com'
    # todo: undefined

  @then-steps-not-value
  Scenario: Given the value is not x
    Given I go to the 'Home' page
    Then I expect the value of the 'email' to not be 'hey@hello.com'

  # @then-steps-attribute-value
  # Scenario: Given the element has an attribute with value of x
  #   Given I go to the 'Home' page
  #   Then I expect the 'LOCATOR' has an attribute 'ATTRIBUTE_NAME' with a value of 'VALUE'


