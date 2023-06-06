const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.render("home1");
})

module.exports = router;