import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface User {
    username: string;
    email: string;
    password: string;
    accountType: string;
    balance: number
}

const usersSchema = new Schema<User>(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, minLength: 8, required: true },
    accountType: { type: String, enum: ["advertiser", "publisher"] },
    balance: { type: Number, default: 0 }
  }
)

const UsersModel = mongoose.model<User>('Users', usersSchema);

export default UsersModel;