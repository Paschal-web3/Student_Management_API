const StudentController = require('../controller/StudentControl')
const express = require('express')
const route = require('express').Router()


//add new student 
route.post ('/addStudents', StudentController.addStudent)
//get all students
route.get ('/getStudents', StudentController.getStudents)
//get student by id
route.get ('/getStudents/:id', StudentController.getStudentById)
//update student
route.put ('/updateStudents/:id', StudentController.updateStudent)
//delete student
route.delete ('/deleteStudents/:id', StudentController.deleteStudent)
route.delete('/deleteAllstudents', StudentController.deleteAllstudents)

module.exports = route