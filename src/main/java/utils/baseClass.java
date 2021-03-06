package utils;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class baseClass {

    public static WebDriver driver = null;
    public static Properties OR = null;
    public static Properties config = null;
    public static FileInputStream fis = null;

     //default constructor
    public baseClass() {

      // initialize properties
        System.out.println("***************Initializing Properties file*******************");
        if(OR==null)
        {
            OR = new Properties();
            try {
                fis = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\resources\\OR.properties");
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }
        try {
            OR.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }

        {
            config = new Properties();
            try {
                fis = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\resources\\Config.properties");
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }
        try {
            config.load(fis);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    //Choose the browser where you want to test
    public void openBrowser(String browser) {
        if (config.getProperty("browserType").equalsIgnoreCase("Mozilla"))
            driver = new FirefoxDriver();
        else if (config.getProperty("browserType").equalsIgnoreCase("Chrome")) {
            System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
            driver = new ChromeDriver();
            }

            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }
    // navigate to any URL
    public void navigate(String url){

        driver.get(config .getProperty(url));
    }

    // click on any object
    public void click(String object){
        driver.findElement(By.xpath(OR.getProperty(object))).click();
    }

    // writing in a text field / select value from a list
    public void input(String object, String data){
        driver.findElement(By.xpath(OR.getProperty(object))).sendKeys(data);
    }

    // checking the presence of a particular element
    public boolean isElementPresent(String object){
        int count = driver.findElements(By.xpath(OR.getProperty(object))).size();
        if(count==0)
            return false;
        else
            return true;


    }

    public void wait(String object){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement element = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.xpath(OR.getProperty(object))));

    }

    public void scrollDown(){
        JavascriptExecutor jse = (JavascriptExecutor)driver;
        jse.executeScript("window.scrollBy(0,250)", "");
    }

    //Closing down the driver
    public void tearDown() {
        if (driver != null) {
            driver.close();
            driver.quit();
        }
    }

}

