function XO(str) {
  let arr = Array.from(str.toLowerCase());
  let countX = 0;
  let countO = 0;

  arr.forEach(elem => {

    elem === 'x' ? countX += 1 : (elem === 'o' ? countO += 1 : 0)

  });

  return countO === countX;
}
//another
  //let x = str.match(/x/gi);
  //let o = str.match(/o/gi);
  //return (x && x.length) === (o && o.length);
  

  //str = str.toLowerCase().split('');
  //return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;

console.log(XO('xo'),true);
console.log(XO("xxOo"),true);
console.log(XO("xxxm"),false);
console.log(XO("Oo"),false);
console.log(XO("ooom"),false);