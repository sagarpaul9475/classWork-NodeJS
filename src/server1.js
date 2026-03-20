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

dotenv.config();
console.log("Middlewares registered");
app.listen(process.env.PORT, () => {
    console.log("Server running at port " + process.env.PORT);
});