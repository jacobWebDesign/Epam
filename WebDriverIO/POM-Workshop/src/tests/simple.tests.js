describe('Doctors page', () => {
    beforeEach(async () => {
        await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    })

    it("Check page title", async () => {
        
        await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
    })

    it('Open modal window for adding a new doctor', async () => {
        //Click on doctors item in the side menu
        const doctorItem = $('[routerLink="/doctors"]');
        await doctorItem.click();
        //click on add new doctor btn
        const addDoctorButton = $('.specialization-types button.e-control');
        await addDoctorButton.click();
        //check that a modal window is displayed
        await expect($('div .new-doctor-dialog')).toBeDisplayed();

        
    })

    it('Add new doctor', async () => {
        //Click on doctors item in the side menu
        const doctorItem = $('[routerLink="/doctors"]');
        await doctorItem.click();
        //click on add new doctor btn
        const addDoctorButton = $('.specialization-types button.e-control');
        await addDoctorButton.click();
        //check that a modal window is displayed
        await $('div .new-doctor-dialog').waitForDisplayed();
        //Set new name 
        await $('[name="Name"]').setValue('John Doe');
        await $('#DoctorMobile').setValue("1111111111");
        await $('[name="Email"]').setValue("doctor@gmail.com");
        await $('[name="Education"]').setValue("Basic");
        await $('[name="Designation"]').setValue("Test");
        await $('.e-footer-content button.e-primary').click();
        const doctorsList = await $$('.doctors-wrapper .name');
        
        await expect($('.new-doctor-dialog')).not.toBeDisplayed();
        await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
        await expect($('#Specialist_8').$('.education')).toHaveText('Basic', {ignoreCase: true});
       
    })
})