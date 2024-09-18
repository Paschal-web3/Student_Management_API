const {Students} = require ('../model/Students')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.Register = async (req, res) => {
    try {
        // Destructure required fields from the request body
        let { FullName, PhoneNumber, Email, Password } = req.body;

        // Check if all required fields are provided
        if (!FullName || !PhoneNumber || !Email || !Password) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "All fields are required: FullName, PhoneNumber, Email, and Password must be provided."
            });
        }

        // Check if a user with the given email already exists
        const UserVerification = await Students.findOne({ Email });
        if (UserVerification) {
            return res.status(400).json({
                status: 400, // Added status code for consistency
                success: false,
                message: "User already exists"
            });
        }

        // Hash the password using bcrypt
        const hashPassword = await bcrypt.hash(Password, 10); // Use bcrypt.hash instead of hashSync for better practice

        // Create a new user with the provided data
        const user = await Students.create({
            FullName, // Correctly match the variable name
            PhoneNumber,
            Email,
            Password: hashPassword // Store hashed password
        });

        // Create the JWT payload
        const Payload = {
            id: user._id,
            FullName: user.FullName, // Ensure the key matches the model field
        };

        // Sign the JWT token with the payload and secret key
        const token = jwt.sign(Payload, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Respond with the success message, user data, and token
        res.status(201).json({
            status: 201, // Added status code for consistency
            success: true,
            message: "Congratulations! Your account has been successfully created.",
            data: user,
            token
        });
    } catch (error) {
        // Handle server errors
        res.status(500).json({
            status: 500, // Added status code for consistency
            success: false,
            message: "We’re having trouble completing your registration. Please try again",
            error: error.message
        });
    }
};


// Creating the student login function 
exports.Login = async (req, res)=>{
    try {
        let { Email, Password } = req.body;
        // Check if all required fields are provided
        if (!Email || !Password) {
            return res.status(400).json({
                status: 400,
                success: false,
                message: "All fields are required: Email and Password must be provided. ⚠️"
            });
        }

        const user = await Students.findOne({ Email });
        if (!user) {
            return res.status(404).json({
                status: 404,
                success: false,
                message: "User not found ⚠️"
            });
        }

        const comparePassword = bcrypt.compareSync(Password, user.Password);
        if (!comparePassword){
            return res.status(404).json({
                status: 404,
                success: false,
                message: "Incorrect Password ⚠️"
            });
        }
        const payload = {
            id: user._id,
            FullName: user.FullName,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({
            status: 200,
            success: true,
            message: "Login successful",
            data: user,
            token
        });

    }
    catch (error){
        res.status(500).json({
            status: 500,
            success: false,
            message: "We’re currently experiencing technical difficulties. Please try logging in again later.",
            error: error.message
        });
    }
}



exports.getStudents = async (req, res) => {
    try {
        const students = await Students.find().populate('Course.course')
        res.json(students)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Get students by Id
exports.getStudentById = async (req, res) => {
    try {
        const student = await Students.findById(req.params.id)
        res.json(student)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Update students 

exports.updateStudent = async (req, res) => {
  try {
    const students = await Students.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (req.body.Password){
        const hashedPassword = await bcrypt.hash(req.body.Password, 10);
        students.Password = hashedPassword;
    }
    students.save()
    
    res.status(200).json({
        message: "Student updated successfully",
        data: students,
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


//delete Student 
exports.deleteStudent = async (req, res) => {
    try {
        await Students.findByIdAndDelete(req.params.id)
        res.json({message: "Student deleted successfully"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//delete all students

exports.deleteAllstudents = async (req, res)=>{
    try {
        const students = await Students.deleteMany({})
        res.json({message: "All students deleted successfully"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}