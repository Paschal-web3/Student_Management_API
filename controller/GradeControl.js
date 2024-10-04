
const {GradeSchema} = require('../model/Grade')
const scoreCalculator = require ('../Utility/gradeFunction')


exports.addGrade = async (req, res) => {
    try {
        const Grades = await GradeSchema.create(req.body)
        if (Grades){
            res.status(200).json({
                message: "Grade added successfully",
                data: Grades,
                grade: scoreCalculator(Grades.score)
            })
        }
        await Grades.save()
        res.status(201).json({
            message: "Grade added successfully",
            data: Grades
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
        const grade = await GradeSchema.find()
        .populate({path:'studentName', select: "FullName"})
        .populate({ path:'Instructor', select: "FullName"})
        .populate({path:'Courses', select: "CourseCode"})

        const grades = new grade({
            studentName: grade.studentName,
            Courses: grade.course,
            Instructor: grade.Instructor,
            Score: grade.Score,
            Grade: scoreCalculator(grade.score)
        })

        res.status(200).json({
            message: "Grades retrieved successfully",
            data: grades
        })
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving grades",
            error: error.message
        })
    }
}