
const firstWord = "Mary";
const lastWord = "Armyy";

function checkAnagrams(fWord, lWord) {
    fWord = fWord.toLowerCase();
    lWord = lWord.toLowerCase();
    return fWord.split("").sort().join() === lWord.split("").sort().join()
}

console.log(checkAnagrams(firstWord, lastWord))