const user = require('./userModules');
const students = require("./studentModules");
exports.getUsers = (req, res) => {
    res.json(user);
};
exports.getUserById = (req, res) => {
    const userId = req.params.id;
    const foundUser = user.find(u => u.id == userId);

    if (foundUser) {
        res.json(foundUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};
exports.queryParams = (req, res) => {
    const name = req.query.name;
    res.json({ name });
};
exports.getStudents=(req,res)=>{
    res.json(students);
}
exports.getStudentById=(req,res)=>{
    const studentId=req.query.id;
    console.log(studentId);
    const student=students.find(s=>s.id==studentId);
    if(student){
        res.json(student);
    }else{
        res.status(404).json({message:"Student not found"});
    }
};
exports.postStudents = (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
};
exports.deleteStudentById = (req, res) => {
    const studentId = req.params.id;
    const index = students.findIndex(s => s.id == studentId);

    if (index !== -1) {
        const deleted = students.splice(index, 1);
        res.json({
            message: "Student deleted successfully",
            student: deleted[0]
        });
    } else {
        res.status(404).json({ message: "Student not found" });
    }
};
exports.skipAnotherMiddleware=(req,res,next)=>{
    console.log("Skiped Another Middleware Executed");
    next();
};