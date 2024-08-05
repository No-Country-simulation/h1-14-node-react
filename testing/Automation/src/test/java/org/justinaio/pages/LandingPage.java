package org.justinaio.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class LandingPage extends BasePage{

    public LandingPage(WebDriver webDriver) {
        super(webDriver);
    }

    // Locators

    @FindBy(xpath = "//ul[contains(@class, 'hidden xl:flex gap-4 items-center')]/li")
    private List<WebElement> navItems;

    @FindBy(xpath = "//button[contains(@class, 'text-secondary-foreground') and contains(text(), 'Registrarme')]")
    private WebElement registerButton;

    @FindBy(xpath = "//button[contains(@class, 'text-primary-foreground') and contains(text(), 'Ingresar')]")
    private WebElement loginButton;

    @FindBy(xpath = "//button[contains(@class, 'bg-inputPrimary') and text()='¡Unite ahora y salva vidas!']")
    private WebElement uneteAhoraButton;

    @FindBy(xpath = "//img[@class='w-32 h-auto' and @alt='Logo']")
    private WebElement logo;

    @FindBy(xpath = "//h1[contains(@class, 'text-3xl lg:text-5xl font-bold mb-4') and text()='Ayudemos a todos los que podamos']")
    private WebElement ayudemosTitle;

    @FindBy(xpath = "//h2[contains(@class, ' font-semibold md:font-bold text-center  text-4xl') and text()='Nuestros valiosos aliados']")
    private WebElement aliadosTitle;

    @FindBy(xpath = "//h1[contains(@class, 'text-3xl font-bold text-center lg:text-left mb-4') and text()='Sobre la Ley Justina']")
    private WebElement sobreLeyTitle;

    @FindBy(xpath = "//h1[contains(@class, 'text-4xl pl-8 font-semibold md:font-bold') and text()='Principales Funcionalidades']")
    private WebElement funcionalidadesTitle;

    @FindBy(xpath = "//h1[contains(@class, 'text-left font-bold text-4xl w-full') and text()='Comunicate con nosotros']")
    private WebElement comunicateTitle;

        // Form: Comunicate con nosotros
    @FindBy(xpath = "//label[@for='name']")
    private WebElement nombreApellidoLabel;

    @FindBy(xpath = "//input[@name='name']")
    private WebElement nombreApellidoField;

    @FindBy(xpath = "//label[@for='email']")
    private WebElement emailLabel;

    @FindBy(xpath = "//input[@name='email']")
    private WebElement emailField;

    @FindBy(xpath = "//label[@for='numberPhone']")
    private WebElement telefonoLabel;

    @FindBy(xpath = "//input[@name='numberPhone']")
    private WebElement telefonoField;

    @FindBy(xpath = "//label[@for='messages']")
    private WebElement mensajeLabel;

    @FindBy(xpath = "//textarea[@name='messages']")
    private WebElement mensajeField;

    @FindBy(xpath = "//button[contains(@class, 'inline-flex') and text()='Enviar mensaje']")
    private WebElement enviarMensajeButton;

        // Click buttons methods

    public void clickRegisterButton() {
        this.registerButton.click();
    }

    public void clickLoginButton() {
        this.loginButton.click();
    }

    public void clickUneteAhoraButton() {
        this.uneteAhoraButton.click();
    }

    public void clickEnviarMensajeButton() {
        this.enviarMensajeButton.click();
    }

        // Navbar methods

    public String getNavItemText(int index) {
        WebElement element = this.navItems.get(index).findElement(By.tagName("p"));
        return element.getText();
    }

    public void getNavItemClick(int index) {
        if (index >= 0 && index < getNavItemsCount()) {
            WebElement element = this.navItems.get(index);
            element.click();
        } else {
            throw new IndexOutOfBoundsException("El índice proporcionado está fuera de los límites de la lista: " + index);
        }
    }

    public int getNavItemsCount() {
        return this.navItems.size();
    }

        // Title texts methods

    public String getAyudemosTitleText() {
        return this.ayudemosTitle.getText();
    }

    public String getAliadosTitleText() {
        return this.aliadosTitle.getText();
    }

    public String getSobreLeyTitleText() {
        return this.sobreLeyTitle.getText();
    }

    public String getFuncionalidadesTitleText() {
        return this.funcionalidadesTitle.getText();
    }

    public String getComunicateTitleText() {
        return this.comunicateTitle.getText();
    }

        // Form access elements methods

            //Labels
    public String getNombreApellidoLabelText() {
        return this.nombreApellidoLabel.getText();
    }

    public String getEmailLabelText() {
        return this.emailLabel.getText();
    }

    public String getTelefonoLabelText() {
        return this.telefonoLabel.getText();
    }

    public String getMensajeLabelText() {
        return this.mensajeLabel.getText();
    }

            // Get text of placeholder
    public String getNombreApellidoFieldPlaceholder() {
        return this.nombreApellidoField.getAttribute("placeholder");
    }

    public String getEmailFieldPlaceholder() {
        return this.emailField.getAttribute("placeholder");
    }

    public String getTelefonoFieldPlaceholder() {
        return this.telefonoField.getAttribute("placeholder");
    }

    public String getMensajeFieldPlaceholder() {
        return this.mensajeField.getAttribute("placeholder");
    }

            // Send keys in fields
    public void setNombreApellidoField(String value) {
        this.nombreApellidoField.sendKeys(value);
    }

    public void setEmailField(String value) {
        this.emailField.sendKeys(value);
    }

    public void setTelefonoField(String value) {
        this.telefonoField.sendKeys(value);
    }

    public void setMensajeField(String value) {
        this.mensajeField.sendKeys(value);
    }

            // Methods for displayed elements

    public boolean isNavItemsPresent() {
        return !this.navItems.isEmpty() && this.navItems.size() >= 4;
    }

    public boolean isElementDisplayedInNavBar(int index) {
        WebElement element = this.navItems.get(index);
        return element.isDisplayed();
    }

    public boolean isRegisterButtonPresent() {
        return this.registerButton.isDisplayed();
    }

    public boolean isLoginButtonPresent() {
        return this.loginButton.isDisplayed();
    }

    public boolean isUneteAhoraButtonPresent() {
        return this.uneteAhoraButton.isDisplayed();
    }

    public boolean isLogoPresent() {
        return this.logo.isDisplayed();
    }

    public boolean isAyudemosTitlePresent() {
        return this.ayudemosTitle.isDisplayed();
    }

    public boolean isAliadosTitlePresent() {
        return this.aliadosTitle.isDisplayed();
    }

    public boolean isSobreLeyTitlePresent() {
        return this.sobreLeyTitle.isDisplayed();
    }

    public boolean isFuncionalidadesTitlePresent() {
        return this.funcionalidadesTitle.isDisplayed();
    }

    public boolean isComunicateTitlePresent() {
        return this.comunicateTitle.isDisplayed();
    }

    public boolean isNombreApellidoLabelPresent() {
        return this.nombreApellidoLabel.isDisplayed();
    }

    public boolean isNombreApellidoFieldPresent() {
        return this.nombreApellidoField.isDisplayed();
    }

    public boolean isEmailLabelPresent() {
        return this.emailLabel.isDisplayed();
    }

    public boolean isEmailFieldPresent() {
        return this.emailField.isDisplayed();
    }

    public boolean isTelefonoLabelPresent() {
        return this.telefonoLabel.isDisplayed();
    }

    public boolean isTelefonoFieldPresent() {
        return this.telefonoField.isDisplayed();
    }

    public boolean isMensajeLabelPresent() {
        return this.mensajeLabel.isDisplayed();
    }

    public boolean isMensajeFieldPresent() {
        return this.mensajeField.isDisplayed();
    }

    public boolean isEnviarMensajeButtonPresent() {
        return this.enviarMensajeButton.isDisplayed();
    }



}
