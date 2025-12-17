const express = require("express");
const router = express.Router();

// Import Controller
const { dummy } = require("../controllers/dummyController");
const {createComment} =require("../controllers/commentController")
const {createPost,getAllPosts} =require("../controllers/PostController")
const {like,unlike}=require("../controllers/LikeController")
// Mapping
router.get("/dummy", dummy);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts)
router.post("/likes/like",like);
router.post("/likes/unlike",unlike)
// Export
module.exports = router;
