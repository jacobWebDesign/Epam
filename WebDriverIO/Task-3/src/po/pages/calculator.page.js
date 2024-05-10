class CalculatorPage {
    item(param){
        const selectors = {
            numberOfInstances: 'span.qdOxv-fmcmS-wGMbrd-sM5MNb input[id=c11]',
            operatingSystem: 'div > div.YgByBe > div > div > div > div.VfPpkd-TkwUic > div',
            machineType: 'div.LHK0xb.KXFYXb div:nth-child(1) div div div div.VfPpkd-TkwUic'
        }
        return $(selectors[param]);

        
    }

    option(param) {
        const options = {
            freeDebian: 'li[data-value=free-debian-centos-coreos-ubuntu-or-byol-bring-your-own-license',
            freeDebianSpan: 'div.VfPpkd-ksKsZd-mWPk3d span.VfPpkd-uusGie-fmcmS-haAclf'
        }
        return $(options[param]);
    }

    get amount() {
        return $('div.egBpsb > span.MyvX5d.D0aEmf');
    }
}

module.exports = CalculatorPage;