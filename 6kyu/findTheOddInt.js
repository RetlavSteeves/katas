function findOdd(A) {
  A.sort();
  let currentElem = A[0]; 
  let count = 1;
  for(let i = 1; i < A.length;i+=1) 
  {
    if(currentElem === A[i])
    {
      count += 1;
    }
    else
    {
      if(count % 2 !== 0) return currentElem;
      currentElem = A[i];
      count = 1;
    }
    
  }
  return currentElem;
}


//Another
 //return arr.find((item, index) => arr.filter(el => el == item).length % 2)

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);