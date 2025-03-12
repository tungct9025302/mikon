const express = require("express");
const database = require("./connect");
const ObjectID = require("mongodb").ObjectId;

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;

let userRoutes = express.Router();

//Retrieve all
userRoutes.route("/users").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("users").find({}).toArray();

  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found :(");
  }
});

//Retrieve one
userRoutes.route("/users/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("users")
    .findOne({ _id: new ObjectID(request.params.id) });

  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found");
  }
});

//Create one
userRoutes.route("/users").post(async (request, response) => {
  let db = database.getDb();
  const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS);
  const takenEmail = await db
    .collection("users")
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
    let data = await db.collection("users").insertOne(mongoObject);

    response.json(data);
  }
});

//Update one
userRoutes.route("/users/:id").put(async (request, response) => {
  let db = database.getDb();
  const hash = await bcrypt.hash(request.body.password, SALT_ROUNDS);
  let mongoObject = {
    $set: {
      name: request.body.name,
      email: request.body.email,
      password: hash,
      createdDate: request.body.createdDate,
      posts: request.body.posts,
    },
  };
  let data = await db
    .collection("users")
    .updateOne({ _id: new ObjectID(request.params.id), mongoObject });

  response.json(data);
});

//Delete one
userRoutes.route("/users/:id").delete(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("users")
    .deleteOne({ _id: new ObjectID(request.params.id) });

  response.json(data);
});

module.exports = userRoutes;

//Login
userRoutes.route("/users/login").post(async (request, response) => {
  let db = database.getDb();

  const user = await db
    .collection("users")
    .findOne({ email: request.body.email });

  if (user) {
    let confirmation = await bcrypt.compare(
      request.body.password,
      user.password
    );

    if (confirmation) {
      response.json({ success: true, user });
    } else {
      response.json({
        success: false,
        message: "Incorrect username or password.",
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
