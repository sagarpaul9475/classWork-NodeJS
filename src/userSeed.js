const mongoose = require("mongoose");
const User = require("./userModules");

const userList = [
    { id: 1, name: "sample1" },
    { id: 2, name: "sample2" },
    { id: 3, name: "sample3" },
    { id: 4, name: "sample4" },
    {id: 5, name: "sample5" },
    {id: 6, name: "sample6" },
    {id: 7, name: "sample7" },
    {id: 8, name: "sample8" },
];

const seedUsers = async () => {
    try {
        for (let user of userList) {
            const exists = await User.findOne({ id: user.id });

            if (!exists) {
                await User.create(user);
                console.log(`Inserted: ${user.id}`);
            } else {
                console.log(`Skipped (exists): ${user.id}`);
            }
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = seedUsers;