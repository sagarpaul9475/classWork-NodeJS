const empValidationSchema = require("./empValidator");
const ValidateEmp= (req,res,next)=>{
    const { error, value } = empValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });
    }

    req.validatedData = value;

    next();
}
module.exports = ValidateEmp;