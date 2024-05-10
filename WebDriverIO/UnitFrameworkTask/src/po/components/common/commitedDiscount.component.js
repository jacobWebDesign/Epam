class CommitedDiscount {
    duration(item){
        const selectors = {
           oneYear: "//div[31]/div/div/div[2]/div/div/div[2]"
        }
        return $(selectors[item]);
    }
}

module.exports = CommitedDiscount;