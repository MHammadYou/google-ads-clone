import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  }
)

const Users = mongoose.model('Users', userSchema);

export default Users;