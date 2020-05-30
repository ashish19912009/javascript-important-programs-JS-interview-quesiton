

const checkVariable = (variable) => {

    console.log(Object.prototype.toString.call(variable));

    if(Object.prototype.toString.call(variable) === '[object Array]' || Object.prototype.toString.call(variable) === '[object Object]')
    {
        console.log("Is a Non-premitive Type");
    } else {
        console.log("Is a premitive Type");
    }
}



checkVariable([1,2,3,4,5]);