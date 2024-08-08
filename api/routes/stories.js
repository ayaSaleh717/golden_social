import express from "express";
import path from "path";
import multer from "multer";
import { getStories, addStory, deleteStory,upload } from "../controllers/story.js";

const router = express.Router();


  // router.post("/", addStory);
  router.post('/', upload.single('image'), addStory);


router.get("/", getStories);

router.delete("/:id", deleteStory);

export default router;

