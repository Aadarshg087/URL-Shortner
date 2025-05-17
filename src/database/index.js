import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/URLshortner`);
  } catch (err) {
    console.log("Error in connecting the DB", err);
  }
}

export default connectDB;
