@when-steps
Feature: Testing When steps

  @when-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    And the 'age field' is visible

  @when-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    When I append 'LOCATOR' to 'LOCATOR'

  @when-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    When I set 'LOCATOR' to 'LOCATOR'

  @when-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    When I append 'LOCATOR' to react field 'LOCATOR'

  @when-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    When I set react field 'LOCATOR' to 'LOCATOR'


  @when-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    When I submit the form 'LOCATOR'

  @when-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    When I press 'KEY'

  @when-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    When I clear the 'LOCATOR'

  @when-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    When I select the option for select element 'LOCATOR' with the text 'VALUE'
