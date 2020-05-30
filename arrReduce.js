var arr = [[0,1],[2,3],[4,5]];
var result = arr.reduce(function(a,b,i){
    console.log("a is ",i,a);
    console.log("b is ",i,b);
    return a.concat(b);
},[10]);

console.log(result);

var arr2 = [10,20,30,40,50].reduce(sum);

function sum(acc, val){
    var sum = 0;
    sum = acc+val;
    return sum;
}

console.log(arr2);

var arr3 = [10,15,60,90,100,50,50].reduce(function(a,b){
    if(a>b)
        return a;
    else
        return b;
});

console.log(arr3);

var arr4 = [10,30,90,5,3,101].reduce((a,b) => a<b ? a : b);
console.log(arr4);