const loginPage = require('../../pageobjects/spiceJet/login.page.js')


describe('',function(){
    it('',async function(){
        await browser.url('https://www.spicejet.com/')
        await browser.pause(5000);
        let text = await browser.isAlertOpen();
        await browser.acceptAlert();
        await loginPage.moveToElement(loginPage.addOnButton);
        await browser.pause(3000);
        await loginPage.clickElement(loginPage.findElementBytext('spiceMax'));


    })
})