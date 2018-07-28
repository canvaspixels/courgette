@routing
Feature: routing

  @routing-react-router-link
  Scenario: React router link
    Given I go to the 'Home' page
    When I click the 'Go to other page by react router link'
    Then I expect the url to contain '/other-page'

  @routing-link
  Scenario: Link
    Given I go to the 'Home' page
    When I click the 'Go to other page link'
    Then I expect the url to contain '/other-page'

  @routing-link-new-tab
  Scenario: Link to open in new tab
    Given I go to the 'Home' page
    When I click the 'Go to other page in new window link'
    Then I expect the url to contain '/other-page'