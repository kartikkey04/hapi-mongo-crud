const Joi = require('joi');

const userSchema = {
    create: Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        age: Joi.number().integer().min(18).max(60).required()
    }),
    update: Joi.object({
        name: Joi.string().min(3).max(30),
        email: Joi.string().email(),
        age: Joi.number().integer().min(18).max(60)
    }).min(1), 
    idParam: Joi.object({
        id: Joi.string().length(24).required() 
    })
};

module.exports = userSchema;
