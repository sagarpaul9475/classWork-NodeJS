const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    name: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;