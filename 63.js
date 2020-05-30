
let experssion = "{}{}{{a+b}/3}"

function checkExperssion(experssion) {
    var stack = [];

    if(experssion.length <=0)
        return true;
    
    for(var i = 0; i < experssion.length; i++) {
        if(experssion[i] === '{')
            stack.push(experssion[i])
        else if(experssion[i] === '}')
            {
                if(stack.length > 0)
                    stack.pop()
                else
                    return false;
            }
    }
    if(stack.pop())
        return false;
    else
        return true;
}

console.log(checkExperssion(experssion));