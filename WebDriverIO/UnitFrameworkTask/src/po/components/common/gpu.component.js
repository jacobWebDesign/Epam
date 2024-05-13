class Gpu {
    get addNewGpuBtn(){
        return $('button[aria-label="Add GPUs"]');
    }
    get gpuModelListing(){
        return $('//div[23]/div');
    }
    get gpuModelSpan() {
        return $$('//div[@class="qUa9tb"]/div/div[1]/div/div/div/div[1]/span[2]')[1];
    }


    gpuModels(listingItem){
        const gpuModels= {
            nvidiaTeslaV100: 'li[data-value=nvidia-tesla-v100]'
        }
        return $(gpuModels[listingItem])
    }

    async setGPU(gpu){
        await this.addNewGpuBtn.click();
        await this.gpuModelListing.scrollIntoView({block: 'center', inline: 'center'});
        await this.gpuModelListing.click();
        await this.gpuModels(gpu).scrollIntoView({block: 'center', inline: 'center'});
        await this.gpuModels(gpu).click();
    }

    get gpuNumbersListing(){
        return $('//div[24]/div/div[1]/div/div/div/div[1]');
    }

    numberOfGpus(number){
        const numbers = {
            one: '//div[24]/div/div[1]/div/div/div/div[2]/ul/li[1]'
        }
        return $(numbers[number]);
    }

    get gpuNumbersSpan() {
        return $('//div[24]/div/div[1]/div/div/div/div[1]/span[2]')
    }
}

module.exports = Gpu;