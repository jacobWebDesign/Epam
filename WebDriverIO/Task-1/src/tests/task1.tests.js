const CookiesComponent = require('./../po/components/common/cookies.component');
const OptionalPasteSettings = require('./../po/components/common/optionalPasteSettings');
const PasteForm = require('./../po/components/common/pasteForm.component');
const BasePage = require('./../po/pages/basePage');

const basePage = new BasePage();
const pasteForm = new PasteForm();
const optionalPasteSettings = new OptionalPasteSettings();
const cookiesComponent = new CookiesComponent();

describe('Paste Bin', () => {


    it("Check page title", async () => {
       await browser.url(basePage.url);
       await expect(browser).toHaveTitle(basePage.title);
    })

    it("Paste the text", async () => {
        //Accept cookies
        await cookiesComponent.cookiesButton.click();
        //Paste the text
        await pasteForm.pasteArea.setValue("Hello from webdrivers");
        //Check if the text was correctly pasted
        await expect(pasteForm.pasteArea).toHaveValue("Hello from webdrivers");
        
    })

    it("Choose 10 minute expiration", async () => {
        //Click the dropdown button
        await optionalPasteSettings.option('expiration').click();
        // Wait for the dropdown to become visible
        await optionalPasteSettings.option('expiration').waitForDisplayed();
        // Wait for the specific option to become visible and clickable
        await optionalPasteSettings.expirationDropdown('tenMinutes').waitForExist();
        //Wait for the dropdown option to be clickable
        await optionalPasteSettings.expirationDropdown('tenMinutes').waitForClickable();
        // Scroll the option into view
        await optionalPasteSettings.expirationDropdown('tenMinutes').scrollIntoView();
        // Click on the option to select it
        await optionalPasteSettings.expirationDropdown('tenMinutes').click();
        // Verify if the selected option is "10 Minutes"
        await expect(optionalPasteSettings.optionSpan).toHaveText('10 Minutes');
            })

    it("Set the paste Name/Title", async () => {
        await optionalPasteSettings.title.setValue('helloweb');
        await expect(optionalPasteSettings.title).toHaveValue('helloweb');
    })

    
    
})