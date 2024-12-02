module.exports = {
  buttons: {
    loginBtn: "/html/body/div/div/div[2]/form/button",
    saveBtn: "#saveBtn",

    //daily sales
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
    
    //create new staff
    staffControlBtn: "/html/body/div[2]/div[1]/div/div[2]/nav/ul/li[27]/a/span[3]",
    staffStationBtn: "/html/body/div[2]/div[1]/div/div[2]/nav/ul/li[27]/ul/li[1]/a[2]/span",
    createStaffBtn: "/html/body/div[2]/div[2]/div[2]/div/div/div[2]/div[2]/div/div[1]/div/div[2]/ul/li[1]/a",
    selectedStationBtn: "/html/body/div[2]/div[2]/div[2]/div/div/div[5]/div/div/div[2]/div/div/div/div/form/fieldset/div/div[3]/div[1]/div/div[3]/ul/li[1]/span/span", //selected station: sandbox
    selectedRolesBtn: "/html/body/div[2]/div[2]/div[2]/div/div/div[5]/div/div/div[2]/div/div/div/div/form/fieldset/div/div[3]/div[2]/div/div[3]/ul/li[1]/span", //selected roles: Cashier
    selectedPermissionsBtn: "/html/body/div[2]/div[2]/div[2]/div/div/div[5]/div/div/div[2]/div/div/div/div/form/fieldset/div/div[3]/div[3]/div/div[3]/ul/li[1]/span", //selected permissions: manage reports
    createNewStaffSaveBtn: "/html/body/div[2]/div[2]/div[2]/div/div/div[5]/div/div/div[3]/div[2]/div/button[2]",


    //inventory
    gridBtn: "/html/body/div[2]/div[2]/div[1]/div/ul/li[1]/a/i",
    inventoryBtn: "/html/body/div[2]/div[2]/div[1]/div/ul/li[1]/div/div/div[2]/a/i",
    supplierBtn: "/html/body/div[2]/div[1]/div/div[2]/nav/ul/li[5]/a/span[2]",
    createNewSupplierBtn: "/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/div/ul[2]/li/a",
    selectedsupplierstation: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[1]/div/div[3]/div/div/div/div[3]/ul/li[1]/span/span',
    selectedsupplierCompanyStatus: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[1]/div[3]/div/div/div[3]/ul/li[1]/span',
    selectedsupplierType: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[2]/div[2]/div/div/div[3]/ul/li[1]/span/span',
    selectedsupplierCountry: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[5]/div[1]/div/div/div[3]/ul/li[133]/span',
    createSaveSupplierBtn: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[5]/div/div[2]/div/button[2]/div',




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

    //create new staff fields
    newstaffName: '/html/body/div[2]/div[2]/div[2]/div/div/div[5]/div/div/div[2]/div/div/div/div/form/fieldset/div/div[2]/div[1]/input',
    newstaffEmail: '/html/body/div[2]/div[2]/div[2]/div/div/div[5]/div/div/div[2]/div/div/div/div/form/fieldset/div/div[2]/div[2]/input',
    newstaffPin: '/html/body/div[2]/div[2]/div[2]/div/div/div[5]/div/div/div[2]/div/div/div/div/form/fieldset/div/div[2]/div[3]/input',

    //create new supplier
    newsupplierName: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/div/div/div/div[3]/div/div/form/fieldset/div[1]/input',
    newsupplierEmail: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/div/div/div/div[3]/div/div/form/fieldset/div[2]/input',
    newsupplierPhone: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/div/div/div/div[3]/div/div/form/fieldset/div[3]/div[1]/div/input',
    newsupplierFax: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[2]/div/div/div/div[3]/div/div/form/fieldset/div[3]/div[2]/div/input',
    sentinelID: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[1]/div[1]/div/input',
    shiftID: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[1]/div[2]/div/input',
    supplierName2: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[2]/div[1]/div/input',
    supplierAddress: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[3]/textarea',
    supplierPostalCode: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[4]/div[1]/div/input',
    supplierCity: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[4]/div[2]/div/input',
    supplierRegion: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[5]/div[2]/div/input',


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

    //promotions dropdown
    promoTypeDropDown: '//*[@id="view"]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[2]/div/div[1]',
    promoCategoryDropDown: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[1]/div[1]/div[2]/div[3]/div/div[1]',
    productChoiceDropDown: "/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[1]/div[2]/div[4]/div/div/div[1]",
    drinkChoiceDropDown: '/html/body/div[2]/div[2]/div[2]/div[2]/div/div[3]/div[2]/div/div/div/div/div[2]/div[3]/div[2]/div[2]/div[4]/div/div/div[1]',


    //create new staff dropdown
    stationsDropDown: '/html/body/div[2]/div[2]/div[2]/div/div/div[5]/div/div/div[2]/div/div/div/div/form/fieldset/div/div[3]/div[1]/div/div[1]',
    rolesDropDown: '/html/body/div[2]/div[2]/div[2]/div/div/div[5]/div/div/div[2]/div/div/div/div/form/fieldset/div/div[3]/div[2]/div/div[1]',
    permissionsDropDown: '//html/body/div[2]/div[2]/div[2]/div/div/div[5]/div/div/div[2]/div/div/div/div/form/fieldset/div/div[3]/div[3]/div/div[1]',

    //create new supplier
    supplierstationDropDown: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]',
    supplierCompanyStatus: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[2]/div[2]/div/div/div[1]',
    supplierTypeDropDown: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[2]/div[2]/div/div/div[1]',
    supplierCountryDropDown: '/html/body/div[2]/div[2]/div[2]/div/div[2]/div/div[3]/div/div[1]/div/div[2]/div/div[3]/div/div/form/fieldset/div[5]/div[1]/div/div/div[1]'

  }
    
};
