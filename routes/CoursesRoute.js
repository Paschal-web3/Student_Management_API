const express = require ("express")
const route = express.Router();
const CourseRoute = require('../controller/CourseControl')


route.post('/addCourse', CourseRoute.addCourse)
route.get('/getCourse', CourseRoute.getCourses)
route.get('/getCourse/:id', CourseRoute.getCourseId)
route.put('/addCourse/:id', CourseRoute.updateCourse)
route.delete('/deleteCourse/:id', CourseRoute.deleteCourse)



module.exports = route;