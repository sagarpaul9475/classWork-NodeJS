const express = require('express');
const app = express();
const userRoutes = require("./userRoutes");
app.use("/", (req, res) => {
    res.json({
        id: 1,
        name: "sagar paul"
    })
});
console.log(userRoutes);
app.use("/", userRoutes);
app.listen(3000, () => {
    console.log("Server running at port 3000")
})