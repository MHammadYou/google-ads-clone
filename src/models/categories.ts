import mongoose from "mongoose";

interface Categories {
  category: string
}


const categoriesSchema = new mongoose.Schema<Categories>(
  {
    category: String
  }
)

const categoriesModel = mongoose.model<Categories>('Categories', categoriesSchema);

export default categoriesModel;
