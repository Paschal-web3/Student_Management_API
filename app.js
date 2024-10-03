const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDB = require('./database/Database');
const Courseroutes = require("./routes/CoursesRoute")
const InstructorRouutes = require ('./routes/InstructorRoute')
const StudentRoutes = require ('./routes/StudentRoute')
const GradeRoutes = require ('./routes/GradeRoute')

//Middleware

app.use(express.json())

//Connect to database
connectDB()

//Routes
app.use(Courseroutes)
app.use(InstructorRouutes)
app.use(StudentRoutes)
app.use(GradeRoutes)

module.exports = app


