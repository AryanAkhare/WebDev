//import model
const Todo=require("../models/todo")

//define handler
exports.getTodo=async(req,res)=>{
    try{
        //fetch all todo items
        const todos=await Todo.find({}) //these kind of functions in mongoose libraries

        

        //response updated
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire Todos Fetched."
        })

    }catch(err){
        console.error(err)
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message
        })
    }
}

exports.getTodoById=async(req,res)=>{
    try{
        //fetch by id
        const id=req.params.id;
        const todo=await Todo.findById({_id:id}) //extract by id
        //data by given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"ID Not Found"
            })
        }
        //data found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched.`
        })

    }catch(err){
        console.error(err)
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message
        })
    }
}