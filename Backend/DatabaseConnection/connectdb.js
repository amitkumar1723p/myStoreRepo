import mongoose from "mongoose";

const connectDb = async () => {
  const connectionUri = process.env.DATABASE_URI;

  mongoose.set("strictQuery", true);
  await mongoose.connect(connectionUri);
};
export default connectDb;
