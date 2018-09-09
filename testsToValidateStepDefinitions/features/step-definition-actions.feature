@step-definition-actions
Feature: Testing combined actions

  Background: I am on the homepage
    Given I am on the 'Home' page

  @step-definition-actions-inputs
  Scenario: I have set and appended a field
    And I have set and appended a field
    Then I expect the value of the 'email' to be 'foo@bar.com'

  @step-definition-actions-react-inputs
  Scenario: I have set and appended a react field
    And I have set and appended a react field
    Then I expect the value of the 'email' to be 'foo@bar.com'

  @step-definition-actions-cleared-input
  Scenario: I have cleared and appended a field
    Given I am on the 'home' page
    And I have cleared and appended a field
    Then I expect the value of the 'email' to be 'test@test.com'

  @step-definition-actions-submit-click
  Scenario: I have submitted the form and gone back to the homepage
    And I have submitted the form and gone back to the homepage
    Then I expect to be on the 'home' page

  # @step-definition-actions-submit-with-enter-click
  # Scenario: I have submitted the form by pressing enter and gone back to the homepage
  #   And I have submitted the form by pressing enter and gone back to the homepage
  #   Then I expect to be on the 'home' page

  @step-definition-actions-set-cookie
  Scenario: I have set the cookie
    And I have set the cookie
    Then I expect cookie 'cookieName' to contain 'cookieValue'

  @step-definition-actions-set-select-by-option-text
  Scenario: I have set the select by option text
    And I have set select by option text
    Then I expect the value of the 'age field' to be '26+'


