const express = require ( 'express')
const route = express.Router()
const instructorController = require("../controller/InstructorControl")


//Create a new Instructor
route.post('/addTutor', instructorController.addInstructor)
route.get('/getTutor', instructorController.getInstructors)
route.get('/getTutor/:id',instructorController.getInstructorById)
route.put('/addTutor/:id', instructorController.updateInstructor)
route.delete('/getTutor/:id', instructorController.deleteInstructor)

module.exports = route
