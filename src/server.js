// external imports
const dotenv = require("dotenv");

// internal imports
const app = require("./app");
const dbConnect = require("./config/dbConn");

// dotenv configuration
dotenv.config({
  path: ".env.local",
});

// database connect
dbConnect();

// server listen
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
