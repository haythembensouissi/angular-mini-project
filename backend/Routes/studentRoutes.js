const express=require('express')
const mongoose=require("mongoose")
const studentModel=require("../model/Students")
const router=express.Router()
router.get("/students",async(req,res)=>{
   const students= await studentModel.find({})
   return res.status(200).json(students)
})
router.post("/students/add",async(req,res)=>{
   
    const student = new studentModel({  
        _id:new mongoose.Types.ObjectId(),
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,  
        password:req.body.password
    })
    student.save().then((results)=>{
        return res.json(results)
    }).catch(e=>console.log(e))
})
router.delete("/students/delete/:id",async(req,res)=>{
await studentModel.findByIdAndRemove(req.params.id)
res.json("delete successfully")
}) 
router.put("/students/update/:id",async(req,res)=>{
    await studentModel.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.json("updated successfully")
})
router.get("/students/:id",async(req,res)=>{
   const student= await studentModel.findById(req.params.id)
    res.status(200).json(student)
})
module.exports=router