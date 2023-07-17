class SignUpPage {

    get firstName() {
        return $(`//input[@name="firstname"`);
    }

    get dayDropDown(){
        return $(`//select[@id="day"]`);

    }
    get monthDropDown(){
        return $(`//select[@id="month"]`);

    }

    get yearDropDown(){
        return $(`//select[@id="year"]`);

    }


    get deliveryLocation(){
        return $('#glow-ingress-block');

    }

    
}

module.exports = new SignUpPage();