function highAndLow(numbers){
  let allNumber = numbers.split(' ');
  let min = Math.min(...allNumber);
  let max = Math.max(...allNumber)
	return  max + ' ' + min
}

// another 
 //numbers = numbers.split(' ');
  //return `${Math.max(...numbers)} ${Math.min(...numbers)}`;