/** 

For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
string A to every char of string B.

`paper` and `title` would return true.
`egg` and `sad` would return false.
`dgg` and `add` would return true.

 */

 function isIsomorphic(str1, str2) {
    
    if(str1.length !== str2.length) return false;

    let letterMap = {}

    for(var i = 0; i < str1.length; i++){
        var letterA = str1[i];
        var letterB = str2[i];

        if(letterMap[letterA] === undefined)
        {
            if(str2.indexOf(letterB) < i)
                return false;
            else
                letterMap[letterA] = letterB
        } 
        else if(letterMap[letterA] !== letterB)
            return false;
    }
    console.log(letterMap);
    return true;
 }
 
 console.log(isIsomorphic('egg','add'))