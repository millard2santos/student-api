
const {Router} = require('express')
const rawStudents = require('../../students.json')


const {default : students} = rawStudents
 const router = Router()

router.get('/students', (req,res) => {
    res.json({count : students.length, status : 200,data : students})
})
router.get('/students/:id', (req,res) => {
    const id = Number(req.params.id)
    if (!id) {
        res.json({err : 'Not a valid ID', status : 404})
    }

    const student = students.find((student) => student.id === Number(req.params.id))
    if (!student) {
        res.json({err : 'There is no student with id ' +id, status : 404})

    }
    res.json({data : student, status : 200})
})
router.get('*', (_,res) => {
    res.json({status : 404, err : 'Bad API call. Try callin ' + `${process.env.VERCEL_URL || ''}/api/students`})
})

module.exports = {
    router
}