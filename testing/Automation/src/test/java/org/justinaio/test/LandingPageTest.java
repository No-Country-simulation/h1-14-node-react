package org.justinaio.test;

import org.justinaio.pages.LandingPage;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class LandingPageTest extends BaseTest {

    // Configuration

    @BeforeMethod
    public void beforeMethodTest() {
        if (webDriver == null) {
            webDriver = new FirefoxDriver();
        }
        webDriver.navigate().to(urlsData.getLandingURL());
        landingPage = getLandingPage();
    }

    // HAPPY PATHS!

    // Buttons tests

    @Test
    public void clickRegisterButtonTest() {
        String testName = "Verificar el botón Registrarme.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            Assert.assertTrue(landingPage.isRegisterButtonPresent());
            landingPage.clickRegisterButton();
            Assert.assertEquals(landingPage.getCurrentURL(), urlsData.getRegisterURL());
            test.pass( "El botón Registrarme está presente y funcional.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail("Test fallido: " + e.getMessage());
            throw e;
        }
    }

    @Test
    public void clickLoginButtonTest() {
        String testName = "Verificar el botón Ingresar.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            Assert.assertTrue(landingPage.isLoginButtonPresent());
            landingPage.clickLoginButton();
            Assert.assertEquals(landingPage.getCurrentURL(), urlsData.getLoginURL());
            test.pass( "El botón de Ingresar está presente y funcional.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

    @Test
    public void clickUneteAhoraButtonTest() {
        String testName = "Verificar el botón ¡Unite ahora y salva vidas!.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            Assert.assertTrue(landingPage.isUneteAhoraButtonPresent());
            landingPage.clickUneteAhoraButton();
            Assert.assertEquals(landingPage.getCurrentURL(), urlsData.getRegisterURL());
            test.pass( "El botón de ¡Unite ahora y salva vidas! está presente y funcional.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

    @Test
    public void clickEnviarMensajeButtonTest() {
        String testName = "Verificar el botón Enviar mensaje.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            Assert.assertTrue(landingPage.isEnviarMensajeButtonPresent());
            landingPage.clickEnviarMensajeButton();
            test.pass( "El botón de Enviar mensaje está presente.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }

        // No redirige todavia a ningún lado.
        // Assert.assertEquals(landingPage.getCurrentURL(), );
    }

    // Navbar tests

    @Test
    public void logoTest() {
        String testName = "Verificar el logo.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            Assert.assertTrue(landingPage.isLogoPresent());
            test.pass( "El logo está presente.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

    @Test
    public void listNavBarTest() {
        String testName = "Verificar los elementos del navbar.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            Assert.assertTrue(landingPage.isNavItemsPresent());
            Assert.assertEquals(landingPage.getNavItemsCount(), 4);

            Assert.assertEquals(landingPage.getNavItemText(0), "Inicio");
            Assert.assertEquals(landingPage.getNavItemText(1), "Sobre la Ley Justina");
            Assert.assertEquals(landingPage.getNavItemText(2), "Funcionalidades");
            Assert.assertEquals(landingPage.getNavItemText(3), "Contactanos");

            Assert.assertTrue(landingPage.isElementDisplayedInNavBar(0));
            Assert.assertTrue(landingPage.isElementDisplayedInNavBar(1));
            Assert.assertTrue(landingPage.isElementDisplayedInNavBar(2));
            Assert.assertTrue(landingPage.isElementDisplayedInNavBar(3));

            test.pass( "Los elementos del navbar estan presentes y funcionales.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

    // Title test

    @Test
    public void titlesTest() {
        String testName = "Verificar los títulos.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            Assert.assertTrue(landingPage.isAyudemosTitlePresent());
            Assert.assertTrue(landingPage.isAliadosTitlePresent());
            Assert.assertTrue(landingPage.isFuncionalidadesTitlePresent());
            Assert.assertTrue(landingPage.isSobreLeyTitlePresent());
            Assert.assertTrue(landingPage.isComunicateTitlePresent());

            landingPage.getNavItemClick(0);
            Assert.assertEquals(landingPage.getAyudemosTitleText(), "Ayudemos a todos los que podamos");
            Assert.assertEquals(landingPage.getAliadosTitleText(), "Nuestros valiosos aliados");
            landingPage.getNavItemClick(1);
            Assert.assertEquals(landingPage.getSobreLeyTitleText(), "Sobre la Ley Justina");
            landingPage.getNavItemClick(3);
            Assert.assertEquals(landingPage.getComunicateTitleText(), "Comunicate con nosotros");
            landingPage.getNavItemClick(2);
            Assert.assertEquals(landingPage.getFuncionalidadesTitleText(), "Principales funcionalidades");

            test.pass( "Los títulos están presentes y son correctos.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }



    // Form tests: Comunicate con nosotros

    // Placeholders test

    @Test
    public void nombreApellidoContainerTest() {
        String testName = "Verificar el contenedor Nombre y apellido.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            landingPage.getNavItemClick(3);
            Assert.assertTrue(landingPage.isNombreApellidoFieldPresent());
            Assert.assertEquals(landingPage.getNombreApellidoFieldPlaceholder(), "Nombre y apellido");

            test.pass( "El contenedor Nombre y apellido esta presente y es correcto.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

    @Test
    public void EmailContainerTest() {
        String testName = "Verificar el contenedor Correo electrónico.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            landingPage.getNavItemClick(3);
            Assert.assertTrue(landingPage.isEmailFieldPresent());
            Assert.assertEquals(landingPage.getEmailFieldPlaceholder(), "Correo electrónico");

            test.pass( "El contenedor Correo electrónico esta presente y es correcto.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

    @Test
    public void telefonoContainerTest() {
        String testName = "Verificar el contenedor Teléfono.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            landingPage.getNavItemClick(3);
            Assert.assertTrue(landingPage.isTelefonoFieldPresent());
            Assert.assertEquals(landingPage.getTelefonoFieldPlaceholder(), "Teléfono");

            test.pass( "El contenedor Teléfono esta presente y es correcto.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

    @Test
    public void mensajeContainerTest() {
        String testName = "Verificar el contenedor Mensaje.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            landingPage.getNavItemClick(3);
            Assert.assertTrue(landingPage.isMensajeFieldPresent());
            Assert.assertEquals(landingPage.getMensajeFieldPlaceholder(), "Déjanos tu mensaje aquí");

            test.pass( "El contenedor Mensaje esta presente y es correcto.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail("Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

        // Labels test

    @Test
    public void nombreApellidoLabelTest() {
        String testName = "Verificar el label del contenedor Nombre y apellido.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            landingPage.getNavItemClick(3);
            Assert.assertTrue(landingPage.isNombreApellidoLabelPresent());
            Assert.assertEquals(landingPage.getNombreApellidoLabelText(), "Nombre y apellido");

            test.pass( "El label del contenedor Nombre y apellido esta presente y es correcto.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

    @Test
    public void EmailLabelTest() {
        String testName = "Verificar el label del contenedor Correo electrónico.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            landingPage.getNavItemClick(3);
            Assert.assertTrue(landingPage.isEmailLabelPresent());
            Assert.assertEquals(landingPage.getEmailLabelText(), "Correo electrónico");

            test.pass( "El label del contenedor Correo electrónico esta presente y es correcto.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

    @Test
    public void telefonoLabelTest() {
        String testName = "Verificar el label del contenedor Teléfono.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            landingPage.getNavItemClick(3);
            Assert.assertTrue(landingPage.isTelefonoLabelPresent());
            Assert.assertEquals(landingPage.getTelefonoLabelText(), "Teléfono");

            test.pass( "El label del contenedor Teléfono esta presente y es correcto.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }

    @Test
    public void mensajeLabelTest() {
        String testName = "Verificar el label del contenedor Mensaje.";
        test = extent.createTest(testName);

        try {
            LandingPage landingPage = getLandingPage();
            landingPage.getNavItemClick(3);
            Assert.assertTrue(landingPage.isMensajeLabelPresent());
            Assert.assertEquals(landingPage.getMensajeLabelText(), "Mensaje");

            test.pass( "El label del contenedor Mensaje esta presente y es correcto.");
        } catch (AssertionError e) {
            captureScreenshot(testName);
            test.fail( "Test fallido: " + e.getMessage());
            Assert.fail("Test fallido: " + e.getMessage());
        }
    }



        // Send info test




}
