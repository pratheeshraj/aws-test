const express=require("express");
const { Register } = require("../controllers/userContollers");



const router=express.Router()

router.post("/register",Register)