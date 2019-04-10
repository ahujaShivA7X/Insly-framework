Feature: Register a new user to Insly

  #Test1
  Scenario: Signing up for Insly
    Given I go to "url" on "browserType"
    Then I verify the elements on the page using a screenshot

  #Test2
  Scenario: Enter details in Company section
    Given I enter "companyName" as "shivaCompany"
    And I type "inslyAdd" as "shiva"
    And I select company profile as 'Software Developer Insurance'
    And I select country as 'India'
    And I select Number of employees as '1-5'
    Then I select myself as 'A tech guy'

   #Test3
  Scenario: Enter details in Administrator section
    Given I enter "AdminWorkEmail" as 'newemail'
    And I type "AccountManagerName" as 'shiva'
    And I click on "SuggestPassword"
    And I save the password and click on "savePassword"
    Then I enter my "PhoneNumber"

   #Test3
  Scenario: Enter details in Terms & Conditions section
    Given I read "TnC" and click on "TnCButto"
    And also the "PrivacyPolicy"
    And I agree to "personalData"
    Then I press "signUpButton"