package org.justinaio.test;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import org.justinaio.data.UrlsData;
import org.justinaio.pages.LandingPage;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.io.FileHandler;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import java.io.File;
import java.io.IOException;

public class BaseTest {

    protected WebDriver webDriver;
    protected LandingPage landingPage;
    protected UrlsData urlsData = new UrlsData();
    protected ExtentReports extent;
    protected ExtentTest test;

    @BeforeTest
    public void setUp() {
        webDriver = new FirefoxDriver();

        ExtentSparkReporter sparkReporter = new ExtentSparkReporter("extentReport.html");
        extent = new ExtentReports();
        extent.attachReporter(sparkReporter);
    }

    @AfterTest
    public void tearDown() {
        if (webDriver != null) {
            webDriver.close();
        }
        extent.flush();
    }

    public void captureScreenshot(String testName) {
        File srcFile = ((TakesScreenshot) webDriver).getScreenshotAs(OutputType.FILE);
        String filePath = "screenshots/" + testName + ".png";
        try {
            FileHandler.copy(srcFile, new File(filePath));
            test.addScreenCaptureFromPath(filePath);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public LandingPage getLandingPage() {
        return new LandingPage(webDriver);
    }


}
