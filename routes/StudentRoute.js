const StudentController = require('../controller/StudentControl')
const express = require('express')
const route = require('express').Router()


// Middleware
const {PermissionMiddleware} = require('../middleware/permission')
const auth = require('../middleware/Auth')

// register student
route.post ('/Register', auth,PermissionMiddleware("Admin"), StudentController.Register)
//login student
route.post ('/Login', StudentController.Login)
//get all students
route.get ('/getStudents', StudentController.getStudents)
//get student by id
route.get ('/getStudents/:id', StudentController.getStudentById)
//update student
route.put ('/updateProfile/:id', StudentController.updateStudent)
//delete student
route.delete ('/deleteStudents/:id', StudentController.deleteStudent)
route.delete('/deleteAllstudents', StudentController.deleteAllstudents)

module.exports = route