@when-steps
Feature: Testing When steps

  @when-steps-append
  Scenario: When I append to a field
    Given I go to the 'Home' page
    When I append 'hello' to 'email'
    Then I expect the value of the 'email' to be 'hello'
    # todo fix

  @when-steps-set
  Scenario: When I set text in the field
    Given I go to the 'Home' page
    When I set 'LOCATOR' to 'LOCATOR'

  @when-steps-append-react-field
  Scenario: When I append to a field in react
    Given I go to the 'Home' page
    When I append 'LOCATOR' to react field 'LOCATOR'

  @when-steps-set-react-field
  Scenario: When I set text in a field in react
    Given I go to the 'Home' page
    When I set react field 'LOCATOR' to 'LOCATOR'

  @when-steps-submit-form
  Scenario: When I submit a form
    Given I go to the 'Home' page
    When I submit the form 'LOCATOR'

  @when-steps-key
  Scenario: When I press a key
    Given I go to the 'Home' page
    When I press 'KEY'

  @when-steps-clear
  Scenario: When I clear a field
    Given I go to the 'Home' page
    When I clear the 'LOCATOR'

  @when-steps-select-element-with-text
  Scenario: When I select an option by the text inside it
    Given I go to the 'Home' page
    When I select the option for select element 'LOCATOR' with the text 'VALUE'
