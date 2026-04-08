const seedUsers=require("./userSeed");
const mongoose = require("mongoose");

const mdb=async()=>{
    await
    mongoose.connect("mongodb://localhost:27017/test")
    .then(async () => {
        console.log("Connected to MongoDB");
        await seedUsers();
    }).catch(err => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });
}
module.exports=mdb;