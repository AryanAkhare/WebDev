// const express=require("express")
// const app=express();

// app.listen(3000,()=>{
//     console.log("Server started successfully")
// })

//Making the flow
const express=require("express")
const app=express();

//load config from env
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//middleware to parse json
app.use(express.json())

//import routes for todo api
const todoRoutes=require("./routes/todos");
//mount routes
app.use("/api/v1",todoRoutes)

//DB connect
const dbConnect=require("./config/database")
dbConnect();

//start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`)
})



//default Route
app.get("/",(req,res)=>{
    res.send("<h1>This is homepage.</h1>")
})