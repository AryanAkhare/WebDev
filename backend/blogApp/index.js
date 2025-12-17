const express=require("express")
const app=express()
require("dotenv").config();

const PORT=process.env.PORT || 3000


//middleware
app.use(express.json())

//routes
const blog=require("./routes/blog")
//mount
app.use("/api/v1/",blog)


//database fetch
const connectDB=require("./config/database")
connectDB();



app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>")
})
app.listen(PORT,()=>{console.log(`App running successfully at port ${PORT}`)})