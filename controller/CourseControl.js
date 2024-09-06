const {Courses} = require("../model/Courses");

// Add a single course
exports.addCourse = async (req, res)=>{
    const courses = await  Courses.create(req.body);
    
    try {
        if (courses) {
            return res.status(200).json({
                message: "Course added successfully",
                data: courses,
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error adding course",
            error: error.message,
        });
    }

    //ALLOW MULTIPLE INSERTING OF MANY INPUTS 
    const course = await Courses.insertMany(req.body)
    try{
        if(course){
            return res.status(200).json({
                message: "Multiple Courses added successfully"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error adding multiple courses",
            error: error.message,
        })
    }
}

//Get user 

exports.getCourses = async (req, res)=>{
    try {
        const courses = await Courses.find().populate('InstructorId')
        res.status(200).json({
            message: "Courses retrieved successfully",
            data: courses,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving courses",
            error: error.message,
        })
    }
}

// Get by Id 

exports.getCourseId = async (req, res)=>{
        try {
            const course = await Courses.findById(req.params.id).populate('InstructorId')
            if(!course){
                return res.status(404).json({
                    message: "Course not found"
                })
            }
            res.status(200).json({
                message: "Course retrieved successfully",
                data: course,
            })
        } catch (error) {
            res.status(500).json({
                message: "Error retrieving course",
                error: error.message,
            })
        }
    }

    // Update Course by Id
exports.updateCourse = async (req, res)=>{
        try {
            const course = await Courses.findByIdAndUpdate(req.params.id, req.body, {new: true})
            if(!course){
                return res.status(404).json({
                    message: "Course not found"
                })
            }
            res.status(200).json({
                message: "Course updated successfully",
                data: course,
            })
        } catch (error) {
            res.status(500).json({
                message: "Error updating course",
                error: error.message,
            })
        }
    }
    
    // Delete Course by Id
exports.deleteCourse= async (req, res)=>{
        try {
            const course = await Courses.findByIdAndDelete(req.params.id)
            if(!course){
                return res.status(404).json({
                    message: "Course not found"
                })
            }
            res.status(200).json({
                message: "Course deleted successfully",
                data: course,
            })
        } catch (error) {
            res.status(500).json({
                message: "Error deleting course",
                error: error.message,
            })
        }
    }

