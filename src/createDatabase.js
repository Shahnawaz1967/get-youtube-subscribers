const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");

// Connect to DATABASE
// Mongodbcompass URL
// const DATABASE_URL = "mongodb://localhost/subscribers";

// Cluster URL
const DATABASE_URL =
  "mongodb+srv://ashahnawaz010:WkrqkxVLaDvEZnE7@cluster0.dzgsqgw.mongodb.net/";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database created..."));

const refreshAll = async () => {
  await subscriberModel.deleteMany({});
  // console.log("Deleting Previous Data")
  await subscriberModel.insertMany(data);
  // console.log("Inserting Data");
  await mongoose.disconnect();
  // console.log("Database Disconnect")
};
refreshAll();
