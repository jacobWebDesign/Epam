class MachineType {
    get machineFamiliesListing() {
        return $('div.LHK0xb.KXFYXb div:nth-child(1) div div div div.VfPpkd-TkwUic');
    }
    get machineFamiliesSpan(){
        return $('div.VfPpkd-ksKsZd-mWPk3d > span.VfPpkd-uusGie-fmcmS-haAclf');
    }

    machineFamilies(listedItem){
        const options = {
            generalPurpose: 'li[data-value=general-purpose]'
        }
        return $(options[listedItem]);
    }

    get machineSeriesListing() {
        return $('//div[2]/div/div[1]/div[2]/div/div/div/div[1]/div');
    }

    get machineSeriesSpan(){
        return $('//div[2]/div/div[1]/div[2]/div/div/div/div[1]/span[2]');
    }

    machineSeries(listedItem){
        const options = {
            n1: 'li[data-value=n1]'
        }
        return $(options[listedItem]);
    }

    get machineTypeListing(){
        return $('//div[1]/div[3]/div/div/div/div[1]/div');
    }
    
    get machineTypeSpan(){
        return $('//div/div/div[2]/div/div[1]/div[3]/div/div/div/div[1]/span[2]');
    }

    machineTypes(listedItem){
        const options = {
            n1Standard8: 'li[data-value=n1-standard-8]'
        }
        return $(options[listedItem]);
    }

    get machineVcpus() {
        return $('//div[4]/div[2]/div[2]/div/div/div/label/span[2]/input');
    }

    get machineRam() {
        return $('//div[5]/div[2]/div[2]/div/div/div/label/span[2]/input');
    }
}

module.exports = MachineType;