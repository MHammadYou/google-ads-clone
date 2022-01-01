import mongoose from "mongoose";


const usersSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, minLength: 8 },
    accountType: { type: String, enum: ["advertiser", "publisher"] },
    balance: { type: Number, default: 0 }
  }
)

const Users = mongoose.model('Users', usersSchema);

export default Users;