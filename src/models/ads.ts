import mongoose from "mongoose";
import Users from "./users";
import Categories from "./categories";


const adsSchema = new mongoose.Schema(
  {
    path: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' },
    views: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const AdsModel = mongoose.model('Ads', adsSchema);

export default AdsModel;