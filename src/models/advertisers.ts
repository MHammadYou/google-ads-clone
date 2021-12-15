import mongoose from "mongoose";
import Users from "./users";


const schema = new mongoose.Schema(
  {
    user_id: Users,
    balance: Number
  }
)

const Advertisers = mongoose.model('Advertisers', schema);

export default Advertisers;