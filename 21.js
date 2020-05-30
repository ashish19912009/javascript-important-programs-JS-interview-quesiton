const desc = (arr) => {

    for(let i = 0; i < arr.length; i++)
    {
        for(let e = i+1; e< arr.length; e++)
        {
            if(arr[i] < arr[e])
            {
                const temp = arr[e];
                arr[e] = arr[i];
                arr[i] = temp;
            }
        }
    }
    console.log(`Array in descending Order : ${arr}`);
}

desc([10,20,5,25,19,29,25]);