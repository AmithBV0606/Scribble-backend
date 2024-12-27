import express from "express";
import {
  createPost,
  deletePost,
  featurePost,
  getPost,
  getPosts,
  uploadAuth,
} from "../controllers/post.contoller.js";
import increasePageVisit from "../middlewares/increasePageVisit.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);

router.get("/", getPosts); // Get all posts
router.get("/:slug", increasePageVisit, getPost); // Get a specified post
router.post("/", createPost); // Create a post
router.delete("/:id", deletePost); // Delete the specified post
router.patch("/feature", featurePost);

export default router;