import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    minlength: [6, "heterhii baga bn"],
  },
  body: {
    type: String,
    required: [true, "body is required"],
    minlength: [6, "heterhii baga bn"],
  },
  image: String,
  userId: Number,
  tags: Array,
  reactions: Number,
});
PostSchema.path("title").validate((title) => {
  return !/[0-9]/.test(title);
}, "post dotor too yvj bnaa");
PostSchema.path("body").validate((body) => {
  return !/[0-9]/.test(body);
}, "post dotor too yvj bnaa");

const Post = mongoose.model("Post", PostSchema);

export default Post;
