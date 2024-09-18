const express = require ( 'express')
const route = express.Router()
const instructorController = require("../controller/InstructorControl")

//Register Lecturer 
route.post('/lecturer/register', instructorController.Register)

//Login Lecturer

route.post('/lecturer/login', instructorController.login)

//Create a new Instructor
route.post('/addTutor', instructorController.addInstructor)
route.get('/getTutor', instructorController.getInstructors)
route.get('/getTutor/:id',instructorController.getInstructorById)
route.put('/updateTutor/:id', instructorController.updateInstructor)
route.delete('/getTutor/:id', instructorController.deleteInstructor)
//delet all instructor 

route.delete('/deleteAllTutors', instructorController.deleteInstructors)

module.exports = route
