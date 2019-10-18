@courgette-with-page-objects
Feature: Example that requires the courgette-home.page page object, which is loaded in by the...
  # ...I am on the 'courgette Home' page
  # step definition and steps that follow this step definition
  # will refer to the locators in that page object
  # to provide more flexibility

  @courgette-with-page-objects-get-started
  Scenario: Clicking Get started takes the user to the Getting started page
    Given I am on the 'courgette-home' page
    # Given I am on the 'courgette home' page        <--------- this will also work, use kebab case or space separators
    And I set the cookie 'privacyPolicyAgreed' with value 'true'
    And I set the cookie 'MCPopupClosed' with value 'yes'
    And I am on the 'courgette-home' page
    When I click 'get started'
    Then I expect the url to contain 'courgette-testing.com'