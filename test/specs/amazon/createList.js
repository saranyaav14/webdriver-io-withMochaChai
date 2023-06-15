const { expect } = require ('chai');
const homePage = require('../../pageobjects/amazon/homePage');

describe('sign up as new user',function(){
    it('hover on sign in button',async function(){

        await browser.url('https://www.amazon.com/');
        await browser.pause(2000);
        homePage.signInButton.moveTo();
        await browser.pause(5000);
        await homePage.createListLink.click();
        await browser.pause(10000);





    })
})