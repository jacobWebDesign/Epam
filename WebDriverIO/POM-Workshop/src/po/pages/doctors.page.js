const ListHeaderComponent = require('./../components/doctors/list-header.component');


class DoctorsPage {
    constructor() {
        this.doctorListHeader = new ListHeaderComponent();
    }

    async open() {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    }
}

module.exports = DoctorsPage;