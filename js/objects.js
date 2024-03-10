// how we can create object

// way 1

const ob1 = {
    a:12
}
console.log(ob1.a) // 12

//way 2
function makeObc(){
    this.data = 12

}
ob2 = new makeObc()
console.log(typeof ob2 , ob2.data)  //object 12

ob3 = Object.create({}) // need to pass {}  , else it will give error
console.log(typeof ob3)  //object 


ob4 = new Object()
console.log(typeof ob4,'4')  // object 4

class oneClass{
    constructor(){
        this.name = "asd"
    }
}
ob5 = new oneClass()  // POINT -  Class constructor oneClass cannot be invoked without 'new'
console.log(ob5 , typeof ob5)


// OPERATIONS in Object 

obj = {
    'data':1,
    d:3
}

// CURD for Object

console.log(obj.dd) // undefined -if key is not present 
console.log(obj.data) // 1 

obj.d = 12
console.log(obj.d) //12

//delete

delete obj.d;
console.log(obj.d,"----delte") //undefined 
// iterate over object

Object.keys(obj).map((k)=>{
    console.log(obj[k],"--")  //1c, 12
})

keysAll = Object.keys(obj)
console.log(keysAll, typeof keysAll, Array.isArray(keysAll)) // [ 'data', 'd' ] object, true ,--->>   also in python type is class keys


let valuesAll = Object.values(obj);

for (let key in obj) {
    console.log(key + ": " + obj[key]);
}