@courgette-simple
Feature: simple example that doesn't require any extra files such as page object to work

  @courgette-simple-get-started
  Scenario: Clicking Get started takes me to the getting started page
    Given I am on the page with url '/'
    And I set the cookie 'MCPopupClosed' with value 'yes'
    And I am on the page with url '/'
    When I click the element that contains the text 'OK, I Understand'
    And I click the element that contains the text 'Get started'
    Then I expect the url to contain 'courgette-testing.com/getting-started'