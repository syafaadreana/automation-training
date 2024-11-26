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

        await browser.$(homeScreen.buttons.discountType).click();

        await browser.$(homeScreen.dropdown.promoCategoryDropDown).click();
        await browser.pause(1000);
        
        //await browser.$(homeScreen.fields.categoryPromo).setValue("normal");

        await browser.$(homeScreen.buttons.normalCategory).click();
        await browser.pause(1000);

        await browser.$(homeScreen.buttons.comboBtn).click();

        await browser.$(homeScreen.fields.comboNameField).setValue("Sandwiches & Ice Coffee");
        await browser.pause(1000);

        await browser.$(homeScreen.fields.finalprice).setValue("10");
        await browser.pause(1000);

        await browser.$(homeScreen.fields.foodName).setValue("Sandwiches");
        await browser.pause(1000);

        await browser.$(homeScreen.fields.minQty).setValue("2");
        await browser.pause(1000);

        await browser.$(homeScreen.fields.maxQty).setValue("10");
        await browser.pause(1000);

        await browser.$(homeScreen.dropdown.productChoiceDropDown).click();
        await browser.pause(1000);

        await browser.$(homeScreen.buttons.productChoiceBtn).click();
        await browser.pause(1000);
       
        await browser.$(homeScreen.fields.drinkName).setValue("Ice Coffee");
        await browser.pause(1000);

        await browser.$(homeScreen.fields.drinkMinQty).setValue("2");
        await browser.pause(1000);

        await browser.$(homeScreen.fields.drinkMaxQty).setValue("10");
        await browser.pause(1000);

        await browser.$(homeScreen.dropdown.drinkChoiceDropDown).click();
        await browser.pause(1000);

        await browser.$(homeScreen.buttons.drinkChoiceBtn).click();
        await browser.pause(1000);

        await browser.$(homeScreen.buttons.setupBtn).click();

})

})