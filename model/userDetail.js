const mongoose = require("mongoose");


const UserDetailsScehma = new mongoose.Schema(
  {
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    email: {
      type: String,
      unique:true
    },
    password:{
      type: String,
    }
  }
);

module.exports =mongoose.model("UserInfo", UserDetailsScehma);
