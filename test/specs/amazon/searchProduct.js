const { expect } = require("chai")
const homePage = require("../../pageobjects/amazon/homePage.js")
const searchResultPage = require("../../pageobjects/amazon/searchResultPage.js")


describe('search for new product', function(){
    it('should search for mac',async function(){
        await browser.url('https://www.amazon.com/')
        await browser.pause(5000);
        await homePage.searchTextBox.click();
        await homePage.searchTextBox.setValue('Mac');
        await browser.pause(2000);
        await homePage.searchButton.click();
    })

    it('should get text', async function(){
        var location = await homePage.deliveryLocation.getText();
        console.log('location is ******',location)

    })
    it('should display delivery location', async function(){
        const deliveryLocation = await homePage.deliveryLocation;
        var flag = await deliveryLocation.isDisplayed();
        console.log('Does the delivery location displayed',await deliveryLocation.isDisplayed()); // return true  if location element is displayed
        console.log('Does the delivery location enabled',await deliveryLocation.isEnabled());
        console.log('Is the delivery location existing',await deliveryLocation.isExisting());
        console.log('Does the delivery location displayed in view port',
            await deliveryLocation.isDisplayedInViewport());

        expect(flag).to.be.true;

    })

    it('should click check box', async function(){
        browser.pause(2000);
        const checkBox = await searchResultPage.climatePledgeFriendlyCheckbox;
        browser.pause(2000);
        checkBox.click();

    })

    it('click on back to top button',async function(){
        await browser.url('https://www.amazon.com/')
        await browser.pause(2000);
        await browser.scroll(0,5200);
        await browser.pause(3000);
        await homePage.backToTopButton.click();
        await browser.pause(3000);


    })



})