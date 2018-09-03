@step-definition-checks
Feature: Testing combined checks

  Background: I am on the homepage
    Given I am on the 'Home' page

  @step-definition-checks-stuff
  Scenario: I am checking a bunch of stuff
    Then I am checking a bunch of stuff

  @step-definition-checks-cookies
  # Scenario: I am checking a bunch of cookies
    And the cookie 'cookieName' is set to 'cookieValue'
    Then all the cookie functions work





