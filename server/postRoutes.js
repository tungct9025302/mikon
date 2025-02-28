const express = require("express");
const database = require("./connect");
const ObjectID = require("mongodb").ObjectId;

let postRoutes = express.Router();

//Retrieve all
postRoutes.route("/users").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("Users").find({}).toArray();

  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found :(");
  }
});

//Retrieve one
postRoutes.route("/users/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("Users")
    .findOne({ _id: new ObjectID(request.params.id) });

  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found");
  }
});

//Create one
postRoutes.route("/users/:id").post(async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    title: request.body.title,
  };
  let data = await db.collection("Users").insertOne(mongoObject);

  response.json(data);
});

//Update one
postRoutes.route("/users/:id").put(async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    $set: { title: request.body.title },
  };
  let data = await db
    .collection("Users")
    .updateOne({ _id: new ObjectID(request.params.id), mongoObject });

  response.json(data);
});

//Delete one
postRoutes.route("/posts/:id").delete(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("Users")
    .deleteOne({ _id: new ObjectID(request.params.id) });

  response.json(data);
});

module.exports = postRoutes;
