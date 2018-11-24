@google
Feature: Test feature

  # this is a really simple example that doesn't require any extra page object files to work
  @google-feeling-lucky
  Scenario: Clicking I’m Feeling Lucky without typing a search query goes straight to doodles
    Given I am on the page with url '/'
    When I click the element that contains the text 'Feeling Lucky'
    Then I expect the url to contain 'google.com/doodles'

  # this page requires the google-home.page page object, which is loaded in by the
  # I am on the 'Google Home' page step definition
  # this way provides more flexibility
  @google-feeling-lucky-page-object-required
  Scenario: Clicking I’m Feeling Lucky without typing a search query goes straight to doodles
    Given I am on the 'Google Home' page
    When I click 'I’m Feeling Lucky'
    Then I expect the url to contain 'google.com/doodles'
