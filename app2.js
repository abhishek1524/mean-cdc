// for further concepts we use this file(IMP REAL CONCEPTS)


const homeRouter=require("./routes/home");
const loginRouter=require("./routes/login")

const express = require("express")
var app = express()
app.use(express.static('public'))
app.engine("html",require("ejs").renderFile)
app.set("view engine","html")
app.listen(5000,()=>{console.log("server start at port 5000")})

app.use("/",homeRouter)
app.use("/login",loginRouter)