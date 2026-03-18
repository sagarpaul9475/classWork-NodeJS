const express = require('express');
const route = express.Router();
const userController = require("./userController");
route.get("/",(req,res)=>{
    res.end("Welcome to Express JS");
});
route.get("/users", userController.getUsers);
route.get("/users/:id",userController.getUserById);
route.get("/query",userController.queryParams);
route.get("/students",userController.getStudents);
route.get("/get/students",userController.getStudentById);
route.post("/students",userController.postStudents);
route.delete("/students/:id",userController.deleteStudentById);
module.exports = route;