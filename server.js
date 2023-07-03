const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const multer = require("multer");
const cors = require("cors");
require("dotenv").config();
const port = 5000;
// const propertyModel = require("./models/addproperty");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected successfully"))
  .catch((err) => console.log("it has an error", err));

app.listen(port, () => {
  console.log("Server Running Successfully at Port: " + port);

  const propertyRoute = require("./routes/property");
  const inquiriesRoute = require("./routes/inquiries");
  const userRoute = require("./routes/user");

  app.use("/api/property", propertyRoute);
  app.use("/api/inquiries", inquiriesRoute);
  app.use("/api/user", userRoute);
});
