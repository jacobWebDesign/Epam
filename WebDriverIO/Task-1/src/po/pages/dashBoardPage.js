const DashboardElements = require('../elements/dashboardElements');
const BasePage = require('./basePage');

class DashboardPage extends BasePage {
    async pasteText(text) {
        await this.waitForElementDisplayed(DashboardElements.dropdown);
        await DashboardElements.dropdown.click();
        await this.waitForElementDisplayed(DashboardElements.tenMinutesOption);
        await DashboardElements.tenMinutesOption.click();
        await DashboardElements.textArea.setValue(text);
    }

    async setName(name) {
        await DashboardElements.nameInput.setValue(name);
    }

    // Define other methods specific to the dashboard page
}

module.exports = new DashboardPage();
