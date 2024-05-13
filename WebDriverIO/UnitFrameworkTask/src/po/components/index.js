const MachineType = require('./components/common/machineType.common');
const Gpu = require('./components/common/gpu.component.js');
const Ssd = require('./components/common/ssd.component.js');
const Regions = require('./components/common/region.component.js');
const Estimation = require('./components/common/estimation.component.js');
const ShareEstimate = require('./components/common/shareEstimate.component.js');
const CommitedDiscount = require('./components/common/commitedDiscount.component.js');
const Instance = require('./components/common/instance.component.js');
const Price = require('./components/common/price.component.js');

module.exports = {
    Instance,
    MachineType,
    Gpu,
    Ssd,
    Regions,
    Estimation,
    ShareEstimate,
    CommitedDiscount,
    Price
}