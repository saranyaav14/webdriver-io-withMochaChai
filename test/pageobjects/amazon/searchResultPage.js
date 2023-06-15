class SearchResultPage {

    get climatePledgeFriendlyCheckbox() {
        return $("//span[text()=('Climate Pledge Friendly')]//preceding::input[@type='checkbox']");
    }

    get searchButton(){
        return $("input#nav-search-submit-button");

    }

    get deliveryLocation(){
        return $('#glow-ingress-block');

    }

    
}

module.exports = new SearchResultPage();