@google
Feature: Test feature

  @google-feeling-lucky
  Scenario: I am testing this out
    Given I go to the 'Google Home' page
    When I click 'I’m Feeling Lucky'
    Then I expect the url to contain 'google.com'
