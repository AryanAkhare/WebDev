// Import models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// Create Comment Controller
exports.createComment = async (req, res) => {
  try {
    // 1. Destructure required fields from request body
    const { post, user, body } = req.body;

    // 2. Create a new Comment document
    const comment = new Comment({
      post,   // post ID this comment belongs to
      user,   // user who wrote the comment
      body,   // comment text
    });

    // 3. Save comment to database
    const savedComment = await comment.save();

    // 4. Find the Post and push the comment ID into its comments array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } }, // add comment reference
      { new: true } // return updated post
    ).populate("comments").exec(); // populate comments with full comment documents or else it only does id without populate

    // 5. Send updated post as response
    res.status(200).json({
      success: true,
      post: updatedPost,
    });

  } catch (error) {
    // Error handling
    res.status(500).json({
      success: false,
      error: `Error while creating comment : ${error}`,
    });
  }
};
