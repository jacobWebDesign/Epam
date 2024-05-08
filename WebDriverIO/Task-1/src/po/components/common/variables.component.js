class Variables {
    pasteItem(item){
        const selector = {
            taskOne: 'Hello from webdrivers',
            taskTwo: 
`git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`,
        }
        return selector[item];
    }
}

const variables = new Variables();

module.exports = Variables;