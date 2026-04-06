const mongoose = require("mongoose");
const User = require("./userModules");

const userList = [
    { id: 1, name: "sample1" },
    { id: 2, name: "sample2" },
    { id: 3, name: "sample3" }
];

const seedUsers = async () => {
    try {
        await User.insertMany(userList);
        console.log("Seeding done ✅");
    } catch (err) {
        console.log(err);
    }
};

module.exports = seedUsers;