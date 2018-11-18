@no-po
Feature: Testing steps where page object isn't required

  @no-po-click
  Scenario: Go to page and click element
    Given I am on the page with url 'https://stackoverflow.com/questions/2994198/xpath-to-return-only-elements-containing-the-text-and-not-its-parents'
    When I click the element with the text 'Stack Overflow'
    Then I expect the url to be 'https://stackoverflow.com/'
    And I expect the url to not be 'https://stackoverflow.com/fff'
    And take a screenshot

  @no-po-click-nth
  Scenario: Go to page and click element
    Given I am on the page with url 'https://stackoverflow.com/questions/2994198/xpath-to-return-only-elements-containing-the-text-and-not-its-parents'
    When I click the '1st' element with the text 'Stack Overflow'
    Then I expect the url to be 'https://stackoverflow.com/'

  @no-po-click-nth2
  Scenario: Go to page and click element
    Given I am on the page with url 'https://stackoverflow.com/questions/2994198/xpath-to-return-only-elements-containing-the-text-and-not-its-parents'
    When I click the '2nd' element with the text 'Stack Overflow'
    Then I expect the url to be 'https://stackoverflow.com/'
