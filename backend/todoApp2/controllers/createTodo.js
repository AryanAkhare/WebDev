//import model
const Todo=require("../models/todo")

//define handler
exports.createTodo=async(req,res)=>{
    try{
        //extract info
        const {title,description}=req.body;
        //create a new Todo obj and insert in db

        const response= await Todo.create({title,description});

        //send a json response with success flag
        res.status(201).json({
            success:true,
            data:response,
            message:'Entry Created Successfully'
        })

    }catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:null,
            message:err.message || "Internal Server Error"
        })
    }
}