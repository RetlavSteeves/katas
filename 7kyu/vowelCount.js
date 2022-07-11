function getCount(str) {
    var vowels = ['a','e', 'i', 'o', 'u'];
    var count = 0;
    str.split('')
        .filter(elem => 
            vowels.includes(elem)? count += 1 : 0 );

    return count;
}

// another 
    // (str.match(/[aeiou]/ig)||[]).length;
    //str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
