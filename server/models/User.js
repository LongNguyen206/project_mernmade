const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  facebookID: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  avatar: { type: String },
  date: { type: Date, default: Date.now }
});

mongoose.model("users", UserSchema);