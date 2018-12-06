const mongoose = require("mongoose");

const { Schema } = mongoose;

const AccountSchema = new Schema({
  handle: { type: String, required: true, max: 40 },
  name: { type: String, required: true },
  picture: { type: String },
  platform: { type: String, required: true },
  link: { type: String, required: true },
  accountType: { type: String, required: true },
  followers: { type: Number, required: true },
  engagement: { type: String },
  industry: { type: [String], min: 1, required: true },
  location: { type: String },
  description: { type: String },
  reviews: [{
    reviewUser: { type: Schema.Types.ObjectId, ref: 'users' },
    reviewUserName: { type: String },
    reviewUserAvatar: { type: String },
    reviewText: { type: String, required: true },
    reviewLikes: [{ user: { type: Schema.Types.ObjectId, ref: 'users' } }],
    reviewEditedStatus: { type: Boolean, default: false },
    reviewDate: { type: Date, default: Date.now() }
  }],
  date: { type: Date, default: Date.now }
});

mongoose.model("accounts", AccountSchema);