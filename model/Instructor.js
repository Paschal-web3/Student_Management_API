const mongoose = require("mongoose");

const instructor = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  Email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  PhoneNumber: {
    type: Number,
    required: false,
  },
  Gender: {
    type: String,
    required: false,
  },
  Position:{
    type: String,
    enum: ["Lecturer", "Admin", "Dean", "HOD"] ,default: "Lecturer",
    required: true,
  },
  Password:{
    type: String,
    required: true,
  }
});

exports.Instructor = new mongoose.model("Instructor", instructor);