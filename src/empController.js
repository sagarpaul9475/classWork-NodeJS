const EmployeeModel=require("./EmployeeModel");
exports.createEmployees=async (req,res)=>{
    const departments=['IT','HR','Finance','Sales']
    const data=[];
    for(let i=1;i<=120;i++){
        data.push({
            id:i,
            name:"user"+i,
            departments:departments[i%4],
            slalary:Math.floor(Math.random()*5000)+3000,
            age:Math.floor(Math.random()*15)+22
        })
    };
    await EmployeeModel.insertMany(data);
    res.json(data);
}

exports.avgSalaryByDept = async (req, res) => {
    const result = await EmployeeModel.aggregate([
        {
            $group: {
                _id: "$departments",
                avgSalary: { $avg: "$slalary" }
            }
        }
    ]);

    res.json(result);
};
exports.countByDept = async (req, res) => {
    const result = await EmployeeModel.aggregate([
        {
            $group: {
                _id: "$departments",
                totalEmployees: { $sum: 1 }
            }
        }
    ]);

    res.json(result);
};
exports.highestSalary = async (req, res) => {
    const result = await EmployeeModel.aggregate([
        { $sort: { salary: -1 } },
        { $limit: 1 }
    ]);

    res.json(result);
};
exports.ageFilter = async (req, res) => {
    const result = await EmployeeModel.aggregate([
        { $match: { age: { $gt: 25 } } },
        {
            $project: {
                name: 1,
                age: 1,
                salary: 1
            }
        }
    ]);

    res.json(result);
};
exports.aggSample=async(req,res)=>{
    const empData=await EmployeeModel.aggregate([
        {
            $project:{
                _id:1,
                departments:1
            },
            $group:{
                _id:"department",
                count:{$sum:1}
            },
        },
        {
            $project:{
                _id:1,
            },
        },
    ])
}