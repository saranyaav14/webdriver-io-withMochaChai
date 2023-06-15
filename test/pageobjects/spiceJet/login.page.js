class LoginPage{

    get addOnButton(){
        return $('=Add-ons')
    }

    clickElement(element){
        element.waitForDisplayed();
        element.click();

    }

    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();

    }

    
    findElementBytext(text){
        return $('='+text)
    }




}

module.exports = new LoginPage;