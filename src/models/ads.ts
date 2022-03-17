import mongoose from "mongoose";
import Users from "./users";
import Categories from "./categories";


interface Ad {
    path: string;
    user: mongoose.Schema.Types.ObjectId;
    category: mongoose.Schema.Types.ObjectId;
    views: number;
    is_active: boolean
}


const adsSchema = new mongoose.Schema<Ad>(
  {
    path: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories' },
    views: { type: Number, default: 0 },
    is_active: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const AdsModel = mongoose.model<Ad>('Ads', adsSchema);

export default AdsModel;
export { Ad };