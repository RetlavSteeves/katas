function getMiddle(s)
{
  let halfValue = s.length/2
  return s.length % 2 === 0 ? 
    s.substring(halfValue-1 , halfValue+1) : s[Math.floor(halfValue)]
}


//Another 
 // return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
 //  return s.slice((s.length-1)/2, s.length/2+1);