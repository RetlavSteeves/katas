function likes(names) {

  switch(names.length)
  {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names} likes this`;
    case 2:
      return `${names.join(' and ')} like this`
    case 3:
      return `${names.slice(0,2).join(', ')} and ${names[names.length-1]}  like this`;
    default:
      return `${names.slice(0,2).join(', ')} and ${(names.length-2)}  others like this`;
  }
  
}

console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');