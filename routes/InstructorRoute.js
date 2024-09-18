const express = require ( 'express')
const route = express.Router()
const instructorController = require("../controller/InstructorControl")

//Middleware
const Auth = require('../middleware/Auth')

//Register Lecturer 
route.post('/lecturer/register', instructorController.Register)

//Login Lecturer

route.post('/lecturer/login', instructorController.login)


//Create a new Instructor
route.post('/addTutor', instructorController.addInstructor)
route.get('/getTutor', Auth, instructorController.getInstructors)
route.get('/getTutor/:id', Auth, instructorController.getInstructorById)
route.put('/updateTutor/:id',Auth, instructorController.updateInstructor)
route.delete('/getTutor/:id',Auth, instructorController.deleteInstructor)
//delet all instructor 

route.delete('/deleteAllTutors', instructorController.deleteInstructors)

module.exports = route
