class Regions {
    get listing(){
        return $('//div[29]/div/div[1]');
    }

    get span(){
        return $('div.VfPpkd-ksKsZd-mWPk3d > span.VfPpkd-uusGie-fmcmS-haAclf')
    }

    localizations(listingItem){
        const localization = {
            netherlands: '//div[29]/div/div[1]/div/div/div/div[2]/ul/li[4]'
        }
        return $(localization[listingItem]);
    }
}

module.exports = Regions;