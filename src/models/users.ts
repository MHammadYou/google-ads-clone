import mongoose from "mongoose";


const usersSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    userType: { type: String, enum: ["advertiser", "publisher"] }
  }
)

const Users = mongoose.model('Users', usersSchema);

export default Users;