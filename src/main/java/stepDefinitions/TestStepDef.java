package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import org.sikuli.script.Screen;
import utils.baseClass;

public class TestStepDef extends baseClass {

    baseClass base = new baseClass();


    @Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
    public void i_go_to_on(String url, String browser) throws Throwable {
        System.out.println("I open " +url+ " on " +browser);
        base.openBrowser(browser);
        base.navigate(url);

    }

    @Given("^I verify the elements on the page using a screenshot$")
    public void i_verify_the_elements_on_the_page_using_a_screenshot() throws Throwable {
        Screen screen = new Screen();

        if(screen.exists("images/Insly signup.PNG") != null)
            System.out.println("image matched");

        else
            System.out.println("!image matched");
    }


    @Given("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
    public void i_enter_as(String companyName, String arg1) throws Throwable {
        System.out.println("I enter Company name as " +companyName+ " on " +arg1);
        base.input(companyName,arg1);

    }

    @And("^I type \"([^\"]*)\" as \"([^\"]*)\"$")
    public void i_type(String inslyAdd, String arg2) throws Throwable {
        System.out.println("I enter Insly address as " +inslyAdd+ " on " +arg2);
        base.input(inslyAdd,"shiva");

    }

    @Given("^I select company profile as 'Software Developer Insurance'$")
    public void i_select_company_profile_as_Software_Developer_Insurance() throws Throwable {
        Select drpProfile = new Select(driver.findElement(By.id("prop_company_profile")));
        drpProfile.selectByIndex(4);

    }

    @Given("^I select country as 'India'$")
    public void i_select_country_as_India() throws Throwable {
        Select drpCountry = new Select(driver.findElement(By.id("broker_address_country")));
        drpCountry.selectByIndex(101);

    }

    @Given("^I select Number of employees as '(\\d+)-(\\d+)'$")
    public void i_select_Number_of_employees_as(int arg1, int arg2) throws Throwable {
        Select drpEmployees = new Select(driver.findElement(By.id("prop_company_no_employees")));
        drpEmployees.selectByIndex(1);

    }

    @Given("^I select myself as 'A tech guy'$")
    public void i_select_myself_as_A_tech_guy() throws Throwable {
        Select drpAboutMe = new Select(driver.findElement(By.id("prop_company_person_description")));
        drpAboutMe.selectByIndex(3);

    }

    @Given("^I enter \"([^\"]*)\" as 'newemail'$")
    public void i_enter_as_newemail(String AdminWorkEmail) throws Throwable {
        base.input(AdminWorkEmail,"newemail@yahoo.co.in");
    }

    @Given("^I type \"([^\"]*)\" as 'shiva'$")
    public void i_type_as_shiva(String AccountManagerName) throws Throwable {
        base.input(AccountManagerName,"Shivansh Ahuja");
    }

    @Given("^I click on \"([^\"]*)\"$")
    public void i_click_on(String SuggestPassword) throws Throwable {
        base.click(SuggestPassword);
        //driver.findElement(By.xpath("/html/body/main/div/div/div/form/div/div/div/div[1]/div/table/tbody/tr[20]/td[2]/div/a")).click();

    }

    @Given("^I save the password and click on \"([^\"]*)\"$")
    public void i_save_the_password_and_click_on(String savePassword) throws Throwable {
        base.click(savePassword);
    }

    @Then("^I enter my \"([^\"]*)\"$")
    public void i_enter_my(String PhoneNumber) throws Throwable {
        base.wait(PhoneNumber);
        base.input(PhoneNumber,"5666748");
    }

    @Given("^I read \"([^\"]*)\" and click on \"([^\"]*)\"$")
    public void i_read_and_click_on(String TnC, String TnCButton) throws Throwable {
        base.wait(TnC);
        base.click(TnC);
        //base.wait(TnCButton);
        Thread.sleep(2000);
        base.click(TnCButton);

    }

    @Given("^also the \"([^\"]*)\"$")
    public void also_the(String PrivacyPolicy) throws Throwable {
        base.wait(PrivacyPolicy);
        base.click(PrivacyPolicy);
        base.scrollDown();

    }

   /* @Given("^I agree to \"([^\"]*)\"$")
    public void i_agree_to(String personalData) throws Throwable {
        base.wait(personalData);
        base.click(personalData);

    }

    @Then("^I press \"([^\"]*)\"$")
    public void i_press(String signUpButton) throws Throwable {
        base.wait(signUpButton);
        base.click(signUpButton);

    }*/


    //Closes the browser after each scenario
    /*@After
    public void closeDriver(){
        base.tearDown();
    }*/


}


