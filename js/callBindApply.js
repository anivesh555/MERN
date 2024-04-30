function cba(name){
    return `${name},${this.name}`
}
const thisObj = {"name":"Anivesh OBj"}

console.log(cba.bind(thisObj)("param Name"))


console.log(cba.call(thisObj,"call name"))

console.log(cba.call(thisObj,["call name"])) 