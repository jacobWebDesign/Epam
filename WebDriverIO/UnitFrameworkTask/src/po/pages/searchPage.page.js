class SearchPage {
    get searchResultsContainer(){
        return $('.catalog-main');
    }
    get searchResults() {
        return $$('a.gs-title');
    }
}

module.exports = SearchPage;