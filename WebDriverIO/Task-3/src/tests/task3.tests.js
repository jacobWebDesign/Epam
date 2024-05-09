const MainPage = require('./../po/pages/mainPage.page');
const SearchPage = require('./../po/pages/searchPage.page');
const ProductsPage = require('./../po/pages/products.page.js');
const CalculatorPage = require('./../po/pages/calculator.page.js');

const calculatorPage = new CalculatorPage();
const productsPage = new ProductsPage();
const searchPage = new SearchPage();
const mainPage = new MainPage();

describe('Task 3', () => {

    let estimatedPrice;
    it("Goes to the cloud google page", async () =>{
        await browser.url(mainPage.url);
    });

    it("Clicks the search button", async ()=>{
        await mainPage.searchBar.click();
        await mainPage.searchInput.waitForDisplayed();
        await expect(mainPage.searchInput).toBeDisplayed();
    })
    
    it("Enters the search phrase", async ()=>{
        
        await mainPage.searchInput.setValue('Google Cloud Platform Pricing Calculator');
        await expect(mainPage.searchInput).toHaveValue('Google Cloud Platform Pricing Calculator');
        await browser.keys("\uE007");
        await expect(searchPage.searchResultsContainer).toHaveTextContaining('Google Cloud Pricing Calculator');
    })

   it("Clicks the first search", async() =>{
       await searchPage.searchResults[0].click()
 
    })

    it("Clicks the Compute engine", async() => {
        await productsPage.addEstimateBtn.waitForDisplayed();
        await productsPage.addEstimateBtn.click();
        await productsPage.addEstimateBtn.scrollIntoView({ block: 'center', inline: 'center' });
        await productsPage.item('computeEngine').waitForDisplayed();
        await productsPage.item('computeEngine').click();
    });

    it("Accepts the cookies", async () => {
        await $('button[class="glue-cookie-notification-bar__accept"]').waitForDisplayed();
        await $('button[class="glue-cookie-notification-bar__accept"]').click();
    })

    it("Sets the number of instances", async () => {
        await calculatorPage.item('numberOfInstances').click();
        await calculatorPage.item('numberOfInstances').setValue('4');
        await expect(calculatorPage.item('numberOfInstances')).toHaveValue('4');
    });

    it("Chooses the operating system", async ()=>{
        await calculatorPage.item('operatingSystem').waitForDisplayed();
        await calculatorPage.item('operatingSystem').click();
        await calculatorPage.option('freeDebian').scrollIntoView({ block: 'nearest', inline: 'center' });
        await calculatorPage.option('freeDebian').click();
        const text = await calculatorPage.option('freeDebianSpan').getText();
        await expect(text).toContain("Free: Debian");
    })

    it("Machine type form", async () => {
        await calculatorPage.item('machineType').click();
        await $('li[data-value=general-purpose]').click();
        const text = await $('div.VfPpkd-ksKsZd-mWPk3d > span.VfPpkd-uusGie-fmcmS-haAclf').getText();
        await expect(text).toContain("General Purpose");
    })

    it("Chooses series", async () => {
        await $('//div[2]/div/div[1]/div[2]/div/div/div/div[1]/div').scrollIntoView({block: 'center', inline: 'center'});
        await $('//div[2]/div/div[1]/div[2]/div/div/div/div[1]/div').click();
        await $('//div[2]/div/div[1]/div[2]/div/div/div/div[2]/ul/li[1]').click();
        const text = await $('//div[2]/div/div[1]/div[2]/div/div/div/div[1]/span[2]').getText();
        await expect(text).toContain("N1");
    })

    it("Chooses machine type", async () => {
        await $('//div[1]/div[3]/div/div/div/div[1]/div').scrollIntoView({block: 'center', inline: 'center'});
        await $('//div[1]/div[3]/div/div/div/div[1]/div').click();
        await $('li[data-value=n1-standard-8]').click();
        const text = await $('//div/div/div[2]/div/div[1]/div[3]/div/div/div/div[1]/span[2]').getText();
        await expect(text).toContain("n1-standard-8");
        await expect($('//div[4]/div[2]/div[2]/div/div/div/label/span[2]/input')).toHaveValue('8');
        await expect($('//div[5]/div[2]/div[2]/div/div/div/label/span[2]/input')).toHaveValue('30');
    })

    it("Adds new gpu", async() => {
        await $('//div[21]/div/div/div[1]/div/div/span/div/button').click();
        await $('//div[23]/div/div[1]/div/div/div/div[1]').waitForDisplayed();
        await $('//div[23]/div/div[1]/div/div/div/div[1]').click();
        await $('li[data-value=nvidia-tesla-v100]').scrollIntoView();
        await $('li[data-value=nvidia-tesla-v100]').click();
        const gpuName = await $('//div[23]/div/div[1]/div/div/div/div[1]/span[2]').getText();
        await expect(gpuName).toContain("NVIDIA Tesla V100");

    })

    it("Set the number of gpus", async() => {
        await $('//div[24]/div/div[1]/div/div/div/div[1]').click();
        await $('//div[24]/div/div[1]/div/div/div/div[2]/ul/li[1]').click();
        const gpuNumber = await $('//div[24]/div/div[1]/div/div/div/div[1]/span[2]').getText();
        await expect(gpuNumber).toContain("1");
    })

    it("Set the number of ssds", async() => {
        await $('//div[27]/div/div[1]/div/div').scrollIntoView({block: 'center', inline: 'center'});
        await $('//div[27]/div/div[1]/div/div').click();
        await $('//div[27]/div/div[1]/div/div/div/div[2]/ul/li[3]').click();
        const ssdSize = await $('//div[27]/div/div[1]/div/div/div/div[1]/span[2]').getText();
        await expect(ssdSize).toContain("2x375 GB");
    })

    it("Set the region", async() => {
        await $('//div[29]/div/div[1]').scrollIntoView({block: 'center', inline: 'center'});
        await $('//div[29]/div/div[1]').click();
        await $('//div[29]/div/div[1]/div/div/div/div[2]/ul/li[4]').click();
        const region = await $('#ucj-1 > div > div > div > div > div > div > div > div.kyx3Tb.AlLELb > div > div.vHartc > div.U4lDT > div:nth-child(29) > div > div.YgByBe > div > div > div > div.VfPpkd-TkwUic.VfPpkd-ksKsZd-mWPk3d-OWXEXe-AHe6Kc-XpnDCe.VfPpkd-ksKsZd-mWPk3d > span.VfPpkd-uusGie-fmcmS-haAclf').getText();
        await expect(region).toContain("Netherlands (europe-west4)");
    })

    it("Checks the estimated price", async() => {
        await $("//div[31]/div/div/div[2]/div/div/div[2]").scrollIntoView({block: 'center', inline: 'center'});
        await $("//div[31]/div/div/div[2]/div/div/div[2]").click();
        
    })

    it("Open estimate", async() => {
        let result = await $('div.xJ0wqe > div.Z7Qi9d.HY0Uh').isExisting();
        while(result){
            await browser.pause(1000);
            console.log("I'm still here")
            result = await $('div.xJ0wqe > div.Z7Qi9d.HY0Uh').isExisting();
        };
        estimatedPrice = await $('div.egBpsb > span.MyvX5d.D0aEmf').getText();

        await $("//div[2]/div[2]/div/button").waitForDisplayed();
        await $("//div[2]/div[2]/div/button").scrollIntoView({block: 'center', inline: 'center'});
        await $("//div[2]/div[2]/div/button").click();
        
        await $('div.v08BQe > a').click();
    })
    

    it("Switch to another window", async () => {

        const windowHandles = await browser.getWindowHandles();
        const secondWindowHandle = await windowHandles[1];
        await browser.switchToWindow(secondWindowHandle);
        await expect(browser).toHaveTitle("Google Cloud Estimate Summary");
        const result = await $('div.WkJlle > h4').getText();
        await expect(result).toContain(estimatedPrice);

    });



    
    
})