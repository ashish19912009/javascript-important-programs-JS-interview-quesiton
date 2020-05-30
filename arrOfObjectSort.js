var abc = [{
    x: 20,
    y: 15
},
{
    x: 30,
    y: 20
},
{
    x: 40,
    y: 5
},
{
    x: 5,
    y: 50
}];


function compare(a,b){
    return a.y - b.y
}

const temp = abc.sort(compare);
console.log(temp);