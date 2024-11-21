const homeScreen = require("../screenobjects/home.screen.js")

describe('Test Run', () => {
    it('Test Run', async() => {
      browser.url("https://staging.getslurp.com/franchise/report/daily-sales");
      
      await browser.$(homeScreen.fields.usernameField).setValue("nuraisyah+1@getslurp.com");
      
      await browser.$(homeScreen.fields.passwordField).setValue("12345678");
      
      await browser.$(homeScreen.buttons.loginBtn).click();
      await browser.pause(5000);

      await browser.$(homeScreen.buttons.menuReport).click();
      await browser.pause(2000)

      await browser.$(homeScreen.buttons.dailysales).click();
      await browser.pause(1000);             

      await browser.$(homeScreen.buttons.calendar).click();
      await browser.pause(1000);

      
      await browser.$(homeScreen.buttons.datePicker).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.applyBtn).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.selectTillNumber).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.viewTill).click();
      await browser.pause(1000);

      await browser.$(homeScreen.buttons.printTill).click();
      await browser.pause(1000);

    })
  })