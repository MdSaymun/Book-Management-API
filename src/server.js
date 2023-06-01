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

// port
const port = process.env.PORT || 8000;

// server listen
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
