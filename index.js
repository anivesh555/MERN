const express = require("express")
const sesssion = require("./SessionBased/session")
const d = require("./controller")

const cors = require("cors")
const app = express()
const db = require("./database/db")
const routes = require("./routes/index")
app.use(sesssion)
const kafka = require('kafka-node');

app.use(cors()) // we can configure the cors() middleware to allow requests only from a specific origin
app.use(express.json())  // to get json data
app.use(express.text())  // to get plan text
app.use(express.urlencoded({ extended: false })) // urlencoded

const user = new kafka.KafkaClient({
    kafkaHost: 'localhost:2181'
  });
  
  user.on('ready', () => {
    console.log('Kafka Connected');
  });
  
  user.on('error', (error) => {
    console.error('Error connecting to Kafka:', error);
  });
  
// When extended is set to false, the URL-encoded data will be parsed with the querystring library,
// which only supports simple key-value pairs and does not support nested objects or arrays in the form data.


app.use((req,res,next)=>{
    console.log(req.body,"from middleware")

    next()
})
app.use("/api", routes)

app.post("/", async (req, res) => {

    try {
        console.log(req.body)
        console.log(req.body?.html, "html==")
        console.log(req.body?.js, "js==")
        console.log(req.body?.xml, "xml==")
        res.sendStatus(200)

    } catch (error) {
    }

})
app.get("/",d)

app.listen(4000, () => {
    console.log('listening ')
})



