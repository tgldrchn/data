import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router/post.js";
import routerTwo from "./router/user.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use("/", routerTwo);

const uri = process.env.MONGO_URI || "";
const port = process.env.PORT || 7000;

const connect = () => {
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.log("Could not connect to DB");
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send({
    posts: posts,
  });
});

app.listen(port, async () => {
  console.log(`Server running ${port}`);
  connect();
});
