import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { router as urlRouter } from "./routes/url.routes.js";

dotenv.config({
  path: ".env",
});

import connectDB from "./database/index.js";

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
