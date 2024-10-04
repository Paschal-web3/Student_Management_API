
const {GradeSchema} = require('../model/Grade')
const scoreCalculator = require ('../Utility/gradeFunction')


exports.addGrade = async (req, res) => {
    try {

        //.Create creates and saves in the databasr directly, so we need to modify the score and the function before creating 

        req.body.Grade = scoreCalculator(req.body.Score)

        //Now we can now create. Here the Grade is having the Score calculated and returned value (Wonderful)
        const Grades = await GradeSchema.create(req.body)

        if (Grades){
            res.status(200).json({
                message: "Grade added successfully",
            })
        }
        res.status(200).json({
            message: "Here is the grade of the student",
            Details: Grades
        })
    }catch(error){
        res.status(500).json({
            message: "Error creating the Grade",
            responseFromServer: error
        })
    }
}
exports.getGrade = async (req, res) => {
    try {
        // const grade = await GradeSchema.find()
        // .populate({path:'studentName', select: "FullName -_id"})
        // .populate({ path:'Instructor', select: "FullName -_id"})
        // .populate({path:'Courses', select: "CourseCode - _id"})

        const grade = await GradeSchema.find()
        .populate({ path: 'studentName', select: 'FullName -_id' })  // Exclude _id, include FullName
        .populate({ path: 'Instructor', select: 'FullName -_id' })   // Exclude _id, include FullName
        .populate({ path: 'Courses', select: 'CourseCode -_id' });   // Exclude _id, include CourseCode

        const realGrade = grade.map(grade=>({
            studentName: grade.studentName.FullName,
            Instructor: grade.Instructor.FullName,
            CourseCode: grade.Courses.CourseCode,
            Score: grade.Score,
            Grade: scoreCalculator(grade.Score)
        }))
        res.status(200).json({
            message: "Grades retrieved successfully",
            data: realGrade
        })


    } catch (error) {
        res.status(500).json({
            message: "Error retrieving grades",
            error: error.message
        })
    }
}