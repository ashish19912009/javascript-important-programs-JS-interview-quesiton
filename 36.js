
const funcFind = (str) => {
    const newstr = str.split("");
    const temp = newstr.some((v,i,a) => {
        return a.indexOf(v) !== i
    });
    return temp;
};

console.log(funcFind('test'));