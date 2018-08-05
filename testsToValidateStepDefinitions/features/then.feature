@then-steps
Feature: Testing Then steps

  @then-steps-visible
  Scenario: Given the element is visible
    Given I go to the 'Home' page
    And the 'age field' is visible
