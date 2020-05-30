Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; i++) {
        for(var j=i+1; j<a.length; j++) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

let array1 = [1,3,5,6];
let array2 = [2,4,5,6];

console.log(array1.concat(array2).unique())