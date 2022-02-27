import mongoose from "mongoose";


const usersSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, minLength: 8, required: true },
    accountType: { type: String, enum: ["advertiser", "publisher"] },
    balance: { type: Number, default: 0 }
  }
)

const Users = mongoose.model('Users', usersSchema);

export default Users;