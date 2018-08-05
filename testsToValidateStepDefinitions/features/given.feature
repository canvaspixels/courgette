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
