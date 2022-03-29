@then-steps
Feature: Testing Then steps

  Background: I am on the homepage
    Given I am on the 'Home' page

  @then-steps-be-on-page
  Scenario: Then I go to the Other page, changing page object and asserting the url
    When I click the 'Go to other page link'
    Then I expect to be on the 'Other' page

  @then-steps-be-on-page
  Scenario: Then I go to the Other page, changing page object and NOT asserting the url
    When I click the 'another simple page react link'
    Then I expect to be on the 'Another simple' page

  @then-steps-url-to-contain
  Scenario: Then the url contains
    When I click the 'Go to other page link'
    Then I expect the url to contain '/other-page'

  @then-steps-url-to-be
  Scenario: Then the url is
    When I click the 'Go to other page link'
    Then I expect the url to be 'http://localhost:3006/other-page'

  @then-steps-url-to-not-be
  Scenario: Then the url is not
    Then I expect the url to not be 'http://localhost:3006/foo'

  # TODO: fix in https://github.com/canvaspixels/courgette/issues/16
  # @then-steps-url-opens-in-new-tab
  # Scenario: Then the url is opened in a new tab
  #   When I click the 'Go to other page in new tab link'
  #   Then I expect the url 'http://localhost:3006/other-page' is opened in a new tab
  # todo improve to not check current tab

  @then-steps-is-visible
  Scenario: Then the element is visible
    Then I expect the 'email' to be visible

  @then-steps-is-hidden
  Scenario: Then the element is hidden
    Then I expect the 'hidden field' to be hidden

  # @then-steps-border-colour
  # Scenario: Then the border colour is
  #   Then I expect the bottom border colour of the 'main heading' to be 'rgba(255, 0, 255, 1)'

  # @then-steps-colour
  # Scenario: Then the colour is
  #   Then I expect the colour of the 'main heading' to be 'rgba(13, 105, 227, 1)'

  # @then-steps-background-colour
  # Scenario: Then the background colour is
  #   Then I expect the background colour of the 'main container' to be 'rgba(220, 220, 220, 1)'

  @then-steps-title
  Scenario: Then the title is React App
    Then I expect the title to be 'React App'

  @then-steps-title-is-not
  Scenario: Then the title is not React App
    Then I expect the title to not be 'Foo'

  @then-steps-contain-text
  Scenario: Then the element to contain text
    Then I expect the 'main heading' to contain the text 'Home page'

  @then-steps-not-contain-text
  Scenario: Then the element to not contain text
    Then I expect the 'email' to not contain the text 'hi@hello.com'

  @then-steps-any-text
  Scenario: Then the element contains any text
    Then I expect the 'main heading' to contain any text

  @then-steps-not-any-text
  Scenario: Then the element does not contain any text
    Then I expect the 'fullname' to not contain any text

  @then-steps-appear-exactly
  Scenario: Then the element appears exactly x times
    Then I expect the 'bullets' to appear exactly '3' times

  @then-steps-not-appear-exactly
  Scenario: Then the element is hidden
    Then I expect the 'bullets' to not appear exactly '0' times

  @then-steps-to-exist
  Scenario: Then the element exists
    Then I expect the 'age field' to exist

  @then-steps-to-not-exist
  Scenario: Then the element doesn't exist
    Then I expect the 'Go to home page by react router link' to not exist

  @then-steps-checked
  Scenario: Then the element is checked
    Then I expect the 'newsletter checkbox' to be checked

  @then-steps-to-not-be-checked
  Scenario: Then the element is not checked
    Then I expect the 'you ok checkbox' to not be checked

  @then-steps-to-be-selected
  Scenario: Then the element selected
    Then I expect the 'newsletter checkbox' to be selected

  @then-steps-to-not-be-selected
  Scenario: Then the element is not selected
    Then I expect the 'you ok checkbox' to not be selected

  @then-steps-to-be-enabled
  Scenario: Then the element is enabled
    Then I expect the 'button' to be enabled

  @then-steps-to-be-disabled
  Scenario: Then the element is disabled
    Then I expect the 'disabled button' to be disabled

  @then-steps-cookie-to-contain
  Scenario: Then the cookie contains x
    And I set the cookie 'gdpr-banner-clicked' with value 'true'
    Then I expect cookie 'gdpr-banner-clicked' to contain 'tr'

  @then-steps-cookie-not-to-contain
  Scenario: Then the cookie does not contain x
    And I set the cookie 'gdpr-banner-clicked' with value 'true'
    Then I expect cookie 'gdpr-banner-clicked' to not contain 'foo'

  @then-steps-cookie-to-not-exist
  Scenario: Then the cookie does not exist
    And I set the cookie 'cookie-crisp' with value 'true'
    Then I expect cookie 'gdpr-banner-clicked' to not exist

  @then-steps-cookie-exists
  Scenario: Then the cookie exists
    And I set the cookie 'gdpr-banner-clicked' with value 'true'
    Then I expect cookie 'gdpr-banner-clicked' to exist

  @then-steps-class-name
  Scenario: Then the class name
    Then I expect the 'main container' to have the class 'Home'

  @then-steps-class-name-not
  Scenario: Then the class name doesn't have
    Then I expect the 'main container' to not have the class 'foo'

  # see comment in https://github.com/canvaspixels/courgette/issues/16
  # @then-steps-focused
  # Scenario: Then the element is focused
  #   When I press 'TAB'
  #   Then I expect the 'Go to other page by react router link' to be focused

  @then-steps-empty
  Scenario: Then the element is empty
    Then I expect the 'fullname' to be empty

  @then-steps-not-empty
  Scenario: Then the element is not empty
    Then I expect the 'email' to not be empty

  @then-steps-value
  Scenario: Then the value is x
    Then I expect the value of the 'email' to be 'hi@hello.com'

  @then-steps-not-value
  Scenario: Then the value is not x
    Then I expect the value of the 'email' to not be 'hey@hello.com'

  @then-steps-attribute-value
  Scenario: Then the element has an attribute with value of x
    Then I expect the 'age field' has an attribute 'name' with a value of 'age'
