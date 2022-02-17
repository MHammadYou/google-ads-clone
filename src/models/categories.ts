import mongoose from "mongoose";


const categorySchema = new mongoose.Schema(
  {
    name: String,
  }
)

const Categories = mongoose.model('Categories', categorySchema);

export default Categories;