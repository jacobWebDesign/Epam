

class BasePage {

    get url() {
        return 'https://pastebin.com';
    }

    get title() {
        return 'Pastebin.com - #1 paste tool since 2002!';
    }
    get pasteArea() {
        return $('#postform-text')
    }  

    get addOptions(){
        return $('.post-form__left');
    }


}

module.exports = BasePage;
