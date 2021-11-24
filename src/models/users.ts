import mongoose from "mongoose";


const schema = new mongoose.Schema(
  {

  }
)

const Users = mongoose.model('Users', schema);

export default Users;