@no-po
Feature: Testing steps where page object isn't required

  @no-po-create-step-def
  Scenario: Creating own step definition
    Given I am on another page

  @no-po-click
  Scenario: Go to page and click element
    Given I am on the page with url 'http://localhost:3000'
    When I click the element with the text 'Go to other page by react router'
    Then I expect the url to be 'http://localhost:3000/other-page'
    And I expect the url to not be 'http://localhost:3000/foo'
    And take a screenshot

  @no-po-reusable-steps
  Scenario: Testing reusable steps. See reusable.steps file in the stepDefinitions folder
    Given I am on the homepage page and I click the link
    Then I do some assertions

  @no-po-reusable-steps-with-params
  Scenario: Testing reusable steps with params
    Given I am on the page with url 'http://localhost:3000' and I click 'Go to other page by react router'
    Then I do some assertions

  @no-po-click-nth
  Scenario: Go to page and click element
    Given I am on the page with url 'http://localhost:3000'
    When I click the '1st' element with the text 'some link text'
    Then I expect the url to be 'http://localhost:3000/other-page'

  @no-po-click-nth2
  Scenario: Go to page and click element
    Given I am on the page with url 'http://localhost:3000'
    When I click the '2nd' element with the text 'some link text'
    Then I expect the url to be 'http://localhost:3000/simple-page'

  @no-po-click-contains-nth2
  Scenario: Go to page and click element
    Given I am on the page with url 'http://localhost:3000'
    When I click the '2nd' element that contains the text 'some link'
    Then I expect the url to be 'http://localhost:3000/simple-page'

  @no-po-check-content
  Scenario: Go to page and click element
    Given I am on the page with url 'http://localhost:3000'
    When I click the element that contains the text 'some link'
    Then I expect page to contain 'Some content on the other page'
