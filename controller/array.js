
// arrray syntax 
var a = [2,3,43,4]

// insert/push

a.push(3)
a.splice(1,0,223)
console.log(a)

// splice methods
// 1 . where should element added
// 2. how many element need to remove
// 3 element that need to be insert


// delete 
a.splice(2,1)
console.log(a,'after del')

a.shift() // to del 0 index
console.log(a,'shift ')

// to string 
a =a.toString()
console.log(a,'toString')


// at
a =[1,31,4234]
console.log(a.at(1))


// sort
const numbers = [4, 2, 7, 1, 9];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 4, 7, 9]



// filter

// Filter even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8]


// 
// URLSearchParams