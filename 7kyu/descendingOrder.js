function descendingOrder(n){
  let arr = Array.from(n.toString());
  return +arr.sort((a,b)=> b - a).join('');
  
}

//another
  //return parseInt(String(n).split('').sort().reverse().join(''))
  //

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(111), 111)
console.log(descendingOrder(15), 51)
console.log(descendingOrder(1021), 2110)
console.log(descendingOrder(123456789), 987654321)