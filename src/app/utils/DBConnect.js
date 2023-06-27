const mongoose = require("mongoose");

const uri = `mongodb+srv://Sharvil:sharvilm143@cluster0.6e3jweq.mongodb.net/money-tracker?retryWrites=true&w=majority`;

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
