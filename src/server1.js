// const express = require('express');
// const app = express();
// const userRoutes = require("./userRoutes");

// app.use("/", (req, res) => {
//     res.json({
//         id: 1,
//         name: "sagar paul"
//     })
// });

// console.log(userRoutes);
// app.use("/", userRoutes);
// //app.use(middleware);
// app.listen(3000, () => {
//     console.log("Server running at port 3000")
// })
const app = require("../app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const seedUsers=require("./userSeed");

mongoose.connect("mongodb://localhost:27017/test")
.then(async () => {
    console.log("Connected to MongoDB");
    await seedUsers();
}).catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
});
dotenv.config();
console.log("Middlewares registered");
app.listen(process.env.PORT, () => {
    console.log("Server running at port " + process.env.PORT);
});
