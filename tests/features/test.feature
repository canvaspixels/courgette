@testing
Feature: Test feature

  @testing-123
  Scenario: I am testing this out
    Given I go to the 'Test' page
    When I click 'I’m Feeling Lucky'
    Then I expect the url to contain 'google.com'