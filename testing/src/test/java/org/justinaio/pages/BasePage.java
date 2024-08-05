package org.justinaio.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class BasePage {

    WebDriver webDriver;

    public BasePage(WebDriver webDriver) {
        this.webDriver = webDriver;
        PageFactory.initElements(webDriver, this);
    }

    public String getCurrentURL() {
        return this.webDriver.getCurrentUrl();
    }

}
