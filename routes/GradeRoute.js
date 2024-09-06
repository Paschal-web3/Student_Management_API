// Grade route

const GradeController = require ('../controller/GradeControl')
const route = require ('express').Router();

route.post('/addGrade', GradeController.addGrade)