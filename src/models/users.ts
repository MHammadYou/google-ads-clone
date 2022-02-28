// import mongoose from "mongoose";

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const usersSchema = new Schema(
//   {
//     username: { type: String, unique: true, required: true },
//     email: { type: String, unique: true, required: true },
//     password: { type: String, minLength: 8, required: true },
//     accountType: { type: String, enum: ["advertiser", "publisher"] },
//     balance: { type: Number, default: 0 }
//   }
// )

const usersSchema = new Schema(
  {

      username: { type: String },
  }
)

const Users = mongoose.model('Users', usersSchema);

export default Users;