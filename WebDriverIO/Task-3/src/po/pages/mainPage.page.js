class MainPage {

    get url() {
        return "https://cloud.google.com/";
    }
    get searchBar(){
        return $('div.YSM5S');
    }
    get searchInput(){
        return $('form input.mb2a7b');
    }
}

module.exports = MainPage;