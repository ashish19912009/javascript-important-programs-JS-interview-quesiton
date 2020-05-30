function reverse(str) {
    str = str.split("");
    let srtLen = str.length;
    let halLen = Math.floor((srtLen/2)) - 1;
    let strRev = '';
    for(let i = 0; i <=halLen; i++)
    {
        strRev = str[srtLen - i - 1];
        str[srtLen - i - 1] = str[i];
        str[i] = strRev;
    }
    return str.join("")
  }


  console.log(reverse('Ashish Kumar Rena is awesome'));