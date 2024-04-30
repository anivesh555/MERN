
function ma(){
    let a =9 
    console.log(a)
}
ma()

// this is closure that a does not have global access , so data encapsulation 

function outerFunction() {
    let outerVar = 'I am from the outer function';
    
    function innerFunction() {
      console.log(outerVar); // innerFunction has access to outerVar
    }
    
    return innerFunction;
  }
  
  let closure = outerFunction();
  closure(); // Output: "I am from the outer function"