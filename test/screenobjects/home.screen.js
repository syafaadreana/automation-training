module.exports = {
  buttons: {
    loginBtn: "/html/body/div/div/div[2]/form/button",
    saveBtn: "#saveBtn",
    menuReport: "/html/body/div[2]/div[1]/div/div[2]/nav/ul/li[5]/a/span[3]",
    dailysales: "/html/body/div[2]/div[1]/div/div[2]/nav/ul/li[5]/ul/li[1]/a[2]/span",
    calendar: "/html/body/div[2]/div[2]/div[2]/div/div[1]/div/div[2]/div/div/div/button",
    datePicker: "/html/body/div[2]/div[2]/div[2]/div/div[1]/div/div[2]/div/div[2]/div/div[1]/div[1]/div[1]/p",
    applyBtn: "/html/body/div[2]/div[2]/div[2]/div/div[1]/div/div[2]/div/div[2]/div/div[2]/div[4]/button",
    selectTillNumber: "/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div/div[2]/div[1]/table/tbody/tr[1]/td[2]",
    viewTill: "/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[1]/div/ul/li[5]/div/div/a",
    printTill: "/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div[1]/div/div/div[3]/button[2]",
  },
  fields: {
    usernameField: '//*[@id="app"]/div/div[2]/form/div[1]/input',
    passwordField: '//*[@id="app"]/div/div[2]/form/div[2]/input',
  },
  performLogin: async function () {
    browser.$(this.fields.usernameField).setValue("nuraisyah+1@getslurp.com");
    browser.$(this.fields.passwordField).setValue("12345678");
  },

 
    
};
