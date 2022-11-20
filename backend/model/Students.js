const mongoose=require('mongoose')
const StudentSchema= new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    firstname:String,
    lastname:String,
    email:String,
    password:String
})
 const StudentsModel=mongoose.model("students",StudentSchema)
 module.exports=StudentsModel