
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
    password:{
        require: true,
        type: String
    },
    userPhoto:{
        type: String
    }
})


const Users=mongoose.model("Users",userSchema)


module.exports =Users