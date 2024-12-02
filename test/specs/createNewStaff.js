const homeScreen = require("../screenobjects/home.screen.js")

describe('Test Run', () => {
    it('Test Run', async () => {
        browser.url("https://staging.getslurp.com/franchise/report/daily-sales");

        //test login
        await browser.$(homeScreen.fields.usernameField).setValue("nuraisyah+1@getslurp.com");
        await browser.$(homeScreen.fields.passwordField).setValue("12345678");
        await browser.$(homeScreen.buttons.loginBtn).click();
        await browser.pause(5000);

        //test create new staff
        await browser.$(homeScreen.buttons.staffControlBtn).click();
        await browser.pause(1000);

        await browser.$(homeScreen.buttons.staffStationBtn).click();
        await browser.pause(1000);

        await browser.$(homeScreen.buttons.createStaffBtn).click();
        await browser.pause(1000);

        await browser.$(homeScreen.fields.newstaffName).setValue("Adreana");
        await browser.pause(1000);

        await browser.$(homeScreen.fields.newstaffEmail).setValue("adreana@gmail.com");
        await browser.pause(1000);

        await browser.$(homeScreen.fields.newstaffPin).setValue("0505");
        await browser.pause(1000);

        await browser.$(homeScreen.dropdown.stationsDropDown).click();
        await browser.pause(1000);

        await browser.$(homeScreen.buttons.selectedStationBtn).click();
        await browser.pause(1000);

        await browser.$(homeScreen.dropdown.rolesDropDown).click();
        await browser.pause(1000);

        await browser.$(homeScreen.buttons.selectedRolesBtn).click();
        await browser.pause(1000);

        await browser.$(homeScreen.dropdown.rolesDropDown).click();
        await browser.pause(1000);

        await browser.$(homeScreen.dropdown.permissionsDropDown).click();
        await browser.pause(1000);

        //await browser.$(homeScreen.buttons.selectedPermissionsBtn).click();
        //await browser.pause(1000);

        await browser.$(homeScreen.buttons.createNewStaffSaveBtn).click();





})
})
