@simplepage
Feature: simple page feature

  Background: I am on the simple page
    Given I am on the 'simple' page

  @simplepage-react-link
  Scenario: Testing .page file for css selectors
    When I click the 'Go to home page by react router link'
    Then I expect to be on the 'home' page
    Then I expect the 'main container' to be visible
    And take a screenshot called 'home page'

  @simplepage-heading-text
  Scenario: Testing .page file for xpath selectors
    Then I expect 'main heading' to contain the text 'Simple page'
    And take a screenshot called 'simple page'

  @simplepage-components
  Scenario: Testing .page file for components
    Then I expect the 'main banner' to be visible
    Then I expect the 'simple page wrapper' to be visible
    Then I expect the 'footer wrapper' to be visible
    Then I expect the 'footer item 1' to be visible
    Then I expect the 'footer item 2' to be visible

  @simplepage-click-element-inside-element
  Scenario: Click an element inside another element
    When I click the 'go home link' inside the 'main container'
    Then I expect to be on the 'home' page

  @simplepage-set-element-inside-element
  Scenario: Set an element inside another element
    When I set the 'name field' inside the 'main container' to 'some content'
    # Then I expect the value of the 'name field' inside the 'main container' to be 'some content'

  @simplepage-check-element-inside-element-text
  Scenario: check text of an element inside another element
    Then I expect the 'main heading' inside the 'main container' to contain the text 'Simple page'
