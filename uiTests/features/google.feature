@google
Feature: Test feature

  @google-feeling-lucky
  Scenario: I am testing this out
    Given I am on the 'Google Home' page
    When I click 'I’m Feeling Lucky'
    Then I expect the url to contain 'google.com'
