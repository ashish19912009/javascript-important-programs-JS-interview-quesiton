const findUnion = (arr1,arr2) => {

    const obj = {};

    for(let i = arr1.length - 1; i>=0; i--)
    {
        obj[arr1[i]] = arr1[i];
    }
   //  console.log(obj);
    for(let i = arr2.length - 1; i >= 0; i--)
    {
        obj[arr2[i]] = arr2[i];
    }
    // console.log(obj);
    let res = [];

    for(var n in obj)
    {
        if(obj.hasOwnProperty(n))
        {
            res.push(obj[n]);
        }
    }
    console.log(res);
};

findUnion([1,3],[3,5,6,7]);