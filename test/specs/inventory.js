const homeScreen = require("../screenobjects/home.screen.js")

describe('Test Run', () => {
    it('Test Run', async() => {
      browser.url("https://staging.getslurp.com/franchise/report/daily-sales");
      
      //test login
      await browser.$(homeScreen.fields.usernameField).setValue("nuraisyah+1@getslurp.com");
      await browser.$(homeScreen.fields.passwordField).setValue("12345678");
      await browser.$(homeScreen.buttons.loginBtn).click();
      await browser.pause(5000);

      //test inventory
      await browser.$(homeScreen.buttons.gridBtn).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.inventoryBtn).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.supplierBtn).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.createNewSupplierBtn).click();
      await browser.pause(1000);

      await browser.$(homeScreen.dropdown.supplierstationDropDown).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.selectedsupplierstation).click();
      await browser.pause(1000);

      await browser.$(homeScreen.fields.newsupplierName).setValue("John Doe");
      await browser.pause(1000);

      await browser.$(homeScreen.fields.newsupplierEmail).setValue("johndoe@gmail.com");
      await browser.pause(1000);

      await browser.$(homeScreen.fields.newsupplierPhone).setValue("601121563598");
      await browser.pause(1000);

      await browser.$(homeScreen.fields.newsupplierFax).setValue("053322668");
      await browser.pause(1000);

      await browser.$(homeScreen.fields.sentinelID).setValue("600123");
      await browser.pause(1000);

      await browser.$(homeScreen.fields.shiftID).setValue("789456");
      await browser.pause(1000);

      await browser.$(homeScreen.dropdown.supplierCompanyStatus).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.selectedsupplierCompanyStatus).click();
      await browser.pause(1000);

      await browser.$(homeScreen.fields.supplierName2).setValue("Nancy");
      await browser.pause(1000);

      await browser.$(homeScreen.dropdown.supplierTypeDropDown).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.selectedsupplierType).click();
      await browser.pause(1000);

      await browser.$(homeScreen.fields.supplierAddress).setValue("33, LALUAN LAPANGAN PERDANA 3,");
      await browser.pause(1000);

      await browser.$(homeScreen.fields.supplierPostalCode).setValue("31650");
      await browser.pause(1000);

      await browser.$(homeScreen.fields.supplierCity).setValue("ipoh");
      await browser.pause(1000);

      await browser.$(homeScreen.dropdown.supplierCountryDropDown).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.selectedsupplierCountry).click();
      await browser.pause(1000);

      await browser.$(homeScreen.fields.supplierRegion).setValue("Perak");
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.createSaveNewSupplierBtn).click();
      await browser.pause(1000);










    })
})