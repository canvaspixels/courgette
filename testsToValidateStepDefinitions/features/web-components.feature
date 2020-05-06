@ignore @web-components
Feature: Testing Given steps

  @web-components-hello-world
  Scenario: Web components hello world
    Given I am on the 'web components' page
    Then I expect the 'hello world' to be visible
