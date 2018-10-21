@step-definition-checks
Feature: Testing combined checks

  Background: I am on the homepage
    Given I am on the 'Home' page

  @step-definition-checks-stuff
  Scenario: I am checking a bunch of stuff
    Then I am checking a bunch of stuff

  @step-definition-checks-cookies
  Scenario: I am checking a bunch of cookies
    And I set the cookie 'foo' with value 'bar'
    Then all the cookie functions work





