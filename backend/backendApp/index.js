const express=require("express");
const app=express();
const PORT=4000;


//middleware
app.use(express.json())


// app.METHOD(PATH,HANDLER) Methods -> get,put,post,delete 

//get
app.get("/",(req,res)=>{
    res.send("<h1>This is heading</h1>")
})

//post
app.post("/car",(req,res)=>{
    res.send("<h1>Received a post</h1>")
})
app.listen(PORT,(req,res)=>{
    console.log("started at "+`${PORT}`)
})


