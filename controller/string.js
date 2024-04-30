var s ='a string need to operate'

console.log(s.split('')) // whole string split of len 1
console.log(s.split())  // with '' string will ve ['whole string'] 
console.log(s.toUpperCase())

console.log(s.charAt(3)) 
console.log(s.charCodeAt(2), 'ord of letter ')
console.log(s.at(2)) 
console.log(s.slice(1,3),'slice')  // give 1 to 3
console.log(s.substring(1,4),'sub string')  // second param is the len of the part we want
console.log(s.replace('need','NEED'))
