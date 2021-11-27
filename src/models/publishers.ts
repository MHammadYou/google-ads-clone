import mongoose from "mongoose";
import Users from "./users";


const schema = new mongoose.Schema(
  {
    user_id: Users,
  }
)

const Publishers = mongoose.model('Publishers', schema);

export default Publishers;