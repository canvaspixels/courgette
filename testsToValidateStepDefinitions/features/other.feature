@otherpage
Feature: other page feature

  @otherpage-react-link
  Scenario: I am testing this out
    Given I go to the 'other' page
    When I click the 'Go to home page by react router link'
    Then I expect to eventually be on the 'home' page
    And I expect the 'Go to other page by react router link' to be visible
    And I expect the 'Go to other page by react router link' to exist
    And I expect the 'Go to home page by react router link' to not exist
