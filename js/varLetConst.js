var x = 10;
var x = 20; // Redeclaration is allowed

console.log(x); // Output: 20

function exampleFunction() {
    var y = 30;
    var y = 40; // Redeclaration is allowed
    console.log(y); // Output: 40
}
let x = 10;

if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}

console.log(x); // Output: 10
console.log(y); // Output: ReferenceError: y is not defined
const x = 10;
x = 20; // TypeError: Assignment to constant variable
