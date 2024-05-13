const BasePage = require('./base.page');
const SearchPage = require('./searchPage.page');
const ProductsPage = require('./products.page.js');
const CalculatorPage = require('./calculator.page.js');
const EstimatePage = require('./estimate.page.js');
const MachineType = require('./../components/common/machineType.common');
const Gpu = require('./../components/common/gpu.component.js');
const Ssd = require('./../components/common/ssd.component.js');
const Regions = require('./../components/common/region.component.js');
const Estimation = require('./../components/common/estimation.component.js');
const ShareEstimate = require('./../components/common/shareEstimate.component.js');
const CommitedDiscount = require('./../components/common/commitedDiscount.component.js');
const Instance = require('./../components/common/instance.component.js');
const Price = require('./../components/common/price.component.js');

/**
    * @param name {'basepage' | 'searchpage' | 'productspage' | 'calculatorpage' | 'estimatepage' | 'machinetype' | 'gpu' | 'ssd' | 'regions' | 'estimation' | 'shareestimate' | 'commiteddiscount' | 'instance' | 'price'}
    * @returns {BasePage | SearchPage | ProductsPage | CalculatorPage | EstimatePage | MachineType | Gpu | Ssd | Regions | Estimation | ShareEstimate | CommitedDiscount | Instance | Price}

*/
function pages(name) {
    const items = {
        basepage: new BasePage(),
        searchpage: new SearchPage(),
        productspage: new ProductsPage(),
        calculatorpage: new CalculatorPage(),
        estimatepage: new EstimatePage(),
        machinetype: new MachineType(),
        gpu: new Gpu(),
        ssd: new Ssd(),
        regions: new Regions(),
        estimation: new Estimation(),
        shareestimate: new ShareEstimate(),
        commiteddiscount: new CommitedDiscount(),
        instance: new Instance(),
        price: new Price()
    }
    return items[name.toLowerCase()];
}

module.exports = {
    BasePage,
    SearchPage,
    ProductsPage,
    CalculatorPage,
    EstimatePage,
    Instance,
    MachineType,
    Gpu,
    Ssd,
    Regions,
    Estimation,
    ShareEstimate,
    CommitedDiscount,
    Price,
    pages,
}


