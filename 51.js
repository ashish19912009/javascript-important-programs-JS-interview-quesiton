function firstAppearence(str) {

    var len = str.length;
    var Obj = {};
    var char;

    for(var i=0; i < len; i++) {
        char = str[i];
        if(Obj[char] === 1)
            Obj[char]++;
        else
            Obj[char] = 1; 
    }
    console.log(Obj);
    for(j in Obj) {
        if(Obj[j] === 1)
            return j;
    }

}

console.log(firstAppearence("shishA"));


