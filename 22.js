

const check = (temp) => {

    temp = temp.toLowerCase();
    console.log(temp);
    let mf = 0;
    let mfCode = null;
    for(i=0;i < temp.length; i++)
    {
       // console.log(temp[i].charCodeAt());
        if(temp[i].charCodeAt() > 97 && temp[i].charCodeAt() < 122)
        {
            let mfLocal = null;
            let mfCodeLocal = null;
            for(var e = 0; e < temp.length; e++)
            {
                if(i !== e)
                if(temp[i] === temp[e])
                {
                    mfLocal++;
                    mfCodeLocal = temp[e];
                    if(mfLocal > mf)
                    {
                        mfCode = temp[i];
                        mfCodeLocal = temp[e];
                    } else if(mfLocal === mf)
                        {
                            if(mfCode.charCodeAt() > temp[e].charCodeAt())
                            {
                                mfCode = mfCodeLocal;
                            }
                        }
                }
            }  
            
        }
    }
    console.log(`Most Occured : ${mfCode}`);  
}

check('Hello World!!!');
check('How do you do?');
check('One');
check('Oops!');
check('AAaooo!!!!');
check('abe');
