const eventRouter = require("events")

const event = new eventRouter()

event.on("name",(pa)=>{
    console.log(pa)
})

console.log('first')
event.emit('name',1233)
