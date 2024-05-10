class Gpu {
    get addNewGpuBtn(){
        return $('button[aria-label="Add GPUs"]');
    }
    get gpuModelListing(){
        return $('//div[23]/div/div[1]/div/div/div/div[1]');
    }
    get gpuModelSpan() {
        return $('//div[23]/div/div[1]/div/div/div/div[1]/span[2]');
    }
    gpuModels(listingItem){
        const gpuModels= {
            nvidiaTeslaV100: 'li[data-value=nvidia-tesla-v100]'
        }
        return $(gpuModels[listingItem])
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