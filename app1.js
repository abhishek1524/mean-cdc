// const m1 = require("./m1")
// m1.myfun()

// x = m1.sqr(5)
// console.log(x)



// express
const express = require("express") //express is a variable here(constant) which basically imports express library we can give any name to variable.
var app = express() //making object for express

// #for post method
// const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static('public')) //for image

const ejs = require("ejs")
app.engine("html",ejs.renderFile)
app.set("view engine", "html")



app.listen(5000,()=>{console.log("server start at port 5000")}) 
// listen is predefined function and use for defining port of an localhost so that we can define ,in which port number our localhost is running.

// app.get("/",(req,res)=>{ res.send("hello everyone")})
// get function is also predefined which took 2 parameters one is the url of the localhost and second is the function which take request and response as parameter and then we can print in screen through send function which will be printed through resonse parameter.


// app.get("/about",(req,res)=>{ res.send("about page")})


// app.get("/",(req,res)=> { res.sendFile(__dirname+"/home.html")})
// app.get("/xyz",(req,res)=> { res.send(req.query)})
// app.get("/contact",(req,res)=>{ res.send("contact page")})
// app.get("/login",(req,res)=> { res.sendFile(__dirname+"/login.html")})


// app.get("/xyz",(req,res)=>{res.send("get method")})
// app.post("/xyz",(req,res)=>{res.send("post method")})


// app.get("/",(req,res)=> { res.sendFile(__dirname+"/home.html")})
// app.get("/xyz",(req,res)=> { res.send(req.query)})

// #for post method we will use body parser
// app.post("/xyz",(req,res)=>{res.send(req.body)})

// for image
// app.get("/",(req,res)=> { res.sendFile(__dirname+"/home.html")})

// for view engine
// app.get("/",(req,res)=>{res.render("home")})

// app.get("/",(req,res)=>{
//     name="Acropolis"
//     res.render("home",{"name":name})
// })


// app.get("/",(req,res)=>{
//     student={enroll:101, name:"first", dept:"cse"}
//     res.render("home",{"student":student})
// })

// fot table
// app.get("/",(req,res)=>{
//     student=[
//         {enroll:101, name:"first", dept:"cse"},
//         {enroll:102, name:"first1", dept:"cse2"},
//         {enroll:103, name:"first2", dept:"cse3"},
//         {enroll:104, name:"first3", dept:"cse4"},
        
//     ]
//     res.render("home",{"student":student})
// })

// for if else
app.get("/",(req,res)=>{
    role = "Guest"
    res.render("home",{"role":role})
})




