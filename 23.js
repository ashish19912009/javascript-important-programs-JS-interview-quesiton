function updateArr(arr) {
    let sum = 0;
    let newArr = []
    for(var i of arr)
    {
        sum += i;
    }
    console.log(sum);
    const temp = sum/arr.length;
    if(temp % 1 === 0)
    {
        console.log(temp+1);
    } else{
        console.log(Math.ceil(temp));
    }
}

//updateArr([1,2,3,4,5]);
//updateArr([100,200,300,400,500]);
//updateArr([50,60,10,20,9]);
updateArr([44,68,72,84]);