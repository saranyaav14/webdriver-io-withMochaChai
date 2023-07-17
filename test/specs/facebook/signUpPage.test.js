const signUpPage = require('../../pageobjects/facebook/signUp.page');
const SignUpPage = require('../../pageobjects/facebook/signUp.page')
describe('sign up as new user',function(){
    it('Select DOB by "visible text"',async function(){
        browser.url('https://www.facebook.com/reg/');
        //Select day
        await browser.pause(3000);
        signUpPage.firstName.setValue("abcddddd");
        await browser.pause(5000);
        signUpPage.dayDropDown.click();
        signUpPage.dayDropDown.selectByVisibleText('14');
        //select month
        signUpPage.monthDropDown.click();
        signUpPage.monthDropDown.selectByVisibleText('Nov');
        //select year
        signUpPage.yearDropDown.click();
        signUpPage.yearDropDown.selectByVisibleText('1994');
        await browser.pause(3000);

    })

    it('Select DOB by "index"',async function(){
        browser.url('https://www.facebook.com/reg/');
        //Select day
        signUpPage.dayDropDown.click();
        signUpPage.dayDropDown.selectByIndex('3');
        //select month
        signUpPage.monthDropDown.click();
        signUpPage.monthDropDown.selectByIndex('4');
        //select year
        signUpPage.yearDropDown.click();
        signUpPage.yearDropDown.selectByIndex('4');
        await browser.pause(3000);

    })

    it('Select DOB by "attribute"',async function(){
        browser.url('https://www.facebook.com/reg/');
        //Select day
        //Select day
        signUpPage.dayDropDown.click();
        signUpPage.dayDropDown.selectByAttribute('value','4');
        //select month
        signUpPage.monthDropDown.click();
        signUpPage.monthDropDown.selectByAttribute('value','4');
        //select year
        signUpPage.yearDropDown.click();
        signUpPage.yearDropDown.selectByAttribute('value','4');
        await browser.pause(3000);

    })


})