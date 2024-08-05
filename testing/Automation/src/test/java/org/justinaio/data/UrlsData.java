package org.justinaio.data;

public class UrlsData {

    private String landingURL = "https://justinaio.netlify.app/";
    private String loginURL = "https://justinaio.netlify.app/login";
    private String registerURL = "https://justinaio.netlify.app/registro";


    public String getLandingURL() {
        return this.landingURL;
    }

    public String getRegisterURL() {
        return this.registerURL;
    }

    public String getLoginURL() {
        return this.loginURL;
    }


    public UrlsData() {
    }
}
