const str1 = "1011"

function isPalindrome(str){

    let letterOnly = str.toLowerCase().replace(/\s/g,"");

    return letterOnly === letterOnly.split("").reverse().join("")
}

console.log(isPalindrome(str1))