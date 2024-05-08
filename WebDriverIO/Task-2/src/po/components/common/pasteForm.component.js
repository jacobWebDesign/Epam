class PasteForm {
    get pasteArea() {
        return $('#postform-text');
    }
    get submitBtn() {
        return $('button=Create New Paste');
    }
}

module.exports = PasteForm;