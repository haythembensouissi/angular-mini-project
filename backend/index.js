const express=require("express")
const cors=require("cors")
const app=express()
require("dotenv/config")
const bodyparser=require("body-parser")
app.use(express.json())
app.use(bodyparser.json())
const mongoose=require("mongoose")
const StudentsRouter=require("../backend/Routes/studentRoutes")
mongoose.connect(process.env.ConnectionUrl,()=>{
    console.log("connected")
})
app.use(cors())
const port=3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
app.get("/",(req,res)=>{
    res.json("hello world")
})
app.use(StudentsRouter)