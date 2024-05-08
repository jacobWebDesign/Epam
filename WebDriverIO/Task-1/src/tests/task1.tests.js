const CookiesComponent = require('./../po/components/common/cookies.component');
const OptionalPasteSettings = require('../po/components/common/optionalPasteSettings.component');
const PasteForm = require('./../po/components/common/pasteForm.component');
const BasePage = require('./../po/pages/basePage');

const basePage = new BasePage();
const pasteForm = new PasteForm();
const optionalPasteSettings = new OptionalPasteSettings();
const cookiesComponent = new CookiesComponent();

describe('Task 1', () => {


    it("Check page title", async () => {
       await browser.url(basePage.url);
       await expect(browser).toHaveTitle(basePage.title);
    })

    it("Paste the text", async () => {
        await cookiesComponent.cookiesButton.click();
        await pasteForm.pasteArea.setValue("Hello from webdrivers");
        await expect(pasteForm.pasteArea).toHaveValue("Hello from webdrivers");
        
    })

    it("Choose/verify 10 minute expiration", async () => {
        //Click the dropdown button
        await optionalPasteSettings.option('expiration').click();
        await optionalPasteSettings.option('expiration').waitForDisplayed();
        await optionalPasteSettings.expirationDropdown('tenMinutes').waitForExist();
        await optionalPasteSettings.expirationDropdown('tenMinutes').waitForClickable();
        await optionalPasteSettings.expirationDropdown('tenMinutes').scrollIntoView();
        await optionalPasteSettings.expirationDropdown('tenMinutes').click();
        await expect(optionalPasteSettings.optionSpan).toHaveText('10 Minutes');
            })

    it("Verify if the title is set", async () => {
        await optionalPasteSettings.title.setValue('helloweb');
        await expect(optionalPasteSettings.title).toHaveValue('helloweb');
    })

    
    
})