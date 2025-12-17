const mongoose = require("mongoose");

const likeModel = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", //ref to post model,
  },
  user: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("Like", likeModel);
