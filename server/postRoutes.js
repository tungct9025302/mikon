const express = require("express");
const database = require("./connect");
const ObjectID = require("mongodb").ObjectId;

const bcrypt = require("bcrypt");
const { Alert } = require("flowbite-react");
const SALT_ROUNDS = 6;

let postRoutes = express.Router();

//Retrieve all
postRoutes.route("/posts").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("posts").find({}).toArray();

  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found :(");
  }
});

//Retrieve one
postRoutes.route("/posts/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("posts")
    .findOne({ _id: new ObjectID(request.params.id) });

  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found");
  }
});

//Create one
postRoutes.route("/posts").post(async (request, response) => {
  let db = database.getDb();
  const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS);
  const takenEmail = await db
    .collection("posts")
    .findOne({ email: request.body.email });

  if (takenEmail) {
    response.json({ message: "The email has been taken!" });
  } else {
    let mongoObject = {
      name: request.body.name,
      email: request.body.email,
      password: hash,
      createdDate: new Date(),
      posts: [],
    };
    let data = await db.collection("posts").insertOne(mongoObject);

    response.json(data);
  }
});

//Update one
postRoutes.route("/posts/:id").put(async (request, response) => {
  let db = database.getDb();
  const post = await db
    .collection("posts")
    .findOne({ _id: new ObjectID(request.params.id) });

  if (post) {
    let matchOldPw = await bcrypt.compare(request.body.password, post.password);

    if (!matchOldPw) {
      const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS);
      let mongoObject = {
        $set: {
          password: hash,
        },
      };
      let data = await db
        .collection("posts")
        .updateOne({ _id: new ObjectID(request.params.id) }, mongoObject);

      response.json({
        success: true,
        message: "Updated successfully. Return to login page.",
        ...data,
      });
    } else {
      response.json({
        success: false,
        message: "Bruh this is your old pw...",
      });
    }
  } else {
    response.json({
      success: false,
      message: "User not found",
    });
  }
});

//Delete one
postRoutes.route("/posts/:id").delete(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("posts")
    .deleteOne({ _id: new ObjectID(request.params.id) });

  response.json(data);
});

module.exports = postRoutes;

//Login
postRoutes.route("/posts/login").post(async (request, response) => {
  let db = database.getDb();

  const post = await db
    .collection("posts")
    .findOne({ email: request.body.email });

  if (post) {
    let confirmation = await bcrypt.compare(
      request.body.password,
      post.password
    );

    if (confirmation) {
      response.json({ success: true, post });
    } else {
      response.json({
        success: false,
        message: "Incorrect postname or password.",
      });
    }
  } else {
    response.json({
      success: false,
      message: "User not found",
      email: request.body.email,
    });
  }
});
