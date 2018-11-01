@simplepage
Feature: simple page feature

  @simplepage-react-link
  Scenario: Testing .page file for css selectors
    Given I am on the 'simple' page
    When I click the 'Go to home page by react router link'
    And take a screenshot called 'home page'

  @simplepage-heading-text
  Scenario: Testing .page file for xpath selectors
    Given I am on the 'simple' page
    Then I expect 'main heading' to contain the text 'Simple page'
    And take a screenshot called 'simple page'

  @simplepage-components
  Scenario: Testing .page file for components
    Given I am on the 'simple' page
    Then I expect the 'main banner' to be visible
    Then I expect the 'simple page wrapper' to be visible
    Then I expect the 'footer wrapper' to be visible
    Then I expect the 'footer item 1' to be visible
    Then I expect the 'footer item 2' to be visible
