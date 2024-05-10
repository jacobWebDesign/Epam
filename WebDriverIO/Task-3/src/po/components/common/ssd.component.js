class Ssd{
    get ssdListing(){
        return $('//div[27]/div/div[1]/div/div')
    }

    get ssdSpan(){
        return $('//div[27]/div/div[1]/div/div/div/div[1]/span[2]');
    }

    ssdTypes(listingItem){
        const options = {
            two375Gb: '//div[27]/div/div[1]/div/div/div/div[2]/ul/li[3]'
        }
        return $(`${options[listingItem]}`);
    }
}

module.exports = Ssd;