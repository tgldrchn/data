import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  image: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
