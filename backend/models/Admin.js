import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Admin = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("admin", Admin);
