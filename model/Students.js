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
    required: false,
  },
  Gender: {
    type: String,
    required: false,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  Country: {
    type: String,
    required: false,
  },
  State: {
    type: String,
    required: false,
  },
  LGA: {
    type: String,
    required: false,
  },
  Address: {
    type: String,
    required: false,
  }, 
  Course:[{
    course: {type: mongoose.Schema.Types.ObjectId, ref: "Courses" , required: false}, // referencing Courses collection by CourseID
    score: {type: String, required: true, min: 1, max:100, required: false}
  }],
  Password: {
    type: String,
    required: true,
  }	
},{timestamps: true});;
exports.Students = new mongoose.model("Students", Students);