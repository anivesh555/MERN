const express = require("express")

const cors = require("cors")
const app = express()

app.use(cors()) // we can configure the cors() middleware to allow requests only from a specific origin
app.use(express.json())  // to get json data
app.use(express.text())  // to get plan text
app.use(express.urlencoded({ extended: false })) // urlencoded

// When extended is set to false, the URL-encoded data will be parsed with the querystring library,
// which only supports simple key-value pairs and does not support nested objects or arrays in the form data.


app.use((req,res,next)=>{
    console.log(req.body,"from middleware")

    next()
})

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

app.listen(4000, () => {
    console.log('listening ')
})



