@homepage
Feature: home page feature

  @homepage-react-router-link
  Scenario: I am testing this out
    Given I go to the 'Home' page
    When I click the 'Go to other page by react router link'
    Then I expect the url to contain '/other-page'