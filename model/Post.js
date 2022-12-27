import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  userId: Number,
  tags: Array,
  reactions: Number,
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
