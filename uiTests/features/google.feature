@google
Feature: Test feature

  @google-feeling-lucky
  Scenario: Clicking I’m Feeling Lucky without typing a search query goes straight to doodles
    Given I am on the 'Google Home' page
    When I click 'I’m Feeling Lucky'
    Then I expect the url to contain 'google.com/doodles'
