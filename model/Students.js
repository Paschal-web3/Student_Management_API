const mongoose = require("mongoose");

const Students = new mongoose.Schema({
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
  Date_of_Birth: {
    type: Date,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  LGA: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  }, 
  Course:[{
    course: {type: mongoose.Schema.Types.ObjectId, ref: "Courses" }, // referencing Courses collection by CourseID
    score: {type: String, required: true, min: 1, max:100}
  }]
  
},{timestamps: true});;
exports.Students = new mongoose.model("Students", Students);