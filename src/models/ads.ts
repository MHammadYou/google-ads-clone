import mongoose from "mongoose";
import Advertisers from "./advertisers";


const adsSchema = new mongoose.Schema(
  {
    path: String,
    advertiser: Advertisers,
    views: Number,
    category: String,
    is_active: Boolean,
    time_left: { type: Date, default: 0},
    created_at: { type: Date, default: new Date()}
  }
)

const Ads = mongoose.model('Ads', adsSchema);

export default Ads;