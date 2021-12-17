import mongoose from "mongoose";
import Users from "./users";


const adsSchema = new mongoose.Schema(
  {
    user_id: Users,
    balance: Number
  }
)

const Advertisers = mongoose.model('Advertisers', adsSchema);

export default Advertisers;