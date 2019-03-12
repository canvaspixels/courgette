@when-steps
Feature: Testing When steps

  Background: I am on the homepage
    Given I am on the 'Home' page

  @when-upload-file-selector
  Scenario: When I upload a file
    When I set the file upload 'testsToValidateStepDefinitions/features/given.feature' to element with selector '[data-test="a-file"]'

  @when-upload-file
  Scenario: When I upload a file
    When I set the file upload 'testsToValidateStepDefinitions/features/given.feature' to the 'file upload'

  @when-steps-append-value
  Scenario: When I append to a field
    When I append 'hello' to 'email'
    Then I expect the value of the 'email' to be 'hi@hello.comhello'

  # @when-steps-set-select
  # Scenario: When I set select field
  #   When I set 'age field' to '18-25'
  #   Then I expect the value of the 'age field' to be '18-88'
  # todo create

  @when-steps-clear-then-set-value
  Scenario: When I append to a field
    When I set 'email' to 'hello'
    And I wait '1' second
    Then I expect the value of the 'email' to be 'hello'

  @when-steps-set-value
  Scenario: When I set text in the field
    When I set 'fullname' to 'foo'
    And I wait for 'fullname' to exist
    And I wait for 'non-existant element' to not exist
    Then I expect the value of the 'fullname' to be 'foo'

  @when-steps-append-react-field
  Scenario: When I append to a field in react
    When I append 'hello' to react field 'email'
    Then I expect the value of the 'email' to be 'hi@hello.comhello'

  @when-steps-set-react-field
  Scenario: When I set text in a field in react
    When I set react field 'fullname' to 'foo'
    Then I expect the value of the 'fullname' to be 'foo'

  @when-steps-clear-then-set-react-value
  Scenario: When I append to a field
    When I set react field 'email' to 'hello'
    Then I expect the value of the 'email' to be 'hello'

  # TODO: see comment in: https://github.com/canvaspixels/courgette/issues/16
  # @when-steps-submit-form
  # Scenario: When I submit a form
  #   When I submit the 'main form'
  #   Then I expect the url to be 'http://localhost:3000/other-page'

  # TODO: see comment in: https://github.com/canvaspixels/courgette/issues/16
  # @when-steps-key
  # Scenario: When I press a key
  #   When I set 'fullname' to 'foo'
  #   And I press 'ENTER'
  #   Then I expect the url to be 'http://localhost:3000/other-page'

  @when-steps-clear
  Scenario: When I clear a field
    When I clear the 'email'
    Then I expect the value of the 'email' to not be 'hi@hello.com'
    Then I expect the value of the 'email' to be ''

  @when-steps-select-by-text
  Scenario: When I select an option by the text inside it
    When I select the option for select element 'age field' with the text '26+'
    Then I expect the value of the 'age field' to be '26+'
