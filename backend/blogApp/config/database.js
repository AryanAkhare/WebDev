const mongoose=require("mongoose");

require("dotenv").config();

const connectDB=()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("connected successfully")
    }).catch((e)=>{
        console.error(e)
        process.exit(1)
    })
}
module.exports=connectDB;