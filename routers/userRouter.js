const express=require("express");
const { Register } = require("../controllers/userContollers");



const router=express.Router()

router.get("/register",(req,res)=>{
res.send("hello")
})

module.exports =router