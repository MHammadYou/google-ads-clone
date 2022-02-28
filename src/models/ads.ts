import mongoose from "mongoose";
import Users from "./users";


const adsSchema = new mongoose.Schema(
  {
    path: String,
    user: Users,
    views: { type: Number, default: 0 },
    categories: { type: Array, default: [] },
    is_active: Boolean,
  },
  { timestamps: true }
)

const Ads = mongoose.model('Ads', adsSchema);

export default Ads;