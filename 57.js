
const str = "Welcome to this Javascript Guide!";

function reverseSentence(sentence, seperator)
{
    return sentence.split(seperator).reverse().join(seperator);
}

var reverseEntireSentence = reverseSentence(str, "");

var reverseEachWordAlso = reverseSentence(reverseEntireSentence, " ");

console.log(reverseEntireSentence);
console.log(reverseEachWordAlso);