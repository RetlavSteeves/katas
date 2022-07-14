function squareDigits(num){
    let allnumber = num.toString().split('');

    let ret = allnumber.map((e) => {
       return  e * e
    });

    ret = Number(ret.join('')) // or +ret.join('')
    return ret;
}

//another
 // +num.toString().split('').map(i => i*i).join('');

 // 