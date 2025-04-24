const express = require("express");
const database = require("./connect");
const { ObjectId } = require("mongodb");

const postRoutes = express.Router();

// GET all posts based on current userid
postRoutes.get("/posts", async (req, res) => {
  try {
    const db = database.getDb();
    const userid = req.query.userid;

    let filter = {};
    if (userid) {
      filter = { userid: userid }; // only filter if userid is provided
    }

    const posts = await db.collection("posts").find(filter).toArray();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// GET one post
postRoutes.get("/posts/:id", async (req, res) => {
  try {
    const db = database.getDb();
    const post = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(req.params.id) });
    post ? res.json(post) : res.status(404).json({ error: "Post not found" });
  } catch (err) {
    res.status(400).json({ error: "Invalid ID" });
  }
});

// CREATE a post
postRoutes.post("/posts", async (req, res) => {
  try {
    const db = database.getDb();
    const newPost = {
      userid: req.body.userid,
      username: req.body.username,
      category: req.body.category,
      content: req.body.content,
      date: req.body.date,
      images: req.body.images,
      tags: req.body.tags,
      title: req.body.title,
      comments: [],
      views: 0,
      reactions: 0,
    };
    const result = await db.collection("posts").insertOne(newPost);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: "Failed to create post" });
  }
});

// UPDATE a post (simplified, removed password logic unless intended)
postRoutes.put("/posts/:id", async (req, res) => {
  try {
    const db = database.getDb();
    const update = {
      $set: {
        ...req.body,
      },
    };
    const result = await db
      .collection("posts")
      .updateOne({ _id: new ObjectId(req.params.id) }, update);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: "Failed to update post" });
  }
});

// DELETE a post
postRoutes.delete("/posts/:id", async (req, res) => {
  try {
    const db = database.getDb();
    const result = await db
      .collection("posts")
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: "Failed to delete post" });
  }
});

module.exports = postRoutes;
