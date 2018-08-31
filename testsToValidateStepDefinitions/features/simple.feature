@simplepage
Feature: simple page feature

  @simplepage-react-link
  Scenario: Testing .page file for css selectors
    Given I am on the 'simple' page
    When I click the 'Go to home page by react router link'

  @simplepage-heading-text
  Scenario: Testing .page file for xpath selectors
    Given I am on the 'simple' page
    Then I expect 'main heading' to contain the text 'Simple page'

