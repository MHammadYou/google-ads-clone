import mongoose from "mongoose";

const Schema = mongoose.Schema;

const testSchema = new Schema(
  {
    field: String
  }
)

const TestModel = mongoose.model('Test', testSchema);

export default TestModel;
