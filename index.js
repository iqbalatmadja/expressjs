const express = require("express")
const userRoutes = require("./routes/user")
const labRoutes = require("./routes/lab")

const app = express()

const port = 8888

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set("view engine","ejs")
app.use(express.static("public"))

const defaultcontroller = require("./controllers/default")
var middleware1 = (req,res,next) => {
    console.log('middleware')
    next()
}

app.use(middleware1)

app.get("/",defaultcontroller.index)

app.use(userRoutes)
app.use(labRoutes)

app.listen(port,function(){
    console.log("server is running on port:"+port)
})