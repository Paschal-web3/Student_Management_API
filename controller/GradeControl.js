
const Grade = require('../model/Grade')


// const getGrade = (score) => {
//     if (score >= 70) {
//         return 'A';
//     } else if (score >= 60) {
//         return 'B';
//     } else if (score >= 50) {
//         return 'C';
//     } else if (score >= 48) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// };

exports.addGrade = async (req, res) => {
    try {
        const addGrade = await Grade.create(req.body)        
        res.status(201).json({
            message: "Grade added successfully",
            data: addGrade
        })
    } catch (error) {
        res.status(500).json({
            message: "Error adding grade",
            error: error.message
        })
    }
}

exports.getGrade = async (req, res) => {
    try {
        const getGrade = new Grade({
            studentName: req.body.populate('studentName'),
            Courses: req.body.populate(" Course"),
            Instructors: req.body.populate("Instructors")
        })
        res.status(200).json({message: "Grade added successfully", data: getGrade})
    } catch (error) {
        
    }
}