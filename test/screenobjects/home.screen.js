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
    
    //promotions
    promotionBtn: "/html/body/div[2]/div[1]/div/div[2]/nav/ul/li[18]/a/span[2]",
    createpromo: "/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[2]/div/div/div[1]/div/div/div/ul[2]/li/a",
    comboBtn: "/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div/div[3]/a",
    discountType: "/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[2]/div/div[3]/ul/li[1]/span",
    normalCategory: "/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[3]/div/div[3]/ul/li[1]/span",
    productChoiceBtn: "/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[1]/div[2]/div[4]/div/div/div[3]/ul/li[135]/span",
    drinkChoiceBtn: "/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[2]/div[2]/div[4]/div/div/div[3]/ul/li[135]/span",
    setupBtn: "/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[3]/button[2]",
    


  },
  fields: {

    //login fields
    usernameField: '//*[@id="app"]/div/div[2]/form/div[1]/input',
    passwordField: '//*[@id="app"]/div/div[2]/form/div[2]/input',

    //create promotions fields
    namePromo: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[1]/input',
    typePromo: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[2]/div/div[2]/input',
    categoryPromo: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[3]/div/div[2]',
    comboNameField: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[1]/input',
    finalprice: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[2]/input',
    foodName: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[1]/div[2]/div[1]/div/input',
    minQty: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[1]/div/input',
    maxQty: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[1]/div[2]/div[2]/div[2]/div/input',
    drinkName: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[2]/div[2]/div[1]/div/input',
    drinkMinQty: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[2]/div[2]/div[2]/div[1]/div/input',
    drinkMaxQty:'/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[2]/div[2]/div[2]/div[2]/div/input',

  },


  performLogin: async function () {

    //login fields
    browser.$(this.fields.usernameField).setValue("nuraisyah+1@getslurp.com");
    browser.$(this.fields.passwordField).setValue("12345678");

    //promotions fields
    browser.$(this.fields.namePromo).setValue("Buy2Free1");
    browser.$(this.fields.comboNameField).setValue("Buy2Free1");
  },

  dropdown: {
    promoTypeDropDown: '//*[@id="view"]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[2]/div/div[1]',
    promoCategoryDropDown: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[3]/div/div[1]',
    productChoiceDropDown: "/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[1]/div[2]/div[4]/div/div/div[1]",
    drinkChoiceDropDown: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[2]/div[2]/div[4]/div/div/div[1]',
  }
    
};
