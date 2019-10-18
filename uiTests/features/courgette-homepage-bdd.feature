@courgette-bdd
Feature: Example showing creating your own step definitions in Gherkin

  @courgette-bdd-get-started-reusable-steps
  Scenario: Sample using reusable steps. Steps are used to combine step definitions or cukes for DRYness and or creating declarative BDD scenarios that the business can relate to
    Given I am on the courgette homepage
    Then I should be able to access the get started page
    # for better a BDD example see https://courgette-testing.com/bdd