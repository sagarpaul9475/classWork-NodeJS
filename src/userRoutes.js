const express = require('express');
const route = express.Router();
const userController = require("./userController");
const User = require("./userModules");
const validateUser = require("./middlewareValidate");
route.get("/",(req,res)=>{
    res.end("Welcome to Express JS");
});
route.get("/users", userController.getUsers);
route.get("/users/:id",userController.getUserById);
route.get("/skip",userController.skipAnotherMiddleware);
route.get("/query",userController.queryParams);
route.get("/students",userController.getStudents);
route.get("/get/students",userController.getStudentById);
route.post("/students",userController.postStudents);
route.delete("/students/:id",userController.deleteStudentById);
route.get("/find/user",userController.FindUserToDB);
route.post("/add/user",userController.AddUserToDB);

// CREATE USER
route.post("/create", validateUser, async (req, res) => {
    try {
        // ✅ use validated data instead of raw req.body
        const user = new User(req.validatedData);
        await user.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = route;