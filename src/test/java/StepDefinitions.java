import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.After;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class StepDefinitions {
    public WebDriver driver;
    WebDriverWait wait;
    Login Login;

    @Given("^User visits e-commerce website$")
    public void user_visits_e_commerce_website() throws Exception {
        System.setProperty("webserver.gecko.driver", "./src/test/resources/geckodriver.exe");
        FirefoxOptions ops = new FirefoxOptions();
        ops.addArguments("--headed"); //uncomment if you want to run in headless mode
        driver = new FirefoxDriver(ops);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("https://phptravels.com");

    }

    @When("^User enters valid \"([^\"])\" and \"([^\"])\"$")
    public void user_enters_valid_credentials(String username, String password) throws Exception {
        Login = new Login(driver);
        Login.doLogin("email", password);

    }

    @Then("^User can logged in successfully$")
    public void user_can_logged_in_successfully() throws Exception {
        WebDriverWait wait = new WebDriverWait(driver, 40);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//span[contains(text(),'Test User' )]")));
        WebElement lblUserName = driver.findElement(By.xpath("//span[contains(text(),'Test User')]"));
        Assert.assertEquals(lblUserName.getText(),"Test User");
    }

    @After
    public void closeBrowser() {
        driver.quit();
    }


    @When("^User enters invalid \"([^\"]*)\" and invalid \"([^\"]*)\"$")
    public void user_enters_invalid_and_invalid(String arg1, String arg2) throws Exception {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("^User can not logged in successfully$")
    public void user_can_not_logged_in_successfully() throws Exception {
        // Write code here that turns the phrase above into concrete actions

    }
}

