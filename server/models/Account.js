const mongoose = require("mongoose");

const { Schema } = mongoose;

const AccountSchema = new Schema({
  handle: { type: String, required: true, max: 40 },
  name: { type: String, required: true },
  platform: { type: String, required: true },
  link: { type: String, required: true },
  accountType: { type: String, required: true },
  followers: { type: String, required: true },
  engagement: { type: String },
  industry: { type: [String], min: 1, required: true },
  location: { type: String },
  description: { type: String },
  reviews: [{
    reviewBody: { type: String },
    reviewDate: { type: Date, default: Date.now() },
    reviewUser: { type: Schema.Types.ObjectId, ref: 'users' }
  }],
  date: { type: Date, default: Date.now }
});

mongoose.model("accounts", AccountSchema);