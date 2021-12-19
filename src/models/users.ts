import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    userType: {
      type: String,
      enum: ["advertiser", "publisher"],
    }
  }
)

const Users = mongoose.model('Users', userSchema);

export default Users;