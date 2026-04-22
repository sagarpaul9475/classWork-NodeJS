const express = require('express');
const route = express.Router();
const empController = require("./empController");
const validateEmp = require("./middlewareEmpValidate");
route.get("/insert", empController.createEmployees);
route.get("/avg-salary", empController.avgSalaryByDept);
route.get("/count", empController.countByDept);
route.get("/highest", empController.highestSalary);
route.get("/age-filter", empController.ageFilter);

route.post("/api/createEmp",validateEmp, async (req, res) => {
    try {
        // ✅ use validated data instead of raw req.body
        const emp = new emp(req.validatedData);
        await emp.save();

        res.status(201).json({
            success: true,
            message: "emp created successfully",
            data: emp
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});
module.exports = route;