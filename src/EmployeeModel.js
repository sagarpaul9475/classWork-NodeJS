const mongoose = require("mongoose");

const EmployeeModel=new mongoose.Schema(
    {
        id:Number,
        name:String,
        departments:String,
        slalary:Number,
        age:Number
    }
)
const empModel=mongoose.model("empModel",EmployeeModel);
module.exports=empModel;