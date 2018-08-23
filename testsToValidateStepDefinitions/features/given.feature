@given-steps
Feature: Testing Given steps

  Background: I am on the homepage
    Given I am on the 'Home' page

  @given-steps-routing-react-router-link
  Scenario: React router link
    When I click the 'Go to other page by react router link'
    Then I expect the url to contain '/other-page'

  @given-steps-routing-link
  Scenario: Link
    When I click the 'Go to other page link'
    Then I expect the url to contain '/other-page'

  @given-steps-routing-link-new-tab
  Scenario: Link to open in new tab
    When I click the 'Go to other page in new tab link'
    Then I expect the url 'http://localhost:3000/other-page' is opened in a new tab

  @given-steps-routing-given-url
  Scenario: Given the url is x
    And the page url is 'http://localhost:3000/'

  @given-steps-routing-given-url-not
  Scenario: Given the url is not x
    And the page url is not 'http://localhost:3000/foo'

  @given-steps-visible
  Scenario: Given the element is visible
    And the 'age field' is visible

  @given-steps-hidden
  Scenario: Given the element is hidden
    And the 'hidden field' is hidden

  @given-steps-enabled
  Scenario: Given the element is enabled
    And the 'age field' is enabled

  @given-steps-disabled
  Scenario: Given the element is disabled
    And the 'disabled button' is disabled

  @given-steps-element-selected
  Scenario: Given the element is selected
    And the 'age field 18 to 25' is selected

  @given-steps-element-checked
  Scenario: Given the element is checked
    And the 'newsletter checkbox' is checked

  @given-steps-element-not-selected
  Scenario: Given the element is not selected
    And the 'age field 26 plus' is not selected

  @given-steps-element-not-checked
  Scenario: Given the element is not checked
    And the 'you ok checkbox' is not checked

  @given-steps-element-on-page
  Scenario: Given the element is on the page
    And the 'newsletter checkbox' is on the page

  @given-steps-element-not-on-page
  Scenario: Given the element is not on the page
    And the 'non-existant element' is not on the page

  @given-steps-title-is
  Scenario: Given the title is
    And the title is 'React App'

  @given-steps-title-is-not
  Scenario: Given the title is not visible
    And the title is not 'foo'

  @given-steps-contains-text
  Scenario: Given the page contains text
    And the 'main heading' contains the text 'Home page'

  @given-steps-component-element-contains-text
  Scenario: Given the component element contains text
    And the 'main banner' contains the text 'React App for validating step definitions'

  @given-steps-does-not-contain-text
  Scenario: Given the
    And the 'main heading' does not contain the text 'foo'

  @given-steps-contains-any-text
  Scenario: Given the page contains text
    And the 'hidden field' contains any text

  @given-steps-empty
  Scenario: Given the page is empty
    And the 'fullname' is empty

  @given-steps-not-empty
  Scenario: Given the page is not empty
    And the 'email' is not empty

  @given-steps-attribute-with-value
  Scenario: Given the attribute has a value of x
    And the 'fullname' has an attribute 'type' with a value of 'text'

  @given-steps-has-value
  Scenario: Given the element has value
    And the value of the 'age field' is '18-25'

  @given-steps-does-not-have-value
  Scenario: Given the element has value
    And the value of the 'age field' is not '18-26'

  @given-steps-set-cookie-value
  Scenario: Given I set the cookie with value
    And I set the cookie 'gdpr-banner-clicked' with value 'true'
    Then I expect cookie 'gdpr-banner-clicked' to contain 'true'

  @given-steps-cookie-name-has-set-value
  Scenario: Given the cookie is set to value
    And I set the cookie 'gdpr-banner-clicked' with value 'true'
    And the cookie 'gdpr-banner-clicked' is set to 'true'

  @given-steps-cookie-name-is-not-set-value
  Scenario: Given the cookie is not set to value
    And I set the cookie 'gdpr-banner-clicked' with value 'true'
    And the cookie 'gdpr-banner-clicked' is not set to 'false'

  @given-steps-cookie-name-is-set
  Scenario: Given set the cookie is set
    And I set the cookie 'gdpr-banner-clicked' with value 'true'
    And the cookie 'gdpr-banner-clicked' is set

  @given-steps-cookie-name-is-not-set
  Scenario: Given set the cookie is not set
    And the cookie 'gdpr-banner-clicked' is not set
