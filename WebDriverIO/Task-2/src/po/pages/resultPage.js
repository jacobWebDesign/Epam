class ResultPage {
    get title(){
        return $('div.info-top h1');
    }
    textSyntax(item){
        const syntaxes = {
            bash: 'bash',
            c: 'c'
        }
        return syntaxes[item];

    }
    get ol(){
        return $('//ol');
    }
    get pastedText(){
        return $('.bash');
    }
}

module.exports = ResultPage;