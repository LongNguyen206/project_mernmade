const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  facebookID: { type: String },
  facebookToken: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  date: { type: Date, default: Date.now }
});

mongoose.model("users", UserSchema);