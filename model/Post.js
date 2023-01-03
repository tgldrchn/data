import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    minlength: [6, "heterhii baga bn"],
    maxlength: [50, "heterhii ih bn"],
  },
  body: {
    type: String,
    required: [true, "body is required"],
    minlength: [6, "heterhii baga bn"],
    maxlength: [50, "heterhii ih bn"],
  },
  userId: Number,
  tags: Array,
  reactions: Number,
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
