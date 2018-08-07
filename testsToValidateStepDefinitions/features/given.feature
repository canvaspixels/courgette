@given-steps
Feature: Testing Given steps

  @given-steps-routing-react-router-link
  Scenario: React router link
    Given I go to the 'Home' page
    When I click the 'Go to other page by react router link'
    Then I expect the url to contain '/other-page'

  @given-steps-routing-link
  Scenario: Link
    Given I go to the 'Home' page
    When I click the 'Go to other page link'
    Then I expect the url to contain '/other-page'

  @given-steps-routing-link-new-tab
  Scenario: Link to open in new tab
    Given I go to the 'Home' page
    When I click the 'Go to other page in new window link'
    Then I expect the url 'http://localhost:3000/other-page' is opened in a new tab

  @given-steps-routing-given-url
  Scenario: Given the url is x
    Given I go to the 'Home' page
    And the page url is 'http://localhost:3000/'

  @given-steps-routing-given-url-not
  Scenario: Given the url is not x
    Given I go to the 'Home' page
    And the page url is not 'http://localhost:3000/foo'

  @given-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    And the 'age field' is visible

  @given-steps-hidden
  Scenario: Given the element is hidden
    Given I go to the 'Home' page
    # check false positive, make sure element exists before checking visibility
    And the 'hidden field' is hidden

  @given-steps-enabled
  Scenario: Given the element is enabled
    Given I go to the 'Home' page
    And the 'age field' is enabled

  @given-steps-disabled
  Scenario: Given the element is disabled
    Given I go to the 'Home' page
    And the 'disabled button' is disabled

  @given-steps-element-selected
  Scenario: Given the element is selected
    Given I go to the 'Home' page
    And the 'age field 18 to 25' is selected

  @given-steps-element-checked
  Scenario: Given the element is checked
    Given I go to the 'Home' page
    And the 'newsletter checkbox' is checked

  @given-steps-element-not-selected
  Scenario: Given the element is not selected
    Given I go to the 'Home' page
    And the 'age field 26 plus' is not selected

  @given-steps-element-not-checked
  Scenario: Given the element is not checked
    Given I go to the 'Home' page
    And the 'you ok checkbox' is not checked

  @given-steps-element-on-page
  Scenario: Given the element is on the page
    Given I go to the 'Home' page
    And the 'newsletter checkbox' is on the page

  @given-steps-element-not-on-page
  Scenario: Given the element is not on the page
    Given I go to the 'Home' page
    And the 'non-existant element' is not on the page

  @given-steps-title-is
  Scenario: Given the title is
    Given I go to the 'Home' page
    And the title is 'React App'

  @given-steps-title-is-not
  Scenario: Given the title is not visible
    Given I go to the 'Home' page
    And the title is not 'foo'

  @given-steps-contains-text
  Scenario: Given the page contains text
    Given I go to the 'Home' page
    And the 'main heading' contains the text 'foo'
    # todo step undefined

  @given-steps-does-not-contain-text
  Scenario: Given the
    Given I go to the 'Home' page
    And the 'main heading' does not contain the text 'Home page'
    # todo step undefined

  @given-steps-contains-any-text
  Scenario: Given the page contains text
    Given I go to the 'Home' page
    And the 'hidden field' contains any text

  @given-steps-empty
  Scenario: Given the page is empty
    Given I go to the 'Home' page
    And the 'fullname' is empty

  @given-steps-not-empty
  Scenario: Given the page is not empty
    Given I go to the 'Home' page
    And the 'email' is not empty

  @given-steps-attribute-with-value
  Scenario: Given the attribute has a value of x
    Given I go to the 'Home' page
    And the 'fullname' has an attribute 'type' with a value of 'text'

  @given-steps-has-value
  Scenario: Given the element has value
    Given I go to the 'Home' page
    And the value of the 'age field' is '18-25'

  @given-steps-does-not-have-value
  Scenario: Given the element has value
    Given I go to the 'Home' page
    And the value of the 'age field' is not '18-26'

  # @given-steps-has-cookie-value
  # Scenario: Given set the cookie with value
  #   Given I go to the 'Home' page
  #   And I set the cookie 'COOKIE_NAME' with value 'VALUE'

  # @given-steps-cookie-name-has-set-value
  # Scenario: Given the cookie is set to value
  #   Given I go to the 'Home' page
  #   And the cookie 'COOKIE_NAME' is set to 'VALUE'

  # @given-steps-cookie-name-is-not-set-value
  # Scenario: Given the cookie is not set to value
  #   Given I go to the 'Home' page
  #   And the cookie 'COOKIE_NAME' is not set to 'VALUE'

  # @given-steps-cookie-name-is-set
  # Scenario: Given set the cookie is set
  #   Given I go to the 'Home' page
  #   And the cookie 'COOKIE_NAME' is set

  # @given-steps-cookie-name-is-not-set
  # Scenario: Given set the cookie is not set
  #   Given I go to the 'Home' page
  #   And the cookie 'COOKIE_NAME' is not set
