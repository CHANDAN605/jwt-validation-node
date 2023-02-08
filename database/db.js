import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.knjbspq.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with database", error.message);
  }
};
export default Connection;
