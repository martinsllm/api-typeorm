import joi from 'joi';

const provider = joi.object({
    name: joi.string().min(3).required()
});

const product = joi.object({
    name: joi.string().min(3).required(),
    price: joi.number().required(),
    description: joi.string().min(5).required(),
    providerId: joi.number().required()
});

export = { provider, product };