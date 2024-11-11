describe('Test Run', () => {
    it('Test Run', async() => {
      browser.url("https://staging.getslurp.com/franchise/report/daily-sales");
      
      await $('//*[@id="app"]/div/div[2]/form/div[1]/input').setValue("nuraisyah+1@getslurp.com");
      
      await $('//*[@id="app"]/div/div[2]/form/div[2]/input').setValue("12345678");
      
      await $('//*[@id="app"]/div/div[2]/form/button').click();
      await browser.pause(5000);

      await $('//*[@id="aside"]/div/div[2]/nav/ul/li[5]/a/span[3]').click();
      await browser.pause(2000)

      await $('//*[@id="aside"]/div/div[2]/nav/ul/li[5]/ul/li[1]/a[2]/span').click();
      await browser.pause(1000);

      await $('//*[@id="view"]/div/div[2]/div/div/div[2]/div[1]/table/tbody/tr[1]/td[1]').click();
      await browser.pause(1000);

      await $('//*[@id="view"]/div/div[2]/div/div[1]/div/ul/li[5]/div/div/a').waitForDisplayed({ timeout: 5000 });


      await $('//*[@id="till-summary-report"]/div/div/div[3]/button[2]').click();
      await browser.pause(2000);



    })
  })