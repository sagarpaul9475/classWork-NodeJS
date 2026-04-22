const Joi = require("joi");

const schemaValidation = Joi.object({
    id:Joi.number()
    .required()
    .messages({
        "id.empty":"id cannot be empty",
        "id.required": "id is required"
    }),
    name: Joi.string()
        .required()
        .messages({
            "string.empty": "Name cannot be empty",
            "any.required": "Name is required"
        }),
    departments: Joi.string()
    .required()
    .messages({
            "string.empty": "department cannot be empty",
            "any.required": "department is required"
        }),
    slalary:Joi.number()
    .required()
    .messages({
        "slalary.empty":"salary cannot be empty",
        "slalary.required": "id is required"
    }),
    age:Joi.number()
    .required()
    .messages({
        "age.empty":"age cannot be empty",
        "age.required": "age is required"
    })
});
module.exports = schemaValidation;