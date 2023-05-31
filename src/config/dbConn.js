const mongoose = require("mongoose");

// database connect
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("database connection successful");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
