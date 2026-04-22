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
        })
});
module.exports = schemaValidation;