const {pages} = require('./../po')


describe('unit framework task', () => {

    let estimatedPrice;
    it("Goes to the cloud google page @smoke", async () =>{
        await browser.url(pages('basepage').url);
    });

    it("Clicks the search button @smoke", async ()=>{
        await pages('basepage').searchBar.click();
        await pages('basepage').searchInput.waitForDisplayed();
        await expect(pages('basepage').searchInput).toBeDisplayed();
    })
    
    it("Enters the search phrase @smoke", async ()=>{
        
        await pages('basepage').searchInput.setValue('Google Cloud Platform Pricing Calculator');
        await expect(pages('basepage').searchInput).toHaveValue('Google Cloud Platform Pricing Calculator');
        await browser.keys("\uE007");
        await expect(pages('searchpage').searchResultsContainer).toHaveTextContaining('Google Cloud Pricing Calculator');
    })

   it("Clicks the first search @smoke", async() =>{
       await pages('searchpage').searchResults[0].click()
 
    })

    it("Clicks the Compute engine @smoke", async() => {
        await pages('productspage').addEstimateBtn.waitForDisplayed();
        await pages('productspage').addEstimateBtn.click();
        await pages('productspage').addEstimateBtn.scrollIntoView({ block: 'center', inline: 'center' });
        await pages('productspage').item('computeEngine').waitForDisplayed();
        await pages('productspage').item('computeEngine').click();
    });

    it("Accepts the cookies @smoke", async () => {
        await $('button[class="glue-cookie-notification-bar__accept"]').waitForDisplayed();
        await $('button[class="glue-cookie-notification-bar__accept"]').click();
    })

    it("Sets the number of instances @smoke", async () => {
        await pages('instance').numberOfInstances.click();
        await pages('instance').numberOfInstances.setValue('4');
        await expect(pages('instance').numberOfInstances).toHaveValue('4');
    });

    it("Chooses the operating system @smoke", async ()=>{
        await pages('calculatorpage').item('operatingSystem').waitForDisplayed();
        await pages('calculatorpage').item('operatingSystem').scrollIntoView({ block: 'nearest', inline: 'center' });
        await pages('calculatorpage').item('operatingSystem').click();
        await pages('calculatorpage').option('freeDebian').scrollIntoView({ block: 'nearest', inline: 'center' });
        await pages('calculatorpage').option('freeDebian').click();
        const text = await pages('calculatorpage').option('freeDebianSpan').getText();
        await expect(text).toContain("Free: Debian");
    })

    it("Machine type form @smoke", async () => {
        await pages('machinetype').machineFamiliesListing.click();
        await pages('machinetype').machineFamilies('generalPurpose').click();
        const text = await pages('machinetype').machineFamiliesSpan.getText();
        await expect(text).toContain("General Purpose");
    })

    it("Chooses series", async () => {
        await pages('machinetype').machineSeriesListing.scrollIntoView({block: 'center', inline: 'center'});
        await pages('machinetype').machineSeriesListing.click();
        await pages('machinetype').machineSeries('n1').click();
        const text = await pages('machinetype').machineSeriesSpan.getText();
        await expect(text).toContain("N1");
    })

    it("Chooses machine type", async () => {
        await pages('machinetype').machineTypeListing.scrollIntoView({block: 'center', inline: 'center'});
        await pages('machinetype').machineTypeListing.click();
        await pages('machinetype').machineTypes('n1Standard8').click();
        const text = await pages('machinetype').machineTypeSpan.getText();
        await expect(text).toContain("n1-standard-8");

    })

    it("Verifies number of vCPUS and ram", async() => {
        await expect(pages('machinetype').machineVcpus).toHaveValue('8');
        await expect(pages('machinetype').machineRam).toHaveValue('30');
    })

    it("Adds new gpu", async() => {
        await pages('gpu').setGPU('nvidiaTeslaV100');
        const gpuName = await pages('gpu').gpuModelSpan.getText();
        await expect(gpuName).toContain("NVIDIA Tesla V100");

    })

    it("Set the number of gpus", async() => {
        await pages('gpu').gpuNumbersListing.click();
        await pages('gpu').numberOfGpus('one').click();
        const gpuNumber = await pages('gpu').gpuNumbersSpan.getText();
        await expect(gpuNumber).toContain("1");
    })

    it("Set the number of ssds", async() => {
        await pages('ssd').ssdListing.scrollIntoView({block: 'center', inline: 'center'});
        await pages('ssd').ssdListing.click();
        await pages('ssd').ssdTypes('two375Gb').click();
        const ssdSize = await pages('ssd').ssdSpan.getText();
        await expect(ssdSize).toContain("2x375 GB");
    })

    it("Set the region", async() => {
        await pages('regions').listing.scrollIntoView({block: 'center', inline: 'center'});
        await pages('regions').listing.click();
        await pages('regions').localizations('netherlands').click();
        const region = await pages('regions').span.getText();
        await expect(region).toContain("Netherlands (europe-west4)");
    })

    it("Checks commited usage for one year", async() => {
        
        await pages('commiteddiscount').duration('oneYear').scrollIntoView({block: 'center', inline: 'center'});
        await pages('commiteddiscount').duration('oneYear').click();
        
    })

    it("Waits for the price sync and reads the price", async () =>{
        let result = await pages('price').sync.isExisting();
        while(result){
            await browser.pause(1000);
            console.log("Waiting for the price sync")
            result = await pages('price').sync.isExisting();
        };
    });

    it("Open estimate", async() => {
        estimatedPrice = await pages('calculatorpage').amount.getText();
        await pages('estimation').shareBtn.waitForDisplayed();
        await pages('estimation').shareBtn.scrollIntoView({block: 'center', inline: 'center'});
        await pages('estimation').shareBtn.click();
        await pages('shareestimate').openEstimateSummaryBtn.click();
    })
    

    it("Switch to another window", async () => {

        const windowHandles = await browser.getWindowHandles();
        const secondWindowHandle = await windowHandles[1];
        await browser.switchToWindow(secondWindowHandle);
        await expect(browser).toHaveTitle("Google Cloud Estimate Summary");
        const result = await pages('estimatepage').amount.getText();
        await expect(result).toContain(estimatedPrice);

    });



    
    
})