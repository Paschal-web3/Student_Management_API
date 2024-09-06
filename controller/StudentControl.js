const {Students} = require ('../model/Students')
const mongoose = require('mongoose')

exports.addStudent = async (req, res) => {
    try {
        const student = await Students.create(req.body)
        res.status(201).json({
            message: "Student added successfully", 
            data: student})
    } catch (error) {
        res.status(500).json({ message: error.message })
    } 
    // Add many insert many students 

    try {
        const students = await Students.insertMany(req.body)
        res.status(201).json({
            message: "Students added successfully",
            data: students})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getStudents = async (req, res) => {
    try {
        const students = await Students.find().populate('Course.course')
        res.json(students)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Get students by Id
exports.getStudentById = async (req, res) => {
    try {
        const student = await Students.findById(req.params.id)
        res.json(student)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Update students 

    exports.updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Students.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedStudent)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


//delete Student 
exports.deleteStudent = async (req, res) => {
    try {
        await Students.findByIdAndDelete(req.params.id)
        res.json({message: "Student deleted successfully"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//delete all students

exports.deleteAllstudents = async (req, res)=>{
    try {
        const students = await Students.deleteMany({})
        res.json({message: "All students deleted successfully"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}