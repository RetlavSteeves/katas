String.prototype.toJadenCase = function () {
  let arrWords = this.split(' ');
  arrWords =  arrWords.map(word => word[0].toUpperCase() + word.substring(1));
  return arrWords.join(' ');
};

//Another
  //String.prototype.toJadenCase = function () { 
 // return this.split(" ").map(function(word){
  //  return word.charAt(0).toUpperCase() + word.slice(1);
  //}).join(" ");


let str = 'How can mirrors be real if our eyes aren\'t real';
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");