import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username:{type:String, required: true},
  name:{type:String, required: true},
  password:{type:String, required: true},
  level:String,
  min_company_share: Number,
  max_my_share: Number,
  match_commission: Number,
  session_commission: Number,
  admin_access: Boolean,
  session: Boolean
},{timestamps: true});

const UserModel = mongoose.model("Users",UserSchema);

export default UserModel;