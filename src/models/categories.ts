import mongoose from "mongoose";


const categoriesSchema = new mongoose.Schema(
  {
    category: String
  }
)

const categoriesModel = mongoose.model('Categories', categoriesSchema);

export default categoriesModel;
