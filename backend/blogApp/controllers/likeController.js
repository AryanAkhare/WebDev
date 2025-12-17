// Import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

/*
|--------------------------------------------------------------------------
| LIKE CONTROLLER
|--------------------------------------------------------------------------
| When a post is liked:
| 1. Create a Like document { post, user }
| 2. Push the like ID into Post.likes array
| 3. Return updated post with populated likes
*/
exports.like = async (req, res) => {
  try {
    // Extract post ID and user from request body
    const { post, user } = req.body;

    // Create a new Like document
    const like = new Like({
      post,
      user,
    });

    // Save Like to database
    const createdLike = await like.save();

    // Add like reference to Post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { likes: createdLike._id }, // add like ID
      },
      {
        new: true, // return updated post
      }
    )
      .populate("likes") // populate likes with Like documents
      .exec();

    // Send response
    res.status(200).json({
      success: true,
      post: updatedPost,
    });

  } catch (error) {
    // Error handling
    res.status(500).json({
      success: false,
      error: "Error while liking post",
    });
  }
};

/*
|--------------------------------------------------------------------------
| UNLIKE CONTROLLER
|--------------------------------------------------------------------------
| When a post is unliked:
| 1. Delete the Like document using post ID + like ID
| 2. Remove the like ID from Post.likes array
| 3. Return updated post with populated likes
*/
exports.unlike = async (req, res) => {
  try {
    // Extract post ID and like ID from request body
    const { post, like: likeId } = req.body;

    // Find and delete Like document
    const deletedLike = await Like.findOneAndDelete({
      post: post,
      _id: likeId,
    });

    // If like does not exist, return error
    if (!deletedLike) {
      return res.status(404).json({
        success: false,
        message: "Like not found",
      });
    }

    // Remove like reference from Post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $pull: { likes: deletedLike._id }, // remove like ID
      },
      {
        new: true, // return updated post
      }
    ).populate("likes");

    // Send response
    res.status(200).json({
      success: true,
      post: updatedPost,
    });

  } catch (error) {
    // Error handling
    res.status(500).json({
      success: false,
      error: "Error while unliking post",
    });
  }
};
