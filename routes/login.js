const check = require("../controller/controller") //for use of controller

const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.render("login");
})

// router.get("/hire",(req,res)=>{
//     res.send("you are hired");
// })

router.get("/check",check) //instead of above code of hired we can directly use controller to distribute code.

module.exports = router;