const {Instructor} = require ('../model/Instructor')


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
    try {
        const lecturer = await Instructor.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!lecturer){
            return res.status(404).json({
                message: "Instructor not found"
            })
        }
        res.status(200).json({
            message: "Instructor updated successfully",
            data: lecturer
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating instructor",
            error: error.message
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
