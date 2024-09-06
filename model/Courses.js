const mongoose = require("mongoose");

const Courses = new mongoose.Schema({
  CourseName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  CourseCode: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  CourseUnit: {
    type: Number,
    required: true,
  },
  CourseDescription: {
    type: String,
    required: true,
  },
  InstructorId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor',
    required: true,
  }
});

exports.Courses = new mongoose.model("Courses", Courses);