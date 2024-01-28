const Users = require("../models/userModel")
const bcrypt =require("bcrypt")
exports.Register=async(req,res)=>{
const {email,password,name}=req.body
try {
    
const user=await Users.findOne({email})
if(user){
    return res.status(401).json({
        message:"User Already Existed"
    })
}

const hashedPassword=await bcrypt.hash(password,10)
const newuser=await Users.create({email,password:hashedPassword,name})

return res.status(200).json({
    message:success
})
} catch (error) {
    console.log(error);
}

}