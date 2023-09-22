const mongoose = require("mongoose");

// url model
const urlSchema = mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    require: false,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  totalClicks: {
    type: Number,
    required: true,
    default: 0,
  },
  timestamp: {
    type: Date,
    default: new Date().toLocaleString("en-US"),
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
const URL = mongoose.model("url", urlSchema);

module.exports = URL;
