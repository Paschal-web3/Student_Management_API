const mongoose = require('mongoose');
require("dotenv").config()


const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log({message: "database connected"})
        
    } catch (error) {
        console.log({message: "error check dataabase"})
        
    }
}

module.exports = connectDB