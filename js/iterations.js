a=[1,3]
c = a.forEach((v)=>v+1)
console.log(c)  //undefined


c = a.map((v)=>v+1)
console.log(c) //[ 2, 4 ]