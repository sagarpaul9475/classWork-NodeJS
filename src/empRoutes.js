const express = require('express');
const route = express.Router();
const empController = require("./empController");
route.get("/insert", empController.createEmployees);
route.get("/avg-salary", empController.avgSalaryByDept);
route.get("/count", empController.countByDept);
route.get("/highest", empController.highestSalary);
route.get("/age-filter", empController.ageFilter);
module.exports = route;