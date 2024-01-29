const express = require("express")
const dbConnection = require("./config/DbConnection")
const dotenv = require("dotenv").config()
const cors=require("cors")
const userRouter = require("./routers/userRouter.js")
const app=express()

//middlewares
app.use(express.json())
app.use(cors())
app.use("/api",userRouter)
const PORT=process.env.PORT
// db Connection
dbConnection()

app.get("/",(req,res)=>{
    res.send("hi iam pratheesh")
})
app.listen(PORT,()=>{
    console.log(`server is connected on http://localhoast:${PORT}`);
})



