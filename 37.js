
const findStr = (str) =>{

    const newarr = [];
    console.log(str);
    const arr = str.toLowerCase().split("").sort().join().match(/^([a-z])\1+$/);
    console.log(arr);
    if(arr !== null)
    {
        arr.forEach(element => {
            console.log(element);
            newarr.push(element[0]);
        });
    }
    return newarr;
};

console.log(findStr('Test'));

render() {
    const EnhancedComponent = enhance(MyComponent);
     return <EnhancedComponent />;
 }