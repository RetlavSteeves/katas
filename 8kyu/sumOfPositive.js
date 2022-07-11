function positiveSum(arr) {
  var count = 0;
  arr.forEach(element => {
    count += element > 0 ? element : 0;
  });
 
  return count; 
}

// Another solution
 // arr.reduce((a,b)=> a + (b > 0 ? b : 0),0)


