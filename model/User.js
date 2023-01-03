import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "name is required"],
    minlength: [6, "heterhii baga bn"],
    maxlength: [50, "heterhii ih bn"],
  },
  lastName: {
    type: String,
    required: [true, "name is required"],
    minlength: [6, "heterhii baga bn"],
    maxlength: [50, "heterhii ih bn"],
  },
  username: {
    type: String,
    required: [true, "name is required"],
    minlength: [6, "heterhii baga bn"],
    maxlength: [50, "heterhii ih bn"],
  },
  image: String,
});
const User = mongoose.model("User", UserSchema);
UserSchema.path("firstName").validate((firstName) => {
  return !/[0-9]/.test(firstName);
}, "ner dotor too yvj bnaa");
UserSchema.path("lastName").validate((lastName) => {
  return !/[0-9]/.test(lastName);
}, "ner dotor too yvj bnaa");

export default User;
