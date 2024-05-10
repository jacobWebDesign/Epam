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

    async clickAddEstimateBtn(){
        await this.addEstimateBtn.waitForDisplayed();
        await this.addEstimateBtn.scrollIntoView({ block: 'center', inline: 'center' });
        await this.addEstimateBtn.click();
    }
}

module.exports = ProductsPage;