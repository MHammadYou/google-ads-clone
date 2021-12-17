import mongoose from "mongoose";
import Users from "./users";


const publishersSchema = new mongoose.Schema(
  {
    user_id: Users,
    balance: Number
  }
)

const Publishers = mongoose.model('Publishers', publishersSchema);

export default Publishers;