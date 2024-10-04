// Grade route

const GradeController = require ('../controller/GradeControl')
const route = require ('express').Router();
const verify = require ('../middleware/Auth')

route.post('/addGrade' , GradeController.addGrade)
route.get('/getGrade',verify, GradeController.getGrade)

module.exports = route;