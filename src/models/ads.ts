import mongoose from "mongoose";
import Users from "./users";


const adsSchema = new mongoose.Schema(
  {
    path: String,
    user: Users,
    views: { type: Number, default: 0 },
    category: String,
    is_active: Boolean,
    created_at: { type: Date, default: new Date()}
  }
)

const Ads = mongoose.model('Ads', adsSchema);

export default Ads;