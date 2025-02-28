const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config({ path: "./config.env" });
const ATLAS_URI =
  "mongodb+srv://user1:123@mikon.v2a8x.mongodb.net/?retryWrites=true&w=majority&appName=Mikon";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(ATLAS_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// const client = new MongoClient(process.env.ATLAS_URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

let database;

module.exports = {
  connectToServer: () => {
    database = client.db("Test");
  },
  getDb: () => {
    return database;
  },
};

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
