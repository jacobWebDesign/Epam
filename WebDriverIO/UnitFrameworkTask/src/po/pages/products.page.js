class ProductsPage {
    get addEstimateBtn(){
        return $('button > span.UywwFc-vQzf8d')
    }

    item(param){
        const selectors = {
            computeEngine: 'div.wrzENe > div > div > div:nth-child(1) > div > div'
        }
        return $(selectors[param]);
    }
}

module.exports = ProductsPage;