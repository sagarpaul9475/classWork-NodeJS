const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    name: {type:String,required:true},
});
userSchema.pre('find',function(next){
    console.log("~ User find Triggered");
    next;
})
userSchema.post("updateOne",function(){
    console.log("~ User find triggered")
})

const User = mongoose.model("User", userSchema);

module.exports = User;

