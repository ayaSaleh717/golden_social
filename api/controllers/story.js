// controllers/storyController.js
import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";
import path from "path";
import multer from "multer";

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  }
});
export const upload = multer({ storage: storage });

export const addStory = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    try {
      const image = req.file;

      if (!image) {
        return res.status(400).json({ message: 'No image file uploaded' });
      }

      const imagePath = './' + image.path;
      const userId = req.body.userId || userInfo.id;
      const name = req.body.name || "Unnamed Story";

      // Debugging: Log the values being passed to the query
      console.log({
        createdAt: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        imagePath,
        userId,
        name
      });

      if (!userId || !name) {
        return res.status(400).json({ message: 'User ID and name are required' });
      }

      // Insert image path into the database
      const [result] = await db.execute(
        'INSERT INTO stories (`createdAt`, `image_path`, `userid`, `name`) VALUES (?, ?, ?, ?)',
        [
          moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          imagePath,
          userId,
          name
        ]
      );

      res.status(201).json({ message: 'Story added successfully', storyId: result.insertId });
    } catch (error) {
      console.error('Error adding story:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
};

// export const getStories = (req, res) => {
//   const token = req.cookies.accessToken;
//   if (!token) return res.status(401).json("Not logged in!");

//   jwt.verify(token, "secretkey", (err, userInfo) => {
//     if (err) return res.status(403).json("Token is not valid!");

//     const q = `SELECT * FROM stories`;

//     db.query(q, (err, data) => {
//       if (err) return res.status(500).json(err);
//       return res.status(200).json(data);
//     });
//   });
// };
export const getStories = (req, res) => {
  // console.log("Stories Fetching")
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    // console.log(userId);

    const q = `SELECT * FROM stories`
    // const q = `SELECT s.*, name FROM stories AS s JOIN users AS u ON (u.id = s.userId)
    // LEFT JOIN relationships AS r ON (s.userId = r.followedUserId AND r.followerUserId= ?) LIMIT 4`;

    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};











export const deleteStory = (req, res) => {
  // Implementation for deleting a story
};
``
