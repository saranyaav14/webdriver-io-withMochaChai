class elementUtil {

    clickElement(element) {
        element.waitForDisplayed();
        element.click();
    }

    enterTextToElement(element,text){
        element.waitForDisplayed();
        element.setValue(text);
    }

    getTextFromElement(element){
        element.waitForDisplayed();
        return element.getText(); 
    }


}