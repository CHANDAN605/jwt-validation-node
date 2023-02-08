import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  phone_number: String,
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: String,
  social_security_number: String,
  visa: String,
  visa_start_date: String,
  visa_end_date: String,
  profile_image: String,
});

const User = mongoose.model("userinfo", userSchema);
export default User;
