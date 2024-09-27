const mongoose = require('mongoose');


const GradeSchema = new mongoose.Schema({
    studentName:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Students'
    },
    Courses:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    },
    Instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor'
    },
    Score:{
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    Grade:{
        type: String,
        required: true,
    }

})

exports.GradeSchema = new mongoose.model("GradeSchema", GradeSchema)