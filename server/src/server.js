const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const { urlRouter } = require("./routes/url.routes");

dotenv.config({
  path: ".env",
});

const connectDB = require("./database/index");

const app = express();
app.use(express.json({ urlextended: true }));
app.use(
  cors({
    origin: process.env.CORS,
  })
);

app.use("/url/v1", urlRouter);

connectDB()
  .then(() => {
    console.log(`Mongo is connected`);
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo Connection failed");
  });

module.exports = app;
