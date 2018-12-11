const mongoose = require("mongoose");

const { Schema } = mongoose;

const AccountSchema = new Schema({
  handle: { type: String, required: true, max: 40 },
  accountName: { type: String, required: true },
  name: { type: String },
  picture: { type: String, default: "https://file.globalupload.io/FA70c4mpgb.svg" },
  platform: { type: String, required: true },
  link: { type: String, required: true },
  accountType: { type: String, required: true },
  followers: { type: Number, required: true },
  engagement: { type: String },
  industry: { type: String, required: true },
  location: { type: String },
  description: { type: String },
  averageRate: { type: Number },
  numberOfReviews: { type: Number, default: 0 },
  totalRate: { type: Number, default: 0 },
  reviews: [{
    reviewUser: { type: Schema.Types.ObjectId, ref: 'users' },
    reviewUserName: { type: String },
    reviewUserAvatar: { type: String },
    reviewRate: { type: Number, required: true },
    reviewText: { type: String, required: true },
    reviewEditedStatus: { type: Boolean, default: false },
    reviewDate: { type: Date, default: Date.now() }
  }],
  date: { type: Date, default: Date.now }
});

mongoose.model("accounts", AccountSchema);