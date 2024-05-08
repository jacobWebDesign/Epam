const CookiesComponent = require('./../po/components/common/cookies.component');
const OptionalPasteSettings = require('../po/components/common/optionalPasteSettings.component');
const PasteForm = require('./../po/components/common/pasteForm.component');
const BasePage = require('./../po/pages/basePage');
const Variables = require('./../po/components/common/variables.component');
const ResultPage = require('./../po/pages/resultPage')

const resultPage = new ResultPage();
const variables = new Variables();
const basePage = new BasePage();
const pasteForm = new PasteForm();
const optionalPasteSettings = new OptionalPasteSettings();
const cookiesComponent = new CookiesComponent();

describe('Task 2', () => {


    it("Check page title", async () => {
       await browser.url(basePage.url);
       await expect(browser).toHaveTitle(basePage.title);
    })

    it("Paste the text", async () => {
        //AcceptCookies
        await cookiesComponent.cookiesButton.click();
        await pasteForm.pasteArea.setValue(variables.pasteItem('taskTwo'));
        await expect(pasteForm.pasteArea).toHaveValue(variables.pasteItem('taskTwo'));
        
    })

    it("Choose the bash syntax", async () => {
        await optionalPasteSettings.option('syntax').click();
        await optionalPasteSettings.option('syntax').waitForDisplayed();
        await optionalPasteSettings.syntaxDropdown('bash').waitForExist();
        await optionalPasteSettings.syntaxDropdown('bash').waitForClickable();
        await optionalPasteSettings.syntaxDropdown('bash').scrollIntoView({ block: 'center', inline: 'center' });
        await optionalPasteSettings.syntaxDropdown('bash').click();
        await expect(optionalPasteSettings.syntaxSpan).toHaveText('Bash');
    })

    it("Choose 10 minute expiration", async () => {
        await optionalPasteSettings.option('expiration').click();
        await optionalPasteSettings.option('expiration').waitForDisplayed();
        await optionalPasteSettings.expirationDropdown('tenMinutes').waitForExist();
        await optionalPasteSettings.expirationDropdown('tenMinutes').waitForClickable();
        await optionalPasteSettings.expirationDropdown('tenMinutes').scrollIntoView({ block: 'center', inline: 'center' });
        await optionalPasteSettings.expirationDropdown('tenMinutes').click();
        await expect(optionalPasteSettings.optionSpan).toHaveText('10 Minutes');
            })

    it("Set the paste Name/Title", async () => {
        await optionalPasteSettings.title.setValue('how to gain dominance among developers');
        await expect(optionalPasteSettings.title).toHaveValue('how to gain dominance among developers');
    })

    it("Saves the paste", async () => {
        await pasteForm.submitBtn.click();
    })

    it("Checks the title of the paste", async () => {
        await resultPage.title.waitForDisplayed();
        await expect(resultPage.title).toHaveText('how to gain dominance among developers');
    })

    it("Verifies if the text is suspended for bash", async() => {
        await expect(resultPage.ol).toHaveAttribute('class', 'bash');
    })

    it("Verifies if the text is pasted", async () => {
        await expect(resultPage.pastedText).toHaveText(variables.pasteItem('taskTwo'));
    })
    

    
    
})