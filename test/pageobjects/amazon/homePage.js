class HomePage {
    

    get searchTextBox() {
        return $("input#twotabsearchtextbox");
    }

    get searchButton(){
        return $("input#nav-search-submit-button");

    }

    get deliveryLocation(){
        return $('#glow-ingress-block');

    }

    getElementByText(text){
        return $('='+text)
        
    }

    get signInButton(){
        // this.getElementByText('Hello, sign in')
        return $('span#nav-link-accountList-nav-line-1')
    }
    get createListLink(){
        return $('=Create a List');
    }

    get dragElement() {
        return $("div#draggable");
    }

    get dropElement() {
        return $("div#droppable");
    }

    get backToTopButton(){
        return $('span.navFooterBackToTopText');
    }

    get startHereButton(){
        return $("//a[text()='Start here.']");
    }



}

module.exports = new HomePage();