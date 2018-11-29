const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  handle: { type: String, required: true, max: 40 }, 
  industry: { type: [String], min: 1, required: true },
  company: { type: String, required: true },
  website: { type: String },
  location: { type: String },
  shortlist: [{ type: Schema.Types.ObjectId, ref: 'accounts' }],
  date: { type: Date, default: Date.now }
});

mongoose.model("profile", ProfileSchema);