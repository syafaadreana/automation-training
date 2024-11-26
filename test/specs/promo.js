const homeScreen = require("../screenobjects/home.screen.js")

describe('Test Run', () => {
    it('Test Run', async () => {
        browser.url("https://staging.getslurp.com/franchise/report/daily-sales");

        //test login
        await browser.$(homeScreen.fields.usernameField).setValue("nuraisyah+1@getslurp.com");

        await browser.$(homeScreen.fields.passwordField).setValue("12345678");

        await browser.$(homeScreen.buttons.loginBtn).click();
        await browser.pause(5000);

        //test create promotions
        await browser.$(homeScreen.buttons.promotionBtn).click();
        await browser.pause(1000);

        await browser.$(homeScreen.buttons.createpromo).click();
        await browser.pause(1000);

        await browser.$(homeScreen.fields.namePromo).setValue("Buy2Free1");

        await browser.$(homeScreen.dropdown.promoTypeDropDown).click();
        await browser.pause(1000);

        await browser.$(homeScreen.fields.typePromo).setValue("discount");

        await browser.$(homeScreen.dropdown.promoTypeDropDown).click();
        await browser.pause(1000);

        await browser.$(homeScreen.dropdown.promoCategoryDropDown).click();
        await browser.pause(1000);
        
        await browser.$(homeScreen.fields.categoryPromo).setValue("normal");

        await browser.$(homeScreen.dropdown.promoCategoryDropDown).click();
        await browser.pause(1000);
       

})

})