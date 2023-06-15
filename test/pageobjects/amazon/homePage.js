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

    

    
}

module.exports = new HomePage();