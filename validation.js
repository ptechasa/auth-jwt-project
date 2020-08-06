//Validation
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return Joi.assert(data, schema);
};

//Login Validation
const loginValidation = data => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return Joi.assert(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;