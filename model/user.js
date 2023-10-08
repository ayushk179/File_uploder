const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
  shortUrl:{
    type: String,
  },
  userId:{
    type : String
  }
});

module.exports = mongoose.model("User", userSchema);