
const mongoose=require("mongoose")

const dbConnection=()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("db is connected");
    } catch (error) {
        console.log(error);
    }
}


module.exports =dbConnection