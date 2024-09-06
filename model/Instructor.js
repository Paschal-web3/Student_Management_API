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
    required: false,
    minlength: 3,
    maxlength: 100,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: false,
  }
});

exports.Instructor = new mongoose.model("Instructor", instructor);