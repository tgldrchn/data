import express from "express";
import { getAllPosts } from "../controller/post.js";
import { createPosts } from "../controller/post.js";
import { searchPost } from "../controller/post.js";
import { uptadePost } from "../controller/post.js";
import { deletePost } from "../controller/post.js";

const router = express.Router();

router.get("/posts", getAllPosts);
router.route("/posts").post(createPosts);
router.route("/posts/:id").get(searchPost);
router.route("/posts/:id").put(uptadePost);
router.route("/posts/:id").delete(deletePost);

export default router;
