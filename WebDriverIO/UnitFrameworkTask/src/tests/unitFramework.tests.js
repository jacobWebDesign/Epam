const MainPage = require('./../po/pages/mainPage.page');
const SearchPage = require('./../po/pages/searchPage.page');
const ProductsPage = require('./../po/pages/products.page.js');
const CalculatorPage = require('./../po/pages/calculator.page.js');
const MachineType = require('./../po/components/common/machineType.common');
const Gpu = require('./../po/components/common/gpu.component.js');
const Ssd = require('./../po/components/common/ssd.component.js');
const Regions = require('./../po/components/common/region.component.js');
const Estimation = require('./../po/components/common/estimation.component.js');
const ShareEstimate = require('./../po/components/common/shareEstimate.component.js');
const CommitedDiscount = require('./../po/components/common/commitedDiscount.component.js');
const Price = require('./../po/components/common/price.component.js');
const EstimatePage = require('./../po/pages/estimate.page.js');

const estimatePage = new EstimatePage();
const price = new Price;
const commitedDiscount = new CommitedDiscount;
const shareEstimate = new ShareEstimate();
const estimation = new Estimation();
const regions = new Regions();
const ssd = new Ssd();
const gpu = new Gpu();
const machineType = new MachineType();
const calculatorPage = new CalculatorPage();
const productsPage = new ProductsPage();
const searchPage = new SearchPage();
const mainPage = new MainPage();

describe('unit framework task', () => {

    let estimatedPrice;
    it("Goes to the cloud google page @smoke", async () =>{
        await browser.url(mainPage.url);
    });

    it("Clicks the search button @smoke", async ()=>{
        await mainPage.searchBar.click();
        await mainPage.searchInput.waitForDisplayed();
        await expect(mainPage.searchInput).toBeDisplayed();
    })
    
    it("Enters the search phrase @smoke", async ()=>{
        
        await mainPage.searchInput.setValue('Google Cloud Platform Pricing Calculator');
        await expect(mainPage.searchInput).toHaveValue('Google Cloud Platform Pricing Calculator');
        await browser.keys("\uE007");
        await expect(searchPage.searchResultsContainer).toHaveTextContaining('Google Cloud Pricing Calculator');
    })

   it("Clicks the first search @smoke", async() =>{
       await searchPage.searchResults[0].click()
 
    })

    it("Clicks the Compute engine @smoke", async() => {
        await productsPage.addEstimateBtn.waitForDisplayed();
        await productsPage.addEstimateBtn.click();
        await productsPage.addEstimateBtn.scrollIntoView({ block: 'center', inline: 'center' });
        await productsPage.item('computeEngine').waitForDisplayed();
        await productsPage.item('computeEngine').click();
    });

    it("Accepts the cookies @smoke", async () => {
        await $('button[class="glue-cookie-notification-bar__accept"]').waitForDisplayed();
        await $('button[class="glue-cookie-notification-bar__accept"]').click();
    })

    it("Sets the number of instances @smoke", async () => {
        await calculatorPage.item('numberOfInstances').click();
        await calculatorPage.item('numberOfInstances').setValue('4');
        await expect(calculatorPage.item('numberOfInstances')).toHaveValue('4');
    });

    it("Chooses the operating system @smoke", async ()=>{
        await calculatorPage.item('operatingSystem').waitForDisplayed();
        await calculatorPage.item('operatingSystem').click();
        await calculatorPage.option('freeDebian').scrollIntoView({ block: 'nearest', inline: 'center' });
        await calculatorPage.option('freeDebian').click();
        const text = await calculatorPage.option('freeDebianSpan').getText();
        await expect(text).toContain("Free: Debian");
    })

    it("Machine type form @smoke", async () => {
        await machineType.machineFamiliesListing.click();
        await machineType.machineFamilies('generalPurpose').click();
        const text = await machineType.machineFamiliesSpan.getText();
        await expect(text).toContain("General Purpose");
    })

    it("Chooses series", async () => {
        await machineType.machineSeriesListing.scrollIntoView({block: 'center', inline: 'center'});
        await machineType.machineSeriesListing.click();
        await machineType.machineSeries('n1').click();
        const text = await machineType.machineSeriesSpan.getText();
        await expect(text).toContain("N1");
    })

    it("Chooses machine type", async () => {
        await machineType.machineTypeListing.scrollIntoView({block: 'center', inline: 'center'});
        await machineType.machineTypeListing.click();
        await machineType.machineTypes('n1Standard8').click();
        const text = await machineType.machineTypeSpan.getText();
        await expect(text).toContain("n1-standard-8");

    })

    it("Verifies number of vCPUS and ram", async() => {
        await expect(machineType.machineVcpus).toHaveValue('8');
        await expect(machineType.machineRam).toHaveValue('30');
    })

    it("Adds new gpu", async() => {
        await gpu.addNewGpuBtn.click();
        await gpu.gpuModelListing.waitForDisplayed();
        await gpu.gpuModelListing.click();
        await gpu.gpuModels('nvidiaTeslaV100').scrollIntoView();
        await gpu.gpuModels('nvidiaTeslaV100').click();
        const gpuName = await gpu.gpuModelSpan.getText();
        await expect(gpuName).toContain("NVIDIA Tesla V100");

    })

    it("Set the number of gpus", async() => {
        await gpu.gpuNumbersListing.click();
        await gpu.numberOfGpus('one').click();
        const gpuNumber = await gpu.gpuNumbersSpan.getText();
        await expect(gpuNumber).toContain("1");
    })

    it("Set the number of ssds", async() => {
        await ssd.ssdListing.scrollIntoView({block: 'center', inline: 'center'});
        await ssd.ssdListing.click();
        await ssd.ssdTypes('two375Gb').click();
        const ssdSize = await ssd.ssdSpan.getText();
        await expect(ssdSize).toContain("2x375 GB");
    })

    it("Set the region", async() => {
        await regions.listing.scrollIntoView({block: 'center', inline: 'center'});
        await regions.listing.click();
        await regions.localizations('netherlands').click();
        const region = await regions.span.getText();
        await expect(region).toContain("Netherlands (europe-west4)");
    })

    it("Checks commited usage for one year", async() => {
        
        await commitedDiscount.duration('oneYear').scrollIntoView({block: 'center', inline: 'center'});
        await commitedDiscount.duration('oneYear').click();
        
    })

    it("Waits for the price sync and reads the price", async () =>{
        let result = await price.sync.isExisting();
        while(result){
            await browser.pause(1000);
            console.log("Waiting for the price sync")
            result = await price.sync.isExisting();
        };
    });

    it("Open estimate", async() => {
        estimatedPrice = await calculatorPage.amount.getText();
        await estimation.shareBtn.waitForDisplayed();
        await estimation.shareBtn.scrollIntoView({block: 'center', inline: 'center'});
        await estimation.shareBtn.click();
        await shareEstimate.openEstimateSummaryBtn.click();
    })
    

    it("Switch to another window", async () => {

        const windowHandles = await browser.getWindowHandles();
        const secondWindowHandle = await windowHandles[1];
        await browser.switchToWindow(secondWindowHandle);
        await expect(browser).toHaveTitle("Google Cloud Estimate Summary");
        const result = await estimatePage.amount.getText();
        await expect(result).toContain(estimatedPrice);

    });



    
    
})