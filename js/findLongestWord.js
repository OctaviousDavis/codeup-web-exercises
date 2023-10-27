const findLongestWord = (sentence) => {
    let sentenceArr = sentence.split("")
    let result = "",
        for (let word of sentenceArr){
            if (word.length > result.length) {
            result = word;
        }
    }
        return result;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));