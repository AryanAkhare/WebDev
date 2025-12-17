// Import models
const Post = require("../models/postModel");


// Create Post Controller
exports.createPost = async (req, res) => {
  try {
    const {title,body}=req.body;
    const post=new Post({
        title,body
    })
    const savedPost=await post.save();
    res.status(200).json({
      success: true,
      post: savedPost,
    });

  } catch (error) {
    // Error handling
    res.status(500).json({
      success: false,
      error: `Error while creating post : ${error}`,
    });
  }
};


//Fetch all posts
exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find({}).populate("comments").populate("likes").exec();
        res.json({
            posts,
        })
    }catch(e){
        // Error handling
    res.status(500).json({
      success: false,
      error: `Error while fetching all posts : ${error}`,
    });
    }

}