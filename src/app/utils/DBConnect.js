const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const connect_DB = async () => {
  try {
    await mongoose.connect(uri);
    mongoose.Promise = global.Promise;
    console.log("Connection made successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect_DB;
