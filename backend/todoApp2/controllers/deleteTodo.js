//import model
const Todo=require("../models/todo")

//define handler
exports.deleteTodo=async(req,res)=>{
    try{
        //fetch id
        const {id}=req.params;
        const {title,description}=req.body;
        const todo=await Todo.findByIdAndDelete(
            {_id:id},
            {title,description,deletedAt:Date.now()},
            
        )
        
        res.status(200).json({
            success:true,
            data:todo,
            message:"Deleted successfully"
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