const {Instructor} = require ('../model/Instructor')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')


//Register Lecturer 
exports.Register = async (req, res)=>{
    let {FullName, Email, Password, Position} = req.body

    if (!FullName || !Email || !Password){
            return res.status(400).json({
            message: "All fields are required: FullName, Email, and Password must be provided."
        })
    }
    const user = await Instructor.findOne({ Email })
    if (user){
            return res.status(400).json({
            message: "User already exists"
        })
    }
    const hashPassword = await bcrypt.hash(Password, 10)
    const users = await Instructor.create({
        FullName,
        Email,
        Password: hashPassword,
        Position : Position
        
    })
    const Payload = {
        id: users._id,
        Position: users.Position
    }
    const token = jwt.sign(Payload, process.env.SECRET_KEY, { expiresIn: '1h' });
   
    res.status(200).json({
        message: "Congratulations! Your account has been successfully created.",
        data: users,
        token
    })
}

//Login Lecturers 

exports.login =async (req, res)=>{
    let { Email, Password} = req.body
    const user = await Instructor.findOne({ Email})
    if (!user) {
        return res.status(401).json({ message: "Invalid email" })
    }
    const validPassword = await bcrypt.compare(Password, user.Password)
    if (!validPassword) {
        return res.status(401).json({ message: "Invalid password" })
    }
    const Payload = {
        id: user._id,
        Position: user.Position
    }
    const token = jwt.sign(Payload, process.env.SECRET_KEY, { expiresIn: '1h' });
   
    res.status(200).json({
        message: "Welcome back " + user.FullName,
        data: user,
        token
    })
}
exports.addInstructor = async (req, res)=>{
    try {
        const lecturers = await Instructor.create(req.body)
        res.status(200).json({
            message: "Instructor added successfully",
            data: lecturers
        })
    } catch (error) {
        res.status(500).json({
            message: "Error adding instructor",
            error: error.message
        })
    }

    //ADDING MANY LECTURERS AT ONCE
    try {
        const AddLecturers = await Instructor.insertMany(req.body)
        res.status(200).json({
            message: "Instructors added successfully",
            data: AddLecturers
        })
    } catch (error) {
        res.status(200).json({
            message: "Error adding instructors",
            error: error.message
        })
    }
}


exports.getInstructors = async (req, res)=>{
    
    try {
        const lecturers = await Instructor.find()
        res.status(200).json({
            message: "Instructors retrieved successfully",
            data: lecturers
        })
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving instructors",
            error: error.message
        })
    }
}

// Get allInstructors by Id

exports.getInstructorById = async (req, res)=>{
    try {
        const lecturer = await Instructor.findById(req.params.id)
        if(!lecturer){
            return res.status(404).json({
                message: "Instructor not found"
            })
        }
        res.status(200).json({
            message: "Instructor retrieved successfully",
            data: lecturer
        })
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving instructor",
            error: error.message
        })
    }
}

// Update Instructor by Id

exports.updateInstructor = async (req, res)=>{
    try{
        const updateInstructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (req.body.Password){
            const hashedPassword = await bcrypt.hash(req.body.Password, 10)
            updateInstructor.Password = hashedPassword
        }
        updateInstructor.save()
        res.status(200).json({
            message: "Instructor updated successfully",
            data: updateInstructor
        })
    } catch (err) {
        res.status(500).json({
            message: "Error updating instructor",
            error: err.message
        })
    }
}

// delete instructor

exports.deleteInstructor = async (req, res)=>{
    try {
        const lecturer = await Instructor.findByIdAndDelete(req.params.id)
        if(!lecturer){
            return res.status(404).json({
                message: "Instructor not found"
            })
        }
        res.status(200).json({
            message: "Instructor deleted successfully",
            data: lecturer
        })
    } catch (error) {
        res.status(500).json({
            message: "Error deleting instructor",
            error: error.message
        })
    }
}

//delete all instructor 

exports.deleteInstructors = async (req, res)=>{
    try {
        const instructors = await Instructor.deleteMany({})
        res.status(200).json({
            message: "All instructors deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}