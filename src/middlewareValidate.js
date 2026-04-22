const userValidationSchema = require("./userValidator");


const validateUser = (req, res, next) => {
    const { error, value } = userValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }

    req.validatedData = value;

    next();
};



module.exports = validateUser;