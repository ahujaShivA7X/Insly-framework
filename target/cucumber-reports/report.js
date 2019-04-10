$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Signup.feature");
formatter.feature({
  "line": 1,
  "name": "Register a new user to Insly",
  "description": "",
  "id": "register-a-new-user-to-insly",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Test1"
    }
  ],
  "line": 4,
  "name": "Signing up for Insly",
  "description": "",
  "id": "register-a-new-user-to-insly;signing-up-for-insly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I go to \"url\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I verify the elements on the page using a screenshot",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "url",
      "offset": 9
    },
    {
      "val": "browserType",
      "offset": 18
    }
  ],
  "location": "TestStepDef.i_go_to_on(String,String)"
});
formatter.result({
  "duration": 12528372400,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.i_verify_the_elements_on_the_page_using_a_screenshot()"
});
formatter.result({
  "duration": 4660115300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "#Test2"
    }
  ],
  "line": 9,
  "name": "Enter details in Company section",
  "description": "",
  "id": "register-a-new-user-to-insly;enter-details-in-company-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I enter \"companyName\" as \"shivaCompany\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I type \"inslyAdd\" as \"shiva\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select company profile as \u0027Software Developer Insurance\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select country as \u0027India\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Number of employees as \u00271-5\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select myself as \u0027A tech guy\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "companyName",
      "offset": 9
    },
    {
      "val": "shivaCompany",
      "offset": 26
    }
  ],
  "location": "TestStepDef.i_enter_as(String,String)"
});
formatter.result({
  "duration": 138300600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inslyAdd",
      "offset": 8
    },
    {
      "val": "shiva",
      "offset": 22
    }
  ],
  "location": "TestStepDef.i_type(String,String)"
});
formatter.result({
  "duration": 79117000,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.i_select_company_profile_as_Software_Developer_Insurance()"
});
formatter.result({
  "duration": 135930500,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.i_select_country_as_India()"
});
formatter.result({
  "duration": 933373800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 33
    },
    {
      "val": "5",
      "offset": 35
    }
  ],
  "location": "TestStepDef.i_select_Number_of_employees_as(int,int)"
});
formatter.result({
  "duration": 109821000,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDef.i_select_myself_as_A_tech_guy()"
});
formatter.result({
  "duration": 120896900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "#Test3"
    }
  ],
  "line": 18,
  "name": "Enter details in Administrator section",
  "description": "",
  "id": "register-a-new-user-to-insly;enter-details-in-administrator-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I enter \"AdminWorkEmail\" as \u0027newemail\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I type \"AccountManagerName\" as \u0027shiva\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on \"SuggestPassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I save the password and click on \"savePassword\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter my \"PhoneNumber\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "AdminWorkEmail",
      "offset": 9
    }
  ],
  "location": "TestStepDef.i_enter_as_newemail(String)"
});
formatter.result({
  "duration": 176339200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AccountManagerName",
      "offset": 8
    }
  ],
  "location": "TestStepDef.i_type_as_shiva(String)"
});
formatter.result({
  "duration": 133839700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuggestPassword",
      "offset": 12
    }
  ],
  "location": "TestStepDef.i_click_on(String)"
});
formatter.result({
  "duration": 85414600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "savePassword",
      "offset": 34
    }
  ],
  "location": "TestStepDef.i_save_the_password_and_click_on(String)"
});
formatter.result({
  "duration": 72262100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PhoneNumber",
      "offset": 12
    }
  ],
  "location": "TestStepDef.i_enter_my(String)"
});
formatter.result({
  "duration": 133465900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "#Test3"
    }
  ],
  "line": 26,
  "name": "Enter details in Terms \u0026 Conditions section",
  "description": "",
  "id": "register-a-new-user-to-insly;enter-details-in-terms-\u0026-conditions-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I read \"TnC\" and click on \"TnCButto\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "also the \"PrivacyPolicy\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I agree to \"personalData\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I press \"signUpButton\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TnC",
      "offset": 8
    },
    {
      "val": "TnCButto",
      "offset": 27
    }
  ],
  "location": "TestStepDef.i_read_and_click_on(String,String)"
});
formatter.result({
  "duration": 2102618400,
  "error_message": "java.lang.IllegalArgumentException: Cannot find elements when the XPath expression is null.\r\n\tat org.openqa.selenium.By.xpath(By.java:113)\r\n\tat utils.baseClass.click(baseClass.java:79)\r\n\tat stepDefinitions.TestStepDef.i_read_and_click_on(TestStepDef.java:113)\r\n\tat ✽.Given I read \"TnC\" and click on \"TnCButto\"(Signup.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "PrivacyPolicy",
      "offset": 10
    }
  ],
  "location": "TestStepDef.also_the(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});