class OptionalPasteSettings {
    option(param) {
        const selectors = {
            expiration: '#select2-postform-expiration-container',
            syntax: '#select2-postform-format-container',

        }
        return $(`${selectors[param.toLowerCase()]}`)
    }

    expirationDropdown(option) {
        const selectors = {
            tenMinutes: 'li=10 Minutes',
            oneHour: 'li=1 Hour',
        }
        return $(`${selectors[option]}`);
    }

    syntaxDropdown(option) {
        const selectors = {
            bash: 'li=Bash'

        }
        return $(`${selectors[option]}`);
    }

    get title() {
        return $('#postform-name');
    }
    get optionSpan() {
        return $('#select2-postform-expiration-container');
    }
    get syntaxSpan() {
        return $('#select2-postform-format-container')
    }
}

module.exports = OptionalPasteSettings;