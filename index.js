//STUDENT MANAGEMENT API
const app = require ('./app')
require ('dotenv').config()

const Port = process.env.PORT || 4000

app.listen (Port , ()=>{
    console.log("Listening to port ", Port)
})