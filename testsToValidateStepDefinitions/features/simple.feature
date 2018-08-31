@simplepage
Feature: simple page feature

  @simplepage-react-link
  Scenario: I am testing this out
    Given I am on the 'simple' page
    When I click the 'Go to home page by react router link'

  @simplepage-heading-text
  Scenario: I am testing this out
    Given I am on the 'simple' page
    Then I expect 'main heading' to contain the text 'Simple page'

